const express = require("express");
const router = express.Router();
const nodemailer = require('nodemailer');
const {authMiddleware} = require('./auth.middleware');
require("dotenv").config();


const transport = {
    host: 'smtp.gmail.com', // Don’t forget to replace with the SMTP host of your provider
    port: 587,
    auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD
    }
}

const transporter = nodemailer.createTransport(transport)

transporter.verify((error, success) => {
    if (error) {
        console.log(error);
    } else {
        console.log('Email service ok!');
    }
});

router.post('/', authMiddleware,  async (req, res) => {
    try{
        const { name, email, subject, message } = req.body;
        if (!name || !email || !subject || !message) return res.send(500);
        const mail = {
            from: `${name} <example@nodemailer.com>`,
            replyTo: email,
            to: 'serviceviaadult@gmail.com',  // Change to email address that you want to receive messages on
            subject: subject,
            text:message
        }

        transporter.sendMail(mail, (err, data) => {
            if (err) {
                console.log(err);
                res.status(500);
            } else {
                res.status(200).send(data);
            }
        })

    }catch (e) {
        console.log(e);
    }
})

module.exports = router;
