# Calaya Engineering - Netlify Deployment Guide

## Quick Deploy to Netlify

### Option 1: Deploy via Netlify UI (Recommended)

1. **Build your project locally:**
   ```bash
   npm run build
   ```

2. **Go to [Netlify](https://netlify.com) and sign up/login**

3. **Drag and drop your `dist` folder:**
   - After running `npm run build`, you'll have a `dist` folder
   - Simply drag this folder to the Netlify dashboard
   - Your site will be live in seconds!

### Option 2: Connect GitHub Repository

1. **Push your code to GitHub:**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Connect to Netlify:**
   - Go to Netlify dashboard
   - Click "New site from Git"
   - Connect your GitHub account
   - Select your repository
   - Netlify will auto-detect Vite settings

3. **Deploy settings:**
   - Build command: `npm run build`
   - Publish directory: `dist`
   - Node version: `18`

### Option 3: Netlify CLI

1. **Install Netlify CLI:**
   ```bash
   npm install -g netlify-cli
   ```

2. **Login to Netlify:**
   ```bash
   netlify login
   ```

3. **Deploy:**
   ```bash
   npm run build
   netlify deploy --prod --dir=dist
   ```

## Configuration Files

- `netlify.toml` - Netlify configuration (already created)
- `package.json` - Build scripts (already configured)

## Build Commands

- **Development:** `npm run dev`
- **Build:** `npm run build`
- **Preview:** `npm run preview`

## Features Included

✅ Responsive design
✅ Smooth animations
✅ Client logo carousel
✅ Contact information
✅ Social media links
✅ SEO-friendly structure

## Custom Domain

After deployment, you can:
1. Go to Site settings > Domain management
2. Add your custom domain
3. Configure DNS settings

Your Calaya Engineering website is ready for deployment! 🚀
