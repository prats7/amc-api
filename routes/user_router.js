const { createUser, upgradeService } = require("../controllers/api/user_controller");
const router = require("express").Router();

router.post("/",createUser);
//For upgrade
router.patch("/",upgradeService);

module.exports = router;