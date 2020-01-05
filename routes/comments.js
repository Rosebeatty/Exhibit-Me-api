const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const User = require("../models/User");
const Comment = require("../models/Comment");

router.get("/", (req, res, next) => {
  Comment.find()
    .then(foundUser => {
      // console.log(foundUser)
      res.status(200).json(foundUser);
    })
    .catch(err => res.status(400).json(err));
});

router.get("/:id", (req, res, next) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.status(400).json({ message: "Specified id is not valid" });
    return;
  }

  User.findById(id)
    .then(foundUser => {
      // console.log(foundUser)
      res.status(200).json(foundUser);
    })
    .catch(err => res.status(400).json(err));
});

router.post("/create/:id", (req, res, next) => {
  const { comment, userId } = req.body;

  Comment.create({ comment: comment, userId: userId })
    .then(newComment => {
      console.log(newComment);

      return User.findByIdAndUpdate(
        userId,
        { $push: { comments: newComment._id } },
        { new: true }
      ).populate("comments");
    })
    .then(updatedUser => {
      res.status(201).json(updatedUser);
      console.log(updatedUser);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.patch("/update/:id", (req, res, next) => {
  const { id } = req.params;
  const { comment, userId } = req.body;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.status(400).json({ message: "Specified id is not valid" });
    return;
  }

  Comment.findByIdAndUpdate(id, { comment, userId }).then(() => {
    res.status(201).json({ message: "Comment updated" });
  });
});

router.delete("/delete/:id", (req, res, next) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.status(400).json({ message: "Specified id is not valid" });
    return;
  }

  Comment.findByIdAndRemove(id)
    .then(deletedComment => {
      return deletedComment.user_id;
    })
    .then(userId => {
      return User.findByIdAndUpdate(userId, { $pull: { comments: id } });
    })
    .then(() => {
      res.status(201).json({ message: "Comment deleted" });
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

module.exports = router;
