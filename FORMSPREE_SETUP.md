# Formspree Setup for Calaya Engineering Contact Form

## What is Formspree?
Formspree is a reliable form handling service that processes form submissions and sends them via email. It's perfect for static websites and doesn't require server-side code.

## Current Setup
The contact form is already configured to use Formspree with the endpoint:
```
https://formspree.io/f/xqgvpnrw
```

## How It Works
1. User fills out the contact form
2. Form data is sent to Formspree
3. Formspree processes the data and sends an email to `izuchukwuonuoha6@gmail.com`
4. User sees success message
5. If Formspree fails, fallback mailto method opens email client

## Benefits
- ✅ **No Server Required**: Works with static hosting
- ✅ **Reliable**: Professional email delivery service
- ✅ **Free Tier**: 50 submissions per month
- ✅ **Spam Protection**: Built-in spam filtering
- ✅ **Easy Setup**: No configuration needed
- ✅ **Fallback**: Mailto method if service fails

## Formspree Dashboard
To manage submissions and settings:
1. Go to [formspree.io](https://formspree.io)
2. Sign up with your email
3. Check the dashboard for form submissions
4. Configure email settings if needed

## Email Configuration
The form is configured to send emails to:
- **Recipient**: `izuchukwuonuoha6@gmail.com`
- **Reply-To**: Sender's email address
- **Subject**: "Contact Form: [User's Subject]"

## Form Data Sent
Each submission includes:
- Name
- Email
- Phone (optional)
- Subject
- Message
- Reply-to email (for easy responses)

## Monitoring
- Check Formspree dashboard for submission logs
- Monitor email delivery to `izuchukwuonuoha6@gmail.com`
- Review any failed submissions in the dashboard

## Upgrading (if needed)
If you exceed the free tier (50 submissions/month):
- **Starter Plan**: $10/month for 1,000 submissions
- **Pro Plan**: $20/month for 10,000 submissions
- **Business Plan**: $40/month for unlimited submissions

## Troubleshooting
1. **Form not submitting**: Check browser console for errors
2. **No emails received**: Check Formspree dashboard and spam folder
3. **Fallback method**: If Formspree fails, mailto method will open email client

## Security
- Formspree handles spam protection
- No sensitive data stored on your server
- HTTPS encryption for all submissions
- GDPR compliant service

The contact form is now production-ready and will work reliably without any server maintenance!

