import React from "react";
import { MessageSquareText } from "lucide-react";

export default function ChatItem({ label, collapsed = false }) {
    return (
        <button
            className={[
                collapsed ? "w-[32px] h-[32px] justify-center" : "w-full h-[32px] px-2.5",
                "flex items-center gap-2",
                "rounded-[6px] border border-white/10",
                "text-[10px] leading-[140%] font-normal",
                "text-white/75 hover:bg-white/5 hover:text-white transition-all duration-300 ease-in-out",
            ].join(" ")}
            title={label}
        >
            <span className={`${collapsed ? "" : "w-4 h-4"} flex items-center justify-center opacity-80`}>
                <MessageSquareText size={12} />
            </span>
            {!collapsed && <span className="truncate">{label}</span>}
        </button>
    );
}
