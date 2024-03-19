const express = require("express");
const router = express.Router();
const GuestVisit = require("../models/guestVisit");

router.post("/visit", async (req, res) => {
  try {
    const { guestName, mealType } = req.body;
    const visit = new GuestVisit({ guestName, mealType });
    await visit.save();
    res
      .status(201)
      .json({ message: "Guest visit recorded successfully", visit });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

const trackGuestVisit = async (mealType) => {
  try {
    // Find the meal type and increment its count
    await GuestVisit.updateOne(
      { mealType },
      { $inc: { visitCount: 1 } },
      { upsert: true }
    );
  } catch (error) {
    throw new Error("Failed to track guest visit");
  }
};

module.exports = router;
