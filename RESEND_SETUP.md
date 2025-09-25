# 🚀 Resend Email Setup Guide for Calaya Engineering

## Overview
This guide will help you set up Resend for your Calaya Engineering contact form. Resend is a modern email API that provides reliable email delivery with excellent deliverability rates.

## ✅ Benefits of Using Resend
- **High Deliverability**: 99.9% email delivery rate
- **Easy Setup**: Simple API integration
- **Professional Emails**: Beautiful HTML email templates
- **Reliable**: No server-side configuration needed
- **Free Tier**: 3,000 emails/month for free
- **Real-time Analytics**: Track email opens and clicks

## 📋 Step-by-Step Setup

### 1. Create Resend Account
1. Go to [https://resend.com](https://resend.com)
2. Click "Sign Up" and create your account
3. Verify your email address

### 2. Get Your API Key
1. Log into your Resend dashboard
2. Navigate to **API Keys** in the sidebar
3. Click **"Create API Key"**
4. Give it a name like "Calaya Engineering Contact Form"
5. Copy the API key (starts with `re_`)

### 3. Update Configuration File
1. Open `src/config/resendConfig.js`
2. Replace `'re_YOUR_API_KEY_HERE'` with your actual API key:
```javascript
apiKey: 're_your_actual_api_key_here',
```

### 4. Domain Verification (Optional but Recommended)
For better deliverability and to use your own domain:

1. In Resend dashboard, go to **Domains**
2. Click **"Add Domain"**
3. Enter your domain (e.g., `calayaengineering.com`)
4. Add the DNS records provided by Resend to your domain
5. Wait for verification (usually takes a few minutes)

### 5. Update Configuration (Optional)
Once your domain is verified, update `src/config/resendConfig.js`:

```javascript
export const resendConfig = {
  apiKey: 're_your_actual_api_key_here',
  from: 'noreply@calayaengineering.com', // Your verified domain
  fromFallback: 'onboarding@resend.dev', // Fallback if domain not verified
  to: 'izuchukwuonuoha6@gmail.com',
  // ... rest of config
};
```

## 🎨 Email Template Features

The contact form now sends beautifully formatted emails with:

### HTML Email Features:
- **Professional Header**: Calaya Engineering branding with gradient
- **Contact Information Card**: Clean layout with all form details
- **Message Section**: Highlighted message content
- **Reply Instructions**: Clear instructions for responding
- **Footer**: Professional branding and attribution

### Text Email Features:
- **Plain Text Version**: For email clients that don't support HTML
- **Structured Format**: Easy to read contact information
- **Clear Separation**: Well-organized sections

## 🔧 Configuration Options

### Current Configuration:
```javascript
{
  from: 'onboarding@resend.dev', // Works without domain verification
  to: 'izuchukwuonuoha6@gmail.com',
  subject: 'New Contact Form Submission - Calaya Engineering',
  reply_to: formData.email, // Customer's email for easy replies
}
```

### Advanced Options:
- **Custom From Domain**: Use your verified domain
- **Multiple Recipients**: Add more email addresses
- **Custom Templates**: Create branded email templates
- **Webhooks**: Get real-time delivery notifications

## 🚨 Troubleshooting

### Common Issues:

#### 1. API Key Not Working
- ✅ Check that your API key starts with `re_`
- ✅ Ensure the key is correctly set in `.env` file
- ✅ Restart your development server after adding the key

#### 2. Emails Not Delivering
- ✅ Check spam folder
- ✅ Verify the recipient email address
- ✅ Check Resend dashboard for delivery logs

#### 3. Domain Verification Issues
- ✅ Use the fallback email (`onboarding@resend.dev`) until domain is verified
- ✅ Check DNS records are correctly added
- ✅ Wait 24-48 hours for DNS propagation

### Error Messages:
- **401 Unauthorized**: Invalid API key
- **422 Unprocessable Entity**: Invalid email format or missing required fields
- **429 Too Many Requests**: Rate limit exceeded (free tier: 100 emails/hour)

## 📊 Monitoring & Analytics

### Resend Dashboard Features:
- **Email Logs**: See all sent emails
- **Delivery Status**: Track delivery, opens, and clicks
- **Error Reports**: Identify failed deliveries
- **Usage Statistics**: Monitor your email usage

### Free Tier Limits:
- **3,000 emails/month**
- **100 emails/hour**
- **10 domains**
- **Unlimited API calls**

## 🔄 Fallback System

The contact form includes a robust fallback system:

1. **Primary**: Resend API (professional email delivery)
2. **Fallback**: Mailto method (opens user's email client)
3. **Error Handling**: Clear error messages for users

## 🚀 Going Live

### Before Production:
1. ✅ Update your API key in `src/config/resendConfig.js`
2. ✅ Verify your domain for better deliverability
3. ✅ Test the contact form thoroughly
4. ✅ Monitor email delivery in Resend dashboard

### Simple Configuration:
```javascript
// In src/config/resendConfig.js
export const resendConfig = {
  apiKey: 're_your_actual_api_key_here', // Replace with your key
  // ... rest of config
};
```

## 📞 Support

### Resend Support:
- **Documentation**: [https://resend.com/docs](https://resend.com/docs)
- **Community**: [https://github.com/resend/resend](https://github.com/resend/resend)
- **Support**: Available through dashboard

### Calaya Engineering Contact:
- **Email**: izuchukwuonuoha6@gmail.com
- **Website**: Your Calaya Engineering website

## 🎉 You're All Set!

Once you've completed the setup:
1. ✅ Your contact form will send professional emails
2. ✅ Emails will be delivered reliably to your inbox
3. ✅ You can reply directly to customer emails
4. ✅ All emails are tracked in your Resend dashboard

The contact form is now powered by Resend and ready for production use! 🚀
