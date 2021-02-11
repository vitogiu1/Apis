const Jimp = require('jimp');

export default async function handler(req, res) {
    res.setHeader("Cache-Control", "s-maxage=10, stale-while-revalidate");
    const { image, amount } = req.query;
    const blurA = Number(amount) || 20
    const Image = await Jimp.read(image);
    if (!Image) {
        return res.status(400).json({
            status: "400: Bad Request",
            message: "You need to provide a valid image."
        })
    };
    Image.blur(blurA);
    const buffer = await Image.getBufferAsync("image/png");
    return res.end(buffer)
}
// https://cdn.cloudyyuw.repl.co/i/d0ucuz9i3lq.jpg