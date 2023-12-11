// Load environment variables
const dotenv = require("dotenv");

// Import required modules
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

// Import routes
const greetingRoutes = require("./routes/vatthana/greetingRoutes");
const propertyRoutes = require("./routes/vatthana/propertyRoutes");

// Setup express app
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// ... rest of your code
const MONGODB_URI =
  process.env.MONGODB_URI || "mongodb://mongo:27018/Mission-Ready-M5";

// MongoDB connection
mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", () => {
  console.log("Connected to MongoDB");
});

// Use the greetingRoutes for the /greetings endpoint
app.use("/greetings", greetingRoutes);

// Use the propertyRoutes for the /properties endpoint
app.use("/properties", propertyRoutes);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
