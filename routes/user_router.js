const { createUser, getUsersAmc, upgradeService } = require("../controllers/api/user_controller");
const router = require("express").Router();


//Router for creating amc record by user.
router.post("/", createUser);

//Router for fetching all the amc record of user.
router.get("/",getUsersAmc);

//Router for service upgrade by user.
router.patch("/",upgradeService);

module.exports = router;