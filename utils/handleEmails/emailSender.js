const nodeMailer = require('nodemailer');



const sendEmail = async (user) => {
    const transpoter = nodeMailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        auth: {
            user: '19mca008mounika.s@gmail.com',
            pass: 'quqomwxfdwtnnbbk'
        },
    })
    
await transpoter.sendMail({
    from: `"Mounika" <19mca008mounika.s@gmail.com>`,
    to: user,
    subject: "Task Created",
    text: "Your task is created"
})
}

module.exports = {
    sendEmail
}