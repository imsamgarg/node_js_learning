const express = require("express");
const app = express();

//* to enable client [Dev] to access the files in a particular directory.
app.use(express.static("./public"));

app.listen(3000);
