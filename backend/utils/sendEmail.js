// const nodemailer = require("nodemailer");

// const transporter = nodemailer.createTransport({
//   host: process.env.SMTP_HOST,
//   port: Number(process.env.SMTP_PORT) || 465,
//   secure: true, // true for port 465 (SSL/TLS)
//   auth: {
//     user: process.env.SMTP_USER,
//     pass: process.env.SMTP_PASS,
//   },
// });

// const sendEmail = async ({ subject, html, replyTo }) => {
//   const mailOptions = {
//     from: `"Muscle Empire" <${process.env.SMTP_USER}>`,
//     to: process.env.BUSINESS_EMAIL,
//     subject,
//     html,
//     replyTo: replyTo || process.env.SMTP_USER,
//   };

//   await transporter.sendMail(mailOptions);
// };

// module.exports = { sendEmail };



//brevo

const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST, // smtp-relay.brevo.com
  port: Number(process.env.SMTP_PORT) || 587,
  secure: false, // Brevo port 587 ke liye false hona zaroori hai
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

const sendEmail = async ({ subject, html, replyTo }) => {
  const mailOptions = {
    from: `"${process.env.BREVO_FROM_NAME || "Muscle Empire"}" <${process.env.BREVO_FROM_EMAIL || process.env.SMTP_USER}>`,
    to: process.env.BUSINESS_EMAIL,
    subject,
    html,
    replyTo: replyTo || process.env.SMTP_USER,
  };

  await transporter.sendMail(mailOptions);
};

module.exports = { sendEmail };