const router = require("express").Router();
const Product = require("../models/Product");

router.post("/product", async (req, res) => {
  try {
    const newProduct = new Product({
      title: req.body.title,
      desc: req.body.desc,
      categories: req.body.categories,
      price: req.body.price,
    });
    const user = await newProduct.save();
    res.status(200).json(newProduct);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
