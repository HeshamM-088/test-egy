const express = require("express");
const emptyCart = require("../../controllers/cart/emptyCart");

const router = express.Router();
router.put("/empty/:userId", emptyCart);

module.exports = router;
