const nodemailer = require('nodemailer');

const host = '';
const user = '';
const pass = '';
const to = '';
const from = '';

// create reusable transporter object using the default SMTP transport
let transporter = nodemailer.createTransport({
    host: host,
    port: 587,
    auth: {
         user: user, 
         pass: pass
    },
    tls:{
        rejectUnauthorized: false
    }
});

let mailOptions = {
  from: from,
  to: to, 
  subject: 'Test',
  text: 'Test text',
  html: '<b>Test html</b>'
};

transporter.sendMail(mailOptions, (err, info) => {
  err ? console.log('err', err) : console.log('Message %s send: %s', info.messageId, info.response)
});
