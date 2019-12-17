const mongoose = require('mongoose');


const User = require('../models/User');



const users = [
  {username : "Sean", password : "123", email: "sean@gmail.com", theme:"peace", space_name:"peace"},
  {username : "Ruben", password : "123", email: "ruben@gmail.com", theme: "football", space_name:"football"},
  {username : "Rita", password : "123", email: "rita@gmail.com", theme: "paradise", space_name:"paradise"},
  {username : "Jack", password : "123", email: "jack@gmail.com", theme: "creative", space_name:"my imagination"},
  {username : "John", password : "123", email: "john@gmail.com", theme: "funny", space_name:"fun"},
]


mongoose
  .connect("mongodb://localhost:27017/exhibitme", { useNewUrlParser: true, useUnifiedTopology: true })

  .then(() => {
    return User.create(users);
  })
  .then(() => {
    mongoose.connection.close();
  })
  .catch(err => console.log(err));