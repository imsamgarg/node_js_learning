const express = require("express");
const fs = require("fs");
const controller = require("./products_controller.js");
const router = express.Router();

// router.use("/options", optionRouter);

const products = JSON.parse(fs.readFileSync("products.json", "utf-8"));

router.get("/", controller.getAllProducts);

router.get("/:day/:month/:year", function (req, res) {
  const productId = req.params.id;
  const product = products.find((v) => v.id == productId);
  res.json(product);
});

router.post("/", function (req, res) {
  const product = req.body;
  products.push(product);
  fs.writeFileSync("products.json", JSON.stringify(products));
  res.json({ msg: "product added" });
});

router.delete("/:id", function (req, res) {
  const productid = req.params.id;
  const deletedproduct = products.find((p) => p.id == productid);

  if (deletedproduct == undefined) {
    res.json({ msg: "product doesn't exist" });
  } else {
    const index = products.indexOf(deletedproduct);
    products.splice(index, 1);
    fs.writeFileSync("products.json", JSON.stringify(products));

    res.json({ msg: "server pagal hai" });
  }
});

router.patch("/:id", function (req, res) {
  const productId = req.params.id;
  const editproduct = products.find((p) => p.id == productId);
  const name = req.body.name;

  if (editproduct == undefined) {
    res.json({ msg: "product doesn't exist" });
  } else {
    editproduct.name = name;
    fs.writeFileSync("products.json", JSON.stringify(products));
    res.json({ msg: "server pagal hai" });
  }
});

module.exports = router;
