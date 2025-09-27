const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3001;

// Enable CORS for all routes
app.use(cors({
  origin: ['http://localhost:5173', 'http://localhost:3000', 'http://localhost:4173'],
  credentials: true
}));

app.use(express.json());

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ status: 'OK', message: 'CORS server is running' });
});

// Email endpoint that forwards to Resend API
app.post('/send-email', async (req, res) => {
  try {
    const { name, email, phone, subject, message } = req.body;

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    const RESEND_API_KEY = 're_eUpM7Rce_5ABztmWVUKZRmV7KkSUCM8ya';

    // Send customer confirmation email
    const customerEmailResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: 'Calaya Engineering <calayaengineering@yahoo.co.uk>',
        to: [email],
        subject: `[CUSTOMER CONFIRMATION] Thank you for contacting Calaya Engineering - ${subject}`,
        html: `
          <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto;">
            <div style="background: linear-gradient(135deg, #dc2626, #b91c1c); padding: 30px; text-align: center; border-radius: 10px 10px 0 0;">
              <h1 style="color: white; margin: 0; font-size: 24px;">Calaya Engineering</h1>
              <p style="color: #fecaca; margin: 10px 0 0 0;">Thank You for Your Inquiry</p>
            </div>
            
            <div style="background: white; padding: 30px; border: 1px solid #e5e7eb; border-top: none;">
              <div style="background: #f0f9ff; padding: 20px; border-radius: 8px; margin-bottom: 25px; border-left: 4px solid #0ea5e9;">
                <h2 style="color: #0369a1; margin: 0 0 15px 0; font-size: 18px;">📧 Message Received Successfully</h2>
                <p style="margin: 0; color: #374151; font-size: 16px;">Dear <strong>${name}</strong>,</p>
                <p style="margin: 10px 0 0 0; color: #374151;">Thank you for reaching out to Calaya Engineering. We have received your message and our team will get back to you within 24 hours.</p>
              </div>
              
              <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin-bottom: 25px;">
                <h3 style="color: #1f2937; margin: 0 0 15px 0; font-size: 16px;">Your Message Details:</h3>
                <p style="margin: 8px 0; color: #374151;"><strong>Subject:</strong> ${subject}</p>
                <p style="margin: 8px 0; color: #374151;"><strong>Message:</strong></p>
                <div style="background: #fef2f2; padding: 15px; border-radius: 6px; border-left: 4px solid #dc2626; margin-top: 10px;">
                  <p style="margin: 0; color: #374151; white-space: pre-wrap;">${message}</p>
                </div>
              </div>
              
              <div style="background: #fef3c7; padding: 20px; border-radius: 8px; border-left: 4px solid #f59e0b;">
                <h3 style="color: #92400e; margin: 0 0 15px 0; font-size: 16px;">⏰ What's Next?</h3>
                <ul style="margin: 0; padding-left: 20px; color: #374151;">
                  <li>Our engineering team will review your inquiry</li>
                  <li>We'll contact you within 24 hours</li>
                  <li>Feel free to reply to this email with any additional questions</li>
                </ul>
              </div>
              
              <div style="margin-top: 25px; padding: 20px; background: #f9fafb; border-radius: 8px; text-align: center;">
                <h3 style="color: #1f2937; margin: 0 0 15px 0; font-size: 16px;">Contact Information</h3>
                <p style="margin: 5px 0; color: #6b7280;"><strong>Email:</strong> info@calayaengineering.com</p>
                <p style="margin: 5px 0; color: #6b7280;"><strong>Phone:</strong> +234 (0) 803 123 4567</p>
                <p style="margin: 5px 0; color: #6b7280;"><strong>Address:</strong> Plot 194B, 23 Fiddil Avenue, Off Ordinance Road, Trans-Amadi, Port Harcourt</p>
              </div>
            </div>
            
            <div style="background: #f9fafb; padding: 20px; text-align: center; border-radius: 0 0 10px 10px; border: 1px solid #e5e7eb; border-top: none;">
              <p style="margin: 0; color: #6b7280; font-size: 12px;">
                <strong>Calaya Engineering</strong> - Excellence in Engineering Solutions<br>
                Oil & Gas | Corrosion Management | Pipeline Services | Engineering Solutions
              </p>
            </div>
          </div>
        `,
        text: `
Dear ${name},

Thank you for reaching out to Calaya Engineering. We have received your message and our team will get back to you within 24 hours.

Your Message Details:
Subject: ${subject}
Message: ${message}

What's Next?
- Our engineering team will review your inquiry
- We'll contact you within 24 hours
- Feel free to reply to this email with any additional questions

Contact Information:
Email: info@calayaengineering.com
Phone: +234 (0) 803 123 4567
Address: Plot 194B, 23 Fiddil Avenue, Off Ordinance Road, Trans-Amadi, Port Harcourt

Calaya Engineering - Excellence in Engineering Solutions
Oil & Gas | Corrosion Management | Pipeline Services | Engineering Solutions
        `,
        headers: {
          'X-Priority': '1',
          'X-MSMail-Priority': 'High',
          'Importance': 'high'
        }
      })
    });

    // Send admin notification email
    const adminEmailResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: 'Calaya Engineering <calayaengineering@yahoo.co.uk>',
        to: ['izuchukwuonuoha6@gmail.com'],
        reply_to: email,
        subject: `[ADMIN NOTIFICATION] New Contact Form Submission - Calaya Engineering - ${subject}`,
        html: `
          <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto;">
            <div style="background: linear-gradient(135deg, #dc2626, #b91c1c); padding: 30px; text-align: center; border-radius: 10px 10px 0 0;">
              <h1 style="color: white; margin: 0; font-size: 24px;">Calaya Engineering</h1>
              <p style="color: #fecaca; margin: 10px 0 0 0;">New Contact Form Submission</p>
            </div>
            
            <div style="background: white; padding: 30px; border: 1px solid #e5e7eb; border-top: none;">
              <div style="background: #fef2f2; padding: 20px; border-radius: 8px; margin-bottom: 25px; border-left: 4px solid #dc2626;">
                <h2 style="color: #dc2626; margin: 0 0 15px 0; font-size: 18px;">🚨 New Customer Inquiry</h2>
                <p style="margin: 0; color: #374151; font-size: 16px;">A new customer has submitted a contact form and requires your attention.</p>
              </div>
              
              <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin-bottom: 25px;">
                <h3 style="color: #1f2937; margin: 0 0 15px 0; font-size: 18px;">Customer Information</h3>
                <p style="margin: 8px 0; color: #374151;"><strong>Name:</strong> ${name}</p>
                <p style="margin: 8px 0; color: #374151;"><strong>Email:</strong> <a href="mailto:${email}" style="color: #dc2626; text-decoration: none;">${email}</a></p>
                <p style="margin: 8px 0; color: #374151;"><strong>Phone:</strong> ${phone || 'Not provided'}</p>
                <p style="margin: 8px 0; color: #374151;"><strong>Subject:</strong> ${subject}</p>
              </div>
              
              <div style="background: #fef3c7; padding: 20px; border-radius: 8px; border-left: 4px solid #f59e0b;">
                <h3 style="color: #92400e; margin: 0 0 15px 0; font-size: 16px;">Customer Message</h3>
                <p style="margin: 0; color: #374151; white-space: pre-wrap;">${message}</p>
              </div>
              
              <div style="margin-top: 25px; padding: 15px; background: #f0f9ff; border-radius: 8px; border-left: 4px solid #0ea5e9;">
                <p style="margin: 0; color: #0369a1; font-size: 14px;">
                  <strong>📧 Reply directly to this email to respond to the customer.</strong>
                </p>
              </div>
            </div>
            
            <div style="background: #f9fafb; padding: 20px; text-align: center; border-radius: 0 0 10px 10px; border: 1px solid #e5e7eb; border-top: none;">
              <p style="margin: 0; color: #6b7280; font-size: 12px;">
                This email was sent from the Calaya Engineering website contact form.<br>
                <strong>Calaya Engineering</strong> - Excellence in Engineering Solutions
              </p>
            </div>
          </div>
        `,
        text: `
Calaya Engineering - New Contact Form Submission

Customer Information:
Name: ${name}
Email: ${email}
Phone: ${phone || 'Not provided'}
Subject: ${subject}

Customer Message:
${message}

---
This email was sent from the Calaya Engineering website contact form.
Reply directly to this email to respond to the customer.

Calaya Engineering - Excellence in Engineering Solutions
        `,
        headers: {
          'X-Priority': '1',
          'X-MSMail-Priority': 'High',
          'Importance': 'high'
        }
      })
    });

    // Check if both emails were sent successfully
    if (customerEmailResponse.ok && adminEmailResponse.ok) {
      const customerResult = await customerEmailResponse.json();
      const adminResult = await adminEmailResponse.json();
      
      res.json({ 
        success: true, 
        message: 'Emails sent successfully to both customer and admin',
        customerEmailId: customerResult.id,
        adminEmailId: adminResult.id
      });
    } else {
      const customerError = await customerEmailResponse.json().catch(() => ({}));
      const adminError = await adminEmailResponse.json().catch(() => ({}));
      
      console.error('Email sending errors:', { customerError, adminError });
      res.status(500).json({ 
        error: 'Failed to send one or both emails',
        details: { customerError, adminError }
      });
    }

  } catch (error) {
    console.error('Email sending error:', error);
    res.status(500).json({ 
      error: 'Internal server error',
      details: error.message 
    });
  }
});

app.listen(PORT, () => {
  console.log(`CORS proxy server running on port ${PORT}`);
  console.log(`Health check: http://localhost:${PORT}/health`);
  console.log(`Email endpoint: http://localhost:${PORT}/send-email`);
});
