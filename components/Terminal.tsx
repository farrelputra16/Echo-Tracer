import React, { useState, useEffect, useRef } from 'react';

const Terminal: React.FC = () => {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<string[]>(['ECHO_TRACER OS v4.0.1 initialized...', 'Type /help to see available commands.']);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [history]);

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const cmd = input.toLowerCase().trim();
    let response = '';

    if (cmd === '/help') response = '> Available: /scan, /status, /echo, /clear';
    else if (cmd === '/scan') response = '> Scanning Solana Mainnet... Found 142 whale movements in 0.4s';
    else if (cmd === '/status') response = '> All nodes: OPERATIONAL. Jito Bundles: READY.';
    else if (cmd === '/echo') response = '> Echo Mode: ACTIVE. Depth level: 10.';
    else if (cmd === '/clear') { setHistory([]); setInput(''); return; }
    else response = `> Command not found: ${cmd}`;

    setHistory(prev => [...prev, `user@echo:~$ ${input}`, response]);
    setInput('');
  };

  return (
    <div className="fixed bottom-6 left-6 z-[200] w-80 h-48 glass-card rounded-2xl border-white/10 bg-black/80 flex flex-col shadow-2xl overflow-hidden group hover:h-64 transition-all duration-500 border-t-purple-500/50">
      <div className="bg-white/5 px-4 py-2 border-b border-white/5 flex justify-between items-center">
        <span className="text-[9px] font-black text-purple-400 tracking-widest uppercase">System_Terminal</span>
        <div className="flex gap-1">
           <div className="w-1.5 h-1.5 rounded-full bg-red-500/50"></div>
           <div className="w-1.5 h-1.5 rounded-full bg-green-500/50"></div>
        </div>
      </div>
      
      <div ref={scrollRef} className="flex-1 p-4 font-mono text-[10px] overflow-y-auto space-y-1 text-zinc-400">
        {history.map((line, i) => (
          <div key={i} className={line.startsWith('>') ? 'text-emerald-400' : ''}>{line}</div>
        ))}
      </div>

      <form onSubmit={handleCommand} className="p-3 bg-black/40 border-t border-white/5 flex items-center gap-2">
        <span className="text-purple-500 font-bold text-[10px]">$</span>
        <input 
          type="text" 
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter command..."
          className="bg-transparent border-none outline-none text-[10px] text-white w-full font-mono placeholder:text-zinc-700"
        />
      </form>
    </div>
  );
};

export default Terminal;