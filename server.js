const express = require("express");
const bodyParser = require("body-parser");
const prettier = require("prettier");

const app = express();

app.listen(3000, function() {
  console.log("server is live on port: 3000");
});
