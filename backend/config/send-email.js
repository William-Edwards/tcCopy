const nodemailer = require('nodemailer');

module.exports = sendEmail;

// more these to env possibly
const emailFrom = "no-reply@trackcarbon.com"


async function sendEmail({ to, subject, html, from = emailFrom }) {
    const transporter = nodemailer.createTransport({
        host: "smtp.ethereal.email",
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
            user: 'tyree.crooks34@ethereal.email', // generated ethereal user
            pass: 'T1Q9weYYDa9yV6NKW2' // generated ethereal password
        }
    });

    await transporter.sendMail({ from, to, subject, html });
}