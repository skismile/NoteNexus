const express = require("express");

const app = express.Router();
const UserModel = require("../model/UserModel");
const jwt = require("jsonwebtoken");
app.post("/", async (req, res) => {
  let data = req.body;
  try {
    const user=await UserModel.findOne(data)

    if (user) {
      let d = await jwt.sign({ name: data.name, email: data.email }, "secret");
      res.send({
        status: "authentication success",
        token: d,
      });
    }
  } catch (e) {
    res.send({
      status: "authentication faild",
    });
  }
});

module.exports = app;
