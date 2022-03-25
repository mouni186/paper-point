const nodeMailer = require('nodemailer');



const sendEmail = async (user) => {
    const transpoter = nodeMailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        auth: {
            user: '19mca008mounika.s@gmail.com', // make this email id in .env file
            pass: 'quqomwxfdwtnnbbk' // password also
        },
    })
    
await transpoter.sendMail({
    from: `"Mounika" <19mca008mounika.s@gmail.com>`, // email also
    to: user,
    subject: "Task Created",
    text: "Your task is created"
})
}

module.exports = {
    sendEmail
}