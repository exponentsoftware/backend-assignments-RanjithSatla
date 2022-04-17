const express = require("express");
const filterTodo = require("../controllers/filterTodo");
const router = express.Router();

router.get("/filterAll", filterTodo.filter);

module.exports = router;
