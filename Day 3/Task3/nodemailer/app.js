const express = require("express");
const sendOTP = require("./controller/sendOTP");

const app = express();

app.get("/", (req, res) => {
  res.send("i am a server");
});

app.get("/sendOTP", sendOTP);

app.listen(3000, () => {
  console.log("port connected");
});
