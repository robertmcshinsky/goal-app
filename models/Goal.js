const { Schema, model } = require("mongoose");

////

const GoalSchema = new Schema({
  goalName: {
    type: String,
  },
  createdBy: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

////

const Goal = model("Goal", GoalSchema);

module.exports = Goal;
