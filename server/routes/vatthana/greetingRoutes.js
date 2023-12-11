// server/routes/greetingRoutes.js
const express = require("express");
const Greeting = require("../../models/greetingModel");

const router = express.Router();

// Define the route for creating a new Greeting document
router.post("/", async (req, res) => {
  try {
    const { message } = req.body;

    // Check if message is provided
    if (!message) {
      return res.status(400).json({ error: "Message is required" });
    }

    const newGreeting = new Greeting({ message });
    const savedGreeting = await newGreeting.save();
    res.status(201).json(savedGreeting);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});
// Example route to get all Greeting documents
router.get("/", async (req, res) => {
  try {
    const greetings = await Greeting.find();
    res.status(200).json(greetings);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});
module.exports = router;
