const listModel = require("./route.model");

const createList = (payload) => {
  if (!payload) throw new Error("Please enter the what to do !!");
  return listModel.create(payload);
};

const getAllListItems = () => {
  return listModel.aggregate([
    {
      $lookup: {
        from: "users",
        localField: "addedBy",
        foreignField: "_id",
        as: "whoAdded",
      },
    },
    {
      $unwind: {
        path: "$whoAdded",
        preserveNullAndEmptyArrays: true,
      },
    },
    {
      $project: {
        _id: 0,
        listItem: 1,
        addedBy: "$whoAdded.name",
      },
    },
  ]);
};

const updateList = (_id, payload) => {
  return listModel.updateOne({ _id }, payload);
};

const deleteListItem = (_id) => {
  return listModel.deleteOne({ _id });
};

module.exports = {
  createList,
  getAllListItems,
  updateList,
  deleteListItem,
};
