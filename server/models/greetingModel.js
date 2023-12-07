// server/models/greetingModel.js
const mongoose = require("mongoose");

const greetingSchema = new mongoose.Schema({
  message: {
    type: String,
    required: true,
  },
});

const Greeting = mongoose.model("Greeting", greetingSchema);

module.exports = Greeting;
