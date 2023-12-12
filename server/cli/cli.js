const fs = require("fs");
const { MongoClient } = require("mongodb");
const program = require("commander");
const dotenv = require("dotenv");
dotenv.config();

program
  .version("1.0.0")
  .description("CLI tool to create MongoDB database locally from a JSON file");

program
  .command("import <jsonFilePath> <databaseName> <collectionName>")
  .description("Import data from JSON file to MongoDB database")
  .action(async (jsonFilePath, databaseName, collectionName) => {
    try {
      const jsonData = JSON.parse(fs.readFileSync(jsonFilePath, "utf8"));

      const client = new MongoClient("mongodb://localhost:27017");
      await client.connect();

      const db = client.db(databaseName);
      const collection = db.collection(collectionName);

      await collection.insertMany(jsonData);

      console.log("Data imported successfully.");

      await client.close();
    } catch (error) {
      console.error("Error:", error.message);
    }
  });

// Run this command in the terminal to import the data from the JSON file to the database:
// node ./cli/cli.js import ./cli/property.json Mission-Ready-M5 properties

// program .parse method parses process.argv and calls the action handler
program.parse(process.argv);
