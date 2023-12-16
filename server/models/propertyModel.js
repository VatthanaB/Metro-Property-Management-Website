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
  type: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  bedrooms: {
    type: Number,
    required: true,
  },
  bathrooms: {
    type: Number,
    required: true,
  },
  parking: {
    type: Number,
    required: true,
  },

  amenities: {
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
