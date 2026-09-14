const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT) || 465,
  secure: true, // true for port 465 (SSL/TLS)
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

const sendEmail = async ({ subject, html, replyTo }) => {
  const mailOptions = {
    from: `"Muscle Empire" <${process.env.SMTP_USER}>`,
    to: process.env.BUSINESS_EMAIL,
    subject,
    html,
    replyTo: replyTo || process.env.SMTP_USER,
  };

  await transporter.sendMail(mailOptions);
};

module.exports = { sendEmail };