import type { DiagnosticRule, RecipeCategory } from '../types';
import { bakingRules } from './baking';
import { breadRules } from './bread';
import { cakeRules } from './cake';
import { coffeeRules } from './coffee';
import { cookieRules } from './cookies';
import { iceCreamRules } from './iceCream';
import { pieRules } from './pie';

export const rulePacks: Record<RecipeCategory, DiagnosticRule[]> = {
  cookie: cookieRules,
  cake: cakeRules,
  bread: breadRules,
  pie: pieRules,
  iceCream: iceCreamRules,
  coffee: coffeeRules,
  baking: bakingRules,
};
