require('dotenv').config();
console.log('Dotenv Loaded');
console.log('Email User:', process.env.EMAIL_USER);
console.log('Email Pass:', process.env.EMAIL_PASS);
const express = require("express");
const router = express.Router();
const cors = require("cors");
const nodemailer = require("nodemailer");

// Initialize Express app
const app = express();
app.use(express.json());

// Konfigurasi CORS
const corsOptions = {
  origin: 'http://localhost:3000', // URL frontend Anda
  optionsSuccessStatus: 200 
};
app.use(cors(corsOptions));

// Konfigurasi Nodemailer dengan kredensial dari .env
const contactEmail = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,  // Mengambil user dari .env
    pass: process.env.EMAIL_PASS,  // Mengambil pass dari .env
  },
});

// Verifikasi konfigurasi Nodemailer
contactEmail.verify((error) => {
  if (error) {
    console.log("Error setting up email transport:", error);
  } else {
    console.log("Ready to Send");
  }
});

// Definisikan rute untuk form kontak
router.post("/contact", (req, res) => {
  const { firstName, lastName, email, message, phone } = req.body;
  const name = `${firstName} ${lastName}`;
  const mail = {
    from: name,
    to: "********@gmail.com", // Ganti dengan email tujuan
    subject: "Contact Form Submission - Portfolio",
    html: `<p>Name: ${name}</p>
           <p>Email: ${email}</p>
           <p>Phone: ${phone}</p>
           <p>Message: ${message}</p>`,
  };
  contactEmail.sendMail(mail, (error) => {
    if (error) {
      console.log("Error sending email:", error);
      res.status(500).json({ error: 'Failed to send message' });
    } else {
      res.status(200).json({ code: 200, status: "Message Sent" });
    }
  });
});

// Mulai server pada port 5000
app.use("/", router);
app.listen(5000, () => console.log("Server Running on port 5000"));
