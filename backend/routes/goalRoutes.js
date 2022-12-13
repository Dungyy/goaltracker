const express = require("express");
const router = express.Router();
const {
  getGoal,
  setGoal,
  updateGoal,
  deleteGoal,
} = require("../controllers/goalController");

// Routes Controller is in /controllers/goalControllers.js

router.route("/").get(getGoal).post(setGoal);
// line Above is the same as below just cleaner
// router.get('/', getGoal)
// router.post('/', setGoal)

router.route("/:id").delete(deleteGoal).put(updateGoal);
// line Above is the same as below just cleaner
// router.put('/:id', updateGoal)
// router.delete('/:id', deleteGoal)

module.exports = router;
