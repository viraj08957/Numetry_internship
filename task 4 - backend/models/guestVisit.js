const mongoose = require("mongoose");

const guestVisitSchema = new mongoose.Schema({
  guestName: String,
  mealType: String,
  visitTime: { type: Date, default: Date.now },
});

module.exports = mongoose.model("GuestVisit", guestVisitSchema);
