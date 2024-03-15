const express = require("express");
const app = express();

const dotenv = require("dotenv");

dotenv.config();

app.use(express.json());

const PORT = process.env.PORT || 5000;

app.listen(() => {
  console.log(`server is running port ${PORT}`);
});
