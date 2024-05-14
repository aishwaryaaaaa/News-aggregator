const express = require("express");
const router = express.Router();
const loginController = require('../controller/login')
const signUpController = require('../controller/signup')
const preferenceController = require('../controller/preferences')
const verifyLogin = require("../middleware/authVerify");


router.post("/signup", signUpController.signup);

router.post("/login", loginController.login);

router.get("/preferences", verifyLogin, preferenceController.getPreference);

router.put("/preferences", verifyLogin, preferenceController.putPreference);

module.exports = router