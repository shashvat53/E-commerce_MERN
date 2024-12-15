const express = require("express");
const router = express.Router();
const userSignUpController = require("../controllers/userSignUp");
const SignInController = require("../controllers/userSignIn");

router.post("/sign-up", userSignUpController);
router.post("/login", SignInController);

module.exports = router;
