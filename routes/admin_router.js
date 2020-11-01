const router = require("express").Router();
//Controllers
const { registerAdmin,loginAdmin } = require("../controllers/api/admin_controller");


//Register router
router.post("/register",registerAdmin);
//Login router
 router.post("/login",loginAdmin);

module.exports = router;


