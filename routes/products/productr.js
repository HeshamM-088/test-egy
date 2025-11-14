const express = require("express");
const deleteProduct = require("../../controllers/products/deleteProduct");

const router = express.Router();

router.delete("/:id", deleteProduct);

module.exports = router;
