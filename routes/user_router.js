const { createUser, getUsersAmc, upgradeService } = require("../controllers/api/user_controller");
const router = require("express").Router();

router.post("/",createUser);

router.get("/",getUsersAmc);

//For upgrade
router.patch("/",upgradeService);

module.exports = router;