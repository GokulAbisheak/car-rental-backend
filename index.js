const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const nodemailer = require("nodemailer");
const contactUsEmailTemplate = require("./email-templates/contact-us-email-template.js");
const bookingEmailTemplate = require("./email-templates/booking-email-template.js");

dotenv.config();

const PORT = process.env.PORT || 8081;

const app = express();
app.use(express.json());

// const corsOptions = {
//     origin: process.env.CLIENT_URL || "https://www.cieratek.com/", 
//     methods: "GET,POST,PUT,DELETE",
//     allowedHeaders: "Content-Type,Authorization",
//     credentials: true
// };

app.use(cors());

// Nodemailer Transporter Configuration
const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
    tls: {
        rejectUnauthorized: false, 
    },
});

// 📌 Contact Form Email Endpoint
app.post("/send-email", async (req, res) => {
    const { firstName, lastName, email, contactNumber, message } = req.body;

    if (!firstName || !lastName || !email || !contactNumber || !message) {
        return res.status(400).json({ error: "All fields are required" });
    }

    const mailOptions = {
        from: `"Contact Us" <${process.env.EMAIL_USER}>`,
        to: process.env.RECIPIENT_EMAIL,
        subject: `New Contact Form Submission from ${firstName} ${lastName}`,
        html: contactUsEmailTemplate(firstName, lastName, email, contactNumber, message)
    };

    try {
        await transporter.sendMail(mailOptions);
        res.status(200).json({ success: "Email sent successfully!" });
    } catch (error) {
        console.error("Error sending email:", error);
        res.status(500).json({ error: "Error sending email. Please try again later." });
    }
});

// 📌 Booking Email Endpoint
app.post("/send-booking-email", async (req, res) => {
    const {
        firstName, lastName, email, phone, country, street, postcode, city,
        carName, bookingDate, returnDate, duration, subtotal, total
    } = req.body;

    if (!firstName || !lastName || !email || !phone || !country || !street || !postcode || !city || !carName || !bookingDate || !returnDate || !duration || !subtotal || !total) {
        return res.status(400).json({ error: "All fields are required" });
    }

    const mailOptions = {
        from: `"Car Booking" <${process.env.EMAIL_USER}>`,
        to: process.env.RECIPIENT_EMAIL,
        subject: `New Car Booking from ${firstName} ${lastName}`,
        html: bookingEmailTemplate(firstName, lastName, email, phone, country, street, city, postcode, carName, bookingDate, returnDate, duration, subtotal, total)
    };

    try {
        await transporter.sendMail(mailOptions);
        res.status(200).json({ success: "Booking confirmation email sent successfully!" });
    } catch (error) {
        console.error("Error sending email:", error);
        res.status(500).json({ error: "Error sending booking email. Please try again later." });
    }
});

// Server Start
app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`);
});
