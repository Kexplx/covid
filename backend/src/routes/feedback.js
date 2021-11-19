const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');

router.post('/', async (req, res) => {
  res.end();

  const feedback = req.body;
  sendMail(feedback.text);
});

function sendMail(body) {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_USERNAME,
      pass: process.env.GMAIL_PASSWORD,
    },
  });

  const options = {
    to: 'oscar.rosner@web.de',
    subject: 'Covid App - Feedback',
    text: body,
  };

  transporter.sendMail(options);
}

module.exports = router;
