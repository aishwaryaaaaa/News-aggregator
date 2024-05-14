require("dotenv").config();
const bcrypt = require("bcrypt");
const Validator = require("../helper/Validator");
const fs = require("fs");

const signup = (req, res) => {
  var validation = Validator.validateRegister(req.body);
  let userRegister = fs.readFileSync("./userRegister.json");
  userRegister = JSON.parse(userRegister);
  if (validation.status == true) {
    req.body.id = userRegister.users.length + 1;
    req.body.password = bcrypt.hashSync(req.body.password, 10);
    userRegister.users.push(req.body);
    fs.writeFileSync("./userRegister.json", JSON.stringify(userRegister));
    return res.status(200).json({ message: "User registered successfully." });
  }
  res.status(400).json({ message: validation.message });
};

module.exports = {signup}
