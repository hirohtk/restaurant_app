// Dependencies
// =============================================================
var express = require("express");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();

// process.env.PORT if there is a port on process object that has an environment that has a PORT
// will use the process.env.PORT in deployed phase, otherwise use port 3000 in development phase
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

let reservations = [];

// =============================================================
var tables = [
  {
    //Dont need route name
    name: "Yoda",
    role: "Jedi Master",
    age: 900,
    forcePoints: 2000
  },
];

// Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page
app.get("/", function(req, res) {
    //homepage
  res.sendFile(path.join(__dirname, "TBD.html"));
});

// Display webpage for table list
app.get("/tables", function(req, res) {

  res.sendFile(path.join(__dirname, "TBD.html"));
});
// Display page for making a reservation
app.get("/reserve", function(req, res) {

    res.sendFile(path.join(__dirname, "TBD.html"));
  });

// Displays JSON for tables
app.get("/api/tables", function(req, res) {
  return res.json();
});
// Displays JSON for reservations
app.get("/api/waitlist", function(req, res) {
    return res.json();
  });

// We don't have a search function

// app.get("/api/characters/:character", function(req, res) {
//   var chosen = req.params.character;

//   console.log(chosen);

//   for (var i = 0; i < characters.length; i++) {
//     if (chosen === characters[i].routeName) {
//       return res.json(characters[i]);
//     }
//   }
  
//   return res.json(false);
// });

// Create New Characters - takes in JSON input
app.post("/reserve", function(req, res) {

  var newReservation = req.body;

  //newCharacter.routeName = newCharacter.name.replace(/\s+/g, "").toLowerCase();

  console.log(newReservation);

  reservations.push(newReservation);

  res.json(newReservation);
});

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
