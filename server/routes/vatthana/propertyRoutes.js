const express = require("express");
const Property = require("../../models/propertyModel");

const router = express.Router();

// Get testing
router.get("/", (req, res) => {
  res.send("Hello World!");
});
// Get all properties
router.get("/all", async (req, res) => {
  try {
    const properties = await Property.find();
    res.status(200).json(properties);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Post new property
router.post("/add", async (req, res) => {
  try {
    const {
      image,
      address,
      type,
      location,
      description,
      price,
      bedrooms,
      bathrooms,
      parking,
      ameneties,
      vicinity,
    } = req.body;

    // Check if all required fields are provided
    if (!image || !address || !type || !location || !description || !price) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const newProperty = new Property({
      image,
      address,
      type,
      location,
      description,
      price,
      bedrooms,
      bathrooms,
      parking,
      ameneties,
      vicinity,
    });

    const savedProperty = await newProperty.save();
    res.status(201).json(savedProperty);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Post Json file of properties
router.post("/json", async (req, res) => {
  try {
    const properties = req.body;
    const savedProperties = await Property.insertMany(properties);
    res.status(201).json(savedProperties);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Delete all property
router.delete("/delete", async (req, res) => {
  try {
    const deletedProperties = await Property.deleteMany();
    res.status(200).json(deletedProperties);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
