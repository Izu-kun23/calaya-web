// Resend Configuration for Calaya Engineering Contact Form
// Get your API key from: https://resend.com/api-keys

export const resendConfig = {
  // IMPORTANT: Replace 're_YOUR_API_KEY_HERE' with your actual Resend API key
  // Get your API key from: https://resend.com/api-keys
  apiKey: 're_eUpM7Rce_5ABztmWVUKZRmV7KkSUCM8ya',
  
  // Your verified domain (optional, but recommended)
  from: 'noreply@calayaengineering.com', // Replace with your verified domain
  
  // Fallback email (must be verified in Resend)
  fromFallback: 'onboarding@resend.dev', // This works without domain verification
  
  // Recipient email
  to: 'izuchukwuonuoha6@gmail.com',
  
  // Email template settings
  template: {
    subject: 'New Contact Form Submission - Calaya Engineering',
    replyTo: null, // Will be set dynamically to user's email
  }
};

// Instructions for setup:
/*
QUICK SETUP (2 minutes):
1. Go to https://resend.com and create a free account
2. Navigate to API Keys section
3. Create a new API key
4. Copy the API key (starts with 're_')
5. Replace 're_YOUR_API_KEY_HERE' above with your actual API key
6. Save this file and test the contact form

ADVANCED SETUP (Optional):
- Verify your domain for better deliverability
- Replace the 'from' email above with your verified domain email
- Use environment variables for production deployment
*/
