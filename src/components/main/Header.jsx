import React from "react";
import { Sparkles, ChevronDown, Plus } from "lucide-react";

export default function Header() {
  return (
    <header className="w-full h-[44px] px-4 flex items-center justify-end gap-2 bg-[#0b0b0b]">
      {/* SuperAI 2.0 Dropdown */}
      <button className="h-[26px] px-2.5 flex items-center gap-1.5 rounded-[6px] bg-white/10 border border-white/10 hover:bg-white/15 transition">
        <Sparkles size={11} className="text-purple-300" />
        <span className="text-[10px] font-medium text-white">SuperAI 2.0</span>
        <ChevronDown size={11} className="text-white/60" />
      </button>

      {/* New Chat Button */}
      <button className="h-[26px] px-2.5 flex items-center gap-1.5 rounded-[6px] bg-white text-black hover:bg-white/90 transition">
        <Plus size={11} />
        <span className="text-[10px] font-medium">New Chat</span>
      </button>
    </header>
  );
}
