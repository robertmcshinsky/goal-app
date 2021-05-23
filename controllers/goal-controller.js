const Goal = require("../models");

////

const goalController = {
  // GET ALL PIZZA
  getAllGoal: function (req, res) {
    Goal.find({})
      .then((dbPizzaData) => res.json(dbPizzaData))
      .catch((e) => {
        console.log(e);
        res.status(400).json(e);
      });
  },
  // GET A SINGLE PIZZA BY IT'S ID
  getGoalById: function (req, res) {
    Goal.findOne({ _id: params.id })
      .then((dbPizzaData) => {
        if (!dbPizzaData) {
          res.status(404).json({ message: "No Pizza found with this Id" });
          return;
        }
        res.json(dbPizzaData);
      })
      .catch((e) => {
        console.log(e);
        res.status(400).json(e);
      });
  },
  // CREATE A NEW PIZZA
  createGoal: function ({ body }, res) {
    Goal.create(body)
      .then((dbPizzaData) => res.json(dbPizzaData))
      .catch((e) => res.status(400).json(e));
  },

  // UPDATE A PIZZA
  updateGoal: function ({ params, body }, res) {
    Goal.findOneAndUpdate({ _id: params.id }, body, { new: true })
      .then((dbPizzaData) => {
        if (!dbPizzaData) {
          res.status(404).json({ message: "No pizza found with this id!" });
        }
        res.json(dbPizzaData);
      })
      .catch((e) => res.status(400).json(e));
  },
  // DELETE A PIZZA
  deleteGoal: function ({ params }, res) {
    Goal.findOneAndDelete({ _id: params.id })
      .then((dbPizzaData) => {
        if (!dbPizzaData) {
          res.status(404).json({ message: "No pizza found with this id!" });
        }
        res.json(dbPizzaData);
      })
      .catch((e) => res.status(400).json(e));
  },
};

////

module.exports = goalController;
