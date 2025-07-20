# Getting Telegram Group Chat ID

## 🚀 How to Get Group Chat ID

Since you've added the bot to a group, you need to get the group's chat ID instead of your personal chat ID.

## 📋 Step-by-Step Instructions

### Method 1: Using @userinfobot (Recommended)

1. **Add @userinfobot to your group**
2. **Send any message in the group** (like "Hello")
3. **The bot will reply with group information** including the chat ID
4. **Look for the "Chat ID"** - it will be a negative number like `-123456789`

### Method 2: Using @RawDataBot

1. **Add @RawDataBot to your group**
2. **Send any message in the group**
3. **The bot will show you the raw data** including the chat ID
4. **Look for "chat":{"id":-123456789}**

### Method 3: Using Your Bot Directly

1. **Send a message to your bot** from the group
2. **Check the bot's webhook or logs** to see the chat ID
3. **The group chat ID will be negative** (like -123456789)

## 🔧 Update Your Configuration

Once you have the group chat ID, update your `api/config.php`:

```php
// Telegram Bot Configuration
define('TELEGRAM_BOT_TOKEN', ' ');
define('TELEGRAM_CHAT_ID', '-123456789'); // Replace with your group chat ID
```

## 📱 Example Group Chat IDs

- **Personal Chat**: `1643051382` (positive number)
- **Group Chat**: `-123456789` (negative number)
- **Channel**: `-987654321` (negative number)

## 🧪 Test the Group Notification

After updating the chat ID, test with:

```bash
curl -X POST https://mediumblue-ape-346354.hostingersite.com/api/contact.php \
  -H "Content-Type: application/json" \
  -d '{"name":"Test User","email":"test@example.com","message":"Test message"}'
```

## 🚨 Important Notes

1. **Group Chat IDs are negative numbers**
2. **Make sure the bot has permission to send messages in the group**
3. **The bot must be an admin or have send message permissions**
4. **Test with a simple message first**

## 🔒 Bot Permissions

Make sure your bot has these permissions in the group:
- ✅ Send Messages
- ✅ Send Media Messages (optional)
- ✅ Send Polls (optional)

## 📊 Troubleshooting

### If messages don't appear in the group:
1. Check if the bot is still in the group
2. Verify the bot has send message permissions
3. Check if the chat ID is correct (should be negative)
4. Test the bot manually by sending it a message

### If you get errors:
1. Check PHP error logs
2. Verify the bot token is correct
3. Make sure the group chat ID is correct

---

**Once you have the group chat ID, update the config and test!** 🎉 