const toDoRouter = require("express").Router();
const { restart } = require("nodemon");
const controller = require("./route.controller");
const { validation } = require("./todo.validation");

toDoRouter.get("/", async (req, res, next) => {
  try {
    const result = await controller.getAllListItems();
    res.json({ message: result });
  } catch (error) {
    next(error);
  }
});

toDoRouter.post("/", async (req, res, next) => {
  try {
    const result = await controller.createList(req.body);
    res.json({ list: result });
  } catch (error) {
    next(error);
  }
});

toDoRouter.put("/updateList", validation, async (req, res, next) => {
  try {
    const { id, ...rest } = req.body;
    if (!id) throw new Error("Id is required");
    const result = await controller.updateList(id, rest);
    res.json({ updatedData: result });
  } catch (error) {
    next(error);
  }
});

toDoRouter.patch("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await controller.updateList(id, req.body);
    res.json({ updatedData: result });
  } catch (error) {
    next(error);
  }
});

toDoRouter.delete("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await controller.deleteListItem(id);
    res.json({ updatedData: result });
  } catch (error) {
    next(error);
  }
});

module.exports = toDoRouter;
