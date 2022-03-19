const express = require("express");

const Router = express.Router();
const middleware = (req, res, next) => {
  console.log("its middleware");
  next();
};

Router.get("/about", middleware, (req, res) => {
  res.end("this is my about section");
});

module.exports = Router;
