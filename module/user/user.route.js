const usersRoute = require("express").Router();
const userController = require("./user.controller");
const { userValidation } = require("./user.validate");
const { checkRole } = require("../../utils/sessionManager");
usersRoute.get("/", checkRole(["admin"]), async (req, res, next) => {
  try {
    const result = await userController.getAllUsers();
    res.status(200).json({ message: result });
  } catch (error) {
    next(error);
  }
});

usersRoute.post("/", userValidation, async (req, res, next) => {
  try {
    const result = await userController.createUser(req.body);
    res.status(200).json({ message: result });
  } catch (error) {
    next(error);
  }
});

usersRoute.put("/:id", userValidation, async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await userController.updateUser(id, req.body);
    res.status(200).json({ message: result });
  } catch (error) {
    next(error);
  }
});

usersRoute.patch("/:id", userValidation, async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await userController.updateUser(id, req.body);
    res.status(200).json({ message: result });
  } catch (error) {
    next(error);
  }
});

usersRoute.delete("/:id", async (req, res, next) => {
  try {
    const { id } = await userController.deleteUser(id);
    res.status(200).json({ message: result });
  } catch (error) {
    next(error);
  }
});

usersRoute.post("/login", async (req, res, next) => {
  try {
    const result = await userController.loginUser(req.body);
    res.status(200).json({ message: result });
  } catch (error) {
    next(error);
  }
});

module.exports = usersRoute;
