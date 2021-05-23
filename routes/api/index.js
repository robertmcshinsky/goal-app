const router = require("express").Router();
const gaolController = require("../../controllers/goal-controller");
const goalRoutes = require("./goal-routes");

////

router.use("/goals", goalRoutes);

////

module.exports = router;
