const toDoRouter = require("express").Router();
const controller = require("./route.controller");

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

toDoRouter.put("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await controller.updateList(id, req.body);
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
