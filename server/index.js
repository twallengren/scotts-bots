// Require libraries
const express = require("express");
const bodyParser = require("body-parser");
const cors = require('cors');

// Require controller
const controller = require("./controller.js");

// Have express create app
const app = express();

// Tell express app to use bodyParser.json() for API endpoints
app.use(bodyParser.json())
app.use(cors())

// Create endpoints
app.post("/api/postmessage", controller.getResponse)

// Tell the app to start listening on port 3005
app.listen(3005, () => {
    console.log("app running on port 3005")
})