const mongoose = require("mongoose");

const deskSchema = new mongoose.Schema({
  deskNumber: Number,
  isOccupied: { type: Boolean, default: false },
});

module.exports = mongoose.model("Desk", deskSchema);
