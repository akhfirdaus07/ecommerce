const router = require("express").Router();
const { homeControllers } = require("../controllers");

router.get("/", homeControllers.home);

module.exports = router;
