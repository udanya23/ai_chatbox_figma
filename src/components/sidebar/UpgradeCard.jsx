
import React from "react";
import upgradeIcon from "../../assets/upgrade-icon.png";

export default function UpgradeCard({ isMobile = false }) {
  return (
    <div
      className="w-full rounded-[10px] max-sm:rounded-[14px] p-2.5 max-sm:p-4 flex flex-col gap-2 max-sm:gap-3"
      style={{
        background: "linear-gradient(135deg, #5B5CF6 0%, #4F46E5 100%)",
        border: "1px solid rgba(255,255,255,0.14)",
        boxShadow: "0px 8px 24px rgba(91, 92, 246, 0.25)",
      }}
    >
      <div className="flex items-start gap-2 max-sm:gap-3">
        {/* Icon circle */}
        <div className="w-7 h-7 max-sm:w-9 max-sm:h-9 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
          <img
            src={upgradeIcon}
            alt="upgrade"
            draggable={false}
            className="w-full h-full object-contain p-[4px] max-sm:p-[5px]"
          />
        </div>

        <div className="flex-1">
          <div className="text-[11px] max-sm:text-[14px] leading-[130%] font-semibold text-white">
            Upgrade Plan
          </div>
          <div className="text-[9px] max-sm:text-[11px] leading-[130%] text-white/80">
            More access to the best models
          </div>
        </div>
      </div>

      <button className="w-full h-[26px] max-sm:h-[36px] rounded-[8px] max-sm:rounded-[10px] bg-white text-black text-[10px] max-sm:text-[13px] font-medium hover:bg-white/95 transition">
        Upgrade Plan
      </button>
    </div>
  );
}

