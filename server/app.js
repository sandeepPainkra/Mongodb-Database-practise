const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const DatabaseModel = require("./ModelSchemas/Schemas.js");

dotenv.config({ path: "./Config/config.env" });
const DB = process.env.DATABASE;
const PORT = process.env.PORT;

require("./db/connection.js");

const Databse = async () => {
  const Data1 = new DatabaseModel({
    name: "Rahul singh",
    work: true,
  });
  const Data2 = new DatabaseModel({
    name: "Mahendra Painkra",
    work: false,
  });

  const result = await DatabaseModel.insertMany([Data1, Data2]);
  console.log(result);
};
// Databse();
app.use(require("./Router/auth.js"))

app.get("/", (req, res) => {
  res.end("Hello this is  Home Section ");
});
app.get("/about", (req, res) => {
  res.end("this is About Page");
});
app.listen(PORT, () => [console.log("Listening in port no: 8000")]);
