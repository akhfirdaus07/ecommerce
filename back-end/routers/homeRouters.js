const router = require("express").Router();
const { homeControllers } = require("../controllers");

router.get("/", homeControllers.home);
router.post("/", homeControllers.addToCart);

module.exports = router;
