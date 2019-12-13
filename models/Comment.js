const mongoose = require("mongoose");
const Schema   = mongoose.Schema;

const commentSchema = new Schema({
  comment: String,
  userId: [{type: Schema.Types.ObjectId, ref: 'User'}]

}, {
  timestamps: { createdAt: "created_at", updatedAt: "updated_at" }
});

const Model = mongoose.model("Comment", commentSchema);

module.exports = Model;
