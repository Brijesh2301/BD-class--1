const express = require("express");

const app = express();

// Used to parse requests with JSON payloads (POST and PUT requests)
const bodyParser = require("body-parser");

// Specifically parse JSON data and add it to the request.body object
app.use(bodyParser.json());

// Activate the server on port 3000
app.listen(3000, () => {
  console.log("Server started at port 3000");
});

// Creating route
app.get("/", (req, res) => {
  res.send("Hello Ji");
});

app.post("/api/cars", (req, res) => {
  const { name, brand } = req.body;
  console.log(name);
  console.log(brand);
  res.send("Car submitted successfully");
});

// Linking and connecting database to Mongoose
const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/myDatabase", { // Corrected connection string
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connection successful");
  })
  .catch((error) => {
    console.log("Received an error:", error);
  });
