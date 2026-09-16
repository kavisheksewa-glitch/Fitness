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



const sendEmail = async ({ subject, html, replyTo }) => {
  const response = await fetch("https://api.brevo.com/v3/smtp/email", {
    method: "POST",
    headers: {
      "accept": "application/json",
      "api-key": process.env.BREVO_API_KEY,
      "content-type": "application/json",
    },
    body: JSON.stringify({
      sender: {
        email: process.env.BREVO_FROM_EMAIL || "kavisheksewa@gmail.com",
        name: process.env.BREVO_FROM_NAME || "Muscle Empire",
      },
      to: [
        {
          email: process.env.BUSINESS_EMAIL,
        },
      ],
      replyTo: replyTo ? { email: replyTo } : undefined,
      subject: subject,
      htmlContent: html,
    }),
  });

  if (!response.ok) {
    const errorData = await response.text();
    throw new Error(`Brevo API failed: ${errorData}`);
  }

  return await response.json();
};

module.exports = { sendEmail };