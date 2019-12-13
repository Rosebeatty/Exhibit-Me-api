const express = require('express');
const mongoose = require('mongoose');
const router  = express.Router();
const multer  = require('multer');
const Model = require('../models/Model');
const User = require('../models/User');


var storage = multer.diskStorage({
    destination: function (req, file, cb) {
    cb(null, 'public')
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname )
  },
  
  })
  
  var upload = multer({ storage: storage }).single('file')
  
  router.post('/upload', (req, res) => {
  
    // const { file } = req.body;
  console.log(req.body);
  
    upload(req, res, (err)  =>{
           if (err instanceof multer.MulterError) {
               return res.status(500).json(err)
           } else if (err) {
               return res.status(500).json(err)
           }
      return res.status(200).send(req.file)
  
    })
  
  });


  router.get('/', (req, res) => {
    User.find().populate('objects')
    .then(allTheUsers => {
      res.json(allTheUsers);
    })
    .catch(err => {
      res.json(err);
    })
  })

  router.get('/:id', (req, res) => {
        const { id } = req.params

        if(!mongoose.Types.ObjectId.isValid(id)) {
            res.status(400).json({ message: 'Specified id is not valid' });
            return;
          }

          User.findById(id)
            .then((foundUser) => {
              res.status(200).json(foundUser)
            })
            .catch((err) => res.status(400).json(err))
  })

  router.put('/update/:id', (req, res) => {
    const { id } = req.params;
    const { username, email, space_name, theme } = req.body

    if(!mongoose.Types.ObjectId.isValid(id)) {
        res.status(400).json({ message: 'Specified id is not valid' });
        return;
      }

      User.findByIdAndUpdate(id, { username, email, space_name, theme })
      .then((user) => {
        console.log(req.body)
        res.json(user);
      })
      .catch(err => {
        res.json(err); 
      })
  })

  router.delete('/delete/:id', (req, res) => {
    const { id } = req.params;

    if ( !mongoose.Types.ObjectId.isValid(id)) {
      res.status(400).json({ message: 'Specified id is not valid' });
      return;
    }

    User.findByIdAndRemove(id)
    .then(() => {
      res
        .status(202)  //  Accepted
        .json({ message: `Project with ${id} was removed successfully.` });
    })
    .catch( err => {
      res.status(500).json(err);
    })

  })

//   router.get('/search', (req, res) => {
//       // User.find().populate('objects')
//     // .then(allTheUsers => {
//     //   res.json(allTheUsers);
//     // })
//     // .catch(err => {
//     //   res.json(err);
//     // })
// })


//   router.delete('/delete/:objectId', (req, res) => {
//     const { id } = req.params;

//     if ( !mongoose.Types.ObjectId.isValid(id)) {
//       res.status(400).json({ message: 'Specified id is not valid' });
//       return;
//     }

//     Model.findByIdAndRemove(id)
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