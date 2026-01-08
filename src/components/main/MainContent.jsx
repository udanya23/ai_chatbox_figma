import React from "react";
import Header from "./Header";
import Greeting from "./Greeting";
import SuggestionCards from "./SuggestionCards";
import ChatInput from "./ChatInput";

export default function MainContent({ onMobileMenuOpen, isMobileMenuOpen }) {
  return (
    <div className="flex-1 min-w-0 h-full flex flex-col bg-[#2A2A2A] overflow-hidden">
      <Header onMobileMenuOpen={onMobileMenuOpen} />

      {/* Center content - no scroll on mobile as requested */}
      <div className="relative flex-1 flex flex-col items-center justify-center gap-6 px-6 max-lg:pt-6 max-sm:pt-0 max-sm:gap-6 max-sm:px-1.5 overflow-hidden">
        <div className="relative z-10 flex flex-col items-center gap-4 w-full">
          <Greeting userName="John" />
          <SuggestionCards />
        </div>
      </div>

      {/* Bottom input */}
      <div className="px-6 max-sm:px-2 pb-2 w-full max-w-[960px] mx-auto mt-[10px] max-sm:mt-2">
        <ChatInput />
      </div>
    </div>
  );
}


