
import React, { useState, useEffect } from 'react';

interface Alert {
  id: number;
  type: 'BUY' | 'SELL' | 'WHALE' | 'ECHO' | 'CABAL';
  wallet: string;
  token: string;
  amountSol: string;
  amountUsd: string;
  time: string;
}

const LiveAlerts: React.FC = () => {
  const [alerts, setAlerts] = useState<Alert[]>([]);

  const tokens = ['PEPE', 'WIF', 'BONK', 'JUP', 'POPCAT', 'MYRO', 'BOME', 'SLERF', 'MEW', 'GRASS'];
  const wallets = ['6nK...x2p', '4fT...9Lq', 'Ax1...VvM', 'Zp9...1jK', '9qR...7xZ', '3bC...0vK'];

  useEffect(() => {
    const generateAlert = () => {
      const types: Alert['type'][] = ['BUY', 'SELL', 'WHALE', 'ECHO', 'CABAL'];
      const type = types[Math.floor(Math.random() * types.length)];
      const solValue = type === 'WHALE' ? (Math.random() * 500 + 100) : (Math.random() * 50 + 1);
      const sol = solValue.toFixed(2);
      const newAlert: Alert = {
        id: Date.now(),
        type,
        wallet: wallets[Math.floor(Math.random() * wallets.length)],
        token: tokens[Math.floor(Math.random() * tokens.length)],
        amountSol: sol,
        amountUsd: (parseFloat(sol) * 145).toLocaleString('en-US', { style: 'currency', currency: 'USD' }),
        time: 'Just now'
      };

      setAlerts(prev => [newAlert, ...prev].slice(0, 6));
    };

    const interval = setInterval(generateAlert, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full max-w-lg mx-auto h-[550px] glass-card rounded-[2.5rem] border border-white/10 overflow-hidden flex flex-col font-mono text-[12px] shadow-2xl transition-all hover:border-purple-500/30">
      <div className="bg-white/5 px-6 py-4 border-b border-white/10 flex justify-between items-center backdrop-blur-xl">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500/30 border border-red-500/50"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500/30 border border-yellow-500/50"></div>
          <div className="w-3 h-3 rounded-full bg-green-500/30 border border-green-500/50"></div>
        </div>
        <div className="flex items-center gap-2">
           <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
           <span className="text-gray-400 text-[10px] font-black tracking-[0.2em]">ECHO_TRACER_V4.0 // MAINNET</span>
        </div>
      </div>
      
      <div className="flex-1 p-6 overflow-y-auto space-y-5">
        {alerts.map((alert) => (
          <div key={alert.id} className="animate-in fade-in slide-in-from-top-4 duration-700 border-l-2 pl-4 py-1" style={{ 
            borderColor: 
              alert.type === 'BUY' ? '#14F195' : 
              alert.type === 'SELL' ? '#ef4444' : 
              alert.type === 'WHALE' ? '#f59e0b' : 
              alert.type === 'CABAL' ? '#3b82f6' : '#a855f7'
          }}>
            <div className="flex justify-between items-start mb-2">
              <span className={`font-black text-xs uppercase tracking-wider ${
                alert.type === 'BUY' ? 'text-emerald-400' : 
                alert.type === 'SELL' ? 'text-red-400' : 
                alert.type === 'WHALE' ? 'text-orange-400' : 
                alert.type === 'CABAL' ? 'text-blue-400' : 'text-purple-400'
              }`}>
                [{alert.type}] {alert.token}
              </span>
              <span className="text-gray-600 text-[9px] font-bold">NODE_02 // SYNCED</span>
            </div>
            <div className="text-gray-400 space-y-1">
              <div className="flex justify-between">
                <span>WALLET: <span className="text-zinc-300 font-bold underline cursor-pointer hover:text-white transition-colors">{alert.wallet}</span></span>
                <span className="text-gray-600">{alert.time}</span>
              </div>
              <div className="flex gap-4">
                <span>AMOUNT: <span className="text-white font-black">{alert.amountSol} SOL</span></span>
                <span className="text-zinc-500">({alert.amountUsd})</span>
              </div>
            </div>
            {alert.type === 'ECHO' && (
              <div className="mt-3 text-[10px] text-purple-400/80 bg-purple-500/5 border border-purple-500/20 p-2 rounded-xl italic flex items-center gap-2">
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
                CASCADE_DETECTED: Source identified 7 hops away.
              </div>
            )}
            {alert.type === 'CABAL' && (
              <div className="mt-3 text-[10px] text-blue-400/80 bg-blue-500/5 border border-blue-500/20 p-2 rounded-xl italic flex items-center gap-2">
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
                INSIDER_CLUSTER: 4 wallets buying simultaneously.
              </div>
            )}
          </div>
        ))}
        {alerts.length === 0 && (
          <div className="h-full flex flex-col items-center justify-center space-y-4">
             <div className="w-12 h-12 border-2 border-purple-500/30 border-t-purple-500 rounded-full animate-spin"></div>
             <div className="text-gray-500 font-bold tracking-widest text-[10px]">INITIALIZING_VALIDATOR_SYNC...</div>
          </div>
        )}
      </div>
      
      <div className="bg-emerald-500/5 p-4 border-t border-white/10 text-[10px] flex items-center justify-between">
        <div className="flex items-center gap-2">
           <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
           <span className="text-emerald-500 font-black uppercase tracking-widest">Live Flow Mapping</span>
        </div>
        <span className="text-zinc-600 font-bold italic">14,291 TRACKED_WALLETS</span>
      </div>
    </div>
  );
};

export default LiveAlerts;
