const mongoose = require("mongoose");

const entryExitSchema = new mongoose.Schema({
  guestName: String,
  exitDate: String,
});

module.exports = mongoose.model("EntryExit", entryExitSchema);
