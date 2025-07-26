<?php
// Configuration file for contact form endpoint
// IMPORTANT: Keep this file secure and outside web root if possible

// Telegram Bot Configuration
define('TELEGRAM_BOT_TOKEN', ' '); // Replace with your actual bot token
define('TELEGRAM_CHAT_ID', '1643051382');     // Replace with your actual chat ID

// Email Configuration
define('FROM_EMAIL', 'noreply@redshieldengineering.com');      // Replace with your domain email
define('TO_EMAIL', 'sales@redshieldengineering.com');  // Replace with your sales email

// reCAPTCHA Configuration
define('RECAPTCHA_SECRET_KEY', 'YOUR_RECAPTCHA_SECRET_KEY'); // Replace with your actual secret key

// Security Settings
define('ALLOWED_ORIGINS', ['https://yourdomain.com', 'https://www.yourdomain.com']); // Add your domain
define('MAX_MESSAGE_LENGTH', 1000); // Maximum message length
define('RATE_LIMIT_MINUTES', 5);    // Rate limiting in minutes
define('MAX_REQUESTS_PER_HOUR', 10); // Maximum requests per hour

// Logging Settings
define('LOG_FILE', 'contact_logs.txt');
define('ERROR_LOG_FILE', 'contact_errors.txt');

// Optional: Database settings if you want to store submissions
define('DB_HOST', 'localhost');
define('DB_NAME', 'your_database');
define('DB_USER', 'your_username');
define('DB_PASS', 'your_password');
?> 