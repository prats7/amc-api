const router = require("express").Router();
const { registerAdmin } = require("../controllers/api/admin_controller");

router.post("/register",registerAdmin);

module.exports = router;


