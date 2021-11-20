const express = require("express");
const mongoose = require("mongoose");

const path = require("path");
const ejs = require("ejs");
const Photo = require("./models/Photo");

const app = express();

//connect DB
mongoose.connect("mongodb://localhost/pcat-test-db", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const myLogger = (req, res, next) => {
  console.log("Middleware log 1");
  next();
};
const myLogger2 = (req, res, next) => {
  console.log("Middleware log 2");
  next();
};

// TEMPLATE ENGINE
app.set("view engine", "ejs");

// MIDDLEWARES
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// ROUTES
app.get("/", async (req, res) => {
  const photos = await Photo.find({});
  res.render("index",{
    photos
  });
});
app.get("/about", (req, res) => {
  res.render("about");
});
app.get("/add", (req, res) => {
  res.render("add");
});
// Adding photo
app.post("/photos", async (req, res) => {
  await Photo.create(req.body);
  res.redirect("/");
});

const port = 3000;
app.listen(port, () => {
  console.log(`Sunucu ${port} portunda başlatıldı.`);
});
