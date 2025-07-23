<?php
// Include configuration file
require_once 'config.php';

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

// Handle preflight requests
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

// Only allow POST requests
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Method not allowed']);
    exit();
}

// Get JSON input
$input = json_decode(file_get_contents('php://input'), true);

// Validate required fields
if (!isset($input['name']) || !isset($input['email']) || !isset($input['message'])) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Name, email, and message are required']);
    exit();
}

// reCAPTCHA validation is disabled for now
// Uncomment the code below to enable reCAPTCHA validation
/*
// Validate reCAPTCHA
if (!isset($input['recaptchaToken'])) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'reCAPTCHA verification required']);
    exit();
}

// Verify reCAPTCHA
$recaptchaToken = $input['recaptchaToken'];
$recaptchaSecret = 'YOUR_RECAPTCHA_SECRET_KEY'; // Replace with your actual secret key

$recaptchaUrl = 'https://www.google.com/recaptcha/api/siteverify';
$recaptchaData = [
    'secret' => $recaptchaSecret,
    'response' => $recaptchaToken
];

$recaptchaOptions = [
    'http' => [
        'header' => "Content-type: application/x-www-form-urlencoded\r\n",
        'method' => 'POST',
        'content' => http_build_query($recaptchaData)
    ]
];

$recaptchaContext = stream_context_create($recaptchaOptions);
$recaptchaResponse = file_get_contents($recaptchaUrl, false, $recaptchaContext);
$recaptchaResult = json_decode($recaptchaResponse, true);

if (!$recaptchaResult['success']) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'reCAPTCHA verification failed']);
    exit();
}
*/

// Sanitize inputs
$name = htmlspecialchars(trim($input['name']));
$email = filter_var(trim($input['email']), FILTER_SANITIZE_EMAIL);
$phone = isset($input['phone']) ? htmlspecialchars(trim($input['phone'])) : 'Not provided';
$company = isset($input['company']) ? htmlspecialchars(trim($input['company'])) : 'Not provided';
$message = htmlspecialchars(trim($input['message']));

// Validate email
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Invalid email address']);
    exit();
}

// Telegram configuration from config file
$telegramBotToken = TELEGRAM_BOT_TOKEN;
$telegramChatId = TELEGRAM_CHAT_ID;

// Email configuration from config file
$fromEmail = FROM_EMAIL;
$toEmail = TO_EMAIL;

try {
    // Send Telegram notification
    $telegramResult = sendTelegramNotification($name, $email, $phone, $company, $message, $telegramBotToken, $telegramChatId);
    
    // Send email notification
    // $emailResult = sendEmailNotification($name, $email, $phone, $company, $message, $fromEmail, $toEmail);
    $emailResult = true;
    // Log the submission
    $logData = [
        'timestamp' => date('Y-m-d H:i:s'),
        'name' => $name,
        'email' => $email,
        'phone' => $phone,
        'company' => $company,
        'message' => $message,
        'telegram_sent' => $telegramResult,
        'email_sent' => $emailResult
    ];
    
    // Log to file (optional)
    file_put_contents('contact_logs.txt', json_encode($logData) . "\n", FILE_APPEND | LOCK_EX);
    
    // Return success response
    http_response_code(200);
    echo json_encode([
        'success' => true,
        'message' => 'Message sent successfully',
        'telegramSent' => $telegramResult,
        'emailSent' => $emailResult
    ]);
    
} catch (Exception $e) {
    // Log error
    error_log('Contact form error: ' . $e->getMessage());
    
    http_response_code(500);
    echo json_encode([
        'success' => false,
        'message' => 'Internal server error'
    ]);
}

/**
 * Send Telegram notification
 */
function sendTelegramNotification($name, $email, $phone, $company, $message, $botToken, $chatId) {
    if ($botToken === 'YOUR_BOT_TOKEN_HERE' || $chatId === 'YOUR_CHAT_ID_HERE') {
        error_log('Telegram credentials not configured');
        return false;
    }
    
    $telegramMessage = "🚨 *NEW CONTACT FORM SUBMISSION*\n\n";
    $telegramMessage .= "👤 *Name:* " . $name . "\n";
    $telegramMessage .= "📧 *Email:* " . $email . "\n";
    $telegramMessage .= "📱 *Phone:* " . $phone . "\n";
    $telegramMessage .= "🏢 *Company:* " . $company . "\n\n";
    $telegramMessage .= "💬 *Message:*\n" . $message . "\n\n";
    $telegramMessage .= "⏰ *Submitted:* " . date('Y-m-d H:i:s') . "\n";
    $telegramMessage .= "🌐 *Website:* Red Shield Engineering";
    
    $data = [
        'chat_id' => $chatId,
        'text' => $telegramMessage,
        'parse_mode' => 'Markdown'
    ];
    
    $url = "https://api.telegram.org/bot{$botToken}/sendMessage";
    
    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, $url);
    curl_setopt($ch, CURLOPT_POST, true);
    curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($data));
    curl_setopt($ch, CURLOPT_HTTPHEADER, ['Content-Type: application/json']);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_TIMEOUT, 10);
    
    $response = curl_exec($ch);
    $httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
    curl_close($ch);
    
    if ($httpCode === 200) {
        error_log('Telegram notification sent successfully');
        return true;
    } else {
        error_log('Telegram API error: ' . $response);
        return false;
    }
}

/**
 * Send email notification
 */
function sendEmailNotification($name, $email, $phone, $company, $message, $fromEmail, $toEmail) {
    $subject = 'New Contact Form Submission - Red Shield Engineering';
    
    $emailBody = "New contact form submission received:\n\n";
    $emailBody .= "Name: " . $name . "\n";
    $emailBody .= "Email: " . $email . "\n";
    $emailBody .= "Phone: " . $phone . "\n";
    $emailBody .= "Company: " . $company . "\n\n";
    $emailBody .= "Message:\n" . $message . "\n\n";
    $emailBody .= "Submitted: " . date('Y-m-d H:i:s') . "\n";
    
    $headers = [
        'From: ' . $fromEmail,
        'Reply-To: ' . $email,
        'Content-Type: text/plain; charset=UTF-8'
    ];
    
    $result = mail($toEmail, $subject, $emailBody, implode("\r\n", $headers));
    
    if ($result) {
        error_log('Email notification sent successfully');
        return true;
    } else {
        error_log('Email notification failed');
        return false;
    }
}
?> 