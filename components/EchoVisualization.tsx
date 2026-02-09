import React, { useEffect, useState } from 'react';

const EchoVisualization: React.FC = () => {
  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  const [activeNode, setActiveNode] = useState<number | null>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Mengurangi sensitivitas rotasi agar tetap fokus di tengah
      const x = (e.clientX / window.innerWidth - 0.5) * 8;
      const y = (e.clientY / window.innerHeight - 0.5) * 8;
      setRotate({ x: -y, y: x });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const nodeDetails = [
    "Signature: 5zR...p9w | Value: 45.2 SOL",
    "Source: Raydium LP v4 | Hop: 2",
    "Cluster Detection: 4 Wallets Sync",
    "Liquidity Provision: $12,400",
    "Smart Money Inflow: High"
  ];

  return (
    <div className="relative group perspective-2000 py-20">
      {/* Background Glow raksasa di belakang card */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-purple-600/20 blur-[120px] rounded-full -z-10"></div>

      <div 
        className="relative w-full aspect-[16/9] md:aspect-[21/9] bg-black/40 rounded-[4rem] border border-white/10 overflow-hidden shadow-[0_0_100px_-20px_rgba(168,85,247,0.3)] transition-transform duration-700 ease-out preserve-3d"
        style={{ transform: `rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)` }}
      >
        {/* Tooltip Hologram (Diposisikan agar tidak menutupi tengah) */}
        {activeNode !== null && (
          <div className="absolute top-8 right-8 z-50 animate-in fade-in slide-in-from-right-4 duration-300">
            <div className="glass-card px-6 py-4 rounded-2xl border-purple-500/50 bg-purple-500/10 backdrop-blur-xl shadow-[0_0_30px_rgba(168,85,247,0.2)]">
              <div className="text-[10px] font-black text-purple-400 uppercase tracking-[0.2em] mb-1">Neural_Node_Detected</div>
              <div className="text-white font-mono text-xs">{nodeDetails[activeNode % nodeDetails.length]}</div>
            </div>
          </div>
        )}

        {/* Layer SVG Utama */}
        <div className="absolute inset-0 flex items-center justify-center translate-z-40">
          <svg className="w-[90%] h-[90%]" viewBox="0 0 1000 400" preserveAspectRatio="xMidYMid meet">
            <defs>
              <filter id="glow">
                <feGaussianBlur stdDeviation="4" result="coloredBlur" />
                <feMerge>
                  <feMergeNode in="coloredBlur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
              <linearGradient id="traceGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#14f195" />
                <stop offset="50%" stopColor="#a855f7" />
                <stop offset="100%" stopColor="#9945ff" />
              </linearGradient>
            </defs>

            <g>
              {/* Garis-garis koneksi yang lebih tebal dan dinamis */}
              {[...Array(16)].map((_, i) => {
                const angle = (i / 16) * Math.PI * 2;
                // Node luar disebar secara simetris mengelilingi pusat
                const tx = 500 + Math.cos(angle) * 320;
                const ty = 200 + Math.sin(angle) * 140;
                
                return (
                  <React.Fragment key={i}>
                    <path 
                      d={`M500 200 C${500 + (tx-500)/2} ${ty}, ${500 + (tx-500)/2} 200, ${tx} ${ty}`} 
                      stroke="url(#traceGrad)" 
                      strokeWidth={activeNode === i ? "4" : "1.5"} 
                      fill="none" 
                      className="transition-all duration-500 opacity-40 group-hover:opacity-60"
                      strokeDasharray={activeNode === i ? "none" : "8,4"}
                    />
                    <circle 
                      cx={tx} cy={ty} 
                      r={activeNode === i ? "12" : "6"} 
                      fill={activeNode === i ? "#fff" : "#a855f7"} 
                      className="cursor-pointer transition-all duration-300 shadow-2xl"
                      filter="url(#glow)"
                      onMouseEnter={() => setActiveNode(i)}
                      onMouseLeave={() => setActiveNode(null)}
                    />
                  </React.Fragment>
                );
              })}

              {/* Node PUSAT (CORE NODE) - Dibuat Besar dan Menonjol */}
              <g className="translate-z-50">
                <circle cx="500" cy="200" r="45" className="fill-purple-600/20 animate-pulse" />
                <circle cx="500" cy="200" r="30" className="fill-purple-500/40 animate-pulse [animation-delay:0.5s]" />
                <circle 
                  cx="500" cy="200" r="20" 
                  fill="#fff" 
                  filter="url(#glow)"
                  className="shadow-[0_0_50px_rgba(168,85,247,0.8)]" 
                />
              </g>
            </g>
          </svg>
        </div>

        {/* Info Bar di bagian bawah */}
        <div className="absolute bottom-10 w-full flex justify-center translate-z-50 px-10">
          <div className="glass-card flex items-center gap-6 px-8 py-3 rounded-full border-white/5 bg-black/20">
             <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></div>
                <span className="text-[10px] font-mono font-bold text-emerald-400 tracking-[0.3em]">LIVE_RECURSIVE_TRACING</span>
             </div>
             <div className="h-4 w-px bg-white/10"></div>
             <span className="text-[10px] font-mono text-purple-400 font-bold tracking-[0.3em]">CORE_STABILITY: 100%</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EchoVisualization;