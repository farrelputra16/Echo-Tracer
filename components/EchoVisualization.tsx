
import React, { useEffect, useState } from 'react';

const EchoVisualization: React.FC = () => {
  const [rotate, setRotate] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 12;
      const y = (e.clientY / window.innerHeight - 0.5) * 12;
      setRotate({ x: -y, y: x });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="relative group perspective-2000 py-12">
      <div 
        className="relative w-full aspect-[21/9] bg-black/60 rounded-[4rem] border border-white/10 overflow-hidden shadow-[0_0_120px_-30px_rgba(168,85,247,0.4)] transition-transform duration-500 preserve-3d"
        style={{ transform: `rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)` }}
      >
        {/* Particle System */}
        <div className="absolute inset-0 opacity-40">
          {[...Array(30)].map((_, i) => (
            <div 
              key={i} 
              className="absolute w-1 h-1 bg-white rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                opacity: Math.random() * 0.3,
                animation: `pulse ${2 + Math.random() * 4}s infinite alternate`,
                boxShadow: '0 0 8px rgba(168, 85, 247, 0.5)'
              }}
            ></div>
          ))}
        </div>

        {/* The Node Web */}
        <div className="absolute inset-0 flex items-center justify-center p-12 translate-z-20">
          <svg className="w-full h-full opacity-100 filter drop-shadow-[0_0_20px_rgba(168,85,247,0.6)]" viewBox="0 0 1000 400">
            <defs>
              <linearGradient id="traceGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#14f195" />
                <stop offset="50%" stopColor="#a855f7" />
                <stop offset="100%" stopColor="#9945ff" />
              </linearGradient>
            </defs>

            <g>
              <circle cx="100" cy="200" r="14" fill="#14f195" className="animate-pulse shadow-lg" />
              <text x="100" y="245" fill="#14f195" textAnchor="middle" className="font-mono text-[11px] font-black tracking-[0.2em] uppercase">Target_Base</text>
              
              {[...Array(14)].map((_, i) => {
                const angle = (i / 14) * Math.PI * 2;
                const tx = 350 + Math.cos(angle) * 180;
                const ty = 200 + Math.sin(angle) * 120;
                return (
                  <React.Fragment key={i}>
                    <path 
                      d={`M114 200 Q220 ${200 + (Math.random() - 0.5) * 250} ${tx} ${ty}`} 
                      stroke="url(#traceGrad)" 
                      strokeWidth="0.75" 
                      fill="none" 
                      strokeDasharray="6,6" 
                      className="animate-[shimmer_12s_linear_infinite]"
                      opacity="0.5"
                    />
                    <circle cx={tx} cy={ty} r="5" fill="#a855f7" opacity="0.8" />
                    
                    {/* Secondary tree layers */}
                    {[...Array(2)].map((_, j) => {
                      const sx = tx + 200 + Math.random() * 60;
                      const sy = ty + (j === 0 ? -60 : 60);
                      return (
                        <React.Fragment key={j}>
                          <path 
                            d={`M${tx} ${ty} L${sx} ${sy}`} 
                            stroke="#a855f7" 
                            strokeWidth="0.3" 
                            fill="none" 
                            opacity="0.3"
                          />
                          <circle cx={sx} cy={sy} r="3" fill="#a855f7" opacity="0.4" />
                        </React.Fragment>
                      );
                    })}
                  </React.Fragment>
                );
              })}
            </g>
          </svg>
        </div>

        {/* Dynamic UI Overlays */}
        <div className="absolute bottom-12 left-16 space-y-3 translate-z-30">
          <div className="flex items-center gap-4">
             <div className="h-1.5 w-40 bg-zinc-800/80 rounded-full overflow-hidden border border-white/5">
                <div className="h-full bg-gradient-to-r from-purple-500 to-emerald-400 w-[84%] animate-[shimmer_3s_infinite]"></div>
             </div>
             <span className="text-[12px] font-mono font-black text-purple-400 tracking-widest">CASCADE_ACTIVE_84%</span>
          </div>
          <div className="text-[10px] font-mono text-zinc-500 uppercase tracking-[0.4em]">
            Syncing: 142.1k Transactions // Hop_Depth: 10
          </div>
        </div>

        <div className="absolute top-12 right-16 text-right translate-z-30">
           <div className="text-[12px] font-black text-white bg-black/40 border border-white/10 px-6 py-2.5 rounded-[1.5rem] backdrop-blur-xl shadow-2xl tracking-widest uppercase">
             Neural_Mapping_Ready
           </div>
        </div>

        {/* Scanning Sweep Effect */}
        <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-10 animate-[move-x_8s_linear_infinite]"></div>
      </div>
      <style>{`
        @keyframes move-x {
          0% { transform: translateX(-100px); }
          100% { transform: translateX(110%); }
        }
      `}</style>
    </div>
  );
};

export default EchoVisualization;
