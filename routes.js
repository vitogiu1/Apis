const { Router } = require("express");
const routes = Router();
// Controllers
const Blur = require("./controller/image/blur.js");
const Normalize = require("./controller/image/normalize");
const Greyscale = require("./controller/image/greyscale")
const Sepia = require("./controller/image/sepia");
const Pixelate = require("./controller/image/pixel")
const Posterize = require("./controller/image/posterize")

routes.get("/", (req, res) => {
  res.send("ok")
})

routes.get("/v0/blur", Blur);
routes.get("/v0/normalize", Normalize);
routes.get("/v0/grey", Greyscale);
routes.get("/v0/sepia", Sepia);
routes.get("/v0/pixelate", Pixelate)
routes.get("/v0/posterize", Posterize)

module.exports = routes;
