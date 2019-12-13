const express = require('express');
const mongoose = require('mongoose');
const router  = express.Router();
const User = require('../models/User');
const Comment = require('../models/Comment');


router.get('/:userId/:commentId', (req, res) => {
    const { commentId } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)) {
        res.status(400).json({ message: 'Specified id is not valid' });
        return;
      }

      Comment.findById(commentId)
        .then((foundUser) => {
            console.log(foundUser)
          res.status(200).json(foundUser)
        })
        .catch((err) => res.status(400).json(err))
})


router.post('/create/:id', (req, res) => {
    const { comment, userId } = req.body

    Comment.create({comment: comment, userId: userId})
        .then( (newComment) => {
            console.log(newComment);
            
            return User.findByIdAndUpdate(userId, { $push: {comments: newComment._id} }, {new: true}).populate('comments')   
        })
        .then((updatedUser) => {
            res.status(201).json(updatedUser)
            console.log(updatedUser)
        })
        .catch((err) => {
            res.status(400).json(err)
        })
  })


router.put('/update/:id', (req, res) => {

    if ( !mongoose.Types.ObjectId.isValid(id)) {
        res.status(400).json({ message: 'Specified id is not valid' });
        return;
      }
})

// router.delete('/delete/:id', (req, res) => {
//     const { id } = req.params;

//     if ( !mongoose.Types.ObjectId.isValid(id)) {
//       res.status(400).json({ message: 'Specified id is not valid' });
//       return;
//     }

//     User.findByIdAndRemove(id)
//     .then(() => {
//       res
//         .status(202)  //  Accepted
//         .json({ message: `Project with ${id} was removed successfully.` });
//     })
//     .catch( err => {
//       res.status(500).json(err);
//     })
// })


module.exports = router;