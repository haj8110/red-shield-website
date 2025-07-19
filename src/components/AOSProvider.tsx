'use client';

import { useEffect } from 'react';

export default function AOSProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Dynamically import AOS
    const loadAOS = async () => {
      try {
        const AOS = (await import('aos')).default;
        AOS.init({
          duration: 800,
          easing: 'ease-in-out',
          once: true,
          offset: 100,
          delay: 0,
        });
      } catch (error) {
        console.warn('AOS failed to load:', error);
      }
    };

    loadAOS();
  }, []);

  return <>{children}</>;
} 