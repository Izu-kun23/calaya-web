// Resend Configuration for Calaya Engineering Contact Form
// Get your API key from: https://resend.com/api-keys

/**
 * Resend configuration for the Calaya Engineering contact form.
 *
 * All secrets MUST be provided through environment variables.
 * See `.env.example` for the expected variable names.
 */

const commaSeparated = (value) =>
  value
    ?.split(',')
    .map((item) => item.trim())
    .filter(Boolean) ?? [];

export const resendConfig = {
  /**
   * Resend API key is intentionally omitted here.
   * Use `process.env.CALAYA_RESEND_API_KEY` at runtime.
   */
  apiKey: process.env.CALAYA_RESEND_API_KEY,

  /**
   * Preferred "from" address for outgoing messages.
   * Should match a verified sender in Resend.
   */
  from: process.env.CALAYA_RESEND_FROM ?? 'noreply@calayaengineering.com',

  /**
   * Optional fallback "from" address if the primary sender is not configured.
   */
  fromFallback:
    process.env.CALAYA_RESEND_FROM_FALLBACK ?? 'onboarding@resend.dev',

  /**
   * Recipients for the internal notification email.
   * Provide as a comma-separated list in `CALAYA_RESEND_TO`.
   */
  to: (() => {
    const recipients = commaSeparated(process.env.CALAYA_RESEND_TO);
    return recipients.length > 0
      ? recipients
      : ['info@calayaengineering.com', 'calayaengineering@yahoo.co.uk'];
  })(),

  template: {
    subject: 'New Contact Form Submission - Calaya Engineering',
    replyTo: null, // Will be set dynamically to the visitor's email
  },
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
