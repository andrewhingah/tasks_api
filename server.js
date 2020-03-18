require("dotenv").config();

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const db = require("./database/models/index");
const authAPI = require("./routes/login");

require("./auth/passport");

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/auth', authAPI)

app.get("/users", async (req, res, next) => {
  const users = await db.User.findAll();
  res.status(200).send({
    users
  });
});

const port = process.env.APP_PORT;

app.listen(5000, () => {
  console.log(`Server is running on port ${port}`);
});

module.exports = app;
