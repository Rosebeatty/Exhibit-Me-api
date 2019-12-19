const mongoose = require('mongoose');


const User = require('../models/User');



const users = [
  {username : "Sean", password : "123", email: "sean@gmail.com", theme:"nature", space_name:"Perfection"},
  {username : "Ruben", password : "123", email: "ruben@gmail.com", theme: "bali", space_name:"Bali"},
  {username : "Rita", password : "123", email: "rita@gmail.com", theme: "grass", space_name:"The Field"},
  {username : "Jack", password : "123", email: "jack@gmail.com", theme: "trippy", space_name:"My Imagination"},
  {username : "John", password : "123", email: "john@gmail.com", theme: "mountains", space_name:"Mountains"},
  {username : "John", password : "123", email: "john@gmail.com", theme: "canyon", space_name:"fun"},
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