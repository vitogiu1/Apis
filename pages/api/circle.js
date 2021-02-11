const Jimp = require('jimp');

export default async function handler(req, res) {
    res.setHeader("Cache-Control", "s-maxage=10, stale-while-revalidate");
    const { image, size } = req.query;
    const Size = Number(size) || 1024
    const Image = await Jimp.read(image);
    if (!Image) {
        return res.status(400).json({
            status: "400: Bad Request",
            message: "You need to provide a valid image."
        })
    };
    Image.resize(Size, Size)
    Image.circle()
    const buffer = await Image.getBufferAsync("image/png");
    return res.end(buffer)
}