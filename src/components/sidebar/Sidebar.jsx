import React from "react";
import NavItem from "./NavItem";
import ChatItem from "./ChatItem";
import UpgradeCard from "./UpgradeCard";
import UserProfile from "./UserProfile";
import codegnanLogo from "../../assets/codegnan-logo.png";
import chatIcon from "../../assets/chat-icon.png";
import videoIcon from "../../assets/video-icon.png";
import imageIcon from "../../assets/image-icon.png";
import codeIcon from "../../assets/code-icon.png";
import UiIcon from "../../assets/ui-icons.png";
import AIChat from "../../assets/tabler-icon-brand-hipchat.png";

export default function Sidebar({
  isCollapsed = false,
  onToggle,
  isMobileMenuOpen = false,
  onMobileMenuClose,
}) {
  return (
    <>
      {/* Backdrop overlay - only visible on tablet */}
      <div
        className={`
          fixed inset-0 bg-black/60 z-40
          lg:hidden max-sm:hidden
          transition-opacity duration-300
          ${isMobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"}
        `}
        onClick={onMobileMenuClose}
      />

      {/* Sidebar container */}
      <aside
        className={`
          h-screen flex flex-col flex-shrink-0 fixed left-0 top-0
          transition-all duration-300 ease-in-out

          /* Desktop */
          lg:relative lg:translate-x-0 lg:bg-[#0b0b0b] lg:p-3
          ${isCollapsed ? "lg:w-[52px]" : "lg:w-[220px]"}

          /* Tablet */
          max-lg:z-50 max-lg:w-[200px] max-lg:bg-[#0b0b0b] max-lg:p-3
          ${isMobileMenuOpen ? "max-lg:translate-x-0" : "max-lg:-translate-x-full"}

          /* Mobile */
          max-sm:w-full max-sm:bg-[#0b0b0b] max-sm:p-4 max-sm:z-50
        `}
      >
        {/* SCROLLABLE CONTENT */}
        <div
          className="flex-1 flex flex-col gap-3 max-sm:gap-4 overflow-y-auto overflow-x-hidden scrollbar-hide pb-2"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          <div className="flex flex-col gap-3 max-sm:gap-4">
            {/* HEADER */}
            <div
              className={`${isCollapsed ? "lg:flex-col lg:gap-2" : ""
                } flex items-center justify-between flex-shrink-0`}
            >
              {/* Logo */}
              <div className={`flex items-center ${isCollapsed ? "lg:hidden" : ""}`}>
                <img
                  src={codegnanLogo}
                  alt="Codegnan"
                  className="h-[23px] max-sm:h-[22px] object-contain"
                />
              </div>

              {/* Desktop toggle button */}
              <button
                onClick={onToggle}
                className="w-[15px] h-[15px] rounded-[3px] hover:bg-white/5 flex items-center justify-center text-white/50 hover:text-white transition-colors hidden lg:flex"
                aria-label="Toggle sidebar"
                title="Toggle"
              >
                <img
                  src={UiIcon}
                  alt="Toggle"
                  draggable={false}
                  className="w-[22px] h-[22px] max-sm:w-[15px] max-sm:h-[24px] object-contain"
                />
              </button>

              {/* Tablet + Mobile close button */}
              <button
                onClick={onMobileMenuClose}
                className="w-[16px] h-[16px] max-sm:w-[15px] max-sm:h-[16px] rounded-[6px] hover:bg-white/5 flex items-center justify-center transition-colors lg:hidden"
                aria-label="Close menu"
                title="Close"
              >
                <img
                  src={UiIcon}
                  alt="Close"
                  draggable={false}
                  className="w-[22px] h-[22px] max-sm:w-[24px] max-sm:h-[24px] object-contain"
                />
              </button>
            </div>

            {/* General */}
            <div className={`flex flex-col gap-1.5 max-sm:gap-2 ${isCollapsed ? "lg:items-center" : ""}`}>
              <span className={`text-[10px] max-sm:text-[11px] leading-[140%] font-normal text-white/55 px-1.5 ${isCollapsed ? "lg:hidden" : ""}`}>
                General
              </span>

              <div className={`flex flex-col gap-0.5 max-sm:gap-1 ${isCollapsed ? "lg:items-center" : ""}`}>
                <NavItem icon={AIChat} label="AI Chat" active collapsed={isCollapsed} isMobile href="/chat" />
                <NavItem icon={videoIcon} label="AI Video" collapsed={isCollapsed} isMobile href="/video" />
                <NavItem icon={imageIcon} label="AI Image" collapsed={isCollapsed} isMobile href="/image" />
                <NavItem icon={codeIcon} label="AI Development" collapsed={isCollapsed} isMobile href="/code" />
              </div>
            </div>

            {/* Previous Chats */}
            <div className={`flex flex-col gap-1.5 max-sm:gap-2 ${isCollapsed ? "lg:items-center" : ""}`}>
              <span className={`text-[10px] max-sm:text-[11px] leading-[140%] font-normal text-white/55 px-1.5 ${isCollapsed ? "lg:hidden" : ""}`}>
                Previous Chat
              </span>

              <div className={`flex flex-col gap-1 max-sm:gap-2 ${isCollapsed ? "lg:items-center" : ""}`}>
                <ChatItem icon = {chatIcon} label="Describe the benefits for adopting" collapsed={isCollapsed} isMobile />
                <ChatItem icon = {chatIcon} label="Generate a list current website of m..." collapsed={isCollapsed} isMobile />
                <ChatItem icon = {chatIcon} label="Condense the following sentence" collapsed={isCollapsed} isMobile />
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className={`flex-shrink-0 pt-2 flex flex-col gap-2 max-sm:gap-3 ${isCollapsed ? "lg:hidden" : ""}`}>
          <UpgradeCard isMobile />
          <UserProfile isMobile />
        </div>
      </aside >
    </>
  );
}
