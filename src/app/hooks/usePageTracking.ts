import { useEffect } from 'react';
import { useLocation } from 'react-router';
import { GA_MEASUREMENT_ID } from '../utils/analytics';

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
    // Track page view on route change (must match gtag config id in index.html)
    if (typeof window.gtag !== 'undefined') {
      window.gtag('config', GA_MEASUREMENT_ID, {
        page_path: location.pathname + location.search,
      });
    }
  }, [location]);
}