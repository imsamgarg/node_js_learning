const express = require("express");
const app = express();

app.use(express.json());

const fs = require("fs");

app.use(function (req, res, next) {
  const secretKey = req.headers["secret_key"];

  console.log(secretKey);
  if (secretKey == "Panda") {
    next();
  } else {
    res.json({ msg: "FUCK_OFF" });
  }
});

app.get("/products", function (req, res, next) {
  const products = JSON.parse(fs.readFileSync("products.json", "utf-8"));

  req.products = products;
  console.log("Calling Next");
  next();
});

app.get("/products", function (req, res) {
  const products = req.products;

  console.log("Sending the data to the client");
  res.json(products);
});

app.listen(6000);
