const mongoose = require("mongoose");
const Schema   = mongoose.Schema;

const bkgSchema = new Schema({
  path: String,
  // originalName: String,
  user_id: [{type: Schema.Types.ObjectId, ref: 'User'}]

}, {
  timestamps: { createdAt: "created_at", updatedAt: "updated_at" }
});

const BackgroundImage = mongoose.model("BackgroundImage", bkgSchema);

module.exports = BackgroundImage;
