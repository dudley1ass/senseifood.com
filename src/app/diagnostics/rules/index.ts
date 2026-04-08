import type { DiagnosticRule, RecipeCategory } from '../types';
import { bakingRules } from './baking';
import { breadRules } from './bread';
import {
  bakersCookieRules,
  bakersIceCreamRules,
  bakersPieRules,
} from './bakersRules';
import {
  cakeBalanceBakingRules,
  cakeBalanceCakeRules,
  cakeBalanceCookieRules,
} from './cakeBalanceRules';
import { cakeRules } from './cake';
import { coffeeRules } from './coffee';
import { cookieRules } from './cookies';
import { iceCreamRules } from './iceCream';
import { pieRules } from './pie';

export const rulePacks: Record<RecipeCategory, DiagnosticRule[]> = {
  cookie: [...cookieRules, ...cakeBalanceCookieRules, ...bakersCookieRules],
  cake: [...cakeRules, ...cakeBalanceCakeRules],
  bread: breadRules,
  pie: [...pieRules, ...bakersPieRules],
  iceCream: [...iceCreamRules, ...bakersIceCreamRules],
  coffee: coffeeRules,
  baking: [...bakingRules, ...cakeBalanceBakingRules, ...bakersCookieRules],
};
