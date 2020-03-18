const express = require("express");
const jwt = require("jsonwebtoken");
const passport = require("passport");
const db = require("../database/models/index");

const api = express.Router();

api.get("/tasks", async (req, res, next) => {
  try {
    const tasks = await db.Task.findAndCountAll();
    return res.json({
      totalTasks: tasks.count,
      tasks: tasks.rows
    });
  } catch (error) {
    return next(error);
  }
});

module.exports = api;
