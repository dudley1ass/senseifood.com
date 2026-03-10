import { Cookie, Cake, Coffee, IceCream, PieChart, ArrowRight, Beaker, BookOpen, Sparkles } from 'lucide-react';
import { Hero } from './components/Hero';
import { ToolCard } from './components/ToolCard';
import { HowItWorks } from './components/HowItWorks';
import { FeaturedExperiments } from './components/FeaturedExperiments';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { RouterProvider } from 'react-router';
import { router } from './routes';

export default function App() {
  return <RouterProvider router={router} />;
}