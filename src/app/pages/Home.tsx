import { useEffect } from 'react';
import { FeaturedExperiments } from '../components/FeaturedExperiments';
import { Hero } from '../components/Hero';
import { Navigation } from '../components/Navigation';
import { SenseiMiniHeroes } from '../components/SenseiMiniHeroes';
import { WhatCanIMake } from '../components/WhatCanIMake';

export default function Home() {
  useEffect(() => {
    const id = window.location.hash.replace(/^#/, '');
    if (id === 'learn-pillars' || id === 'pick-starting-point') {
      const el = document.getElementById(id);
      if (el) {
        requestAnimationFrame(() => {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
      }
    }
  }, []);

  return (
    <div className="min-h-screen bg-[#F8F7FF]">
      <Navigation />
      <Hero />
      <SenseiMiniHeroes />
      <WhatCanIMake />
      <FeaturedExperiments />
    </div>
  );
}
