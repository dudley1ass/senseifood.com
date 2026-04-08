export type RecipeCategory =
  | 'cookie'
  | 'cake'
  | 'bread'
  | 'pie'
  | 'iceCream'
  | 'coffee'
  | 'baking';

export type Confidence = 'high' | 'medium' | 'low';

export type SuggestedChange = {
  ingredient: string;
  deltaPct: number;
  direction: 'increase' | 'decrease';
  rationale: string;
};

/** Rule evaluated by the deterministic engine (versioned in repo, no AI). */
export type DiagnosticRule = {
  id: string;
  /** problemId from URL / dropdown; include 'general' for broad rules */
  problems: string[];
  whenAllSignals?: string[];
  whenAnySignals?: string[];
  title: string;
  explanation: string;
  confidence: Confidence;
  suggestedChanges: SuggestedChange[];
  predictedEffect: string;
  relatedArticlePath?: string;
  priority?: number;
};

export type DiagnosticInput = {
  category: RecipeCategory;
  problemId: string;
  flourG?: number;
  butterG?: number;
  sugarG?: number;
  /** Large eggs ≈50 g each — from egg line counts */
  eggCount?: number;
  bakingPowderG?: number;
  bakingSodaG?: number;
  yeastG?: number;
  /** Water, milks, coffee liquids, vanilla — rough hydration picture */
  liquidG?: number;
  /** Plain water only — pie crust hydration vs flour (baker’s %) */
  waterG?: number;
  /** Whole bean or ground coffee (grams) — coffee / mocha bakes */
  coffeeBeanG?: number;
  /** Brewed coffee + espresso liquid only (grams) — brew ratio read */
  coffeeLiquorG?: number;
};

/** Plain-language “what this formula tends to bake like” from ratios. */
export type RecipeCharacterization = {
  headline: string;
  blurb: string;
  /** Nearest named profile from our reference set (distance match). */
  referenceMatch?: string;
  /** Shown when “Making” disagrees with ratio inference. */
  categoryHint?: string;
};

export type DiagnosticFinding = {
  id: string;
  title: string;
  explanation: string;
  confidence: Confidence;
  suggestedChanges: SuggestedChange[];
  predictedEffect: string;
  relatedArticlePath?: string;
};

export type EvaluationResult = {
  findings: DiagnosticFinding[];
  signals: string[];
  characterization: RecipeCharacterization | null;
};
