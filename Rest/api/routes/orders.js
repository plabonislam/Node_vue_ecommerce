const express = require("express");
const router = express.Router();
const check_auth = require("../middleware/check-auth");
const OrderController = require("../controller/order");

router.get("/", OrderController.all_orders);

router.post("/", OrderController.create_order);



module.exports = router;
