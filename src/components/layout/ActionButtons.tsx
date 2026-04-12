import React from 'react';
import { Plus } from 'lucide-react';

export const ActionButtons: React.FC = () => {
  return (
    <div className="grid grid-cols-3 gap-2 opacity-40">
      <button className="flex items-center justify-center gap-1.5 bg-[#18181b] rounded-xl py-3.5 text-sm font-medium cursor-default text-zinc-500">
        <Plus className="w-4 h-4 text-zinc-600" />
        Audio
      </button>
      <button className="flex items-center justify-center gap-1.5 bg-[#18181b] rounded-xl py-3.5 text-sm font-medium cursor-default text-zinc-500">
        <Plus className="w-4 h-4 text-zinc-600" />
        Voice
        <span className="bg-pink-500/30 text-white/50 text-[9px] font-bold px-1.5 py-0.5 rounded-md leading-none ml-0.5">NEW</span>
      </button>
      <button className="flex items-center justify-center gap-1.5 bg-[#18181b] rounded-xl py-3.5 text-sm font-medium cursor-default text-zinc-500">
        <Plus className="w-4 h-4 text-zinc-600" />
        Inspo
      </button>
    </div>
  );
};
