const mongoose = require("mongoose");
const Schema   = mongoose.Schema;

const modelSchema = new Schema({
  path: String,
  // originalName: String,
  user_id: [{type: Schema.Types.ObjectId, ref: 'User'}]

}, {
  timestamps: { createdAt: "created_at", updatedAt: "updated_at" }
});

const Model = mongoose.model("Model", modelSchema);

module.exports = Model;
