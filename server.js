// Dependencies
// =============================================================
var express = require("express");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT|| 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Star Wars Characters (DATA)
// =============================================================
var table = [
    {
        cutomerName: "Dandrew",
        phoneNumber: "205-555-5555",
        customerEmail: "blah@blah.com",
        customerID: "dandrew85"
    },
]

// Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
  });
app.get("/tables", function(req, res) {
    res.sendFile(path.join(__dirname, "tables.html"));
  });
app.get("/reserve", function(req, res) {
    res.sendFile(path.join(__dirname, "reserve.html"));
  });

// #name
// #phone
// #email
// #userID

// Displays a single reservation, or returns false
// app.get("/api/reservation/:reservation", function(req, res) {
//     var chosen = req.params.reserve;
  
//     console.log(chosen);
// });

//Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});