const nodeMailer = require('nodemailer');
require('dotenv').config();

const sendNotificationEmail = async (user,taskTitle,newComment) => {
    const transpoter = nodeMailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        auth: {
            user: process.env.USER_ID, 
            pass:process.env.PASS 
        },
    })
    
const trigger = async (target) => {await transpoter.sendMail({
    from:`"${process.env.NAME}" <${process.env.EMAIL}>` , 
    to: target,
    subject: "Comment Notification",
    html: `<b>${taskTitle}</b> : comment: ${newComment}`
})
}
user.map(targetUser => trigger(targetUser) );
}

module.exports = {
    sendNotificationEmail
}