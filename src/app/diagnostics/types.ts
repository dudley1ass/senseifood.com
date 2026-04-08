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
};
