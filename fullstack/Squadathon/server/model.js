const mongoose = require("mongoose");

const Todo = new mongoose.Schema({
  todo: String,
});

const data = mongoose.model("todo", Todo);
module.exports = { data };