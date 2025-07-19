# Deployment Guide for Red Shield Website

This guide will help you deploy your Next.js website to either Vercel or Render.

## Prerequisites

1. Make sure your code is committed to a GitHub repository
2. Have a GitHub account
3. Have an account on Vercel or Render (both offer free tiers)

## Option 1: Deploy to Vercel (Recommended)

### Step 1: Prepare Your Repository
1. Push your code to GitHub if you haven't already:
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

### Step 2: Deploy to Vercel
1. Go to [vercel.com](https://vercel.com) and sign up/login
2. Click "New Project"
3. Import your GitHub repository
4. Vercel will automatically detect it's a Next.js project
5. Click "Deploy"
6. Your site will be live in a few minutes!

### Step 3: Custom Domain (Optional)
1. In your Vercel dashboard, go to your project
2. Click "Settings" → "Domains"
3. Add your custom domain

## Option 2: Deploy to Render

### Step 1: Prepare Your Repository
1. Push your code to GitHub if you haven't already:
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

### Step 2: Deploy to Render
1. Go to [render.com](https://render.com) and sign up/login
2. Click "New" → "Web Service"
3. Connect your GitHub repository
4. Configure the service:
   - **Name**: red-shield-website
   - **Environment**: Node
   - **Build Command**: `npm install && npm run build`
   - **Start Command**: `npm start`
   - **Plan**: Free
5. Click "Create Web Service"
6. Your site will be live in a few minutes!

### Step 3: Custom Domain (Optional)
1. In your Render dashboard, go to your service
2. Click "Settings" → "Custom Domains"
3. Add your custom domain

## Environment Variables

If your app uses environment variables, add them in your deployment platform:

### Vercel
1. Go to your project dashboard
2. Click "Settings" → "Environment Variables"
3. Add your variables

### Render
1. Go to your service dashboard
2. Click "Environment" → "Environment Variables"
3. Add your variables

## Automatic Deployments

Both platforms will automatically redeploy when you push changes to your main branch.

## Troubleshooting

### Common Issues:
1. **Build fails**: Check the build logs in your deployment platform
2. **Images not loading**: Make sure your `next.config.ts` has the correct image domains
3. **Environment variables**: Ensure all required env vars are set in your deployment platform

### Local Testing
Before deploying, test your build locally:
```bash
npm run build
npm start
```

## Performance Tips

1. **Optimize images**: Use Next.js Image component
2. **Enable caching**: Both platforms provide CDN caching
3. **Monitor performance**: Use the analytics provided by your deployment platform

## Support

- **Vercel**: [vercel.com/docs](https://vercel.com/docs)
- **Render**: [render.com/docs](https://render.com/docs) 