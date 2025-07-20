# Telegram Bot Setup Guide

## 🚀 Instant Contact Form Notifications

This guide will help you set up instant Telegram notifications for your contact form.

## 📋 Prerequisites

1. **Telegram Account**: You need a Telegram account
2. **Bot Token**: Create a Telegram bot to get the token
3. **Chat ID**: Get your chat ID where notifications will be sent

## 🔧 Step-by-Step Setup

### 1. Create a Telegram Bot

1. **Open Telegram** and search for `@BotFather`
2. **Send message**: `/newbot`
3. **Follow instructions**:
   - Enter bot name (e.g., "Red Shield Contact Bot")
   - Enter bot username (e.g., "red_shield_contact_bot")
4. **Save the bot token** (looks like: `123456789:ABCdefGHIjklMNOpqrsTUVwxyz`)

### 2. Get Your Chat ID

#### Method 1: Using @userinfobot
1. Search for `@userinfobot` in Telegram
2. Send `/start` to the bot
3. It will reply with your chat ID

#### Method 2: Using @RawDataBot
1. Search for `@RawDataBot` in Telegram
2. Send `/start` to the bot
3. It will show your chat ID in the response

### 3. Configure Environment Variables

Create or update your `.env.local` file in the project root:

```env
NEXT_PUBLIC_TELEGRAM_BOT_TOKEN=your_bot_token_here
NEXT_PUBLIC_TELEGRAM_CHAT_ID=your_chat_id_here
```

**Example:**
```env
NEXT_PUBLIC_TELEGRAM_BOT_TOKEN=123456789:ABCdefGHIjklMNOpqrsTUVwxyz
NEXT_PUBLIC_TELEGRAM_CHAT_ID=987654321
```

### 4. Test the Integration

1. **Start your development server**: `npm run dev`
2. **Go to the contact page**: `http://localhost:3000/contact`
3. **Fill out and submit the form**
4. **Check your Telegram** for the instant notification

## 📱 Message Format

The notification will include:
- 🚨 **Alert header**
- 👤 **Contact name**
- 📧 **Email address**
- 📱 **Phone number** (if provided)
- 🏢 **Company name** (if provided)
- 💬 **Message content**
- ⏰ **Submission timestamp**
- 🌐 **Website reference**

## 🔒 Security Notes

- **Never commit** your bot token to version control
- **Use environment variables** for sensitive data
- **Keep your bot token private**
- **Consider rate limiting** for production use

## 🚨 Troubleshooting

### Bot Not Responding
- Check if bot token is correct
- Ensure bot is not blocked
- Verify chat ID is correct

### No Notifications Received
- Check browser console for errors
- Verify environment variables are loaded
- Test bot token manually

### CORS Issues
- Telegram API is accessible from browsers
- No CORS configuration needed

## 📞 Support

If you need help setting up the Telegram bot:
1. Check the [Telegram Bot API documentation](https://core.telegram.org/bots/api)
2. Verify your bot token with BotFather
3. Test the bot manually first

## 🎯 Benefits

✅ **Instant Notifications**: Get notified immediately when someone submits the form
✅ **Real-time Updates**: No need to check email or website
✅ **Mobile Friendly**: Receive notifications on your phone
✅ **Detailed Information**: All form data included in notification
✅ **Professional**: Maintains form functionality even if Telegram fails

## 🔄 Alternative Setup

If you prefer not to use environment variables, you can hardcode the values in the contact page (not recommended for production):

```typescript
const TELEGRAM_BOT_TOKEN = 'your_bot_token_here';
const TELEGRAM_CHAT_ID = 'your_chat_id_here';
```

## 📊 Production Deployment

For production deployment:
1. Set environment variables on your hosting platform
2. Test the integration thoroughly
3. Monitor for any API rate limits
4. Consider adding error handling for failed notifications

---

**Note**: This setup provides instant notifications while maintaining the existing form functionality. The form will work even if Telegram notifications fail. 