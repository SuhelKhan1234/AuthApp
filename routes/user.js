const express = require("express");

const router = express.Router();

const {login, signup} = require("../Controllers/Auth");
// router.post("/", login);
router.post("/", signup);

module.exports = router;

