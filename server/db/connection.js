const mongoose = require("mongoose");

const dotenv = require("dotenv");

dotenv.config({ path: "../Config/config.env" });
const DB = process.env.DATABASE;
const PORT = process.env.PORT;
mongoose
  .connect(DB, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(console.log("Connection Successfully"))
  .catch((err) => console.log(err));
const Schema = new mongoose.Schema({
  name: String,
  work: Boolean,
});
