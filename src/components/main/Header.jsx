import React, { useState } from "react";
import { ChevronDown, Plus } from "lucide-react";
import UiIcon from "../../assets/ui-icons.png";
import upgradeIcon from "../../assets/upgrade-icon.png";

export default function Header({ onMobileMenuOpen }) {
  const [modelOpen, setModelOpen] = useState(false);
  const [selectedModel, setSelectedModel] = useState("SuperAI 2.0");

  return (
    <header className="w-full h-[44px] max-sm:h-[40px] px-4 max-sm:px-4 flex items-center justify-between gap-2 bg-[#0b0b0b]">
      {/* Mobile menu toggle - only visible on tablet/mobile (< 1024px) */}
      <button
        onClick={onMobileMenuOpen}
        className="w-[28px] h-[28px] max-sm:w-[28px] max-sm:h-[28px] rounded-[6px] max-sm:rounded-[6px] max-sm:border max-sm:border-white/20 hover:bg-white/5 flex items-center justify-center text-white/50 hover:text-white transition-colors lg:hidden flex-shrink-0"
      >
        <img
          src={UiIcon}
          alt="Menu"
          draggable={false}
          className="w-[22px] h-[22px] max-sm:w-[18px] max-sm:h-[18px] object-contain"
        />
      </button>

      {/* Spacer to push buttons to the right on all screen sizes */}
      <div className="flex-1" />

      {/* Right side buttons */}
      <div className="flex items-center gap-2 flex-shrink-0">
        {/* SuperAI 2.0 Dropdown */}
        <div className="relative">
          <button
            onClick={() => setModelOpen(!modelOpen)}
            className="h-[26px] max-sm:h-[28px] px-2.5 max-sm:px-2 flex items-center gap-1.5 rounded-[6px] max-sm:rounded-[8px] bg-white/10 border border-white/10 hover:bg-white/15 transition cursor-pointer"
          >
            <img src={upgradeIcon} alt="" className="w-3 h-3 max-sm:w-3.5 max-sm:h-3.5 object-contain" />
            <span className="text-[10px] max-sm:text-[11px] font-medium text-white">{selectedModel}</span>
            <ChevronDown size={11} className="text-white/60 max-sm:w-3 max-sm:h-3" />
          </button>

          {/* Model Menu */}
          {modelOpen && (
            <div className="absolute top-full right-0 mt-1 w-[140px] bg-[#1a1a1a] border border-white/10 rounded-[8px] shadow-xl z-50 overflow-hidden flex flex-col py-1">
              {[
                "SuperAI 2.0",
                "SuperAI Turbo",
                "GPT-4",
                "Claude 3.5"
              ].map((model) => (
                <button
                  key={model}
                  onClick={() => {
                    setSelectedModel(model);
                    setModelOpen(false);
                  }}
                  className={`px-3 py-2 text-left text-[11px] hover:bg-white/5 transition-colors ${selectedModel === model ? "text-white font-medium" : "text-white/60"}`}
                >
                  {model}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* New Chat Button - compact on mobile (just + icon) */}
        <button className="h-[26px] max-sm:h-[28px] px-2.5 max-sm:w-[28px] max-sm:px-0 flex items-center justify-center gap-1.5 rounded-[6px] max-sm:rounded-[8px] bg-white text-black hover:bg-white/90 transition">
          <Plus size={11} className="max-sm:w-4 max-sm:h-4" />
          <span className="text-[8px] font-medium max-sm:hidden">New Chat</span>
        </button>
      </div>
    </header>
  );
}
