import { NextResponse } from 'next/server';
import { resendConfig } from '../../../src/config/resendConfig';

const RESEND_API_URL = 'https://api.resend.com/emails';

const resolveFromAddress = () => {
  const normalize = (value) =>
    value?.includes('<') ? value : `Calaya Engineering <${value}>`;

  const envPrimary = process.env.CALAYA_RESEND_FROM?.trim();
  if (envPrimary) {
    return normalize(envPrimary);
  }

  const configPrimary = resendConfig.from?.trim();
  if (configPrimary) {
    return normalize(configPrimary);
  }

  const envFallback = process.env.CALAYA_RESEND_FROM_FALLBACK?.trim();
  if (envFallback) {
    return normalize(envFallback);
  }

  const configFallback = resendConfig.fromFallback?.trim();
  if (configFallback) {
    return normalize(configFallback);
  }

  return 'Calaya Engineering <onboarding@resend.dev>';
};

const buildInternalPayload = (formData) => {
  const { name, email, phone, subject, message } = formData;

  const contactHtml = `
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
  `;

  const contactText = `
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
  `;

  const recipients = Array.isArray(resendConfig.to)
    ? resendConfig.to
    : [resendConfig.to].filter(Boolean);

  return {
    from: resolveFromAddress(),
    to: recipients,
    reply_to: email,
    subject: `New Contact Form Submission - ${subject}`,
    html: contactHtml,
    text: contactText,
  };
};

const buildConfirmationPayload = (formData) => {
  const { name, email } = formData;
  const safeName = name?.trim() || 'there';

  const html = `
    <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #111827; max-width: 600px; margin: 0 auto;">
      <div style="background: linear-gradient(135deg, #dc2626, #b91c1c); padding: 30px; text-align: center; border-radius: 10px 10px 0 0;">
        <h1 style="color: white; margin: 0; font-size: 24px;">Thank You for Contacting Calaya Engineering</h1>
      </div>
      <div style="background: #ffffff; padding: 30px; border: 1px solid #e5e7eb; border-top: none;">
        <p style="margin: 0 0 16px 0;">Hello ${safeName},</p>
        <p style="margin: 0 0 16px 0;">
          Thank you for reaching out to <strong>Calaya Engineering Services</strong>. Your message was received successfully and our team has been notified.
        </p>
        <p style="margin: 0 0 16px 0;">
          A representative will review your inquiry and respond within <strong>24 hours</strong>. If your request is urgent, feel free to call us directly at <a href="tel:+2349028219836" style="color: #dc2626; text-decoration: none;">(+234) 902 821 9836</a>.
        </p>
        <p style="margin: 0 0 16px 0;">
          In the meantime, you can explore our services, projects, and trusted partners on our website to learn more about how we can support your operations.
        </p>
        <p style="margin: 0 0 16px 0;">Thank you again for choosing Calaya Engineering.</p>
        <p style="margin: 0; font-weight: 600;">Warm regards,<br/>Calaya Engineering Team</p>
      </div>
      <div style="background: #f9fafb; padding: 20px; text-align: center; border-radius: 0 0 10px 10px; border: 1px solid #e5e7eb; border-top: none; font-size: 12px; color: #6b7280;">
        <p style="margin: 0;">
          Calaya Engineering Services Limited<br/>
          Plot 194B, 23 Fiddil Avenue, Off Ordinance Road, Trans-Amadi, Port Harcourt, Rivers State, Nigeria
        </p>
      </div>
    </div>
  `;

  const text = `
Hello ${safeName},

Thank you for contacting Calaya Engineering Services. Your message was received successfully and our team has been notified.

We will review your inquiry and respond within 24 hours. For urgent matters, please call us at (+234) 902 821 9836.

Warm regards,
Calaya Engineering Team
  `;

  return {
    from: resolveFromAddress(),
    to: [email],
    subject: 'We received your message – Calaya Engineering',
    html,
    text,
  };
};

export async function POST(request) {
  try {
    const formData = await request.json();
    const requiredFields = ['name', 'email', 'subject', 'message'];

    for (const field of requiredFields) {
      if (!formData[field] || typeof formData[field] !== 'string') {
        return NextResponse.json({ error: `Missing required field: ${field}` }, { status: 400 });
      }
    }

    const apiKey = process.env.CALAYA_RESEND_API_KEY || resendConfig.apiKey;

    if (!apiKey) {
      return NextResponse.json({ error: 'Resend API key is not configured.' }, { status: 500 });
    }

    const internalPayload = buildInternalPayload(formData);
    const confirmationPayload = buildConfirmationPayload(formData);

    const sendEmail = async (payload) =>
      fetch(RESEND_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify(payload),
    });

    const [internalRes, confirmationRes] = await Promise.all([
      sendEmail(internalPayload),
      sendEmail(confirmationPayload),
    ]);

    const internalBody = await internalRes.json().catch(() => ({}));
    const confirmationBody = await confirmationRes.json().catch(() => ({}));

    if (!internalRes.ok) {
      const errorMessage =
        internalBody.error || internalBody.message || 'Internal notification failed.';
      return NextResponse.json({ error: errorMessage }, { status: internalRes.status });
    }

    if (!confirmationRes.ok) {
      const errorMessage =
        confirmationBody.error || confirmationBody.message || 'Confirmation email failed.';
      return NextResponse.json(
        { error: errorMessage, partialSuccess: true },
        { status: confirmationRes.status },
      );
    }

    return NextResponse.json({
      success: true,
      data: {
        internal: internalBody,
        confirmation: confirmationBody,
      },
    });
  } catch (error) {
    console.error('Resend API error:', error);
    return NextResponse.json({ error: 'Unexpected server error.' }, { status: 500 });
  }
}

