const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
  }
}, { collection: 'registerations' });  // model maped with collection force collection name
const registerations = mongoose.model("registerations", userSchema);
module.exports = registerations;