
import React from 'react';

interface HeaderProps {
  scrolled: boolean;
}

const Header: React.FC<HeaderProps> = ({ scrolled }) => {
  return (
    <header className="fixed top-0 left-0 right-0 z-[100] flex justify-center pt-8 pointer-events-none">
      <div className={`flex items-center justify-between gap-16 px-10 py-4 rounded-[1.25rem] border transition-all duration-700 max-w-7xl w-[92%] pointer-events-auto ${
        scrolled 
          ? 'bg-black/60 border-white/10 backdrop-blur-3xl shadow-[0_30px_80px_-15px_rgba(0,0,0,0.9)]' 
          : 'bg-transparent border-transparent'
      }`}>
        <div className="flex items-center gap-4 group cursor-pointer no-clip">
          <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center font-display font-black text-black text-xl transition-all group-hover:bg-purple-500 group-hover:text-white group-hover:rotate-[360deg] duration-700 shadow-xl">
            E
          </div>
          <span className="font-display font-bold tracking-tight text-2xl pr-2 no-clip">
            ECHO <span className="text-purple-500 italic">TRACER</span>
          </span>
        </div>
        
        <nav className="hidden lg:flex items-center gap-10 text-[11px] font-black uppercase tracking-[0.3em] text-gray-400">
          <a href="#features" className="hover:text-purple-400 transition-all hover:tracking-[0.4em]">Infrastructure</a>
          <a href="#live" className="hover:text-purple-400 transition-all hover:tracking-[0.4em]">Neural_Feed</a>
          <a href="#echo-mode" className="hover:text-purple-400 transition-all hover:tracking-[0.4em]">Echo_Node</a>
          <a href="https://t.me/echotracer" className="hover:text-purple-400 transition-all hover:tracking-[0.4em]">Terminal</a>
        </nav>

        <div className="flex items-center gap-4">
          <a href="https://x.com/EchoTracerBot" target="_blank" className="p-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl transition-all transform hover:scale-110">
            <svg className="w-4 h-4 fill-current text-white" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
          </a>
          <a 
            href="https://t.me/echotracer" 
            className="bg-white text-black text-[12px] font-black uppercase px-8 py-4 rounded-xl hover:bg-purple-600 hover:text-white transition-all transform active:scale-95 shadow-[0_15px_40px_-5px_rgba(255,255,255,0.2)]"
          >
            Connect Telegram
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
