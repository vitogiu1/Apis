const Jimp = require("jimp");

module.exports = async (req, res) => {
  const { image } = req.query;
  const Image = await Jimp.read(image);
  if (!Image) {
    return res.status(400).json({
      status: "400: Bad Request",
      message: "You need to provide a valid image."
    })
  };
  Image.greyscale();
  const buffer = await Image.getBufferAsync("image/png");
  return res.end(buffer)
}
