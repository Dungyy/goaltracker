// package that does all the err and catching for us
const asyncHandler = require("express-async-handler");

// Bring in DB models
const mongoose = require("mongoose");
const Task = require("../models/goalModel");

// @Desc   Get single Goal  //
const getGoal = asyncHandler(async (req, res) => {
  try {
    const goal = await Task.findById(req.params.id);
    if (!goal) {
      res.status(404).send({ message: "Goal not found" });
    } else {
      res.status(200).json(goal);
    }
  } catch (error) {
    console.error(error);
    res.status(400).send({ message: "Error retrieving goal" });
  }
});

// @Desc   Gets Goals  //
const getGoals = asyncHandler(async (req, res) => {
  try {
    const goals = await Task.find({}).sort({ createdAt: -1 }); //use isActive to show True / False
    if (!goals) {
      res.status(400).send({ message: "Error retrieving tasks" });
    } else {
      res.status(200).json(goals);
    }
  } catch (error) {
    console.error(error);
    res.status(400).send({ message: "Error retrieving Goals" });
  }
});

// @Desc   POST Goals  //
const setGoal = async (req, res) => {
  // Validate input
  const { Title, Day, Message, Comment } = req.body;
  if (!Title || !Day || !Message || !Comment) {
    return res.status(400).send({
      message: "Missing required fields: Title, Day, Message, Comment",
    });
  }

  // Create task in database
  try {
    const task = await Task.create({ Title, Day, Message, Comment });
    res.status(200).json(task);
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: "Error creating task" });
  }
};

// @Desc   Update Goals  //
const updateGoal = asyncHandler(async (req, res) => {
  // Validate input
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).send({ message: "Invalid task ID" });
  }

  // Update task in database
  try {
    const goal = await Task.findById(id);
    if (!goal) {
      res.status(400);
      throw new Error("Task Not Found");
    }
    const updatedGoal = await Task.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.status(200).json(updatedGoal);
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: "Error updating task" });
  }
});

// @Desc   DELETE Goals  //
const deleteGoal = asyncHandler(async (req, res) => {
  const goal = await Task.findById(req.params.id);
  if (!goal) {
    res.status(400);
    throw new Error("Task Not Found");
  }
  await Task.deleteOne();

  res.status(200).json({ id: req.params.id });
});

module.exports = {
  getGoal,
  getGoals,
  setGoal,
  updateGoal,
  deleteGoal,
};
