import React from "react";
import sparklesIcon from "../../images/tabler-icon-sparkles.png";

export default function UpgradeCard() {
  return (
    <div
      className="w-full rounded-[10px] p-2.5 flex flex-col gap-2"
      style={{
        background: "linear-gradient(135deg, #5B5CF6 0%, #4F46E5 100%)",
        border: "1px solid rgba(255,255,255,0.14)",
        boxShadow: "0px 8px 24px rgba(91, 92, 246, 0.25)",
      }}
    >
      <div className="flex items-start gap-2">
        {/* Icon circle */}
        <div className="w-7 h-7 rounded-full bg-white flex items-center justify-center flex-shrink-0">
          <img
            src={sparklesIcon}
            alt="upgrade"
            draggable={false}
            className="w-full h-full object-contain p-[4px]"
          />
        </div>

        <div className="flex-1">
          <div className="text-[11px] leading-[130%] font-semibold text-white">
            Upgrade Plan
          </div>
          <div className="text-[9px] leading-[130%] text-white/80">
            More access to the best models
          </div>
        </div>
      </div>

      <button className="w-full h-[26px] rounded-[8px] bg-white text-black text-[10px] font-medium hover:bg-white/95 transition">
        Upgrade Plan
      </button>
    </div>
  );
}
