const nodeMailer = require('nodemailer');
require('dotenv').config();

const sendEmail = async (user) => {

    const transpoter = nodeMailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        auth: {
            user: process.env.USER_ID,
            pass: process.env.PASS
        },
    })

    await transpoter.sendMail({

        from: `"${process.env.NAME}" <${process.env.EMAIL}>`,
        to: user,
        subject: "Task Created",
        text: "Your task is created"
    })
}

module.exports = {
    sendEmail
}