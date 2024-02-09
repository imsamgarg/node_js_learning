const express = require("express");
const app = express();
const morgan = require("morgan");

app.use(express.json());
app.use(morgan("dev"));

// app.use((req, res, next) => {
//   console.log("request url: ", req.url);

//   next();
// });

const fs = require("fs");

const products = JSON.parse(fs.readFileSync("products.json", "utf-8"));

//* For all products
app.get("/products", function (req, res) {
  //* Jehda data body ch ayuga. Mostly post, put, patch ch use krna.
  //* Je json ch value bhejni then you need to define this func
  //* app.use(express.json());
  const body = req.body;

  //url ch send krde like :id, :day-:month-:year
  const params = req.params; // {id:"something"}

  // start with ? can have infinite values ex. ?name=panda&price=100
  const queryParams = req.query; // {name:"panda",price:100}

  const name = queryParams.name;
  // * name,sorting,price,size,color,availability
  res.json(products);
});

//* For product by id
app.get("/products/:day/:month/:year", function (req, res) {
  const productId = req.params.id;

  console.log(req.params);
  //* Find method
  const product = products.find((v) => v.id == productId);
  // const product = products[productId];

  res.json(product);
});

//* Add product
app.post("/products", function (req, res) {
  const product = req.body;

  //* Insert element at end
  products.push(product);

  fs.writeFileSync("products.json", JSON.stringify(products));
  res.json({ msg: "product added" });
});

//* Delete a product by id
app.delete("/products/:id", function (req, res) {
  //*
  const productid = req.params.id;
  const deletedproduct = products.find((p) => p.id == productid);

  if (deletedproduct == undefined) {
    res.json({ msg: "product doesn't exist" });
  } else {
    //* To delete specific element
    //* indexOf will return the index of the element
    const index = products.indexOf(deletedproduct);
    //* 1 is the count
    //* index == index
    products.splice(index, 1);
    fs.writeFileSync("products.json", JSON.stringify(products));

    res.json({ msg: "server pagal hai" });
  }
});

//* Update a product by id. we can also use [PUT]
app.patch("/products/:id", function (req, res) {
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

app.listen(6000);

//* JSON.stringify [object|Array] -> [String]
//* JSON.parse [String] -> [Object|Array]

/**
 * Entity -> product
 *
 * RESTful Api
 *
 * Get /products -> all products
 * Post /products -> add product
 * Get /products/:id -> single product
 * Patch|Put /products/:id -> update single product
 * Delete /products/:id -> Delete single
 *
 * Delete /delete-the-fucking-product/:productId
 * Get /get-all-products
 */

/**
 * Entity -> User
 *
 * Get /users -> all users
 * Delete /users/:id -> delete single user
 * Post /users -> add user.
 */
