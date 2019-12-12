const mongoose = require("mongoose");
const Schema   = mongoose.Schema;

const modelSchema = new Schema({
  name: String,
  path: String,
  originalName: String

}, {
  timestamps: { createdAt: "created_at", updatedAt: "updated_at" }
});

const Model = mongoose.model("Model", modelSchema);

module.exports = Model;
