const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const attendeeSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
});

const userSchema = new Schema({
  registrationType: {
    type: String,
    enum: ["single", "group"],
    required: true,
  },
  attendees: [attendeeSchema],
});

module.exports = mongoose.model("User", userSchema);
