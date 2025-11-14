const express = require("express");
const updateUser = require("../../controllers/users/updateUser");

const router = express.Router();
router.put("/:id", updateUser);

module.exports = router;
