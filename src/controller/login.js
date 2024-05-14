require("dotenv").config();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Validator = require("../helper/Validator");
const fs = require("fs");

const login = (req, res) => {
  var validation = Validator.validateLogin(req.body);
  let userRegister = fs.readFileSync("./userRegister.json");
  userRegister = JSON.parse(userRegister);
  if (validation.status == true) {
    const userIndex = userRegister.users.findIndex(
      (user) => user.email === req.body.email
    );
    if (userIndex != -1) {
      isPasswordsValid = bcrypt.compareSync(
        req.body.password,
        userRegister.users[userIndex].password
      );
      console.log(isPasswordsValid);
      if (isPasswordsValid) {
        const authToken = jwt.sign(
          { email: req.body.email, id: userIndex },
          process.env.secret_key
        );
        return res
          .status(200)
          .json({ token: authToken, message: "Login successful." });
      } else {
        return res.status(401).json({ message: "incorrect password" });
      }
    } else {
      return res.status(404).json({ message: "User not found" });
    }
  }
  res.status(400).json({ message: validation.message });
};

module.exports = {login}