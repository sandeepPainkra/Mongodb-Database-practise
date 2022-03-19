const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config({ path: "./Config/config.env" });
const DB = process.env.DATABASE;
const PORT=process.env.PORT;
mongoose
  .connect(DB, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(console.log("Connection Successfully"))
  .catch((err) => console.log(err));
const Schema = new mongoose.Schema({
  name: String,
  work: Boolean,
});
const Employe = new mongoose.model("detail", Schema);
const Databse = async () => {
  const Data1 = new Employe({
    name: "Sandeep Painrka",
    work: true,
  });
  const Data2 = new Employe({
    name: "Raju",
    work: false,
  });

  const result = await Employe.insertMany([Data1, Data2]);
  console.log(result);
};
Databse();
app.get("/", (req, res) => {
  res.end("Hello this is  Home Section ");
});

app.listen(8000, () => [console.log("Listening in port no: 8000")]);
