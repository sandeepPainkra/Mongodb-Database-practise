const mongoose = require("mongoose");

const Schema = new mongoose.Schema({
  name: String,
  work: Boolean,
});
const DatabaseModel = new mongoose.model("detail", Schema);

module.exports = DatabaseModel;
