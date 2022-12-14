const nodemailer =require('nodemailer')
const dotenv =require('dotenv/config')

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true, 
    auth: {
      user: 'jorgetarifa33@gmail.com', 
      pass: 'tddfunoyhpzuzxcu', 
    },
  });

  transporter.verify().then((t) => t => console.log('Ready for emailer'))

   
module.exports ={
  transporter
}