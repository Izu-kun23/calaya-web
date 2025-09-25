// EmailJS Configuration
// You'll need to set up EmailJS service and get these values from your EmailJS dashboard
// Visit: https://www.emailjs.com/

export const emailConfig = {
  // EmailJS Service ID - Create a service in EmailJS dashboard
  serviceId: 'service_calaya_contact',
  
  // EmailJS Template ID - Create a template in EmailJS dashboard
  templateId: 'template_contact_form',
  
  // EmailJS Public Key - Get this from EmailJS dashboard
  publicKey: 'YOUR_EMAILJS_PUBLIC_KEY',
  
  // Recipient email address
  recipientEmail: 'izuchukwuonuoha6@gmail.com',
  
  // Company email for reply-to
  companyEmail: 'calayaengineering@yahoo.co.uk'
};

// EmailJS Template Variables:
// The template should include these variables:
// - {{from_name}} - Sender's name
// - {{from_email}} - Sender's email
// - {{phone}} - Sender's phone number
// - {{subject}} - Email subject
// - {{message}} - Email message content
// - {{to_email}} - Recipient email (will be set to izuchukeuonuoha6@gmail.com)
// - {{reply_to}} - Reply-to email (sender's email)
