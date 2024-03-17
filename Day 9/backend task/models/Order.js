const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema(
  {
    user: { type: String, required: true },
    product: { type: String },
    units: { type: String },
    amount: { type: String, required: true },
    address: { type: String, required: true },
    status: { type: String, default: "pending" },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Order", OrderSchema);
