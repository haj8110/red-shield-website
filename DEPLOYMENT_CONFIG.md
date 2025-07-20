# Deployment Configuration

## 🚀 Contact Form Endpoint

Your contact form is now configured to use the PHP endpoint at:

```
https://mediumblue-ape-346354.hostingersite.com/api/contact.php
```

## 📋 Environment Variables

For local development, create a `.env.local` file:

```env
NEXT_PUBLIC_PHP_ENDPOINT=https://mediumblue-ape-346354.hostingersite.com/api/contact.php
```

## 🔧 PHP Endpoint Configuration

Your PHP endpoint is configured with:

### Telegram Bot:
- **Bot Token**: ` `
- **Chat ID**: `1643051382`

### Email Configuration:
- **From Email**: `noreply@reshieldengineering.com`
- **To Email**: `sales@reshieldengineering.com`
- **Email Notifications**: Disabled (commented out)

## 🧪 Testing

### 1. Test the Endpoint Directly:
```bash
curl -X POST https://mediumblue-ape-346354.hostingersite.com/api/contact.php \
  -H "Content-Type: application/json" \
  -d '{"name":"Test User","email":"test@example.com","message":"Test message"}'
```

### 2. Test from Frontend:
1. Start your development server: `npm run dev`
2. Go to: `http://localhost:3000/contact`
3. Fill out the form and submit
4. Check your Telegram for notifications

## 📱 Expected Telegram Message

When someone submits the form, you'll receive:

```
🚨 NEW CONTACT FORM SUBMISSION

👤 Name: [User Name]
📧 Email: [User Email]
📱 Phone: [User Phone]
🏢 Company: [User Company]

💬 Message:
[User Message]

⏰ Submitted: [Timestamp]
🌐 Website: Red Shield Engineering
```

## 🔒 Security Status

✅ **Endpoint**: Configured and secure
✅ **Telegram**: Working with your bot
✅ **Email**: Disabled (as requested)
✅ **CORS**: Configured for cross-origin requests
✅ **Validation**: Input sanitization and validation
✅ **Logging**: All submissions logged

## 🚨 Troubleshooting

### If Telegram Notifications Don't Work:
1. Check if the bot token is correct
2. Verify the chat ID is correct
3. Test the bot manually with BotFather
4. Check PHP error logs on your server

### If Form Submission Fails:
1. Check browser console for errors
2. Verify the endpoint URL is accessible
3. Test the endpoint directly with curl
4. Check server error logs

## 📊 Monitoring

- **Contact Logs**: Check `contact_logs.txt` on your server
- **Error Logs**: Check `contact_errors.txt` on your server
- **Server Logs**: Check your hosting provider's error logs

---

**Your contact form is now ready and configured with your Hostinger endpoint!** 🎉 