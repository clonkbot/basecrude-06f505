import { useState, useEffect } from 'react';
import Header from './components/Header';
import PriceDisplay from './components/PriceDisplay';
import NewsFeed from './components/NewsFeed';
import BuyButton from './components/BuyButton';

function App() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <div className={`min-h-screen bg-[#0a0f1a] text-white relative overflow-hidden transition-opacity duration-1000 ${loaded ? 'opacity-100' : 'opacity-0'}`}>
      {/* Animated Background */}
      <div className="fixed inset-0 pointer-events-none">
        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0, 82, 255, 0.5) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 82, 255, 0.5) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}
        />
        {/* Gradient orbs */}
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-[#0052FF] rounded-full blur-[200px] opacity-10 animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-[#1E40AF] rounded-full blur-[150px] opacity-15" />
        {/* Oil drip effect */}
        <div className="absolute top-0 left-0 w-full h-full">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute top-0 w-1 bg-gradient-to-b from-[#0052FF] via-[#0052FF]/50 to-transparent rounded-full animate-drip"
              style={{
                left: `${10 + i * 12}%`,
                height: `${100 + i * 50}px`,
                animationDelay: `${i * 0.5}s`,
                opacity: 0.3
              }}
            />
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <Header />

        <main className="flex-1 px-4 md:px-8 lg:px-16 py-6 md:py-10">
          <div className="max-w-7xl mx-auto">
            {/* Hero Section */}
            <div className="text-center mb-8 md:mb-12">
              <h1 className="font-display text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter mb-4 md:mb-6 animate-fadeInUp">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0052FF] via-[#4B8BFF] to-[#0052FF]">
                  BASE
                </span>
                <span className="text-white">CRUDE</span>
              </h1>
              <p className="font-mono text-[#4B8BFF] text-sm md:text-base tracking-widest uppercase animate-fadeInUp animation-delay-200">
                Digital Oil on Base Chain
              </p>
            </div>

            {/* Price Section */}
            <div className="animate-fadeInUp animation-delay-300">
              <PriceDisplay />
            </div>

            {/* Buy Button */}
            <div className="flex justify-center my-8 md:my-12 animate-fadeInUp animation-delay-400">
              <BuyButton />
            </div>

            {/* News Section */}
            <div className="animate-fadeInUp animation-delay-500">
              <NewsFeed />
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="relative z-10 py-6 text-center border-t border-[#0052FF]/20">
          <p className="text-xs text-[#4B8BFF]/50 font-mono tracking-wider">
            Requested by{' '}
            <a
              href="https://x.com/Basecrude"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#4B8BFF] transition-colors"
            >
              @BASECRUDE
            </a>
            {' '}&middot;{' '}
            Built by{' '}
            <a
              href="https://x.com/clonkbot"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#4B8BFF] transition-colors"
            >
              @clonkbot
            </a>
          </p>
        </footer>
      </div>
    </div>
  );
}

export default App;
