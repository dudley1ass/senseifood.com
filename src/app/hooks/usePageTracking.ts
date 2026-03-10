import { useEffect } from 'react';
import { useLocation } from 'react-router';

declare global {
  interface Window {
    gtag?: (
      command: string,
      targetId: string,
      config?: Record<string, any>
    ) => void;
  }
}

export function usePageTracking() {
  const location = useLocation();

  useEffect(() => {
    // Track page view on route change
    if (typeof window.gtag !== 'undefined') {
      window.gtag('config', 'G-J5FGGL6BMX', {
        page_path: location.pathname + location.search,
      });
    }
  }, [location]);
}