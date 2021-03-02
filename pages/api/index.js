
export default function handler(req, res) {
    res.setHeader("Cache-Control", "s-maxage=10, stale-while-revalidate");
    res.json({
        status: "200 Ok",
        endpoints: [
            "GET /api/blur?image=image&amount=number",
            "GET /api/greyscale?image=image",
            "GET /api/normalize?image=image",
            "GET /api/pixelate?image=image&amount=number",
            "GET /api/posterize?image=image&amount=number",
            "GET /api/sepia?image=image",
            "GET /api/circle?image=image&size=number"
        ]
    })
}
