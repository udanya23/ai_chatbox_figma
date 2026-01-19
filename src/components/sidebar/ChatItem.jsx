import React from "react";

export default function ChatItem({ icon, label, collapsed = false, isMobile = false }) {
    return (
        <button
            className={[
                collapsed ? "w-[32px] h-[32px] justify-center" : "w-full h-[32px] max-sm:h-[42px] px-2.5 max-sm:px-3",
                "flex items-center gap-2 max-sm:gap-3",
                "rounded-[6px] max-sm:rounded-[10px]",
                "border border-white/10",
                "text-[10px] max-sm:text-[12px] leading-[140%] font-normal",
                "text-white/75 hover:bg-white/5 hover:text-white transition-all duration-300 ease-in-out",
            ].join(" ")}
            title={label}
        >
            <span className={`${collapsed ? "" : "w-4 h-4 max-sm:w-5 max-sm:h-5"} flex items-center justify-center opacity-80`}>
                <img
                    src={icon}
                    alt=""
                    draggable={false}
                    className="w-3 h-3 max-sm:w-4 max-sm:h-4 object-contain"
                />
            </span>
            {!collapsed && <span className="truncate">{label}</span>}
        </button>
    );
}
