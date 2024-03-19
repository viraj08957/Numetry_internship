const express = require("express");
const router = express.Router();
const EntryExit = require("../models/entryExist");

router.post("/entry", async (req, res) => {
  try {
    const { guestName } = req.body;
    const entry = new EntryExit({ guestName });
    await entry.save();
    res.status(201).json({
      message: "Entry creted sucessfully",
      entry,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
