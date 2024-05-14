require("dotenv").config();
const fs = require("fs");
const news = require("../helper/NewsHelper");

const getNews = async (req, res) => {
  let id = req.body.obj.id;
  userRegister = fs.readFileSync("./userRegister.json");
  userRegister = JSON.parse(userRegister);
  try {
    let response = await news(userRegister.users[id].preferences);
    console.log(response);
    results.push(response.results)
    return res.status(200).json({ news: response.results });
  } catch (e) {
    return res.status(500).json({ message: e.message });
  }
};

module.exports = {getNews};
