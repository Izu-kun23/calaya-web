const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Gmail SMTP Configuration
const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: process.env.GMAIL_USER, // Your Gmail address
    pass: process.env.GMAIL_APP_PASSWORD // Gmail App Password (not regular password)
  },
  tls: {
    rejectUnauthorized: false
  }
});

// Email endpoint
app.post('/send-email', async (req, res) => {
  try {
    const { name, email, phone, subject, message } = req.body;

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return res.status(400).json({ 
        success: false, 
        error: 'Missing required fields' 
      });
    }

    // Email content
    const mailOptions = {
      from: process.env.GMAIL_USER, // Sender (your Gmail)
      to: 'izuchukwuonuoha6@gmail.com', // Recipient
      replyTo: email, // Reply to sender's email
      subject: `Contact Form: ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #dc2626;">New Contact Form Submission</h2>
          
          <div style="background-color: #f9fafb; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #374151; margin-top: 0;">Contact Details</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
            <p><strong>Subject:</strong> ${subject}</p>
          </div>
          
          <div style="background-color: #ffffff; padding: 20px; border: 1px solid #e5e7eb; border-radius: 8px;">
            <h3 style="color: #374151; margin-top: 0;">Message</h3>
            <p style="white-space: pre-wrap; line-height: 1.6;">${message}</p>
          </div>
          
          <div style="margin-top: 20px; padding: 15px; background-color: #fef2f2; border-left: 4px solid #dc2626; border-radius: 4px;">
            <p style="margin: 0; color: #991b1b; font-size: 14px;">
              <strong>Note:</strong> This email was sent from the Calaya Engineering website contact form.
            </p>
          </div>
        </div>
      `,
      text: `
        New Contact Form Submission
        
        Name: ${name}
        Email: ${email}
        Phone: ${phone || 'Not provided'}
        Subject: ${subject}
        
        Message:
        ${message}
        
        ---
        This email was sent from the Calaya Engineering website contact form.
      `
    };

    // Send email
    await transporter.sendMail(mailOptions);
    
    res.json({ 
      success: true, 
      message: 'Email sent successfully' 
    });

  } catch (error) {
    console.error('Email sending error:', error);
    res.status(500).json({ 
      success: false, 
      error: 'Failed to send email' 
    });
  }
});

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ status: 'OK', message: 'Email server is running' });
});

// Test Gmail connection on startup
transporter.verify((error, success) => {
  if (error) {
    console.log('Gmail connection error:', error.message);
    console.log('Please check your Gmail credentials in the .env file');
  } else {
    console.log('Gmail connection verified successfully');
  }
});

app.listen(PORT, () => {
  console.log(`Email server running on port ${PORT}`);
  console.log(`Health check: http://localhost:${PORT}/health`);
});
