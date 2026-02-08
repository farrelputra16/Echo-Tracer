
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-16 px-6 sm:px-10 lg:px-16 border-t border-white/5 bg-black/50 backdrop-blur-md">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
        <div className="flex items-center gap-4 group no-clip">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-purple-600 to-emerald-400 flex items-center justify-center font-bold text-white shadow-xl transition-transform group-hover:scale-110">
            E
          </div>
          <span className="text-xl font-display font-bold tracking-tight pr-2 no-clip">
            ECHO <span className="text-emerald-400 italic">TRACER</span>
          </span>
        </div>
        
        <div className="text-gray-500 text-sm font-medium tracking-wide">
          &copy; {new Date().getFullYear()} <span className="text-white">Echo Tracer</span>. Engineered for Solana. Not financial advice.
        </div>

        <div className="flex items-center gap-10">
          <a href="https://x.com/EchoTracerBot" target="_blank" className="text-gray-400 hover:text-white transition-all text-xs font-black uppercase tracking-[0.2em] hover:scale-105">Twitter</a>
          <a href="https://t.me/echotracer" target="_blank" className="text-gray-400 hover:text-white transition-all text-xs font-black uppercase tracking-[0.2em] hover:scale-105">Telegram</a>
          <a href="#" className="text-gray-400 hover:text-white transition-all text-xs font-black uppercase tracking-[0.2em] hover:scale-105">Docs</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
