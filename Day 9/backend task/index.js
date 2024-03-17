const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const authRoute = require("./routes/auth.js");
const productRoute = require("./routes/products.js");
const orderRoute = require("./routes/orders.js");

const PORT = process.env.PORT || 3000;

dotenv.config();

const app = express();

mongoose
  .connect(process.env.MONGO_DB_URL)
  .then(() => {
    console.log("mongodb connectinon is sucessfull");
  })
  .catch((error) => {
    console.log(error);
  });

app.use(express.json());
app.use("/api/auth", authRoute);
app.use("/api/", productRoute);
app.use("/api/",orderRoute)

app.listen(PORT, () => {
  console.log(`Server running on PORT: ${PORT}`);
});
