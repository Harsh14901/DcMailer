/* eslint-disable new-cap */
const express = require('express');
const nodemailer = require('nodemailer');
const router = express.Router();
module.exports = router;

router.post('/', async (req, res) => {
  try {
    let {
      to,
      subject,
      html,
      secret,
    } = req.body;
    if (secret !== process.env.SSO_SECRET) {
      return res.sendStatus(401);
    }
    if (!to) {
      return res.status(400).json({
        err: true,
        msg: 'The recipient was not specified',
      });
    }

    if (!subject) subject = '';
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_CLIENT,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    await transporter.sendMail({
      from: process.env.EMAIL_CLIENT,
      to: to,
      subject: subject,
      html: html,
    });

    return res.sendStatus(200);
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      err: true,
      msg: error,
    });
  }
});


