import { useState, useEffect } from 'react';

interface NewsItem {
  id: number;
  author: string;
  handle: string;
  content: string;
  time: string;
  likes: number;
  retweets: number;
}

const mockNews: NewsItem[] = [
  {
    id: 1,
    author: "BASECRUDE",
    handle: "@Basecrude",
    content: "We're pumping digital crude on Base chain. $OIL is the future of decentralized energy trading. WAGMI",
    time: "2m",
    likes: 420,
    retweets: 69
  },
  {
    id: 2,
    author: "Base Chain",
    handle: "@base",
    content: "The ecosystem keeps growing. New projects launching daily. Base is onchain for everyone.",
    time: "15m",
    likes: 1200,
    retweets: 340
  },
  {
    id: 3,
    author: "Crypto Oil Rig",
    handle: "@CryptoOilRig",
    content: "$OIL extraction rates hitting ATH. The digital barrel is worth more than ever. Load up your bags.",
    time: "32m",
    likes: 256,
    retweets: 89
  },
  {
    id: 4,
    author: "DeFi Driller",
    handle: "@DeFiDriller",
    content: "Just aped into $OIL on Base. The tokenomics are solid and the community is based. LFG!",
    time: "1h",
    likes: 189,
    retweets: 45
  },
  {
    id: 5,
    author: "BASECRUDE",
    handle: "@Basecrude",
    content: "New partnership announcement coming soon. Get ready for some serious fuel injection into the $OIL ecosystem.",
    time: "2h",
    likes: 567,
    retweets: 123
  },
  {
    id: 6,
    author: "Onchain Energy",
    handle: "@OnchainEnergy",
    content: "The future of commodities is onchain. $OIL on Base is leading the charge. This is just the beginning.",
    time: "3h",
    likes: 345,
    retweets: 78
  }
];

const NewsFeed = () => {
  const [news, setNews] = useState<NewsItem[]>(mockNews);
  const [activeIndex, setActiveIndex] = useState(0);

  // Rotate highlight every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(prev => (prev + 1) % news.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [news.length]);

  // Simulate new tweets occasionally
  useEffect(() => {
    const interval = setInterval(() => {
      setNews(prev => {
        const updated = [...prev];
        const randomIndex = Math.floor(Math.random() * updated.length);
        updated[randomIndex] = {
          ...updated[randomIndex],
          likes: updated[randomIndex].likes + Math.floor(Math.random() * 5),
          retweets: updated[randomIndex].retweets + Math.floor(Math.random() * 2)
        };
        return updated;
      });
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative">
      {/* Section Header */}
      <div className="flex items-center justify-between mb-4 md:mb-6">
        <div className="flex items-center gap-3">
          <div className="w-1 h-6 md:h-8 bg-[#0052FF] rounded-full" />
          <h2 className="font-display text-xl md:text-2xl font-bold text-white">Live Feed</h2>
          <span className="flex items-center gap-1 px-2 py-1 bg-[#0052FF]/20 rounded-full">
            <span className="w-1.5 h-1.5 bg-[#00FF88] rounded-full animate-pulse" />
            <span className="font-mono text-[10px] text-[#4B8BFF]">LIVE</span>
          </span>
        </div>
        <a
          href="https://x.com/Basecrude"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-[#4B8BFF] hover:text-white transition-colors"
        >
          <span className="font-mono text-xs md:text-sm">Follow on</span>
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
          </svg>
        </a>
      </div>

      {/* News Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
        {news.map((item, index) => (
          <NewsCard key={item.id} item={item} isActive={index === activeIndex} />
        ))}
      </div>
    </div>
  );
};

const NewsCard = ({ item, isActive }: { item: NewsItem; isActive: boolean }) => (
  <div
    className={`
      relative bg-gradient-to-br from-[#0a1628] to-[#0d1f3c]
      border rounded-xl md:rounded-2xl p-4 md:p-5
      transition-all duration-500
      ${isActive
        ? 'border-[#0052FF] shadow-[0_0_30px_rgba(0,82,255,0.3)]'
        : 'border-[#0052FF]/20 hover:border-[#0052FF]/50'
      }
    `}
  >
    {/* Author */}
    <div className="flex items-center gap-3 mb-3">
      <div className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-gradient-to-br from-[#0052FF] to-[#4B8BFF] flex items-center justify-center">
        <span className="font-display text-sm md:text-base font-bold text-white">
          {item.author.charAt(0)}
        </span>
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2">
          <span className="font-display text-sm md:text-base font-bold text-white truncate">{item.author}</span>
          {item.handle === "@Basecrude" && (
            <svg className="w-4 h-4 text-[#0052FF] flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
              <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
            </svg>
          )}
        </div>
        <span className="font-mono text-xs text-[#4B8BFF]/70">{item.handle}</span>
      </div>
      <span className="font-mono text-xs text-[#4B8BFF]/50 flex-shrink-0">{item.time}</span>
    </div>

    {/* Content */}
    <p className="font-body text-sm md:text-base text-white/90 leading-relaxed mb-4">{item.content}</p>

    {/* Engagement */}
    <div className="flex items-center gap-4 md:gap-6">
      <div className="flex items-center gap-1.5 text-[#4B8BFF]/60 hover:text-[#FF4B4B] transition-colors cursor-pointer">
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
        <span className="font-mono text-xs">{item.likes}</span>
      </div>
      <div className="flex items-center gap-1.5 text-[#4B8BFF]/60 hover:text-[#00FF88] transition-colors cursor-pointer">
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
        </svg>
        <span className="font-mono text-xs">{item.retweets}</span>
      </div>
      <a
        href="https://x.com/Basecrude"
        target="_blank"
        rel="noopener noreferrer"
        className="ml-auto"
      >
        <svg className="w-4 h-4 text-[#4B8BFF]/40 hover:text-white transition-colors" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      </a>
    </div>

    {/* Active indicator */}
    {isActive && (
      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#0052FF] to-transparent" />
    )}
  </div>
);

export default NewsFeed;
