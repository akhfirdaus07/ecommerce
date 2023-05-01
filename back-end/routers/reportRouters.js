const router = require("express").Router();
const { reportControllers } = require("../controllers");

router.get("/", reportControllers.report);

module.exports = router;
