import React from "react";

export default function NavItem({ icon: Icon, label, active = false, collapsed = false }) {
    return (
        <button
            className={[
                collapsed ? "w-[32px] h-[32px] justify-center" : "w-full h-[30px] px-2.5",
                "flex items-center gap-2",
                "rounded-[6px]",
                "text-[11px] leading-[140%] font-medium",
                "transition-all duration-300 ease-in-out",
                active
                    ? "border border-white/15 bg-white/5 text-white"
                    : "border border-transparent text-white/75 hover:bg-white/5 hover:text-white",
            ].join(" ")}
            title={collapsed ? label : undefined}
        >
            <span className={`${collapsed ? "" : "w-4 h-4"} flex items-center justify-center`}>
                <Icon size={14} />
            </span>
            {!collapsed && <span className="truncate">{label}</span>}
        </button>
    );
}
