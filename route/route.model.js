const mongoose = require("mongoose");

const listSchema = new mongoose.Schema({
  listItem: { type: String, required: [true, "list item is required"] },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

const listModel = new mongoose.model("Todolist", listSchema);

module.exports = listModel;
