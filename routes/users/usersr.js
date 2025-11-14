const express = require("express");
const getOneUser = require("../../controllers/users/getOneUser");
const getAllUsers = require("../../controllers/users/getAllUsers");

const router = express.Router();

router.get("/", getAllUsers);
router.get("/:id", getOneUser);

module.exports = router;
