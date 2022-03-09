const Todo = require("../models/todo");

// Day 1 Todo List

//CREATE TODO
module.exports.createTodo = async (req, res) => {
  console.log("TEst");
  const newTodo = new Todo({
    username: req.body.username,
    title: req.body.title,
    is_Complete: req.body.is_Complete,
    created_at: req.body.created_at,
    updated_at: req.body.updated_at,
    category: req.body.category,
  });
  try {
    const savedTodo = await newTodo.save();
    res.status(200).json(savedTodo);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
};

// GET all todos
module.exports.getAllTodo = async (req, res) => {
  try {
    const todos = await Todo.find();
    res.status(200).json(todos);
  } catch (err) {
    res.status(500).json(err);
  }
};

//GET one TODO
module.exports.getOneTodo = async (req, res) => {
  try {
    const todo = await Todo.findById(req.params.id);
    res.status(200).json(todo);
  } catch (err) {
    res.status(500).json(err);
  }
};

//UPDATE todo

module.exports.updateTodo = async (req, res) => {
  const id = req.params.id;
  console.log(id);
  await Todo.updateOne(
    { _id: id },
    {
      $set: req.body,
    }
  )
    .exec()
    .then((result) => {
      res.status(200).json({
        message: `Updated todo details successfully `,
        result,
      });
    })
    .catch((err) => {
      console.log(err);
      return res.status(500).json({
        error: err,
      });
    });
};

//DELETE todo
module.exports.deleteTodo = async (req, res) => {
  try {
    const todo = await Todo.findById(req.params.id);

    try {
      await todo.delete();
      res.status(200).json("todo has been deleted...");
    } catch (err) {
      res.status(500).json(err);
    }
  } catch (err) {
    res.status(500).json(err);
  }
};

// Update Todo Status

module.exports.changeStatus = async (req, res) => {
  const id = req.params.id;
  console.log(id);
  await Todo.updateOne(
    { _id: id },
    {
      $set: { "is_complete ": true },
    }
  )

    .exec()
    .then((result) => {
      res.status(200).json({
        message: `Updated todo details successfully ${set}`,
        result,
      });
    })
    .catch((err) => {
      console.log(err);
      return res.status(500).json({
        error: err,
      });
    });
};
