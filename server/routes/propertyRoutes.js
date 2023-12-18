// Import required modules
const express = require("express");
const Property = require("../models/propertyModel");

// Create an Express Router instance
const router = express.Router();

// Endpoint: Test route
router.get("/", (req, res) => {
  res.send("Hello World!");
});

// Endpoint: Get all properties
router.get("/all", async (req, res) => {
  try {
    // Retrieve all properties from the database
    const properties = await Property.find();
    res.status(200).json(properties);
  } catch (error) {
    // Handle errors and send an appropriate response
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Endpoint: Add a new property
router.post("/add", async (req, res) => {
  try {
    // Extract property details from the request body
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
      amenities,
      vicinity,
    } = req.body;

    // Check if all required fields are provided
    if (!image || !address || !type || !location || !description || !price) {
      return res.status(400).json({ error: "All fields are required" });
    }

    // Create a new Property instance
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
      amenities,
      vicinity,
    });

    // Save the new property to the database
    const savedProperty = await newProperty.save();
    res.status(201).json(savedProperty);
  } catch (error) {
    // Handle errors and send an appropriate response
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Endpoint: Add properties from a JSON file
router.post("/json", async (req, res) => {
  try {
    // Extract properties from the request body
    const properties = req.body;

    // Insert multiple properties into the database
    const savedProperties = await Property.insertMany(properties);
    res.status(201).json(savedProperties);
  } catch (error) {
    // Handle errors and send an appropriate response
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Endpoint: Delete all properties
router.delete("/delete", async (req, res) => {
  try {
    // Delete all properties from the database
    const deletedProperties = await Property.deleteMany();
    res.status(200).json(deletedProperties);
  } catch (error) {
    // Handle errors and send an appropriate response
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Export the router for use in other files
module.exports = router;
