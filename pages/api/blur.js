const Jimp = require('jimp');
import Cors from 'cors'
import Key from "../../util/Key";
const cors = Cors({
    methods: ['GET', 'HEAD'],
})

function runMiddleware(req, res, fn) {
    return new Promise((resolve, reject) => {
        fn(req, res, (result) => {
            if (result instanceof Error) {
                return reject(result)
            }

            return resolve(result)
        })
    })
}
export default async function handler(req, res) {
    res.setHeader("Cache-Control", "s-maxage=10, stale-while-revalidate");
    await runMiddleware(req, res, cors)
    let apiKEY = req.query.key;
    if (await Key.validate(apiKEY, "key") == false) {
        return res.status(400).json({
            status: "400: Bad Request",
            message: "Invalid key"
        })
    }
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
