'use client';
import { useRef } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

interface ReCaptchaProps {
  onVerify: (token: string | null) => void;
  onExpired: () => void;
}

export default function ReCaptcha({ onVerify, onExpired }: ReCaptchaProps) {
  const recaptchaRef = useRef<ReCAPTCHA>(null);

  const handleVerify = (token: string | null) => {
    onVerify(token);
  };

  const handleExpired = () => {
    onExpired();
  };

  return (
    <div className="flex justify-center">
      <ReCAPTCHA
        ref={recaptchaRef}
        sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || '6Lc7v48rAAAAAJBD3eU_zF2oPR5m0rUT57yKjsIx'}
        onChange={handleVerify}
        onExpired={handleExpired}
        theme="light"
        size="normal"
      />
    </div>
  );
} 