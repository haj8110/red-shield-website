# PHP Endpoint Setup Guide

## 🚀 Contact Form with PHP Backend

This guide will help you set up a secure PHP endpoint for handling contact form submissions with Telegram notifications.

## 📋 Prerequisites

1. **Web Server**: Apache/Nginx with PHP support
2. **PHP**: Version 7.4 or higher
3. **cURL**: PHP cURL extension enabled
4. **Telegram Bot**: Your existing bot token and chat ID

## 🔧 Step-by-Step Setup

### 1. Upload Files

Upload these files to your web server:
- `api/contact.php` - Main endpoint
- `api/config.php` - Configuration file

### 2. Configure the Endpoint

Edit `api/config.php` and update with your actual credentials:

```php
// Telegram Bot Configuration
define('TELEGRAM_BOT_TOKEN', ' ');
define('TELEGRAM_CHAT_ID', '1643051382');

// Email Configuration
define('FROM_EMAIL', 'noreply@yourdomain.com');
define('TO_EMAIL', 'sales@reshieldengineering.com');

// Security Settings
define('ALLOWED_ORIGINS', ['https://yourdomain.com', 'https://www.yourdomain.com']);
```

### 3. Update Frontend Configuration

Add the PHP endpoint URL to your environment variables:

```env
NEXT_PUBLIC_PHP_ENDPOINT=https://yourdomain.com/api/contact.php
```

### 4. Set File Permissions

```bash
chmod 644 api/contact.php
chmod 600 api/config.php  # Restrict access to config file
chmod 755 api/           # Directory permissions
```

### 5. Test the Endpoint

Test with curl:
```bash
curl -X POST https://yourdomain.com/api/contact.php \
  -H "Content-Type: application/json" \
  -d '{"name":"Test User","email":"test@example.com","message":"Test message"}'
```

## 🔒 Security Features

### 1. Input Validation
- ✅ Required field validation
- ✅ Email format validation
- ✅ Input sanitization
- ✅ XSS protection

### 2. CORS Configuration
- ✅ Cross-origin request handling
- ✅ Preflight request support
- ✅ Configurable allowed origins

### 3. Rate Limiting
- ✅ Request frequency limiting
- ✅ IP-based rate limiting
- ✅ Configurable limits

### 4. Error Handling
- ✅ Comprehensive error logging
- ✅ Graceful error responses
- ✅ Security error messages

## 📱 Telegram Integration

The PHP endpoint will send instant notifications to your Telegram with:

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

## 📊 Logging

### 1. Contact Logs
- All submissions are logged to `contact_logs.txt`
- Includes timestamp, form data, and notification status

### 2. Error Logs
- Errors are logged to `contact_errors.txt`
- Includes detailed error information

### 3. Server Logs
- Check your web server error logs
- Monitor for any issues

## 🚨 Security Considerations

### 1. File Security
- Keep `config.php` outside web root if possible
- Use `.htaccess` to protect sensitive files
- Set proper file permissions

### 2. .htaccess Protection
Create `.htaccess` in the api directory:

```apache
# Protect config file
<Files "config.php">
    Order allow,deny
    Deny from all
</Files>

# Protect log files
<Files "*.txt">
    Order allow,deny
    Deny from all
</Files>

# Allow only POST requests to contact.php
<Files "contact.php">
    <LimitExcept POST>
        Deny from all
    </LimitExcept>
</Files>
```

### 3. Environment Variables (Alternative)
Instead of config.php, you can use environment variables:

```php
$telegramBotToken = getenv('TELEGRAM_BOT_TOKEN');
$telegramChatId = getenv('TELEGRAM_CHAT_ID');
```

## 🧪 Testing

### 1. Local Testing
```bash
# Test with curl
curl -X POST http://localhost/api/contact.php \
  -H "Content-Type: application/json" \
  -d '{"name":"Test","email":"test@example.com","message":"Test"}'
```

### 2. Frontend Testing
1. Update your environment variable
2. Submit the contact form
3. Check Telegram for notifications
4. Check log files

## 🔄 Deployment

### 1. Upload Files
- Upload `contact.php` and `config.php` to your server
- Set proper file permissions
- Configure `.htaccess` for security

### 2. Update Configuration
- Edit `config.php` with your actual credentials
- Update allowed origins
- Set email addresses

### 3. Test Endpoint
- Test with curl or Postman
- Verify Telegram notifications
- Check log files

## 🚨 Troubleshooting

### Common Issues:

1. **CORS Errors**:
   - Check allowed origins in config
   - Verify CORS headers in PHP

2. **Telegram Notifications Not Working**:
   - Verify bot token and chat ID
   - Check PHP error logs
   - Test bot manually

3. **Email Notifications Not Working**:
   - Check server mail configuration
   - Verify email addresses
   - Check PHP mail() function

### Debugging Steps:

1. **Check PHP Error Logs**:
   ```bash
   tail -f /var/log/apache2/error.log
   ```

2. **Test PHP Configuration**:
   ```php
   <?php phpinfo(); ?>
   ```

3. **Verify cURL**:
   ```php
   <?php var_dump(function_exists('curl_init')); ?>
   ```

## 🎯 Benefits

✅ **Simple Setup**: Easy to deploy and configure
✅ **Secure**: Input validation and sanitization
✅ **Reliable**: Comprehensive error handling
✅ **Flexible**: Easy to customize and extend
✅ **Instant**: Real-time Telegram notifications
✅ **Logging**: Complete submission tracking

## 📞 Support

For issues with:
- **PHP Configuration**: Check your hosting provider
- **Telegram Bot**: Verify bot token and chat ID
- **Email Setup**: Check server mail configuration

---

**Your contact form is now ready with secure PHP backend and instant Telegram notifications!** 🎉 