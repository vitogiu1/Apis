require("dotenv").config({ path: __dirname + '/.env' });
import fetch from 'node-fetch';
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
  const Email = await SendMail(AUTHCODE, email);
  return res.json({
    message: "ok"
  })
}

async function SendMail(key, email) {
  const res = await fetch(`${process.env.URL}?code=${process.env.EAUTH}&email=${email}&key=${key}`)
  return await res.json();
}
// Here I use an external api of mine, because vercel blocks some things that nodemailer needs.
