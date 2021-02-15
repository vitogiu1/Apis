import fetch from 'node-fetch';
import Key from "../../util/Key";
import Firebase from "../../util/FirebaseApp";
const database = Firebase.firestore();
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
  const Valid = await Key.validate(email, "email");
  if(Valid == true){
    const code = Key.gen(3);
    await database.collection("keys").add({
      key: code,
      Email: email,
      valid: true
    })
    const ResponseEmail = await SendMail(code, email);
    return res.json({
      error: false,
      message: `The information was sent to email <b>${email}</b>`
    })
  } else {
    return res.json({
      error: true,
      message: `Email <b>${email}</b> is already registered with a key or invalidated.`
    })
  }
}

async function SendMail(key, email) {
  const res = await fetch(`${process.env.URL}?code=${process.env.EAUTH}&email=${email}&key=${key}`)
  return await res.json();
}