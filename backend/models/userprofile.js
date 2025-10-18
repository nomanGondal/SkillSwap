// userProfile.model.js
const mongoose = require("mongoose");

const userProfileSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "registerations", required: true },
  bio: { type: String },
  avatar: { type: String }, // URL or file path
  location: { type: String },
  skills: [
    {
      name: { type: String, required: true },
      level: { type: String, enum: ["Beginner", "Intermediate", "Expert"], default: "Beginner" },
      category: { type: String },
    },
  ],
  joinedAt: { type: Date, default: Date.now },
}, { timestamps: true ,collection: 'userprofiles' });  // model mapped with collection force collection name

module.exports = mongoose.model("UserProfile", userProfileSchema);
