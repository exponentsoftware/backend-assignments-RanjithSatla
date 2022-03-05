const express = require("express");
const app = express();

const db = require("./config/db");

const server = app.listen(process.env.PORT || 5000, () => {
  const port = server.address().port;
  console.log(`Express is working on port ${port}`);
});
