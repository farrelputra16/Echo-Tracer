
import React from 'react';

const features = [
  {
    icon: "📡",
    title: "Wallet Tracking",
    description: "Per-wallet custom settings. Get notified when your chosen wallets swap, transfer, or provide liquidity with sub-second latency.",
    accent: "purple",
    visual: "01010101"
  },
  {
    icon: "🫆",
    title: "Echo Mode",
    description: "Deep-trace funds up to 10 depths. Uncover the original funding source of new 'fresh' burner wallets automatically.",
    accent: "emerald",
    visual: "CASCADE_LINK"
  },
  {
    icon: "🎰",
    title: "Token Intelligence",
    description: "Real-time alerts for whale detection and accumulation. Get notified on supply distribution shifts instantly.",
    accent: "blue",
    visual: "WHALE_RADAR"
  },
  {
    icon: "🛎️",
    title: "Cabal Mode",
    description: "Detect coordinated buy pressure from grouped wallets. Get alerted before the pump becomes public news.",
    accent: "amber",
    visual: "INSIDER_SYNC"
  },
  {
    icon: "💰",
    title: "Smart Alerts",
    description: "Every buy/sell alert includes exact SOL + USD amounts, market cap updates, and liquidity pool depth.",
    accent: "green",
    visual: "VALUE_INTEL"
  },
  {
    icon: "🛡️",
    title: "Anti-MEV Protection",
    description: "Integration with Jito bundles for private transactions, protecting your swaps from sandwiches and frontruns.",
    accent: "red",
    visual: "SHIELD_ACTIVE"
  }
];

const FeatureCard: React.FC<{f: typeof features[0], i: number}> = ({f, i}) => {
  const [rotate, setRotate] = React.useState({ x: 0, y: 0 });

  // Fungsi MouseMove tetap sama ...
  const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 20;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * -20;
    setRotate({ x, y });
  };

  return (
    <div 
      className="perspective-2000 group cursor-default h-full"
      onMouseMove={onMouseMove}
      onMouseLeave={() => setRotate({ x: 0, y: 0 })}
    >
      <div 
        className="glass-card p-10 rounded-[2.5rem] relative h-full flex flex-col overflow-hidden transition-all duration-500 preserve-3d hover:border-white/20"
        style={{ transform: `rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)` }}
      >
        {/* Layer Efek Baru: Progressive Raw Data Background */}
        <div className="absolute inset-0 p-6 opacity-0 group-hover:opacity-[0.07] transition-opacity duration-700 pointer-events-none font-mono text-[8px] leading-tight text-white overflow-hidden select-none">
          {Array(20).fill(0).map((_, idx) => (
            <div key={idx} className="whitespace-nowrap">
              0x{Math.random().toString(16).slice(2, 10)}...{Math.random().toString(16).slice(2, 10)} 
              SYNC_NODE_{f.visual} // status: active // flow: recursive_trace_{idx}
            </div>
          ))}
        </div>

        <div className="relative z-10 translate-z-20 flex-1">
          <div className="flex justify-between items-start mb-8">
            <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-3xl bg-black/40 border border-white/5 shadow-inner">
              {f.icon}
            </div>
            <div className="text-[10px] font-mono text-white/20 group-hover:text-purple-400/50 transition-colors uppercase">
              MOD_{f.visual}
            </div>
          </div>
          <h3 className="text-2xl font-display font-bold text-white mb-4 tracking-tight">{f.title}</h3>
          <p className="text-gray-500 leading-relaxed text-sm md:text-base mb-6 font-light">{f.description}</p>
        </div>

        <div className="mt-auto pt-6 flex items-center justify-between relative z-10">
          <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-white/40 group-hover:text-purple-400 transition-colors">
            Active Module
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></div>
          </div>
          <div className="opacity-0 group-hover:opacity-100 transition-all translate-x-4 group-hover:translate-x-0">
            <svg className="w-5 h-5 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </div>
        </div>

        {/* Decorative Glow Tetap Sama ... */}
        <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-purple-500/5 blur-[40px] rounded-full group-hover:bg-purple-500/10 transition-colors"></div>
      </div>
    </div>
  );
};

const Features: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {features.map((f, i) => (
        <FeatureCard key={i} f={f} i={i} />
      ))}
    </div>
  );
};

export default Features;
