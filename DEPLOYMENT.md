# Deployment Guide

## Quick Start

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Run Development Server**
   ```bash
   npm run dev
   ```

3. **Open Browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Building for Production

```bash
npm run build
npm start
```

## Deploying to Vercel

### Option 1: Vercel CLI

1. Install Vercel CLI:
   ```bash
   npm i -g vercel
   ```

2. Deploy:
   ```bash
   vercel
   ```

### Option 2: GitHub Integration

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repository
5. Vercel will auto-detect Next.js and configure everything
6. Click "Deploy"

### Option 3: Vercel Dashboard

1. Go to [vercel.com](https://vercel.com)
2. Click "Add New Project"
3. Import your Git repository
4. Configure build settings (auto-detected for Next.js)
5. Deploy

## Environment Variables

If you need to add environment variables (for contact forms, analytics, etc.):

1. Create `.env.local` in the root directory
2. Add your variables:
   ```env
   NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
   NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
   NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
   ```
3. For Vercel: Add these in Project Settings > Environment Variables

## Custom Domain

1. In Vercel dashboard, go to your project
2. Click "Settings" > "Domains"
3. Add your custom domain
4. Follow DNS configuration instructions

## Performance Optimization

- Images: Use Next.js Image component for optimized images
- Fonts: Already optimized with next/font
- Code Splitting: Automatic with Next.js
- Caching: Configured by Vercel automatically

## Troubleshooting

### Build Errors

- Clear `.next` folder: `rm -rf .next`
- Clear node_modules: `rm -rf node_modules && npm install`
- Check Node.js version (requires 18+)

### Runtime Errors

- Check browser console for errors
- Verify all environment variables are set
- Check that all API endpoints are accessible

## Support

For issues or questions, check the [Next.js documentation](https://nextjs.org/docs) or [Vercel documentation](https://vercel.com/docs).

