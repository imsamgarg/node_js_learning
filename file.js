// const http = require("http");
// const fs = require("fs");

// const server = http.createServer((req, res) => {
//   const fileName = req.url.substring(1);
//   console.log(req.url);

//   fs.readFile(fileName, "utf-8", (err, data) => {
//     console.log(err);
//     res.end(data);
//   });
// });

// server.listen(6000);
//         01234567
const a = "/ap.text";

console.log(a.substring(3));
