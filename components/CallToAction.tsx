
import React from 'react';

const CallToAction: React.FC = () => {
  return (
    <section className="py-48 px-6 relative overflow-hidden flex justify-center">
      {/* Dynamic Aura */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-purple-600/10 blur-[150px] rounded-full opacity-40 animate-pulse"></div>
      
      <div className="max-w-4xl mx-auto glass-card rounded-[4rem] p-16 md:p-24 text-center relative z-10 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>
        
        <div className="relative z-10 space-y-10">
          <h2 className="text-5xl md:text-8xl font-display font-bold tracking-tighter leading-[0.8] italic">
            CAPTURE THE <br/>
            <span className="text-shimmer">NEXT FLOW.</span>
          </h2>
          
          <p className="text-gray-400 text-xl max-w-xl mx-auto font-light leading-relaxed">
            Stop guessing. Start tracking. The most advanced wallet surveillance bot ever built for Solana degens.
          </p>

          <div className="pt-8">
            <a 
              href="https://t.me/echotracer" 
              className="inline-flex items-center gap-6 bg-white text-black hover:bg-purple-500 hover:text-white px-16 py-7 rounded-2xl font-black text-2xl transition-all shadow-2xl hover:shadow-purple-500/50 active:scale-95"
            >
              Access Alpha Bot
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
            </a>
          </div>
          
          <div className="flex flex-wrap justify-center gap-10 text-[10px] font-black text-white/30 uppercase tracking-[0.3em] pt-12">
            <span>// Neural Network</span>
            <span>// Zero Lag Node</span>
            <span>// Deep Cascade</span>
          </div>
        </div>

        {/* Floating tech background elements */}
        <div className="absolute -top-20 -right-20 w-64 h-64 border border-white/5 rounded-full animate-spin-slow"></div>
        <div className="absolute -bottom-20 -left-20 w-64 h-64 border border-white/5 rounded-full animate-spin-reverse-slow"></div>
      </div>
    </section>
  );
};

export default CallToAction;
