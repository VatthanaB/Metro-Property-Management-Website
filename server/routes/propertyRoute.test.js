const chai = require("chai");
const chaiHttp = require("chai-http");
const app = require("../server"); // Replace with the actual filename of your Express app
const mongoose = require("mongoose");
const Property = require("../models/propertyModel"); // Import the Property model

chai.use(chaiHttp);
const expect = chai.expect;

// Test suite for Property routes
describe("Property Routes", () => {
  // Clear the database before running tests
  before((done) => {
    mongoose.connect("mongodb://localhost:27017/Mission-Ready-M5", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    mongoose.connection.once("open", () => {
      mongoose.connection.db.dropDatabase();
      done();
    });
  });

  // Test GET /properties/all route
  describe("GET /properties/all", () => {
    it("should get all properties", (done) => {
      chai
        .request(app)
        .get("/properties/all")
        .end((err, res) => {
          expect(res).to.have.status(200);
          expect(res.body).to.be.an("array");
          done();
        });
    });
  });
});
