const express = require("express");
const router = express.Router();
const newsController = require('../controller/news')
const verifyLogin = require("../middleware/authVerify");


router.get("/", verifyLogin, newsController.getNews);

module.exports = router;
