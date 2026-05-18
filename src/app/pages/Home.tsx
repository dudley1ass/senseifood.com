import { useEffect } from 'react';
import { FeaturedExperiments } from '../components/FeaturedExperiments';
import { Footer } from '../components/Footer';
import { Hero } from '../components/Hero';
import { HomeJourneys } from '../components/HomeJourneys';
import { Navigation } from '../components/Navigation';
import { SenseiMiniHeroes } from '../components/SenseiMiniHeroes';

const HOME_HASH_TARGETS: Record<string, string> = {
  'home-journeys': 'home-journeys',
  'learn-pillars': 'home-journeys',
  'learn-why-food-works': 'learn-why-food-works',
  'create-food': 'create-food',
  'pick-starting-point': 'create-food',
  about: 'about',
};

export default function Home() {
  useEffect(() => {
    const raw = window.location.hash.replace(/^#/, '');
    const targetId = HOME_HASH_TARGETS[raw];
    if (!targetId) return;

    const el = document.getElementById(targetId);
    if (el) {
      requestAnimationFrame(() => {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    }
  }, []);

  return (
    <div className="min-h-screen bg-[#faf8f5]">
      <Navigation />
      <Hero />
      <HomeJourneys />
      <SenseiMiniHeroes />
      <FeaturedExperiments />
      <Footer />
    </div>
  );
}
