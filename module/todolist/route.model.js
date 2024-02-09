const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;

const listSchema = new mongoose.Schema({
  listItem: { type: String, required: [true, "list item is required"] },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  addedBy: {
    type: ObjectId,
    ref: "user",
    required: [true, "Who added the list"],
  },
});

const listModel = new mongoose.model("Todolist", listSchema);

module.exports = listModel;
