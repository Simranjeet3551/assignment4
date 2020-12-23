const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const Post = require("./models/post");
const { TRUE } = require("node-sass");
const app = express();
mongoose
  .connect(
    //"mongodb+srv://max:QuBqs0T45GDKPlIG@cluster0-ntrwp.mongodb.net/node-angular?retryWrites=true"
    "mongodb://127.0.0.1:27017/loginForm"
  )
  .then(() => {
    console.log("Connected to database!");
  })
  .catch(() => {
    console.log("Connection failed!");
  });
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, DELETE, OPTIONS"
  );
  next();
});
app.post("/api/userData", (req, res, next) => {
  console.log("api called");
  console.log(req.body.name);
  const post = new Post({
    name: req.body.name,
    phone: req.body.phone,
    email: req.body.email,
    pass: req.body.pass
  })
  post.save();
  res.status(201).json({
    message: "Posts uploaded successfully!"
  });
});

module.exports = app;