const express = require("express");
const router = express.Router();
const {
  getGoal,
  getGoals,
  setGoal,
  updateGoal,
  deleteGoal,
} = require("../controllers/goalController");

// Routes Controller is in /controllers/goalControllers.js
router.route("/").get(getGoals).post(setGoal);
router.route("/:id").get(getGoal).patch(updateGoal).delete(deleteGoal);

module.exports = router;
