const router = require("express").Router();
const { reportControllers } = require("../controllers");

router.get("/gross-income", reportControllers.income);

module.exports = router;
