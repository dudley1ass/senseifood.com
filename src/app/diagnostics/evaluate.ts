import { deriveSignals } from './signals';
import { rulePacks } from './rules/index';
import type { DiagnosticFinding, DiagnosticInput, DiagnosticRule, EvaluationResult } from './types';

function ruleToFinding(rule: DiagnosticRule): DiagnosticFinding {
  return {
    id: rule.id,
    title: rule.title,
    explanation: rule.explanation,
    confidence: rule.confidence,
    suggestedChanges: rule.suggestedChanges,
    predictedEffect: rule.predictedEffect,
    relatedArticlePath: rule.relatedArticlePath,
  };
}

function ruleMatches(rule: DiagnosticRule, problemId: string): boolean {
  return rule.problems.includes(problemId) || rule.problems.includes('general');
}

function signalsSatisfied(rule: DiagnosticRule, signals: string[]): boolean {
  if (rule.whenAllSignals?.length) {
    if (!rule.whenAllSignals.every((s) => signals.includes(s))) return false;
  }
  if (rule.whenAnySignals?.length) {
    if (!rule.whenAnySignals.some((s) => signals.includes(s))) return false;
  }
  return true;
}

function fallbackFinding(category: RecipeCategory, problemId: string): DiagnosticFinding {
  const tool =
    category === 'cookie'
      ? 'https://cookiesensei.senseifood.com'
      : category === 'cake'
        ? 'https://cakesensei.senseifood.com'
        : 'https://senseifood.com/#pick-starting-point';

  return {
    id: 'fallback-generic',
    title: 'Start with one high-impact lever',
    explanation: `We mapped your issue (“${problemId.replace(/-/g, ' ')}”) but don’t have a confident rule match yet from your numbers. Adjust one variable at a time, bake a small test batch, and compare.`,
    confidence: 'low',
    suggestedChanges: [
      {
        ingredient: 'Process',
        deltaPct: 0,
        direction: 'decrease',
        rationale: 'Change only one major variable per bake so you know what moved the outcome.',
      },
    ],
    predictedEffect: 'Isolating variables builds intuition faster than changing five things at once.',
    relatedArticlePath: '/articles',
  };
}

export function evaluateDiagnostic(input: DiagnosticInput): EvaluationResult {
  const signals = deriveSignals(input);
  const rules = rulePacks[input.category] ?? rulePacks.cookie;

  const matched = rules.filter(
    (r) => ruleMatches(r, input.problemId) && signalsSatisfied(r, signals)
  );

  matched.sort((a, b) => (b.priority ?? 0) - (a.priority ?? 0));

  let findings = matched.slice(0, 3).map(ruleToFinding);

  if (!findings.length) {
    const relaxed = rules.filter((r) => ruleMatches(r, input.problemId));
    relaxed.sort((a, b) => (b.priority ?? 0) - (a.priority ?? 0));
    findings = relaxed.slice(0, 3).map(ruleToFinding);
  }

  if (!findings.length) {
    findings = [fallbackFinding(input.category, input.problemId)];
  }

  return { findings, signals };
}
