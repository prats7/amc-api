const { createUser } = require("../controllers/api/user_controller");
const router = require("express").Router();

router.post("/",createUser);

module.exports = router;