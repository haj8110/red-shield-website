#!/bin/bash

echo "🚀 AWS Deployment Script for Red Shield Website"
echo "==============================================="

# Check if git is initialized
if [ ! -d ".git" ]; then
    echo "❌ Git repository not initialized"
    echo "Please run: git init"
    exit 1
fi

# Check if remote exists
if ! git remote get-url origin > /dev/null 2>&1; then
    echo "❌ No remote repository configured"
    echo "Please add your GitHub repository as remote:"
    echo "git remote add origin https://github.com/haj8110/red-shield-website.git"
    exit 1
fi

echo "✅ Git repository configured"

# Build the project
echo "🔨 Building project..."
npm run build

if [ $? -eq 0 ]; then
    echo "✅ Build successful"
else
    echo "❌ Build failed"
    exit 1
fi

# Push to GitHub
echo "📤 Pushing to GitHub..."
git add .
git commit -m "Ready for AWS deployment"
git push origin main

if [ $? -eq 0 ]; then
    echo "✅ Code pushed to GitHub"
else
    echo "❌ Failed to push to GitHub"
    exit 1
fi

# Create deployment package for Elastic Beanstalk (optional)
echo "📦 Creating deployment package for Elastic Beanstalk..."
zip -r red-shield-deployment.zip . -x "node_modules/*" ".git/*" ".next/*" "*.zip"

if [ $? -eq 0 ]; then
    echo "✅ Deployment package created: red-shield-deployment.zip"
else
    echo "❌ Failed to create deployment package"
fi

echo ""
echo "🎯 Next Steps:"
echo ""
echo "Option 1: AWS Amplify (Recommended)"
echo "1. Go to: https://console.aws.amazon.com"
echo "2. Search for 'Amplify'"
echo "3. Click 'New app' → 'Host web app'"
echo "4. Connect your GitHub repository"
echo "5. Deploy!"
echo ""
echo "Option 2: AWS Elastic Beanstalk"
echo "1. Go to: https://console.aws.amazon.com"
echo "2. Search for 'Elastic Beanstalk'"
echo "3. Click 'Create application'"
echo "4. Upload red-shield-deployment.zip"
echo "5. Deploy!"
echo ""
echo "📖 See AWS_DEPLOYMENT.md for detailed instructions" 