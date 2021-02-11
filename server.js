const express = require("express");
const app = express();
const routes = require("./routes")
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(routes)


app.listen(process.env.PORT, () => {
  console.log("online");
});
