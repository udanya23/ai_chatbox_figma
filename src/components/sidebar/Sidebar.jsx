import React from "react";
import { MessageCircle, Video, Image as ImageIcon, Code2 } from "lucide-react";
import NavItem from "./NavItem";
import ChatItem from "./ChatItem";
import UpgradeCard from "./UpgradeCard";
import UserProfile from "./UserProfile";
import codegnanLogo from "../../assets/codegnan-logo.png";

// Toggle icon SVG component matching the provided design
const ToggleIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="2" y="4" width="20" height="16" rx="4" stroke="currentColor" strokeWidth="1.5" fill="none" />
    <circle cx="8" cy="9" r="2" fill="currentColor" />
    <circle cx="8" cy="15" r="2" fill="currentColor" />
  </svg>
);

export default function Sidebar({ isCollapsed = false, onToggle }) {
  return (
    <aside
      className={`
        h-screen p-3 bg-[#0b0b0b] flex flex-col flex-shrink-0
        transition-all duration-300 ease-in-out
        ${isCollapsed ? "w-[52px]" : "w-[200px]"}
      `}
    >
      {/* Full height container with space-between */}
      <div className="h-full flex flex-col justify-between overflow-hidden gap-3">
        {/* TOP SECTION - fills available space */}
        <div className="flex flex-col gap-3 flex-1 min-h-0">
          {/* HEADER: Logo and toggle */}
          <div className={`${isCollapsed ? "flex-col gap-2" : ""} flex items-center justify-between`}>
            {/* Logo - hide when collapsed */}
            {!isCollapsed && (
              <div className="flex items-center">
                <img
                  src={codegnanLogo}
                  alt="Codegnan"
                  className="h-[18px] object-contain"
                />
              </div>
            )}

            {/* Sidebar toggle button */}
            <button
              onClick={onToggle}
              className="w-[22px] h-[22px] rounded-[4px] hover:bg-white/5 flex items-center justify-center text-white/50 hover:text-white transition-colors"
            >
              <ToggleIcon />
            </button>
          </div>

          {/* General Section */}
          <div className={`flex flex-col gap-1.5 ${isCollapsed ? "items-center" : ""}`}>
            {/* General header - hide when collapsed */}
            {!isCollapsed && (
              <span className="text-[10px] leading-[140%] font-normal text-white/55 px-1.5">
                General
              </span>
            )}

            {/* Menu items */}
            <div className={`flex flex-col gap-0.5 ${isCollapsed ? "items-center" : ""}`}>
              <NavItem icon={MessageCircle} label="AI Chat" active collapsed={isCollapsed} />
              <NavItem icon={Video} label="AI Video" collapsed={isCollapsed} />
              <NavItem icon={ImageIcon} label="AI Image" collapsed={isCollapsed} />
              <NavItem icon={Code2} label="AI Development" collapsed={isCollapsed} />
            </div>
          </div>

          {/* Previous Chat Section */}
          <div className={`flex flex-col gap-1.5 ${isCollapsed ? "items-center" : ""}`}>
            {/* Previous chat header - hide when collapsed */}
            {!isCollapsed && (
              <span className="text-[10px] leading-[140%] font-normal text-white/55 px-1.5">
                Previous Chat
              </span>
            )}

            {/* Chat history items */}
            <div className={`flex flex-col gap-1 ${isCollapsed ? "items-center" : ""}`}>
              <ChatItem label="Describe the benefits for a..." collapsed={isCollapsed} />
              <ChatItem label="Generate a list current we..." collapsed={isCollapsed} />
              <ChatItem label="Condense the following se..." collapsed={isCollapsed} />
              <ChatItem label="Describe what post moder..." collapsed={isCollapsed} />
            </div>
          </div>
        </div>

        {/* BOTTOM SECTION - hide when collapsed */}
        {!isCollapsed && (
          <div className="flex flex-col gap-2 flex-shrink-0 mt-auto">
            <UpgradeCard />
            <UserProfile />
          </div>
        )}
      </div>
    </aside>
  );
}
