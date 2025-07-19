#!/bin/bash

echo "🚀 Red Shield Website Deployment Helper"
echo "========================================"

# Check if git is initialized
if [ ! -d ".git" ]; then
    echo "📁 Initializing git repository..."
    git init
    git add .
    git commit -m "Initial commit"
    echo "✅ Git repository initialized"
else
    echo "✅ Git repository already exists"
fi

# Check if remote exists
if ! git remote get-url origin > /dev/null 2>&1; then
    echo ""
    echo "🔗 Please add your GitHub repository as remote:"
    echo "git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git"
    echo ""
    echo "Then push your code:"
    echo "git push -u origin main"
else
    echo "✅ Remote repository already configured"
    echo "📤 Pushing latest changes..."
    git add .
    git commit -m "Update for deployment"
    git push
fi

echo ""
echo "🎯 Next Steps:"
echo "1. Go to https://vercel.com (recommended) or https://render.com"
echo "2. Sign up/Login with your GitHub account"
echo "3. Import your repository"
echo "4. Deploy!"
echo ""
echo "📖 See DEPLOYMENT.md for detailed instructions" 