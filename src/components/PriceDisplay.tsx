import { useState, useEffect } from 'react';

const PriceDisplay = () => {
  const [price, setPrice] = useState(0.00042069);
  const [change24h, setChange24h] = useState(12.5);
  const [marketCap, setMarketCap] = useState(420690);
  const [volume24h, setVolume24h] = useState(69420);

  // Simulate price updates
  useEffect(() => {
    const interval = setInterval(() => {
      const fluctuation = (Math.random() - 0.5) * 0.00001;
      setPrice(prev => Math.max(0.00001, prev + fluctuation));

      const changeFluctuation = (Math.random() - 0.5) * 2;
      setChange24h(prev => prev + changeFluctuation);

      const mcapFluctuation = (Math.random() - 0.5) * 5000;
      setMarketCap(prev => Math.max(100000, prev + mcapFluctuation));

      const volFluctuation = (Math.random() - 0.5) * 2000;
      setVolume24h(prev => Math.max(10000, prev + volFluctuation));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const formatPrice = (p: number) => p.toFixed(8);
  const formatNumber = (n: number) => {
    if (n >= 1000000) return `$${(n / 1000000).toFixed(2)}M`;
    if (n >= 1000) return `$${(n / 1000).toFixed(2)}K`;
    return `$${n.toFixed(2)}`;
  };

  return (
    <div className="relative">
      {/* Main Price Card */}
      <div className="relative bg-gradient-to-br from-[#0a1628] to-[#0d1f3c] border border-[#0052FF]/40 rounded-2xl md:rounded-3xl overflow-hidden">
        {/* Glow effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0052FF]/0 via-[#0052FF]/10 to-[#0052FF]/0 animate-shimmer" />

        <div className="relative p-6 md:p-10">
          {/* Live indicator */}
          <div className="flex items-center gap-2 mb-4 md:mb-6">
            <div className="relative flex items-center gap-2">
              <span className="w-2 h-2 md:w-3 md:h-3 bg-[#00FF88] rounded-full animate-pulse" />
              <span className="absolute w-2 h-2 md:w-3 md:h-3 bg-[#00FF88] rounded-full animate-ping" />
            </div>
            <span className="font-mono text-xs md:text-sm text-[#00FF88] tracking-widest uppercase">Live Price</span>
          </div>

          {/* Price Display */}
          <div className="mb-6 md:mb-8">
            <div className="flex items-baseline gap-2 md:gap-4 flex-wrap">
              <span className="font-display text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black text-white tabular-nums">
                ${formatPrice(price)}
              </span>
              <span className={`font-mono text-lg md:text-2xl font-bold ${change24h >= 0 ? 'text-[#00FF88]' : 'text-[#FF4444]'}`}>
                {change24h >= 0 ? '+' : ''}{change24h.toFixed(2)}%
              </span>
            </div>
            <p className="font-mono text-sm md:text-base text-[#4B8BFF]/70 mt-2">$OIL / USD</p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
            <StatCard label="Market Cap" value={formatNumber(marketCap)} />
            <StatCard label="24h Volume" value={formatNumber(volume24h)} />
            <StatCard label="Chain" value="Base" icon={<BaseIcon />} />
            <StatCard label="Symbol" value="$OIL" />
          </div>
        </div>

        {/* Bottom accent line */}
        <div className="h-1 bg-gradient-to-r from-transparent via-[#0052FF] to-transparent" />
      </div>

      {/* Decorative elements */}
      <div className="absolute -bottom-4 -right-4 w-24 h-24 md:w-32 md:h-32 border border-[#0052FF]/20 rounded-full" />
      <div className="absolute -top-4 -left-4 w-16 h-16 md:w-20 md:h-20 border border-[#0052FF]/10 rounded-full" />
    </div>
  );
};

const StatCard = ({ label, value, icon }: { label: string; value: string; icon?: React.ReactNode }) => (
  <div className="bg-[#0052FF]/10 border border-[#0052FF]/20 rounded-lg md:rounded-xl p-3 md:p-4">
    <p className="font-mono text-[10px] md:text-xs text-[#4B8BFF]/70 uppercase tracking-wider mb-1">{label}</p>
    <div className="flex items-center gap-2">
      {icon}
      <span className="font-display text-base md:text-xl font-bold text-white">{value}</span>
    </div>
  </div>
);

const BaseIcon = () => (
  <svg className="w-4 h-4 md:w-5 md:h-5" viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="12" r="10" fill="#0052FF" />
    <path
      d="M12 4C7.58 4 4 7.58 4 12s3.58 8 8 8c1.85 0 3.55-.63 4.9-1.69L12 12V4z"
      fill="white"
    />
  </svg>
);

export default PriceDisplay;
