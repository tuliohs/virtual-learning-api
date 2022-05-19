const mongoose = require("mongoose");

const ImageSchema = new mongoose.Schema({
  title: { type: String, required: true },
  originalFileName: { type: String, required: true },
  fileName: { type: String, required: true },
  mimeType: { type: String, required: true },
  size: { type: Number, required: true },
  creatorId: { type: String, required: true },
  altText: { type: String },
  url: { type: String },
  thumbnail: { type: String },
}, { timestamps: true })

ImageSchema.index({
  originalFileName: "text",
  title: "text",
  altText: "text",
});

module.exports = mongoose.model("Image", ImageSchema, "Image");
