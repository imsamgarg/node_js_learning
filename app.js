const express = require("express");
const morgan = require("morgan");
const productsRouter = require("./products_router.js");

const app = express();
app.use(morgan("dev"));

app.use("/auth", authRouter);

app.use(checkAuthentication());
app.use("/prod", productsRouter);

app.use(isAdmin());
app.use("/admin", adminRouter);
// app.use("/users", userRouter);

app.listen(6000);
