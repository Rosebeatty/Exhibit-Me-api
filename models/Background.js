const mongoose = require("mongoose");
const Schema   = mongoose.Schema;

const backgroundSchema = new Schema({
  path: String,
  // originalName: String,
  user_id: [{type: Schema.Types.ObjectId, ref: 'User'}]

}, {
  timestamps: { createdAt: "created_at", updatedAt: "updated_at" }
});

const Background = mongoose.model("Background", backgroundSchema);

module.exports = Background;
