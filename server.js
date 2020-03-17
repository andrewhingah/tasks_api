require("dotenv").config();

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const db = require("./database/models/index");

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/users", async (req, res, next) => {
  const users = await db.User.findAll({ raw: true });
  res.status(200).send({
    users
  });
});

let port = process.env.APP_PORT;

app.listen(5000, () => {
  console.log(`Server is running on port ${port}`);
});

module.exports = app;
