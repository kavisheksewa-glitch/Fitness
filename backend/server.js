require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { sendEmail } = require("./utils/sendEmail");

const app = express();
app.use(cors());
app.use(express.json());

// ==================== CONTACT FORM ====================
app.post("/api/contact", async (req, res) => {
  try {
    const { fullName, email, phone, inquiryType, message } = req.body;

    if (!fullName || !email || !phone) {
      return res.status(400).json({ success: false, message: "Required fields are missing" });
    }

    const html = `
      <div style="font-family: Arial, sans-serif; max-width: 500px;">
        <h2>New Contact Inquiry — Muscle Empire</h2>
        <p><b>Name:</b> ${fullName}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Phone:</b> ${phone}</p>
        <p><b>Inquiry Type:</b> ${inquiryType}</p>
        <p><b>Message:</b></p>
        <p>${message || "N/A"}</p>
      </div>
    `;

    await sendEmail({
      subject: `New Contact Inquiry: ${inquiryType}`,
      html,
      replyTo: email,
    });

    res.status(200).json({ success: true, message: "Your inquiry has been sent successfully." });
  } catch (error) {
    console.error("Contact form error:", error);
    res.status(500).json({ success: false, message: "Failed to send. Please try again later." });
  }
});

// ==================== VIP ACCESS FORM ====================
app.post("/api/vip-access", async (req, res) => {
  try {
    const { fullName, email, phone, tier, notes } = req.body;

    if (!fullName || !email || !phone) {
      return res.status(400).json({ success: false, message: "Required fields are missing" });
    }

    const html = `
      <div style="font-family: Arial, sans-serif; max-width: 500px;">
        <h2>New VIP Access Application — Muscle Empire</h2>
        <p><b>Name:</b> ${fullName}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Phone:</b> ${phone}</p>
        <p><b>Access Tier:</b> ${tier}</p>
        <p><b>Notes:</b></p>
        <p>${notes || "N/A"}</p>
      </div>
    `;

    await sendEmail({
      subject: `New VIP Application: ${tier}`,
      html,
      replyTo: email,
    });

    res.status(200).json({ success: true, message: "Your application has been received." });
  } catch (error) {
    console.error("VIP access form error:", error);
    res.status(500).json({ success: false, message: "Failed to send. Please try again later." });
  }
});

// ==================== TRAINER BOOKING FORM ====================
app.post("/api/trainer-booking", async (req, res) => {
  try {
    const { trainerId, trainerName, fullName, email, objective } = req.body;

    if (!fullName || !email || !trainerName) {
      return res.status(400).json({ success: false, message: "Required fields are missing" });
    }

    const html = `
      <div style="font-family: Arial, sans-serif; max-width: 500px;">
        <h2>New Private Session Request — Muscle Empire</h2>
        <p><b>Trainer:</b> ${trainerName}</p>
        <p><b>Client Name:</b> ${fullName}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Primary Objective:</b> ${objective}</p>
      </div>
    `;

    await sendEmail({
      subject: `New Booking Request: ${trainerName}`,
      html,
      replyTo: email,
    });

    res.status(200).json({ success: true, message: "Your booking request has been received." });
  } catch (error) {
    console.error("Trainer booking form error:", error);
    res.status(500).json({ success: false, message: "Failed to send. Please try again later." });
  }
});

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));