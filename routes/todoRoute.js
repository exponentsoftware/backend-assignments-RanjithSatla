const express = require("express");
const Todo = require("../controllers/todo");

//Auth middleware
const checkAuth = require("../middlewares/check-auth");

//controllers
const router = express.Router();

// Day 1 Todo List
router.post("/addTodo", checkAuth, Todo.createTodo);
router.get("/getAll", Todo.getAllTodo);
router.get("/:id", Todo.getOneTodo);
router.patch("/:id", checkAuth, checkAuth, Todo.updateTodo);
router.patch("/:id", checkAuth, Todo.changeStatus);
router.delete("/:id", checkAuth, Todo.deleteTodo);

module.exports = router;
