import React, { useState } from "react";
import Sidebar from "./components/sidebar/Sidebar";
import MainContent from "./components/main/MainContent";

export default function App() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div className="w-screen h-screen overflow-hidden flex bg-[#0b0b0b]">
      <Sidebar isCollapsed={isCollapsed} onToggle={() => setIsCollapsed(!isCollapsed)} />
      <MainContent />
    </div>
  );
}
