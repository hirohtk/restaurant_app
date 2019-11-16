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

let reservations = [
  {
  name: "first guy",
  phone: "555-555-5555",
  email: "1st@test.com",
  uniqueID: "first table"
},
{
  name: "test guy",
  phone: "555-555-5555",
  email: "1st@test.com",
  uniqueID: "test table"
},
];

let waitlist = [
  {
    name: "waitlisted guy",
    phone: "444-444-4444",
    email: "wait@test.com",
    uniqueID: "waitlisted table"
  }
];

// =============================================================

 
app.get("/", function(req, res) {
    //homepage
  res.sendFile(path.join(__dirname, "home.html"));
});

// Display webpage for table list.  this is a get, and we're also going to do a get within the html file itself for getting the table data
app.get("/tables", function(req, res) {

  res.sendFile(path.join(__dirname, "TBD.html"));
});
// Display page for making a reservation
app.get("/reserve", function(req, res) {
    res.sendFile(path.join(__dirname, "reserve.html"));
  });

// Displays JSON for reservations
app.get("/api/tables", function(req, res) {
  return res.json(reservations);
});
// Displays JSON for waitlist
app.get("/api/waitlist", function(req, res) {
    return res.json(waitlist);
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
app.post("/api/reservations", function(req, res) {

  var newReservation = req.body;

  //newCharacter.routeName = newCharacter.name.replace(/\s+/g, "").toLowerCase();

  if (reservations.length >= 5) {
    waitlist.push(newReservation);
  }
  else {
    reservations.push(newReservation);
  }

  res.json(newReservation);
});

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
