const express = require('express');
const path = require('path');
const fs = require('fs');
const nodemailer = require('nodemailer');

const app = express();
const { EMAIL, EMAIL_PASS, EMAIL_TO } = require('../config');

// Middleware
app.use(express.json());
app.use(express.static(path.join(__dirname, '../client/dist')));

// POST
// message
app.post('/message', (req, res) => {
  const {
    name, email, phone, message,
  } = req.body;
  // Email message
  const transponder = nodemailer.createTransport({
    host: 'smtp.mail.com',
    port: 465,
    secure: true, // use SSL
    auth: {
      user: EMAIL,
      pass: EMAIL_PASS,
    },
    tls: {
      rejectUnauthorized: false,
    },
  });

  const mailOptions = {
    from: EMAIL,
    to: EMAIL_TO,
    subject: `Portfolio message from: ${name}`,
    text: `name: ${name};
    email: ${email};
    phone: ${phone};
    message: ${message};
    `,
  };

  transponder.sendMail(mailOptions, (err) => {
    if (err) {
      console.log(err);
      res.sendStatus(400);
    } else {
      console.log('Message sent!');
      res.end();
    }
  });
});

// GET
app.get('/test', (req, res) => {
  fs.readFile(path.join(__dirname, '../client/dist/assets/about-me.txt'), (err, data) => {
    res.send(data.toString());
  });
});

// PUT

// DELETE

const port = 3000;
app.listen(port, () => {
  console.log(`listening on http://localhost:${port}`);
});
