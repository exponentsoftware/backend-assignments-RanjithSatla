const express = require("express");
const res = require("express/lib/response");
const { middlewares } = require("./middlewares");
const app = express();

const db = require("./config/db");

const todoRoute = require("./routes/todoRoute");

//middlewares
app.use(middlewares);

app.use("/", todoRoute);

const server = app.listen(process.env.PORT || 5000, () => {
  const port = server.address().port;

  console.log(`Express is working on port ${port}`);
});
