const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: String,
  email: String,
  password: String,
  space_name: String,
  theme: String,
  backgroundImage: String,
  backgrounds: [{type: Schema.Types.ObjectId, ref:'Background'}],
  objects: [ {type: Schema.Types.ObjectId, ref:'Model'} ],
  comments: [{type: Schema.Types.ObjectId, ref:'Comment'}],
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  },
});

const User = mongoose.model('User', userSchema);

module.exports = User;