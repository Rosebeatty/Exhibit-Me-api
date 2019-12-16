const express = require('express');
const mongoose = require('mongoose');
const router  = express.Router();
const multer  = require('multer');
const User = require('../models/User');
const Model = require('../models/Model');


var storage = multer.diskStorage({
    destination: function (req, file, cb) {
    cb(null, 'images')
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname )
  },
  
  })
  
  var upload = multer({ storage: storage }).single('file')
  
  router.post('/upload/:id', (req, res, next) => {
  

  const { id } = req.params
  
    upload(req, res, (err)  =>{
      if (err){
        console.log(JSON.stringify(err));
        res.status(400).send('failed to save');
      } else {
        console.log('The filename is ' + res.req.file.filename);
        
        Model.create({path: res.req.file.filename, user_id: id})
            .then( (newModel) => {
                console.log(newModel);
              
                return User.findByIdAndUpdate(id, { $push: {objects: newModel._id} }, {new: true}).populate('models')   
            })
            .then((updatedUser) => {
                res.status(201).json(updatedUser)
                console.log(updatedUser)
            })
            .catch((err) => {
                res.status(400).json(err)
            })
            // res.send(res.req.file.filename); 
      }

  })
  
});


router.delete('/deleteObject/:id', (req, res, next) => {
  const { id } = req.params;

  if ( !mongoose.Types.ObjectId.isValid(id)) {
    res.status(400).json({ message: 'Specified id is not valid' });
    return;
  }

  Model.findByIdAndRemove(id)
      .then((deletedModel) => {
        console.log(deletedModel.user_id)
          return deletedModel.user_id
      })
      .then((userId) => {
          return User.findByIdAndUpdate(userId, { $pull : {objects: id}})
      })
      .then(() => {
          res.status(201).json({message: "Object deleted"})
      })
      .catch((err) => {
          res.status(400).json(err)
      })
  })

  router.get('/filename', (req, res, next) => {
   

    Model.find()
       .then((foundModel) => {
           // console.log(foundUser)
         res.status(200).json(foundModel)
       })
       .catch((err) => res.status(400).json(err))
})



  router.get('/', (req, res, next) => {
    User.find().populate('objects', 'comments')
    .then(allTheUsers => {
      res.json(allTheUsers);
    })
    .catch(err => {
      res.json(err);
    })
  })

  router.get('/:id', (req, res, next) => {
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

  router.put('/update/:id', (req, res, next) => {
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

  router.delete('/delete/:id', (req, res, next) => {
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