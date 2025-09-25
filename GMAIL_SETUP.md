# Gmail Direct Integration Setup

This guide will help you set up direct Gmail integration for the Calaya Engineering contact form.

## Prerequisites
- Gmail account
- Node.js installed on your server
- Basic understanding of command line

## Step 1: Enable 2-Factor Authentication
1. Go to your Google Account settings
2. Navigate to "Security"
3. Enable "2-Step Verification" if not already enabled

## Step 2: Generate App Password
1. In Google Account settings, go to "Security"
2. Under "2-Step Verification", click "App passwords"
3. Select "Mail" and "Other (custom name)"
4. Enter "Calaya Email Server" as the name
5. Copy the 16-character password (e.g., `abcd efgh ijkl mnop`)

## Step 3: Set Up Backend Server

### Install Dependencies
```bash
cd server
npm install
```

### Create Environment File
1. Copy `env.example` to `.env`:
```bash
cp env.example .env
```

2. Edit `.env` file:
```env
GMAIL_USER=your-email@gmail.com
GMAIL_APP_PASSWORD=ynkvs iuav zrzy hfuo
PORT=3001
```

### Start the Server
```bash
npm start
```

## Step 4: Test the Setup
1. Start your React app: `npm run dev`
2. Start the email server: `cd server && npm start`
3. Go to the contact page and submit a test form
4. Check if you receive the email at `izuchukwuonuoha6@gmail.com`

## Step 5: Production Deployment

### Option A: Same Server
If hosting both frontend and backend on the same server:
1. Update the fetch URL in `Contact_Us.jsx`:
```javascript
const response = await fetch('/api/send-email', {
```

### Option B: Separate Servers
If using different servers:
1. Update the fetch URL to your server's domain:
```javascript
const response = await fetch('https://your-server.com/send-email', {
```

## Security Considerations

### Environment Variables
- Never commit `.env` file to version control
- Use different Gmail accounts for development and production
- Rotate app passwords regularly

### CORS Configuration
The server is configured to allow requests from your frontend. For production, update the CORS settings:

```javascript
app.use(cors({
  origin: ['http://localhost:3000', 'https://yourdomain.com'],
  credentials: true
}));
```

### Rate Limiting
Consider adding rate limiting to prevent spam:

```bash
npm install express-rate-limit
```

```javascript
const rateLimit = require('express-rate-limit');

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5 // limit each IP to 5 requests per windowMs
});

app.use('/send-email', limiter);
```

## Troubleshooting

### Common Issues

1. **"Invalid login" error**
   - Ensure 2FA is enabled
   - Use app password, not regular password
   - Check if app password is correct

2. **"Less secure app access" error**
   - This shouldn't happen with app passwords
   - Make sure you're using the app password, not regular password

3. **CORS errors**
   - Check if the server is running
   - Verify the URL in the fetch request
   - Check CORS configuration

4. **"Connection refused" error**
   - Ensure the server is running on port 3001
   - Check if the port is available
   - Verify the server URL

### Testing the Server
Test if the server is working:
```bash
curl http://localhost:3001/health
```

Expected response:
```json
{"status":"OK","message":"Email server is running"}
```

## Email Template Customization

The email template is defined in `server.js`. You can customize:
- HTML styling
- Email content
- Subject line format
- Reply-to behavior

## Monitoring

Consider adding logging for production:
```javascript
const winston = require('winston');

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  transports: [
    new winston.transports.File({ filename: 'error.log', level: 'error' }),
    new winston.transports.File({ filename: 'combined.log' })
  ]
});
```

## Backup Plan

Keep the EmailJS configuration as a backup option in case the Gmail server has issues.
