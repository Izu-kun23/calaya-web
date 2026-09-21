# EmailJS Setup Instructions

This document provides step-by-step instructions to set up EmailJS for the Calaya Engineering contact form.

## Prerequisites
- EmailJS account (free tier available)
- Gmail account for receiving emails

## Step 1: Create EmailJS Account
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

## Step 2: Create Email Service
1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose "Gmail" as your email service
4. Connect your Gmail account (the one that will send emails)
5. Note down the **Service ID** (e.g., `service_xxxxxxxxx`)

## Step 3: Create Email Template
1. Go to "Email Templates" in your dashboard
2. Click "Create New Template"
3. Use this template content:

```
Subject: New Contact Form Submission - {{subject}}

From: {{from_name}} <{{from_email}}>
Phone: {{phone}}
Subject: {{subject}}

Message:
{{message}}

---
Reply to: {{reply_to}}
```

4. Save the template and note down the **Template ID** (e.g., `template_xxxxxxxxx`)

## Step 4: Get Public Key
1. Go to "Account" in your dashboard
2. Find your **Public Key** (e.g., `xxxxxxxxxxxxxxxx`)

## Step 5: Update Configuration
1. Open `src/config/emailConfig.js`
2. Replace the placeholder values:

```javascript
export const emailConfig = {
  serviceId: 'your_service_id_here',
  templateId: 'your_template_id_here', 
  publicKey: 'your_public_key_here',
  recipientEmail: 'izuchukeuonuoha6@gmail.com',
  companyEmail: 'calayaengineering@yahoo.co.uk'
};
```

## Step 6: Test the Setup
1. Start your development server: `npm run dev`
2. Go to the contact page
3. Fill out and submit the contact form
4. Check if you receive the email at `izuchukeuonuoha6@gmail.com`

## Template Variables Used
- `{{from_name}}` - Sender's full name
- `{{from_email}}` - Sender's email address
- `{{phone}}` - Sender's phone number
- `{{subject}}` - Email subject
- `{{message}}` - Email message content
- `{{to_email}}` - Recipient email (automatically set)
- `{{reply_to}}` - Reply-to email (sender's email)

## Troubleshooting
- Ensure all IDs are correct and without quotes
- Check that the Gmail service is properly connected
- Verify the template includes all required variables
- Check browser console for any error messages

## Security Notes
- The public key is safe to expose in frontend code
- EmailJS handles the email sending securely
- No server-side code is required
