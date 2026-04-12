import React from 'react';
import { Music, ChevronDown } from 'lucide-react';

export const TopBar: React.FC = () => {
  return (
    <div className="flex items-center justify-between p-4 border-b border-zinc-800/60 opacity-50">
      <button className="flex items-center gap-2 bg-zinc-900/80 border border-zinc-800/80 rounded-full px-3 py-1.5 text-sm font-medium cursor-default text-zinc-500">
        <Music className="w-3.5 h-3.5" />
        ∞
      </button>

      <div className="flex bg-zinc-900/80 border border-zinc-800/80 rounded-full p-0.5">
        <button className="px-3 py-1 text-sm font-medium rounded-full text-zinc-600 cursor-default">Simple</button>
        <button className="px-3 py-1 text-sm font-medium rounded-full bg-zinc-800/50 text-zinc-500 shadow-sm cursor-default">Advanced</button>
        <button className="px-3 py-1 text-sm font-medium rounded-full text-zinc-600 cursor-default">Sounds</button>
      </div>

      <button className="flex items-center gap-1.5 bg-zinc-900/80 border border-zinc-800/80 rounded-full pl-3 pr-2 py-1.5 text-sm font-medium cursor-default text-zinc-500">
        v5.5
        <ChevronDown className="w-3.5 h-3.5 text-zinc-600" />
      </button>
    </div>
  );
};
