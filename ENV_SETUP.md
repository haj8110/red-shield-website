# Environment Variables Setup

## 🔧 Quick Setup

Your Telegram bot is now configured with your credentials. For better security, create a `.env.local` file in your project root with:

```env
NEXT_PUBLIC_TELEGRAM_BOT_TOKEN=8014120673:AAF5uixEY7rHNtFAMYMxzBpoxN3salvNPHQ
NEXT_PUBLIC_TELEGRAM_CHAT_ID=1643051382
```

## ✅ Current Status

- **Bot Token**: ✅ Configured
- **Chat ID**: ✅ Configured
- **Integration**: ✅ Ready to test

## 🧪 Test the Integration

1. **Start your development server**:
   ```bash
   npm run dev
   ```

2. **Go to contact page**: `http://localhost:3000/contact`

3. **Fill out the form** with test data:
   - Name: Test User
   - Email: test@example.com
   - Phone: +1234567890
   - Company: Test Company
   - Message: This is a test message

4. **Submit the form**

5. **Check your Telegram** - You should receive an instant notification!

## 📱 Expected Telegram Message

You should receive a message like:
```
🚨 NEW CONTACT FORM SUBMISSION

👤 Name: Test User
📧 Email: test@example.com
📱 Phone: +1234567890
🏢 Company: Test Company

💬 Message:
This is a test message

⏰ Submitted: [timestamp]
🌐 Website: Red Shield Engineering
```

## 🔒 Security Note

For production deployment, make sure to:
1. Create the `.env.local` file with your credentials
2. Add `.env.local` to your `.gitignore` file
3. Set environment variables on your hosting platform

## 🚨 Troubleshooting

If you don't receive notifications:
1. Check browser console for errors
2. Verify bot token is correct
3. Ensure chat ID is correct
4. Test bot manually with BotFather

---

**Your Telegram bot is now ready for instant contact form notifications!** 🎉 