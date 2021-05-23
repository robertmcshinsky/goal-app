const router = require("express").Router();

////

const {
  getAllGoal,
  getGoalById,
  createGoal,
  Goal,
  deleteGoal,
} = require("../../controllers/goal-controller");
const { create } = require("../../models/Goal");

////

router.route("/").get(getAllGoal).post(createGoal);

router.route("/:id").get(getGoalById).put(updateGoal).delete(deleteGoal);

////

module.exports = router;
