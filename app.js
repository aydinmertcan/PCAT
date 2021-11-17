const express = require("express");
const path = require("path");

const app = express();
const myLogger = (req, res, next) => {
  console.log("Middleware log 1");
  next();
};
const myLogger2 = (req, res, next) => {
  console.log("Middleware log 2");
  next();
};

// MIDDLEWARES
app.use(express.static("public"));


app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "templatemo/index.html"));
});

const port = 3000;
app.listen(port, () => {
  console.log(`Sunucu ${port} portunda başlatıldı.`);
});
