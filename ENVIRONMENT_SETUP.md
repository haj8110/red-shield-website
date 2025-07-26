# Environment Setup Guide

## Required Environment Variables

Create a `.env.local` file in your project root with the following variables:

```env
# reCAPTCHA Configuration
# Get your keys from: https://www.google.com/recaptcha/admin
NEXT_PUBLIC_RECAPTCHA_SITE_KEY=your_recaptcha_site_key_here
RECAPTCHA_SECRET_KEY=your_recaptcha_secret_key_here

# PHP Endpoint Configuration
NEXT_PUBLIC_PHP_ENDPOINT=https://your-domain.com/api/contact.php

# Google Analytics (optional)
NEXT_PUBLIC_GA_ID=your_google_analytics_id_here

# Google Search Console (optional)
NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION=your_google_site_verification_code_here
```

## How to Get reCAPTCHA Keys

1. Go to https://www.google.com/recaptcha/admin
2. Click "Create" to add a new site
3. Choose reCAPTCHA v2 "I'm not a robot" Checkbox
4. Add your domain (e.g., redshieldengineering.com)
5. Accept the terms and click "Submit"
6. Copy the Site Key and Secret Key

## Update PHP Configuration

In `api/contact.php`, replace:
```php
$recaptchaSecret = 'YOUR_RECAPTCHA_SECRET_KEY';
```
with your actual secret key from the environment variable.

## Testing

1. Start your development server: `npm run dev`
2. Go to the contact page
3. Fill out the form and complete the reCAPTCHA
4. Submit the form
5. Check that the form submission works correctly

## Production Deployment

Make sure to:
1. Set the environment variables in your hosting platform
2. Update the PHP endpoint URL to your production domain
3. Test the reCAPTCHA functionality in production 