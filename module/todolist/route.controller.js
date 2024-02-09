const listModel = require("./route.model");

const createList = (payload) => {
  return listModel.create(payload);
};

const getAllListItems = () => {
  return listModel.find();
};

const updateList = (_id, payload) => {
  return listModel.updateOne({ _id }, payload);
};

const deleteListItem = (_id) => {
  return listModel.deleteOne({ _id });
};

module.exports = { createList, getAllListItems, updateList, deleteListItem };
