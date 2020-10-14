/*
require express.js and path.js and node-fetch.js 
from environment 
*/
const express = require("express");
const path = require("path");
const fetch = require("node-fetch");


//photo url data structure 
const photo = [
  "https://images.dog.ceo/breeds/briard/n02105251_7654.jpg",
  "https://images.dog.ceo/breeds/hound-basset/n02088238_10592.jpg",
  "https://images.dog.ceo/breeds/terrier-silky/n02097658_2271.jpg",
  "https://images.dog.ceo/breeds/deerhound-scottish/n02092002_4230.jpg",
  "https://images.dog.ceo/breeds/poodle-miniature/n02113712_2451.jpg",
  "https://images.dog.ceo/breeds/frise-bichon/7.jpg",
  "https://images.dog.ceo/breeds/brabancon/n02112706_1568.jpg",
  "https://images.dog.ceo/breeds/doberman/n02107142_5766.jpg",
  "https://images.dog.ceo/breeds/bluetick/n02088632_1576.jpg"
];

function getRandomPhoto() {
  const randomIndex = Math.floor(Math.random() * photo.length);
  return photo[randomIndex];
}


//creating a server
const app = express();

//creating routes on server
//route 1
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "Applique.html"));
  console.log(`User entered home page: http://localhost:3000${req.url}`);
});

//route 2
app.get("/photo", function(req, res) {
  res
    .json({
      photo: getRandomPhoto()
    })
    .end();
    console.log(`User entered http://localhost:3000${req.url}`);
});

app.use("/public", express.static("./public"));

app.listen(3000);
console.log("listening on http://localhost:3000");