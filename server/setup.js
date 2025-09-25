#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log('🚀 Calaya Engineering Email Server Setup\n');

async function askQuestion(question) {
  return new Promise((resolve) => {
    rl.question(question, (answer) => {
      resolve(answer);
    });
  });
}

async function setup() {
  try {
    console.log('This script will help you set up the Gmail integration.\n');
    
    const gmailUser = await askQuestion('Enter your Gmail address: ');
    const appPassword = await askQuestion('Enter your Gmail App Password (16 characters): ');
    const port = await askQuestion('Enter server port (default: 3001): ') || '3001';
    
    // Create .env file
    const envContent = `# Gmail Configuration
GMAIL_USER=${gmailUser}
GMAIL_APP_PASSWORD=${appPassword}

# Server Configuration
PORT=${port}
`;
    
    const envPath = path.join(__dirname, '.env');
    fs.writeFileSync(envPath, envContent);
    
    console.log('\n✅ Configuration saved to .env file');
    console.log('\n📋 Next steps:');
    console.log('1. Start the server: npm start');
    console.log('2. Start your React app: npm run dev (in the main directory)');
    console.log('3. Test the contact form');
    
    console.log('\n🔧 Server will run on: http://localhost:' + port);
    console.log('📧 Emails will be sent to: izuchukwuonuoha6@gmail.com');
    
  } catch (error) {
    console.error('❌ Setup failed:', error.message);
  } finally {
    rl.close();
  }
}

setup();
