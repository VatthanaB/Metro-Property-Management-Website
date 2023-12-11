const mongoose = require("mongoose");

const propeertySchema = new mongoose.Schema({
  image: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  propertyType: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  propertyDescription: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  ameneties: {
    type: [String],
    required: false,
  },
  vicinity: {
    type: [String],
    required: false,
  },
});

const Property = mongoose.model("Property", propeertySchema);

module.exports = Property;
