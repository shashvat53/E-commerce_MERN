const express = require("express");
const router = express.Router();
const userSignUpController = require("../controllers/userSignUp");

router.post("/sign-up", userSignUpController);

module.exports = router;
