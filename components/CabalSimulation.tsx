import React, { useState, useEffect } from 'react';

const CabalSimulation: React.FC = () => {
  const [nodes, setNodes] = useState<{id: number, x: number, y: number, size: number}[]>([]);
  const [isCalculating, setIsCalculating] = useState(false);

  // Initialize nodes randomly within the container area
  useEffect(() => {
    const initialNodes = Array.from({ length: 12 }, (_, i) => ({
      id: i,
      x: 200 + Math.random() * 600,
      y: 100 + Math.random() * 200,
      size: 4 + Math.random() * 8
    }));
    setNodes(initialNodes);
  }, []);

  const triggerRecalculation = () => {
    setIsCalculating(true);
    // Simulate node movement (re-mapping process)
    setNodes(prev => prev.map(node => ({
      ...node,
      x: node.x + (Math.random() - 0.5) * 100,
      y: node.y + (Math.random() - 0.5) * 50
    })));
    setTimeout(() => setIsCalculating(false), 1500);
  };

  return (
    <div className="relative glass-card rounded-[3rem] p-10 overflow-hidden bg-black/40 border-white/5 group">
      <div className="flex justify-between items-center mb-8 relative z-10">
        <div>
          <h3 className="text-2xl font-display font-black italic text-shimmer">CABAL_CLUSTER_SCAN</h3>
          <p className="text-[10px] font-mono text-gray-500 tracking-[0.3em]">PROBABILITY_ENGINE_V2</p>
        </div>
        <button 
          onClick={triggerRecalculation}
          className={`px-6 py-2 rounded-full border border-purple-500/30 text-[10px] font-black uppercase tracking-widest transition-all ${isCalculating ? 'bg-purple-500 text-white animate-pulse' : 'hover:bg-purple-500/10 text-purple-400'}`}
        >
          {isCalculating ? 'Recalculating...' : 'Trigger Re-Map'}
        </button>
      </div>

      <div className="relative h-[300px] w-full">
        <svg className="w-full h-full">
          <defs>
            <filter id="nodeGlow">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>
          
          {/* Dynamic connection lines */}
          {nodes.map((node, i) => (
            nodes.slice(i + 1, i + 3).map((target, j) => (
              <line 
                key={`${i}-${j}`}
                x1={node.x} y1={node.y} x2={target.x} y2={target.y}
                stroke={isCalculating ? "#a855f7" : "#3b82f6"}
                strokeWidth="0.5"
                strokeDasharray={isCalculating ? "none" : "4,4"}
                className="transition-all duration-1000 opacity-20"
              />
            ))
          ))}

          {/* Render Nodes */}
          {nodes.map((node) => (
            <g key={node.id} className="transition-all duration-1000 ease-in-out">
              <circle 
                cx={node.x} cy={node.y} r={node.size + 4} 
                fill={isCalculating ? "rgba(168,85,247,0.1)" : "rgba(59,130,246,0.1)"}
                className="animate-pulse"
              />
              <circle 
                cx={node.x} cy={node.y} r={node.size} 
                fill={isCalculating ? "#a855f7" : "#3b82f6"} 
                filter="url(#nodeGlow)"
                className="cursor-crosshair"
              />
            </g>
          ))}
        </svg>

        {/* Overlay Data Stats */}
        <div className="absolute bottom-4 right-4 text-right font-mono text-[9px] text-gray-600 space-y-1">
          <div>LATENCY: 0.002ms</div>
          <div>CLUSTERS_FOUND: {isCalculating ? '---' : '04'}</div>
          <div>CONFIDENCE: 98.2%</div>
        </div>
      </div>
    </div>
  );
};

export default CabalSimulation;