// package that does all the err and catching for us
const asyncHandler = require("express-async-handler");

// Bring in DB models
const Task = require("../models/goalModel");

// @Desc   Gets Goals
const getGoal = asyncHandler(async (req, res) => {
  const goals = await Task.find({}).sort({ createdAt: -1 }); //use isActive to show True / False

  res.status(200).json(goals);
});

// @Desc   sets Goals
const setGoal = async (req, res) => {
  const { Title, Day, Message, Comment } = req.body;

  try {
    const workout = await Task.create({ Title, Day, Message, Comment });
    res.status(200).json(workout);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// @Desc   Update Goals
const updateGoal = asyncHandler(async (req, res) => {
  const goal = await Task.findById(req.params.id);
  if (!goal) {
    res.status(400);
    throw new Error("Task Not Found");
  }
  const updatedGoal = await Task.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  res.status(200).json(updatedGoal);
});

// @Desc   DELETE Goals
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
  setGoal,
  updateGoal,
  deleteGoal,
};
