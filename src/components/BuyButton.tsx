const BuyButton = () => {
  const buyLink = "https://base.meme/coin/base:0x21FD44bE608F1D18689CDcC8861AE74571Ae8888?referrer=0xFCE86e6A615B40A620b1a666ff4B866Cd273c476";

  return (
    <a
      href={buyLink}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative inline-flex items-center gap-3 md:gap-4"
    >
      {/* Glow effect */}
      <div className="absolute inset-0 bg-[#0052FF] rounded-xl md:rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity" />

      {/* Button */}
      <div className="relative flex items-center gap-3 md:gap-4 px-6 md:px-10 py-4 md:py-5 bg-gradient-to-r from-[#0052FF] to-[#4B8BFF] rounded-xl md:rounded-2xl border border-white/20 hover:border-white/40 transition-all transform group-hover:scale-105 group-active:scale-95">
        {/* Oil drop icon */}
        <div className="w-8 h-8 md:w-10 md:h-10 relative">
          <svg viewBox="0 0 40 40" className="w-full h-full">
            <defs>
              <linearGradient id="buyOilGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="white" />
                <stop offset="100%" stopColor="#d0e1ff" />
              </linearGradient>
            </defs>
            <path
              d="M20 2 C20 2 32 16 32 24 C32 30.627 26.627 36 20 36 C13.373 36 8 30.627 8 24 C8 16 20 2 20 2 Z"
              fill="url(#buyOilGradient)"
              className="group-hover:animate-pulse"
            />
          </svg>
        </div>

        <div className="flex flex-col items-start">
          <span className="font-display text-xl md:text-2xl font-black text-white tracking-tight">
            BUY $OIL
          </span>
          <span className="font-mono text-[10px] md:text-xs text-white/70">
            on base.meme
          </span>
        </div>

        {/* Arrow */}
        <svg
          className="w-5 h-5 md:w-6 md:h-6 text-white transform group-hover:translate-x-1 transition-transform"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
        </svg>
      </div>

      {/* Floating oil drops animation */}
      <div className="absolute -top-2 -right-2 w-4 h-4 opacity-60 group-hover:opacity-100 transition-opacity">
        <svg viewBox="0 0 20 20" className="animate-bounce animation-delay-100">
          <path
            d="M10 1 C10 1 16 8 16 12 C16 15.314 13.314 18 10 18 C6.686 18 4 15.314 4 12 C4 8 10 1 10 1 Z"
            fill="#0052FF"
          />
        </svg>
      </div>
      <div className="absolute -bottom-1 -left-1 w-3 h-3 opacity-40 group-hover:opacity-80 transition-opacity">
        <svg viewBox="0 0 20 20" className="animate-bounce animation-delay-300">
          <path
            d="M10 1 C10 1 16 8 16 12 C16 15.314 13.314 18 10 18 C6.686 18 4 15.314 4 12 C4 8 10 1 10 1 Z"
            fill="#4B8BFF"
          />
        </svg>
      </div>
    </a>
  );
};

export default BuyButton;
