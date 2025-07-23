# How to Enable reCAPTCHA Later

## Quick Enable Steps

### 1. Frontend (Contact Form)
In `src/app/contact/page.tsx`:

1. **Uncomment the reCAPTCHA validation check** (around line 30):
```javascript
// Uncomment these lines:
if (!recaptchaToken) {
  setRecaptchaError(true);
  alert('Please complete the reCAPTCHA verification.');
  return;
}
```

2. **Uncomment the reCAPTCHA component** (around line 180):
```javascript
// Uncomment this entire div:
<div className="space-y-2">
  <ReCaptcha 
    onVerify={handleRecaptchaVerify}
    onExpired={handleRecaptchaExpired}
  />
  {recaptchaError && (
    <p className="text-red-500 text-sm text-center">
      Please complete the reCAPTCHA verification.
    </p>
  )}
</div>
```

### 2. Backend (PHP)
In `api/contact.php`:

1. **Uncomment the reCAPTCHA validation code** (around line 30):
```php
// Uncomment the entire reCAPTCHA validation block
```

2. **Update the secret key**:
```php
$recaptchaSecret = 'YOUR_ACTUAL_SECRET_KEY'; // Replace with your real secret key
```

### 3. Environment Variables
Create `.env.local` file with:
```env
NEXT_PUBLIC_RECAPTCHA_SITE_KEY=your_site_key_here
RECAPTCHA_SECRET_KEY=your_secret_key_here
```

### 4. Get reCAPTCHA Keys
1. Go to https://www.google.com/recaptcha/admin
2. Create a new site
3. Choose reCAPTCHA v2 "I'm not a robot" Checkbox
4. Add your domain
5. Copy the Site Key and Secret Key

## Testing After Enable
1. Fill out the contact form
2. Complete the reCAPTCHA verification
3. Submit the form
4. Verify it works correctly

## Current Status
✅ reCAPTCHA is **DISABLED** - form works without verification
🔄 Ready to enable when needed
📝 All SEO features remain active 