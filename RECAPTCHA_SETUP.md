# reCAPTCHA and SEO Setup Guide

## reCAPTCHA Setup

### 1. Get reCAPTCHA Keys
1. Go to https://www.google.com/recaptcha/admin
2. Create a new site
3. Choose reCAPTCHA v2 "I'm not a robot" Checkbox
4. Add your domain (e.g., redshieldengineering.com)
5. Get your Site Key and Secret Key

### 2. Environment Variables
Create a `.env.local` file in your project root with:

```env
# reCAPTCHA Configuration
NEXT_PUBLIC_RECAPTCHA_SITE_KEY=your_recaptcha_site_key_here
RECAPTCHA_SECRET_KEY=your_recaptcha_secret_key_here

# PHP Endpoint Configuration
NEXT_PUBLIC_PHP_ENDPOINT=https://your-domain.com/api/contact.php

# Google Analytics (optional)
NEXT_PUBLIC_GA_ID=your_google_analytics_id_here

# Google Search Console (optional)
NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION=your_google_site_verification_code_here
```

### 3. Update PHP Configuration
In `api/contact.php`, replace:
```php
$recaptchaSecret = 'YOUR_RECAPTCHA_SECRET_KEY';
```
with your actual secret key.

## SEO Features Implemented

### 1. Dynamic Meta Tags
- Open Graph tags for social media sharing
- Twitter Card tags
- Structured data (JSON-LD)
- Canonical URLs
- Meta descriptions and keywords

### 2. Sitemap
- Dynamic sitemap generation at `/sitemap.xml`
- Automatically updated with current date
- Proper priority and change frequency settings

### 3. Robots.txt
- Dynamic robots.txt generation
- Proper crawling directives
- Sitemap reference

### 4. Page-Specific SEO
Each page now includes:
- Custom titles and descriptions
- Relevant keywords
- Open Graph images
- Structured data

## Testing

### 1. Test reCAPTCHA
1. Fill out the contact form
2. Complete the reCAPTCHA verification
3. Submit the form
4. Check that the form submission works

### 2. Test SEO
1. View page source to verify meta tags
2. Check `/sitemap.xml` is accessible
3. Check `/robots.txt` is accessible
4. Test social media sharing

## Google Search Console Setup

1. Add your site to Google Search Console
2. Submit your sitemap: `https://your-domain.com/sitemap.xml`
3. Verify ownership using the provided meta tag
4. Monitor indexing status

## Performance Optimization

The implementation includes:
- Preconnect to external domains
- Optimized meta tag structure
- Efficient reCAPTCHA loading
- Proper error handling

## Security Features

- reCAPTCHA validation on both client and server
- Input sanitization
- CSRF protection through reCAPTCHA
- Proper error handling without exposing sensitive information 