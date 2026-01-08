import React from "react";
import { HelpCircle, ArrowUpRight } from "lucide-react";

export default function HelpSupportCard() {
  return (
    <div className="w-[268px] h-[223px] flex flex-col gap-5">
      <div className="w-[268px] h-[131px] rounded-[12px] border border-white/10 p-4 flex flex-col gap-5 bg-white/[0.02]">
        <div className="w-[236px] h-[41px] flex items-start gap-3">
          <div className="h-9 w-9 rounded-[10px] bg-white/5 flex items-center justify-center">
            <HelpCircle size={18} className="text-white/80" />
          </div>

          <div className="flex-1">
            <div className="text-[14px] leading-[150%] text-white font-semibold">
              Help & Support
            </div>
            <div className="text-[12px] leading-[150%] text-white/60">
              Visit our support center
            </div>
          </div>
        </div>

        <button className="w-[236px] h-[38px] px-[10px] rounded-[8px] border border-white/10 flex items-center justify-between text-[13px] text-white/75 hover:bg-white/5 transition">
          <span>Help Center</span>
          <ArrowUpRight size={16} className="text-white/60" />
        </button>
      </div>

      {/* This second row can be used later if your Figma has extra content in that container */}
      <div className="w-[268px] h-[72px] hidden" />
    </div>
  );
}
