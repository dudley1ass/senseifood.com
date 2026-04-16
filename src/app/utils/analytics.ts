/**
 * Google Analytics utility functions for tracking custom events
 */

/** Must match `gtag('config', …)` in index.html */
export const GA_MEASUREMENT_ID = 'G-P8D0LPB264';

const FIX_RECIPE_ENTRY_KEY = 'sf_fix_recipe_entry_point';

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
 * Track CTA button clicks.
 * Uses `cta_*` parameter names (not `page_path` / `location`) so GA4 custom dimensions reliably
 * attach—reserved-style names often show as (not set) in explorations.
 * Always sends `cta_page_path` (SPA path when the click fires). Pass `linkTarget` for destination.
 */
export function trackCTAClick(ctaLocation: string, ctaText: string, linkTarget?: string) {
  const params: Record<string, string> = {
    cta_placement: ctaLocation,
    cta_label: ctaText,
    cta_page_path: typeof window !== 'undefined' ? window.location.pathname : '',
  };
  if (linkTarget) {
    params.cta_link_target = linkTarget;
  }
  trackEvent('cta_click', params);
}

/**
 * Track when a user starts using a tool (clicked through)
 */
export function trackToolStart(toolName: string, source: string) {
  trackEvent('tool_start', {
    tool_name: toolName,
    source,
  });
}

/**
 * Homepage decision paths (bake / brew / create / ingredients)
 */
export function trackHomePath(
  path: 'bake' | 'brew' | 'create' | 'ingredients',
  source: string = 'home_hero'
) {
  trackEvent('home_path_selected', {
    path,
    source,
  });
}

/**
 * Track completion-style events from tools
 */
export function trackToolComplete(toolName: string, completionType: string = 'generate_recipe') {
  trackEvent('tool_complete', {
    tool_name: toolName,
    completion_type: completionType,
  });
  trackEvent('generate_recipe', {
    event_category: 'engagement',
    event_label: toolName,
    completion_type: completionType,
  });
}

/**
 * Call from every in-app link/button that navigates to Fix My Recipe so GA4 can attribute funnel entry.
 */
export function tagFixRecipeEntryPoint(entryPoint: string) {
  try {
    sessionStorage.setItem(FIX_RECIPE_ENTRY_KEY, entryPoint);
  } catch {
    /* private mode / quota */
  }
}

/** Read once when Fix My Recipe mounts (then clear). */
export function consumeFixRecipeEntryPoint(): string | null {
  try {
    const v = sessionStorage.getItem(FIX_RECIPE_ENTRY_KEY);
    sessionStorage.removeItem(FIX_RECIPE_ENTRY_KEY);
    return v;
  } catch {
    return null;
  }
}

/**
 * User clicked a CTA toward Fix My Recipe (before navigation completes).
 */
export function trackClicksToFixRecipe(entryPoint: string) {
  tagFixRecipeEntryPoint(entryPoint);
  trackEvent('clicks_to_tool', {
    tool_name: 'fix_recipe',
    entry_point: entryPoint,
  });
}

/**
 * Fix My Recipe page loaded (SPA navigation or direct URL).
 */
export function trackFixRecipeOpen(params: {
  entry_point: string | null;
  category: string;
  problem_id: string;
}) {
  trackEvent('fix_recipe_open', {
    entry_point: params.entry_point ?? 'direct_or_refresh',
    category: params.category,
    problem_id: params.problem_id,
  });
}

/**
 * User ran a meaningful action inside Fix My Recipe (engine engagement).
 */
export function trackToolUsedFixRecipe(params: {
  action: 'diagnose' | 'what_if_slider' | 'add_ingredient_row';
  category: string;
  problem_id: string;
}) {
  trackEvent('tool_used', {
    tool_name: 'fix_recipe',
    action: params.action,
    category: params.category,
    problem_id: params.problem_id,
  });
}

/**
 * Debugger returned findings (user got actionable output). Name matches product language “fixed” as diagnosis delivered.
 */
export function trackRecipeFixedDiagnosed(params: {
  category: string;
  problem_id: string;
  finding_count: number;
  primary_finding_id: string;
  signal_count: number;
  ingredient_rows_filled: number;
}) {
  trackEvent('recipe_fixed', {
    tool_name: 'fix_recipe',
    category: params.category,
    problem_id: params.problem_id,
    finding_count: params.finding_count,
    primary_finding_id: params.primary_finding_id,
    signal_count: params.signal_count,
    ingredient_rows_filled: params.ingredient_rows_filled,
  });
}

/**
 * Time spent on a tool view (seconds). Send on navigate away / tab hide.
 */
export function trackTimeInTool(toolName: string, durationSeconds: number, extra?: Record<string, unknown>) {
  if (durationSeconds < 2) return;
  trackEvent('time_in_tool', {
    tool_name: toolName,
    duration_seconds: durationSeconds,
    ...extra,
  });
}
