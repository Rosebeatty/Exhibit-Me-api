const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const multer = require("multer");
const User = require("../models/User");
const Model = require("../models/Model");
// const Background = require("../models/Background");

var storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, "public/images");
  },
  filename: function(req, file, cb) {
    cb(null, file.originalname);
  }
});

var upload = multer({ storage: storage }).single("file");

router.post("/upload/:id", (req, res, next) => {
  const { id } = req.params;

  upload(req, res, err => {
    if (err) {
      console.log(JSON.stringify(err));
      res.status(400).send("failed to save");
    } else {
      console.log("The filename is " + res.req.file.filename);

      Model.create({ path: res.req.file.filename, user_id: id })
        .then(newModel => {
          console.log(newModel);

          return User.findByIdAndUpdate(
            id,
            { $push: { objects: newModel._id } },
            { new: true }
          ).populate("models");
        })
        .then(updatedUser => {
          res.status(201).json(updatedUser);
          console.log(updatedUser);
        })
        .catch(err => {
          res.status(400).json(err);
        });
      // res.send(res.req.file.filename);
    }
  });
});

// router.post('/uploadBackground/:id', (req, res, next) => {

//   const { id } = req.params

//     upload(req, res, (err)  =>{
//       if (err){
//         console.log(JSON.stringify(err));
//         res.status(400).send('failed to save');
//       } else {
//         console.log('The filename is ' + res.req.file.filename);

//        Background.create({path: res.req.file.filename, user_id: id})
//             .then( (newBkg) => {
//                 console.log(newBkg);

//                 return User.findByIdAndUpdate(id, { $push: {backgrounds: newBkg._id} }, {new: true}).populate('backgrounds')
//             })
//             .then((updatedUser) => {
//                 res.status(201).json(updatedUser)
//                 console.log(updatedUser)
//             })
//             .catch((err) => {
//                 res.status(400).json(err)
//             })
//             res.send(res.req.file.filename);
//       }
//    })
// });

router.delete("/deleteObject/:id", (req, res, next) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.status(400).json({ message: "Specified id is not valid" });
    return;
  }

  Model.findByIdAndRemove(id)
    .then(deletedModel => {
      console.log(deletedModel.user_id);
      return deletedModel.user_id;
    })
    .then(userId => {
      return User.findByIdAndUpdate(userId, { $pull: { objects: id } });
    })
    .then(() => {
      res.status(201).json({ message: "Object deleted" });
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

// router.delete('/deleteBackground/:id', (req, res, next) => {
//   const { id } = req.params;

//   if ( !mongoose.Types.ObjectId.isValid(id)) {
//     res.status(400).json({ message: 'Specified id is not valid' });
//     return;
//   }

//   Background.findByIdAndRemove(id)
//       .then((deletedImage) => {
//         console.log(deletedImage.user_id)
//           return deletedImage.user_id
//       })
//       .then((userId) => {
//           return User.findByIdAndUpdate(userId, { $pull : {backgrounds: id}})
//       })
//       .then(() => {
//           res.status(201).json({message: "Background deleted"})
//       })
//       .catch((err) => {
//           res.status(400).json(err)
//       })
//   })

router.get("/filename", (req, res, next) => {
  Model.find()
    .then(foundModel => {
      // console.log(foundUser)
      res.status(200).json(foundModel);
    })
    .catch(err => res.status(400).json(err));
});

router.get("/filename/:id", (req, res, next) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.status(400).json({ message: "Specified id is not valid" });
    return;
  }

  Model.findById(id)
    .then(foundModel => {
      res.status(200).json(foundModel);
    })
    .catch(err => res.status(400).json(err));
});

router.get('/getBackground', (req, res, next) => {

  Background.find()
     .then((foundImage) => {
       res.status(200).json(foundImage)
     })
     .catch((err) => res.status(400).json(err))
})

router.get("/:id", (req, res, next) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.status(400).json({ message: "Specified id is not valid" });
    return;
  }

  User.findById(id)
    .then(foundUser => {
      res.status(200).json(foundUser);
    })
    .catch(err => res.status(400).json(err));
});

router.put("/update/:id", (req, res, next) => {
  const { id } = req.params;
  const { username, email, space_name, theme } = req.body;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.status(400).json({ message: "Specified id is not valid" });
    return;
  }

  User.findByIdAndUpdate(id, { username, email, space_name, theme })
    .then(user => {
      console.log(req.body);
      res.json(user);
    })
    .catch(err => {
      res.json(err);
    });
});

router.get("/", (req, res, next) => {
  User.find()
    .populate("objects", "comments")
    .then(allTheUsers => {
      res.json(allTheUsers);
    })
    .catch(err => {
      res.json(err);
    });
});

// router.delete('/delete/:id', (req, res, next) => {
//   const { id } = req.params;

//   if ( !mongoose.Types.ObjectId.isValid(id)) {
//     res.status(400).json({ message: 'Specified id is not valid' });
//     return;
//   }

//   User.findByIdAndRemove(id)
//   .then(() => {
//     res
//       .status(202)  //  Accepted
//       .json({ message: `Project with ${id} was removed successfully.` });
//   })
//   .catch( err => {
//     res.status(500).json(err);
//   })

// })

module.exports = router;
