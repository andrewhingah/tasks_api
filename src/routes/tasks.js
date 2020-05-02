import express from "express";
import db from "../database/models/index";

const tasksRouter = express.Router();

tasksRouter.get("/tasks", async (req, res, next) => {
  try {
    const tasks = await db.Task.findAndCountAll();
    return res.json({
      totalTasks: tasks.count,
      tasks: tasks.rows,
    });
  } catch (error) {
    return next(error);
  }
});

export default tasksRouter;
