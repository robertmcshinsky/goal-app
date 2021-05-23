const router = require("express").Router();
const apiRoutes = require("./api");
const hbsRoutes = require("../views/layouts/main");

router.use("/api", apiRoutes);
router.use("/", hbsRoutes);

router.use((req, res) => {
  res.status(404).send("<h1>😝 404 Error!</h1>");
});

module.exports = router;
