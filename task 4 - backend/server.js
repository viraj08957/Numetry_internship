const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const app = express();
const entryExistRoutes = require("./routes/entryExit");
const guestVisitRoutes = require("./routes/guestVisit");
const deskRutes = require("./routes/desk");

mongoose.connect("mongodb://0.0.0.0:27017/hotelapi", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error"));
db.once("open", function () {
  console.log("connected to mongodb");
});

app.use(bodyParser.json());

app.use("/entryExist", entryExistRoutes);

app.post("/entryExit/entry", (req, res) => {
  // Logic to handle creating entry goes here
  res.send("Entry created successfully");
});

app.use("/guestVisit", guestVisitRoutes);
app.post("/guestVisit/visit", (req, res) => {
  res.send("customer visit recorded sucessfully");
});

app.use("/desk", deskRutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
