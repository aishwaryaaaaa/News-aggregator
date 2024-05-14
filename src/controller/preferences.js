const fs = require("fs");

const getPreference = (req, res) => {
  let id = req.body.obj.id;
  let userRegister = fs.readFileSync("./userRegister.json");
  userRegister = JSON.parse(userRegister);
  if (userRegister.users[id] === -1) {
    return res.status(404).json({ message: "User Not Found" });
  }
  res.status(200).json({ preferences: userRegister.users[id].preferences });
};

const putPreference = (req, res) => {
  let id = req.body.obj.id;
  let userRegister = fs.readFileSync("./userRegister.json");
  userRegister = JSON.parse(userRegister);
  if (userRegister.users[id] === -1) {
    return res.status(404).json({ message: "User Not Found" });
  }
  userRegister.users[id].preferences = req.body.preferences;
  fs.writeFileSync("./userRegister.json", JSON.stringify(userRegister));
  res.status(200).json({ preferences: userRegister.users[id].preferences });
};

module.exports = {getPreference, putPreference}
