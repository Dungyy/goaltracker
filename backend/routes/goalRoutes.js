import { Router } from "express";
const router = Router();
import {
  getGoal,
  getGoals,
  setGoal,
  updateGoal,
  deleteGoal,
} from "../controllers/goalController.js";

// Routes Controller is in /controllers/goalControllers.js
router.route("/").get(getGoals).post(setGoal);
router.route("/:id").get(getGoal).patch(updateGoal).delete(deleteGoal);

export default router;
