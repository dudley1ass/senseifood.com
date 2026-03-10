/**
 * Google Analytics utility functions for tracking custom events
 */

declare global {
  interface Window {
    gtag?: (
      command: string,
      action: string,
      params?: Record<string, any>
    ) => void;
  }
}

/**
 * Track a custom event
 * @param eventName - Name of the event (e.g., 'tool_click', 'ingredient_selected')
 * @param params - Additional parameters to track
 */
export function trackEvent(eventName: string, params?: Record<string, any>) {
  if (typeof window.gtag !== 'undefined') {
    window.gtag('event', eventName, params);
  }
}

/**
 * Track when a user clicks on a tool card
 */
export function trackToolClick(toolName: string) {
  trackEvent('tool_click', {
    tool_name: toolName,
  });
}

/**
 * Track when a user clicks on an article
 */
export function trackArticleClick(articleTitle: string) {
  trackEvent('article_click', {
    article_title: articleTitle,
  });
}

/**
 * Track ingredient selections in "What Can I Make?" feature
 */
export function trackIngredientSelection(ingredients: string[]) {
  trackEvent('ingredient_selection', {
    ingredient_count: ingredients.length,
    ingredients: ingredients.join(', '),
  });
}

/**
 * Track CTA button clicks
 */
export function trackCTAClick(ctaLocation: string, ctaText: string) {
  trackEvent('cta_click', {
    location: ctaLocation,
    text: ctaText,
  });
}
