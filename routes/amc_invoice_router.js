const router = require("express").Router();

//Amc controller
const { amcInvoice } = require("../controllers/api/amc_invoice_controller");

//JWT token
const { checkToken } = require("../auth/jwt-strategy");

//Router for AMC by Admin JWT verification
router.get("/:amc_name",checkToken,amcInvoice);

module.exports = router;