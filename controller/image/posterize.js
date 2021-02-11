const Jimp = require("jimp");

module.exports = async(req, res) => {
  const { image, amount } = req.query;
  const Size = Number(amount) || 20
  const Image = await Jimp.read(image)
  if (!Image) {
    return res.status(400).json({
      status: "400: Bad Request",
      message: "You need to provide a valid image."
    })
  };
  Image.posterize(Size)
  const buffer = await Image.getBufferAsync("image/png");
  return res.end(buffer)
}
