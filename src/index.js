const express = require("express");
const app = express();
const users = require("../users.json");
module.exports = app;

function filterUserByID(id) {
  return users.filter((user) => user.id === id)[0];
}

//Example endpoint
app.get("/foo", (req, res) => {
  res.send(`foo`);
});

//Write your code here
app.get("/users", (req, res) => {
  const user = filterUserByID(req.query.id);
  return res.status(200).json(user);
});
