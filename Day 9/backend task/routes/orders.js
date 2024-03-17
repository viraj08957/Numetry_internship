const router = require("express").Router();
const Order = require("../models/Order");

router.post("/order", async (req, res) => {
  try {
    const newOrder = new Order({
      user: req.body.user,
      product: req.body.product,
      units: req.body.units,
      amount: req.body.amount,
      address: req.body.address,
      status: req.body.status,
    });
    const user = await newOrder.save();
    res.status(200).json(newOrder);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
