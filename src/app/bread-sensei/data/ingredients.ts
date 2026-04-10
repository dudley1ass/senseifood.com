import { Ingredient } from '../types/bread';

export const ingredientsDatabase: Ingredient[] = [
  { id: 'flour-bread', name: 'Bread Flour', category: 'flour', calories: 361, protein: 12.9, fat: 1.7, carbs: 72.5, sugar: 0.3, fiber: 2.4, sodium: 2, moisture: 12, defaultAmount: 500 },
  { id: 'flour-ap', name: 'All-Purpose Flour', category: 'flour', calories: 364, protein: 10.3, fat: 1.0, carbs: 76.3, sugar: 0.3, fiber: 2.7, sodium: 2, moisture: 12, defaultAmount: 500 },
  { id: 'flour-ww', name: 'Whole Wheat Flour', category: 'flour', calories: 340, protein: 13.2, fat: 2.5, carbs: 72.0, sugar: 0.4, fiber: 10.7, sodium: 2, moisture: 11, defaultAmount: 500 },
  { id: 'water', name: 'Water', category: 'liquid', calories: 0, protein: 0, fat: 0, carbs: 0, sugar: 0, fiber: 0, sodium: 0, moisture: 100, defaultAmount: 300 },
  { id: 'milk-whole', name: 'Whole Milk', category: 'dairy', calories: 61, protein: 3.2, fat: 3.3, saturatedFat: 1.9, carbs: 4.8, sugar: 5.1, fiber: 0, sodium: 43, moisture: 88, defaultAmount: 120 },
  { id: 'buttermilk', name: 'Buttermilk', category: 'dairy', calories: 40, protein: 3.3, fat: 0.9, carbs: 4.8, sugar: 4.8, fiber: 0, sodium: 105, moisture: 90, defaultAmount: 120 },
  { id: 'butter-unsalted', name: 'Unsalted Butter', category: 'fat', calories: 717, protein: 0.9, fat: 81.1, saturatedFat: 51.4, carbs: 0.1, sugar: 0.1, fiber: 0, sodium: 11, moisture: 16, defaultAmount: 50 },
  { id: 'oil-olive', name: 'Olive Oil', category: 'fat', calories: 884, protein: 0, fat: 100, saturatedFat: 14, carbs: 0, sugar: 0, fiber: 0, sodium: 0, moisture: 0, defaultAmount: 30 },
  { id: 'oil-vegetable', name: 'Vegetable Oil', category: 'fat', calories: 884, protein: 0, fat: 100, saturatedFat: 14, carbs: 0, sugar: 0, fiber: 0, sodium: 0, moisture: 0, defaultAmount: 30 },
  { id: 'sugar-white', name: 'Granulated Sugar', category: 'sugar', calories: 387, protein: 0, fat: 0, carbs: 99.8, sugar: 99.8, fiber: 0, sodium: 0, moisture: 0.5, defaultAmount: 20 },
  { id: 'honey', name: 'Honey', category: 'sugar', calories: 304, protein: 0.3, fat: 0, carbs: 82.4, sugar: 82.1, fiber: 0.2, sodium: 4, moisture: 17, defaultAmount: 20 },
  { id: 'egg-whole', name: 'Whole Egg (large)', category: 'egg', calories: 143, protein: 12.6, fat: 9.5, saturatedFat: 3.1, cholesterol: 372, carbs: 0.7, sugar: 0.4, fiber: 0, sodium: 142, moisture: 76, defaultAmount: 50 },
  { id: 'egg-white', name: 'Egg White', category: 'egg', calories: 52, protein: 10.9, fat: 0.2, carbs: 0.7, sugar: 0.7, fiber: 0, sodium: 166, moisture: 88, defaultAmount: 60 },
  { id: 'egg-yolk', name: 'Egg Yolk', category: 'egg', calories: 322, protein: 15.9, fat: 26.5, saturatedFat: 8.2, cholesterol: 1085, carbs: 3.6, sugar: 0.6, fiber: 0, sodium: 48, moisture: 52, defaultAmount: 40 },
  { id: 'yeast-instant', name: 'Instant Yeast', category: 'leavening', calories: 325, protein: 40.4, fat: 7.6, carbs: 40.7, sugar: 0, fiber: 26.9, sodium: 51, moisture: 6, defaultAmount: 5 },
  { id: 'salt', name: 'Salt', category: 'other', calories: 0, protein: 0, fat: 0, carbs: 0, sugar: 0, fiber: 0, sodium: 38758, moisture: 0, defaultAmount: 10 },
  { id: 'sugar-brown-lt', name: 'Brown Sugar (Light)', category: 'sugar', calories: 377, protein: 0, fat: 0, carbs: 97.3, sugar: 96.2, fiber: 0, sodium: 28, moisture: 2, defaultAmount: 25 },
  { id: 'malt-syrup', name: 'Barley Malt Syrup', category: 'sugar', calories: 300, protein: 0.5, fat: 0, carbs: 75, sugar: 55, fiber: 0, sodium: 50, moisture: 22, defaultAmount: 15 },
  { id: 'vanilla-extract', name: 'Vanilla Extract', category: 'flavoring', calories: 288, protein: 0.1, fat: 0.1, carbs: 12.7, sugar: 12.7, fiber: 0, sodium: 9, moisture: 53, defaultAmount: 5 },
  { id: 'seeds-sesame', name: 'Sesame Seeds', category: 'other', calories: 573, protein: 17.7, fat: 49.7, carbs: 23.4, sugar: 0.3, fiber: 11.8, sodium: 11, moisture: 5, defaultAmount: 20 },
];
