const express = require("express");
const app = express();
require("dotenv").config();
const mongoose = require("mongoose");
const Users = require("./models/userModel");
const bodyParser = require("body-parser");
const fileUpload = require("./controllers/fileUploads")
// const nodemailer = require("nodemailer");
const Mailer = require("./controllers/sendMail");
require("ejs");
app.set("view engine", "ejs");
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

const port = process.env.PORT || 5454;
const URI = process.env.uri || undefined;

mongoose
  .connect(URI)
  .then(() => {
    console.log("Database connected successfully");
  })
  .catch((err) => {
    console.log("Database connection error:", err);
  });

app.post("/signup", async (req, res) => {
  try {
    const { name, email, age, password } = req.body;
    const existingUser = await Users.findOne({ email });

    if (existingUser) {
      return res.status(400).json({ error: "Email already exists." });
    }

    await new Users({ name, email, age, password }).save();
    res.redirect("/signin");
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Signup failed." });
  }
});


app.post("/signin", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await Users.findOne({ email });

    if (!user || user.password !== password) {
      return res.status(400).json({ error: "Invalid email or password" });
    }

    res.redirect("/dashboard");
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Signin failed." });
  }
});

// Array of cities
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

app.get("/dashboard", (req, res) => {
  fetch("https://my-api-theta-ten.vercel.app")
    .then((res) => res.json())
    .then((data) => {
      res.render("pages/dashboard", { data: data });
    })
    .catch((err) => {
      console.log(err);
    });
});


app.get("/", (req, res) => {
  res.render("index", {
    title: "First EJS page",
    name: "preciousou",
    score: 90,
  }); 9
});


app.get("/signup", (req, res) => {
  res.render("pages/signup");
});


app.get("/signin", (req, res) => {
  res.render("pages/signin");
});


app.get("/api", (req, res) => {
  res.send(cities);
});

app.get('/mail',Mailer)
app.get('/upload', fileUpload)

app.listen(port, () => {         
  console.log(`Server is running on port ${port}`);
});     
