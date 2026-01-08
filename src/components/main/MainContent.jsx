import React from "react";
import Header from "./Header";
import Greeting from "./Greeting";
import SuggestionCards from "./SuggestionCards";
import ChatInput from "./ChatInput";

export default function MainContent() {
  return (
    <div className="flex-1 min-w-0 h-full flex flex-col bg-[#2A2A2A]">
      {/* Top header strip */}
      <Header />

      {/* Center content */}
      <div className="relative flex-1 flex flex-col items-center justify-center gap-6 px-6">
        <div className="relative z-10 flex flex-col items-center gap-4 w-full">
          <Greeting userName="John" />
          <SuggestionCards />
        </div>
      </div>

      {/* Bottom input */}
      <div className="px-6 pb-4 mt-[20px]">
        <ChatInput />
      </div>
    </div>
  );
}
