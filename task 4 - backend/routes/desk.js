const express = require("express");
const router = express.Router();
const Desk = require("../models/desk");

// Route for getting available desks
router.get("/desks", async (req, res) => {
  try {
    const availableDesks = await Desk.find({ isOccupied: false });
    res.json(availableDesks);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Logic to allocate desk
// You can implement this logic in your entry route after successful entry creation
const allocateDesk = async () => {
  try {
    const availableDesk = await Desk.findOneAndUpdate(
      { isOccupied: false },
      { isOccupied: true }
    );
    return availableDesk;
  } catch (error) {
    throw new Error("Desk allocation failed");
  }
};

module.exports = router;
