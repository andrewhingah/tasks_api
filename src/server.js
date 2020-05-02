require("dotenv").config();

import express from "express";
import bodyParser from "body-parser";
import passport from "passport";
import faker from "faker";
const random = require("lodash.random");
const times = require("lodash.times");
import cors from "cors";
import db from "./database/models/index";
import authAPI from "./routes/login";
import tasksAPI from "./routes/tasks";

require("./auth/passport");

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/api", authAPI);
app.use("/api", passport.authenticate("jwt", { session: false }), tasksAPI);

const port = process.env.APP_PORT;

db.sequelize.sync().then(() => {
  db.Task.destroy({ where: {}, truncate: true });

  const status = ["Completed", "InProgress", "Deferred"];
  const gender = ["Male", "Female"];

  // Dummy tasks
  db.Task.bulkCreate(
    times(30, () => ({
      id: random(1000, 9999),
      customer_first_name: faker.name.firstName(),
      personnel_first_name: faker.name.firstName(),
      customer_last_name: faker.name.lastName(),
      customer_phone: `07${random(1, 99999999)}`,
      agentId: random(1000, 9999),
      assigned: new Date(),
      in_progress: new Date(),
      completed: new Date(),
      deferred: new Date(),
      status: status[random(0, 2)],
      location: faker.address.state(),
      gender: gender[random(0, 1)],
      age: random(18, 65),
      access_code: random(1, 10),
      splash_page: random(1, 10),
      mpesa: random(1, 10),
      autoplay: random(1, 10),
      comments: "To be reviewed",
      registration: "Self",
    }))
  );
  app.listen(5000, () => {
    console.log(`Server is running on port ${port}`);
  });
});
