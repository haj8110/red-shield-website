# 🚀 AWS Deployment Guide - Red Shield Website

## 🎯 AWS Free Tier Options

### Option 1: AWS Amplify (Recommended)
- **Free Tier**: 1,000 build minutes/month
- **Free Tier**: 15 GB storage
- **Free Tier**: 1,000 GB data transfer/month
- **Perfect for**: Next.js applications

### Option 2: AWS Elastic Beanstalk
- **Free Tier**: 750 hours/month for t2.micro instances
- **Free Tier**: 20 GB storage
- **Free Tier**: 20 GB data transfer/month

### Option 3: AWS EC2 (Advanced)
- **Free Tier**: 750 hours/month for t2.micro
- **Requires**: More manual configuration

## 🚀 Option 1: AWS Amplify (Easiest)

### Step 1: Prepare Your Repository
```bash
# Make sure your code is on GitHub
git add .
git commit -m "Ready for AWS deployment"
git push origin main
```

### Step 2: Deploy to AWS Amplify
1. **Go to AWS Console**: [console.aws.amazon.com](https://console.aws.amazon.com)
2. **Search for "Amplify"** in the services
3. **Click "Get started"** or "New app"
4. **Choose "Host web app"**
5. **Connect your GitHub repository**:
   - Select your GitHub account
   - Choose `haj8110/red-shield-website`
   - Click "Next"
6. **Configure build settings**:
   - **App name**: `red-shield-website`
   - **Environment**: `main`
   - **Build settings**: Use default (Amplify auto-detects Next.js)
7. **Click "Save and deploy"**

### Step 3: Build Configuration (if needed)
If Amplify doesn't auto-detect, use this build configuration:

```yaml
version: 1
frontend:
  phases:
    preBuild:
      commands:
        - npm ci
    build:
      commands:
        - npm run build
  artifacts:
    baseDirectory: .next
    files:
      - '**/*'
  cache:
    paths:
      - node_modules/**/*
```

## 🚀 Option 2: AWS Elastic Beanstalk

### Step 1: Create Deployment Package
```bash
# Create deployment package
zip -r red-shield-deployment.zip . -x "node_modules/*" ".git/*" ".next/*" "*.zip"
```

### Step 2: Deploy to Elastic Beanstalk
1. **Go to AWS Console**: [console.aws.amazon.com](https://console.aws.amazon.com)
2. **Search for "Elastic Beanstalk"**
3. **Click "Create application"**
4. **Configure application**:
   - **Application name**: `red-shield-website`
   - **Platform**: `Node.js`
   - **Platform branch**: `Node.js 18`
   - **Platform version**: Latest
5. **Upload your code**:
   - Upload the `red-shield-deployment.zip` file
6. **Configure environment**:
   - **Environment name**: `red-shield-website-env`
   - **Domain**: Leave default
7. **Click "Create application"**

### Step 3: Environment Configuration
Add these environment variables in Elastic Beanstalk:
- `NODE_ENV`: `production`
- `PORT`: `8080`

## 🚀 Option 3: AWS EC2 (Advanced)

### Step 1: Launch EC2 Instance
1. **Go to EC2 Console**
2. **Launch Instance**:
   - **AMI**: Amazon Linux 2
   - **Instance Type**: t2.micro (free tier)
   - **Security Group**: Allow HTTP (80) and HTTPS (443)
3. **Connect to instance** via SSH

### Step 2: Install Dependencies
```bash
# Update system
sudo yum update -y

# Install Node.js
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
source ~/.bashrc
nvm install 18
nvm use 18

# Install PM2 for process management
npm install -g pm2
```

### Step 3: Deploy Application
```bash
# Clone your repository
git clone https://github.com/haj8110/red-shield-website.git
cd red-shield-website

# Install dependencies
npm install

# Build the application
npm run build

# Start with PM2
pm2 start npm --name "red-shield" -- start
pm2 startup
pm2 save
```

## 🔧 AWS Configuration Files

### For Amplify (amplify.yml)
```yaml
version: 1
frontend:
  phases:
    preBuild:
      commands:
        - npm ci
    build:
      commands:
        - npm run build
  artifacts:
    baseDirectory: .next
    files:
      - '**/*'
  cache:
    paths:
      - node_modules/**/*
```

### For Elastic Beanstalk (.ebextensions/nodecommand.config)
```yaml
option_settings:
  aws:elasticbeanstalk:container:nodejs:
    NodeCommand: "npm start"
  aws:elasticbeanstalk:application:environment:
    NODE_ENV: production
    PORT: 8080
```

## 💰 AWS Free Tier Limits

### Amplify Free Tier:
- ✅ 1,000 build minutes/month
- ✅ 15 GB storage
- ✅ 1,000 GB data transfer/month
- ✅ Automatic HTTPS
- ✅ Custom domains

### Elastic Beanstalk Free Tier:
- ✅ 750 hours/month (t2.micro)
- ✅ 20 GB storage
- ✅ 20 GB data transfer/month

## 🎯 Recommended Approach

**For your Red Shield website, I recommend AWS Amplify because:**
- ✅ **Easiest setup** - connects directly to GitHub
- ✅ **Automatic deployments** - updates when you push code
- ✅ **Built-in CDN** - global content delivery
- ✅ **HTTPS included** - automatic SSL certificates
- ✅ **Custom domains** - easy domain setup
- ✅ **Perfect for Next.js** - optimized for React/Next.js apps

## 🚀 Quick Start Commands

```bash
# 1. Push to GitHub
git add .
git commit -m "Ready for AWS deployment"
git push origin main

# 2. Go to AWS Amplify
# 3. Connect your GitHub repository
# 4. Deploy!
```

Your website will be live in 5-10 minutes! 🎉 