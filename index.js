const app = require("express")();
require("dotenv").config();
const mongoose = require('mongoose')
require('ejs')
app.set('view engine', 'ejs')
const port = process.env.PORT || 5454;
const URI = process.env.uri || undefined

mongoose.connect(URI)
.then(()=>{
console.log('database connect successfully');

})
.catch(()=>{
  console.log(err);
  
})


// Array of objects
const cities = [
  {
    name: "Paris",
    population: 2148327,
    country: "France",
    landmass: "105.4 km²",
    landmarks: ["Eiffel Tower", "Louvre Museum"],
    pictures: ["eiffel_tower.jpg", "louvre_museum.jpg"],
  },
  {
    name: "New York",
    population: 8419000,
    country: "USA",
    landmass: "783.8 km²",
    landmarks: ["Statue of Liberty", "Central Park"],
    pictures: ["statue_of_liberty.jpg", "central_park.jpg"],
  },
  {
    name: "Tokyo",
    population: 13929286,
    country: "Japan",
    landmass: "2,194 km²",
    landmarks: ["Tokyo Tower", "Shibuya Crossing"],
    pictures: ["tokyo_tower.jpg", "shibuya_crossing.jpg"],
  },
  {
    name: "London",
    population: 8982000,
    country: "United Kingdom",
    landmass: "1,572 km²",
    landmarks: ["Big Ben", "London Eye"],
    pictures: ["big_ben.jpg", "london_eye.jpg"],
  },
  {
    name: "Sydney",
    population: 5312163,
    country: "Australia",
    landmass: "12,367.7 km²",
    landmarks: ["Sydney Opera House", "Harbour Bridge"],
    pictures: ["opera_house.jpg", "harbour_bridge.jpg"],
  },
  {
    name: "Rome",
    population: 2873000,
    country: "Italy",
    landmass: "1,285 km²",
    landmarks: ["Colosseum", "Vatican City"],
    pictures: ["colosseum.jpg", "vatican_city.jpg"],
  },
  {
    name: "Berlin",
    population: 3644826,
    country: "Germany",
    landmass: "891.8 km²",
    landmarks: ["Brandenburg Gate", "Berlin Wall"],
    pictures: ["brandenburg_gate.jpg", "berlin_wall.jpg"],
  },
  {
    name: "Moscow",
    population: 12506468,
    country: "Russia",
    landmass: "2,511 km²",
    landmarks: ["Red Square", "Kremlin"],
    pictures: ["red_square.jpg", "kremlin.jpg"],
  },
  {
    name: "Dubai",
    population: 3331420,
    country: "United Arab Emirates",
    landmass: "4,114 km²",
    landmarks: ["Burj Khalifa", "Palm Jumeirah"],
    pictures: ["burj_khalifa.jpg", "palm_jumeirah.jpg"],
  },
  {
    name: "Cape Town",
    population: 433688,
    country: "South Africa",
    landmass: "2,461 km²",
    landmarks: ["Table Mountain", "Robben Island"],
    pictures: ["table_mountain.jpg", "robben_island.jpg"],
  },
];

app.get("/", (req, res) => {
  // res.send("working");
  // res.sendFile(__dirname +'/public/index.html')
  // res.send(__dirname)
  res.render('index',{title: 'First EJS page', name: 'preciousou', score: 90 })
})


app.get ('/api', (req,res) =>{
  res.send(cities);
})

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
})
