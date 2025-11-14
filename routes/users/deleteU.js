const express = require("express");
const deleteUser = require("../../controllers/users/deleteUser");

const router = express.Router();
router.delete("/:id", deleteUser);

module.exports = router;
