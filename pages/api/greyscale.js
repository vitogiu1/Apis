const Jimp = require('jimp');

export default async function handler(req, res) {
    res.setHeader("Cache-Control", "s-maxage=10, stale-while-revalidate");
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