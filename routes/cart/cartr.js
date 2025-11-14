const express = require("express");
const addToCart = require("../../controllers/cart/addToCart");
const viewCart = require("../../controllers/cart/viewCart");
const removeFromCart = require("../../controllers/cart/removeFromCart");

const router = express.Router();

router.post("/add-to-cart", addToCart);
router.get("/view-cart", viewCart);
router.delete("/remove-from-cart/:id", removeFromCart);

module.exports = router;

