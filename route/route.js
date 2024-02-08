const router = require("express").Router();
const controller = require("./route.controller");

router.get("/", async (req, res, next) => {
  try {
    const result = await controller.getAllListItems();
    res.json({ message: result });
  } catch (error) {
    next(error);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const result = await controller.createList(req.body);
    res.json({ list: result });
  } catch (error) {
    next(error);
  }
});

router.put("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await controller.updateList(id, req.body);
    res.json({ updatedData: result });
  } catch (error) {
    next(error);
  }
});

router.patch("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await controller.updateList(id, req.body);
    res.json({ updatedData: result });
  } catch (error) {
    next(error);
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await controller.deleteListItem(id);
    res.json({ updatedData: result });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
