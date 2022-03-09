const express = require("express");
const Todo = require("../controllers/todo");

//controllers
const router = express.Router();

// Day 1 Todo List
router.post("/addTodo", Todo.createTodo);
router.get("/getAll", Todo.getAllTodo);
router.get("/:id", Todo.getOneTodo);
router.put("/:id", Todo.updateTodo);
router.put("/:id", Todo.changeStatus);
router.delete("/:id", Todo.deleteTodo);

module.exports = router;
