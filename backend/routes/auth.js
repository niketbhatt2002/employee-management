const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const dotenv = require('dotenv');
dotenv.config();

const router = express.Router();

// User Registration
router.post('/register', async (req, res) => {
  const { email, password } = req.body;

  // Check if the user already exists
  const userExists = await prisma.user.findUnique({ where: { email } });
  if (userExists) return res.status(400).json({ message: 'User already exists' });

  // Hash the password
  const hashedPassword = await bcrypt.hash(password, 10);

  // Create new user
  const user = await prisma.user.create({
    data: {
      email,
      password: hashedPassword,
    },
  });

  // Generate JWT token
  const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });

  res.status(201).json({ token });
});

// User Login
router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  // Find user
  const user = await prisma.user.findUnique({ where: { email } });
  if (!user) return res.status(400).json({ message: 'User not found' });

  // Check if password matches
  const passwordMatches = await bcrypt.compare(password, user.password);
  if (!passwordMatches) return res.status(400).json({ message: 'Incorrect password' });

  // Generate JWT token
  const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });

  res.json({ token });
});

// Password Reset (OTP)
router.post('/reset-password', async (req, res) => {
  const { email } = req.body;

  // Find user
  const user = await prisma.user.findUnique({ where: { email } });
  if (!user) return res.status(400).json({ message: 'User not found' });

  // Generate OTP (a simple 6-digit number)
  const otp = Math.floor(100000 + Math.random() * 900000);

  // Save OTP to the user (you could store it in a database or cache)
  await prisma.user.update({
    where: { email },
    data: { otp },
  });

  // Send OTP via email
  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    secure: false,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: 'Password Reset OTP',
    text: `Your OTP for resetting your password is: ${otp}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).json({ message: 'Error sending email' });
    }
    res.status(200).json({ message: 'OTP sent to email' });
  });
});

module.exports = router;
router.get('/ping', (req, res) => {
    res.send('Auth API is alive!');
  });
  