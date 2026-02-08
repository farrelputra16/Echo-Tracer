
import React, { useEffect, useState } from 'react';

const Hero: React.FC = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({
        x: (e.clientX / window.innerWidth - 0.5) * 50,
        y: (e.clientY / window.innerHeight - 0.5) * 50,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="relative min-h-screen flex items-center justify-center pt-32 px-6 overflow-hidden perspective-2000">
      {/* Scanline Effect */}
      <div className="scanline"></div>
      
      {/* Background Ambience */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,#1a0033_0%,transparent_75%)] opacity-60"></div>
        <div className="absolute top-0 left-0 w-full h-full hologram-grid opacity-20 [mask-image:radial-gradient(ellipse_at_center,black,transparent_80%)]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
        <div className="flex-1 text-left space-y-10" style={{ transform: `translate3d(${mousePos.x * 0.15}px, ${mousePos.y * 0.15}px, 0)` }}>
          <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full border border-purple-500/20 bg-purple-500/10 text-purple-300 text-[12px] font-black uppercase tracking-[0.3em] shadow-lg shadow-purple-500/5">
            <span className="flex h-2.5 w-2.5 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-purple-500"></span>
            </span>
            Neural_Solana_Tracer_X4
          </div>
          
          <h1 className="text-6xl md:text-[100px] font-display font-bold leading-[0.8] tracking-tighter no-clip">
            DOMINATE THE <br/>
            <span className="text-shimmer italic">Meme Cycle</span>
          </h1>
          
          <p className="text-gray-400 text-lg md:text-2xl max-w-xl font-light leading-relaxed">
            The elite surveillance engine for Solana. Trace burner cascades, unmask cabals, and capture alpha with sub-second validator sync.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-8 pt-4">
            <a 
              href="https://t.me/echotracer" 
              className="group relative w-full sm:w-auto px-14 py-6 bg-white text-black rounded-2xl font-black text-xl overflow-hidden transition-all hover:shadow-[0_0_50px_rgba(255,255,255,0.4)] hover:scale-105 active:scale-95 shadow-2xl"
            >
              <span className="relative z-10 flex items-center gap-3">
                Access Alpha
                <svg className="w-6 h-6 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
              </span>
            </a>
            <a 
              href="https://x.com/EchoTracerBot" 
              className="w-full sm:w-auto px-12 py-6 bg-zinc-900/40 hover:bg-zinc-800/60 border border-white/10 rounded-2xl font-bold text-lg backdrop-blur-xl transition-all flex items-center gap-3 hover:border-purple-500/50"
            >
              Twitter Echo
            </a>
          </div>
        </div>

        {/* 3D Floating Illustration */}
        <div className="flex-1 perspective-2000 hidden lg:block">
          <div 
            className="relative w-[500px] h-[600px] preserve-3d animate-float-slow transition-transform duration-300"
            style={{ transform: `rotateY(${mousePos.x * 0.4}deg) rotateX(${-mousePos.y * 0.4}deg)` }}
          >
            {/* Main Hologram Card */}
            <div className="absolute inset-0 glass-card rounded-[4rem] p-10 flex flex-col justify-between overflow-hidden preserve-3d shadow-[0_0_120px_-20px_rgba(168,85,247,0.3)]">
              <div className="flex justify-between items-start z-10">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-purple-600 to-emerald-400 flex items-center justify-center font-black text-3xl shadow-2xl border border-white/20">E</div>
                <div className="flex flex-col items-end gap-1">
                  <div className="text-[10px] font-mono text-purple-400 bg-purple-500/10 px-4 py-1.5 rounded-full border border-purple-500/20 tracking-widest">LIVE_VALIDATOR_001</div>
                  <div className="text-[8px] font-mono text-gray-500 uppercase tracking-widest">Latency: 0.04s</div>
                </div>
              </div>
              
              <div className="space-y-8 z-10">
                 <div className="p-6 rounded-3xl bg-black/60 border border-white/5 backdrop-blur-md transform transition-transform hover:scale-105 duration-500">
                   <div className="flex items-center justify-between mb-4">
                      <div className="text-[11px] text-gray-500 font-black uppercase tracking-widest">Tracking_Target_Primary</div>
                      <div className="text-emerald-400 text-[10px] animate-pulse">● SIGNAL_HIGH</div>
                   </div>
                   <div className="text-white font-mono text-lg font-bold">SOL_WHALE_6nK...x2p</div>
                   <div className="mt-4 h-1.5 w-full bg-zinc-800/50 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-purple-500 to-emerald-400 w-3/4 animate-[shimmer_2s_infinite]"></div>
                   </div>
                 </div>
                 
                 <div className="grid grid-cols-2 gap-4">
                    <div className="p-5 rounded-3xl bg-white/5 border border-white/10 flex flex-col items-center justify-center text-center">
                       <div className="text-[10px] text-gray-500 font-bold uppercase mb-1">Cabal_Sync</div>
                       <div className="text-purple-400 font-black text-2xl tracking-tighter">DETECTED</div>
                    </div>
                    <div className="p-5 rounded-3xl bg-emerald-500/5 border border-emerald-500/10 flex flex-col items-center justify-center text-center">
                       <div className="text-[10px] text-gray-500 font-bold uppercase mb-1">Estimated_PnL</div>
                       <div className="text-emerald-400 font-black text-2xl tracking-tighter">+812%</div>
                    </div>
                 </div>
              </div>

              <div className="pt-6 flex items-center justify-between z-10">
                <div className="flex items-center gap-4 text-[10px] font-mono text-gray-500">
                  <span className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(20,241,149,0.5)]"></span> JITO_BUNDLES: READY</span>
                </div>
                <div className="text-white/20 text-[20px] font-black italic">v4.0.1</div>
              </div>

              {/* Internal glow FX */}
              <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-purple-600/10 blur-[100px] rounded-full"></div>
              <div className="absolute -top-20 -left-20 w-80 h-80 bg-emerald-500/5 blur-[100px] rounded-full"></div>
            </div>

            {/* Depth ghost layers */}
            <div className="absolute inset-0 glass-card rounded-[4rem] -translate-z-10 scale-95 opacity-40 blur-[2px]"></div>
            <div className="absolute inset-0 glass-card rounded-[4rem] -translate-z-20 scale-90 opacity-15 blur-[4px]"></div>
          </div>
        </div>
      </div>
      
      {/* 3D Floor Grid */}
      <div className="absolute bottom-0 left-0 right-0 h-[400px] -z-20 [perspective:1200px]">
        <div className="w-[200%] h-full -left-1/2 bg-[linear-gradient(to_right,#ffffff05_1.5px,transparent_1.5px),linear-gradient(to_bottom,#ffffff05_1.5px,transparent_1.5px)] [background-size:100px_100px] [transform:rotateX(75deg)_translateY(-150px)] [origin:bottom] animate-pulse"></div>
      </div>
    </div>
  );
};

export default Hero;
