import React from "react";

export default function NavItem({ icon: Icon, label, active = false, collapsed = false, isMobile = false, href }) {
    const Component = href ? "a" : "button";

    return (
        <Component
            href={href}
            className={[
                collapsed ? "w-[32px] h-[32px] justify-center" : "w-full h-[30px] max-sm:h-[38px] px-2.5 max-sm:px-3",
                "flex items-center gap-2 max-sm:gap-3",
                "rounded-[6px] max-sm:rounded-[10px]",
                "text-[11px] max-sm:text-[13px] leading-[140%] font-medium",
                "transition-all duration-300 ease-in-out",
                active
                    ? "border border-white/15 bg-white/5 text-white"
                    : "border border-transparent text-white/75 hover:bg-white/5 hover:text-white",
            ].join(" ")}
            title={collapsed ? label : undefined}
        >
            <span className={`${collapsed ? "" : "w-4 h-4 max-sm:w-5 max-sm:h-5"} flex items-center justify-center`}>
                <img src={Icon} alt={label} className="w-full h-full object-contain" />
            </span>
            {!collapsed && <span className="truncate">{label}</span>}
        </Component>
    );
}


