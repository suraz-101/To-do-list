const router = require("express").Router();
const todoRoute = require("../module/todolist/todo.route");
const userRoute = require("../module/user/user.route");

router.use("/list", todoRoute);
router.use("/users", userRoute);

module.exports = router;
