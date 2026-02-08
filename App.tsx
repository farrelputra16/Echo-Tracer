
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import LiveAlerts from './components/LiveAlerts';
import EchoVisualization from './components/EchoVisualization';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white selection:bg-purple-600">
      {/* Dynamic Background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-purple-600/10 blur-[180px] rounded-full animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-emerald-500/5 blur-[180px] rounded-full"></div>
        <div className="absolute inset-0 moving-grid hologram-grid opacity-10 pointer-events-none"></div>
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 pointer-events-none"></div>
      </div>

      <Header scrolled={scrolled} />
      
      <main className="relative z-10">
        <Hero />
        
        <section id="features" className="py-32 px-6 max-w-7xl mx-auto">
          <div className="mb-20 text-center space-y-4">
            <div className="inline-block px-4 py-1.5 rounded-full border border-purple-500/20 bg-purple-500/5 text-purple-400 text-[10px] font-black uppercase tracking-[0.3em] mb-4">
              Infrastructure Apex
            </div>
            <h2 className="text-4xl md:text-7xl font-display font-bold tracking-tight">Built for the <span className="text-shimmer italic">Apex Predator</span></h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-lg md:text-xl font-light">Don't just track. Master the flow of liquidity with tools used by top 0.1% of Solana traders.</p>
          </div>
          <Features />
        </section>

        {/* New Analytics Illustration Section */}
        <section className="py-32 overflow-hidden relative">
          <div className="max-w-7xl mx-auto px-6">
            <div className="glass-card rounded-[4rem] p-12 md:p-20 flex flex-col lg:flex-row items-center gap-16 relative overflow-hidden">
               <div className="relative z-10 flex-1 space-y-8">
                  <h2 className="text-4xl md:text-6xl font-display font-bold leading-none italic">
                    REAL-TIME <br/>
                    <span className="text-shimmer">SIGNAL SYNC</span>
                  </h2>
                  <p className="text-gray-400 text-lg md:text-xl leading-relaxed font-light">
                    Our neural network identifies wallet clustering patterns across 10,000+ pools every second. When the cabal buys, you're the first to know.
                  </p>
                  <div className="flex gap-4">
                    <div className="px-6 py-4 rounded-2xl bg-white/5 border border-white/10 flex-1">
                      <div className="text-purple-500 font-bold text-2xl mb-1">99.9%</div>
                      <div className="text-[10px] text-gray-500 uppercase tracking-widest">Uptime</div>
                    </div>
                    <div className="px-6 py-4 rounded-2xl bg-white/5 border border-white/10 flex-1">
                      <div className="text-emerald-400 font-bold text-2xl mb-1">&lt;100ms</div>
                      <div className="text-[10px] text-gray-500 uppercase tracking-widest">Latency</div>
                    </div>
                  </div>
               </div>
               <div className="flex-1 w-full flex justify-center perspective-2000 relative">
                  {/* Floating Elements for "Illustration" effect */}
                  <div className="relative w-full aspect-square max-w-md animate-float-slow">
                    <div className="absolute inset-0 bg-gradient-to-tr from-purple-600/20 to-emerald-400/20 blur-3xl opacity-50"></div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 border border-white/10 rounded-full animate-[spin_20s_linear_infinite]"></div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 border border-white/5 rounded-full animate-[spin_30s_linear_infinite_reverse]"></div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 border border-white/5 rounded-full animate-[spin_40s_linear_infinite]"></div>
                    
                    {/* Fake Data Dots */}
                    {[...Array(8)].map((_, i) => (
                      <div 
                        key={i}
                        className="absolute w-3 h-3 bg-purple-500 rounded-full animate-pulse-glow"
                        style={{
                          top: `${50 + 40 * Math.sin(i)}%`,
                          left: `${50 + 40 * Math.cos(i)}%`,
                          animationDelay: `${i * 0.5}s`
                        }}
                      ></div>
                    ))}
                    
                    {/* GANTI BAGIAN INI: Core Logo/Icon in 3D */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 glass-card rounded-3xl flex items-center justify-center overflow-hidden shadow-2xl rotate-12 border border-white/10">
                      <img 
                        src="/images/icon.jpg" 
                        alt="Core Logo" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
               </div>
            </div>
          </div>
        </section>

        <section id="live" className="py-32 overflow-hidden relative">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-[10px] font-bold tracking-widest uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                Live Intelligence
              </div>
              <h2 className="text-4xl md:text-7xl font-display font-bold leading-tight tracking-tighter">
                Global Network <br/>
                <span className="text-purple-500 italic font-light">Surveillance</span>
              </h2>
              <p className="text-gray-400 text-xl leading-relaxed font-light">
                Capturing raw data directly from Solana RPC validators. Get buy and sell notifications <strong>600ms faster</strong> than standard trading terminals.
              </p>
              <div className="grid grid-cols-2 gap-6 pt-4">
                <div className="p-8 rounded-[2rem] bg-white/5 border border-white/10 hover:border-purple-500/30 transition-all group">
                  <div className="text-4xl font-display font-bold text-white mb-1 group-hover:text-purple-400 transition-colors">0.6s</div>
                  <div className="text-xs text-gray-500 uppercase tracking-[0.2em] font-black">Avg Latency</div>
                </div>
                <div className="p-8 rounded-[2rem] bg-white/5 border border-white/10 hover:border-emerald-500/30 transition-all group">
                  <div className="text-4xl font-display font-bold text-white mb-1 group-hover:text-emerald-400 transition-colors">10M+</div>
                  <div className="text-xs text-gray-500 uppercase tracking-[0.2em] font-black">Tx Tracked</div>
                </div>
              </div>
            </div>
            <div className="perspective-2000">
               <div className="rotate-y-12 hover:rotate-y-0 transition-transform duration-1000">
                <LiveAlerts />
               </div>
            </div>
          </div>
        </section>

        <section id="echo-mode" className="py-32 bg-gradient-to-b from-black via-purple-950/5 to-black">
          <div className="max-w-7xl mx-auto px-6 text-center mb-16">
             <div className="text-[11px] font-black uppercase tracking-[0.4em] text-purple-500 mb-6">Recursive Trace Engine</div>
             <h2 className="text-5xl md:text-8xl font-display font-bold mb-6 italic tracking-tighter">ECHO <span className="text-shimmer">MODE</span></h2>
             <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed">
               The deepest wallet mapping in the ecosystem. Trace asset flows through burner wallets and intermediate proxies automatically up to 10 levels deep.
             </p>
          </div>
          <div className="max-w-6xl mx-auto px-6">
            <EchoVisualization />
          </div>
        </section>

        <CallToAction />
      </main>

      <Footer />
    </div>
  );
};

export default App;
