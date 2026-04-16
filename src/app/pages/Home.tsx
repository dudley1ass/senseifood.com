import { FeaturedExperiments } from '../components/FeaturedExperiments';
import { Hero } from '../components/Hero';
import { Navigation } from '../components/Navigation';
import { SenseiMiniHeroes } from '../components/SenseiMiniHeroes';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#F8F7FF]">
      <Navigation />
      <Hero />
      <SenseiMiniHeroes />
      <FeaturedExperiments />
    </div>
  );
}
