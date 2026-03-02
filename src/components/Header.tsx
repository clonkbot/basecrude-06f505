import { useState } from 'react';

const Header = () => {
  const [copied, setCopied] = useState(false);
  const contractAddress = '0x21FD44bE608F1D18689CDcC8861AE74571Ae8888';

  const copyToClipboard = () => {
    navigator.clipboard.writeText(contractAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <header className="sticky top-0 z-50 bg-[#0a0f1a]/90 backdrop-blur-xl border-b border-[#0052FF]/30">
      {/* Contract Address Banner */}
      <div className="bg-gradient-to-r from-[#0052FF]/20 via-[#0052FF]/30 to-[#0052FF]/20 border-b border-[#0052FF]/20">
        <div className="max-w-7xl mx-auto px-3 md:px-6 py-2 md:py-3">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-3 text-center">
            <span className="font-display text-[#4B8BFF] text-xs md:text-sm font-bold tracking-wider">
              $OIL CA:
            </span>
            <button
              onClick={copyToClipboard}
              className="group flex items-center gap-2 font-mono text-xs md:text-sm text-white/90 hover:text-[#4B8BFF] transition-colors cursor-pointer"
              title="Click to copy"
            >
              <span className="truncate max-w-[200px] sm:max-w-none">{contractAddress}</span>
              <svg
                className="w-4 h-4 flex-shrink-0 opacity-50 group-hover:opacity-100 transition-opacity"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {copied ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                )}
              </svg>
              {copied && (
                <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-xs text-[#4B8BFF] bg-[#0a0f1a] px-2 py-1 rounded">
                  Copied!
                </span>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-3 md:py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2 md:gap-3">
            <div className="relative">
              {/* Oil drop logo */}
              <div className="w-10 h-10 md:w-12 md:h-12 relative">
                <svg viewBox="0 0 40 40" className="w-full h-full">
                  <defs>
                    <linearGradient id="oilGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#4B8BFF" />
                      <stop offset="50%" stopColor="#0052FF" />
                      <stop offset="100%" stopColor="#001a4d" />
                    </linearGradient>
                    <filter id="glow">
                      <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                      <feMerge>
                        <feMergeNode in="coloredBlur"/>
                        <feMergeNode in="SourceGraphic"/>
                      </feMerge>
                    </filter>
                  </defs>
                  {/* Oil drop shape */}
                  <path
                    d="M20 2 C20 2 32 16 32 24 C32 30.627 26.627 36 20 36 C13.373 36 8 30.627 8 24 C8 16 20 2 20 2 Z"
                    fill="url(#oilGradient)"
                    filter="url(#glow)"
                    className="animate-pulse"
                  />
                  {/* Highlight */}
                  <ellipse cx="14" cy="20" rx="3" ry="4" fill="white" opacity="0.2" />
                </svg>
              </div>
            </div>
            <div className="hidden sm:block">
              <span className="font-display text-xl md:text-2xl font-black tracking-tight">
                <span className="text-[#0052FF]">BASE</span>
                <span className="text-white">CRUDE</span>
              </span>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3 md:gap-4">
            {/* X/Twitter Link */}
            <a
              href="https://x.com/Basecrude"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-3 md:px-4 py-2 bg-white/5 hover:bg-white/10 border border-[#0052FF]/30 hover:border-[#0052FF]/60 rounded-lg transition-all group"
            >
              {/* X Logo */}
              <svg className="w-5 h-5 text-white group-hover:text-[#4B8BFF] transition-colors" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
              <span className="font-mono text-sm text-white/80 group-hover:text-white hidden md:inline">@Basecrude</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
