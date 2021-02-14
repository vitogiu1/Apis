import nodemailer from 'nodemailer';
var AUTHCODE = process.env.VALIDKEY
import Cors from 'cors'

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
    await runMiddleware(req, res, cors)
    const { email } = req.query;
    const Email = SendEmail(email)
    return res.json({
        message: "ok"
    })

}

function SendEmail(SendTo) {
    var valid;
    const transport = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL,
            pass: process.env.PASS
        }
    });
    const email = {
        from: process.env.EMAIL,
        to: SendTo,
        subject: "[Apis] Authentication code",
        html: `<html lang="en"> <head> <meta charset="UTF-8" /> <meta name="viewport" content="width=device-width, initial-scale=1" /> <body style="@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@200&display=swap'); font-family: 'Source Sans Pro', sans-serif; color: white;"> <div> <div style="width: 300px; border: 1px solid; border-radius: 30px; padding: 50px; margin: 20px; background-image: linear-gradient(rgb(81, 149, 212), rgb(147, 34, 151))"> <img style="height: 45px; width: 45px; vertical-align: middle;"src="https://firebasestorage.googleapis.com/v0/b/cloudyycdn.appspot.com/o/files%2F6a1f2b6433a.png?alt=media&token=cf385261-b79d-4b62-9acb-0187226a2f8d"> <span style="display: inline; vertical-align: middle;"><b>Apis.cloudyyuw</b></span> <h1 class="ui header"> Account verification </h1> <br> <p> Thanks for choosing our APIs </p> <p> Your authentication code is:<br><br> <code style="padding: 6px; color:rgb(0, 0, 0); background-color: #ffffff; font-size: 115%;">${AUTHCODE}</code> </p> </div> </div> </body> </html>`
    }
    transport.sendMail(email, function (error) {
        if (error) {
            return valid = false
        } else {
            return valid = true
        }
    })
}