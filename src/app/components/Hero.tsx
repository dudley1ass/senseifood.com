import { useEffect, useState } from 'react';

const ROTATING_WORDS = [
  'Burn',
  'Overcook',
  'Undercook',
  'Dry out',
  'Ruin',
  'Mess up',
  'Screw up',
  'Curdle',
  'Over-salt',
  'Under-season',
  'Scorch',
  'Dry out',
  'Over-reduce',
  'Water down',
  'Toughen',
  'Flatten',
] as const;

export function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % ROTATING_WORDS.length);
    }, 3000);
    return () => window.clearInterval(id);
  }, []);

  const word = ROTATING_WORDS[index];

  return (
    <section className="relative overflow-hidden bg-[#F8F7FF] px-4 sm:px-6 py-16 md:py-24">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-[1.65rem] leading-snug sm:text-4xl md:text-5xl font-semibold tracking-tight text-purple-950 mb-6">
          What did you{' '}
          <span
            className="bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 bg-clip-text text-transparent inline-block min-h-[1.2em]"
            aria-live="polite"
            aria-atomic="true"
          >
            {word}
          </span>{' '}
          today?
        </h1>

        <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
          we are here to help. we have over 70 science based articles to explain what went wrong and a recipe builder to
          help you prevent it in the future. Where do you want to start?
        </p>
      </div>
    </section>
  );
}
