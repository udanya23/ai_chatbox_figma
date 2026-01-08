import React, { useMemo, useRef, useState } from "react";
import { Paperclip, Image as ImageIcon, ChevronDown, Plus } from "lucide-react";
import globeIcon from "../../assets/globe-icon.png";
import sendArrow from "../../assets/send-arrow.png";

export default function ChatInput() {
  const [message, setMessage] = useState("");
  const [open, setOpen] = useState(false);
  const [scope, setScope] = useState("All Web");

  const wrapRef = useRef(null);

  const options = useMemo(() => ["All Web", "AI Web", "Docs Only"], []);

  const onSend = () => {
    const trimmed = message.trim();
    if (!trimmed) return;

    // dummy action for now
    console.log("SEND:", { scope, message: trimmed });

    setMessage("");
  };

  const onKeyDown = (e) => {
    // Enter to send, Shift+Enter for new line
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      onSend();
    }
  };

  const onSelectScope = (value) => {
    setScope(value);
    setOpen(false);
    console.log("SCOPE:", value); // dummy
  };

  return (
    <div className="w-full max-w-[820px] mx-auto flex flex-col">
      {/* Desktop/Tablet version */}
      <div
        ref={wrapRef}
        className="w-full rounded-[14px] border border-white/10 overflow-hidden bg-[#212121] hidden sm:block"
      >
        {/* Top area */}
        <div className="px-4 py-3 flex items-start justify-between gap-3 min-h-[50px]">
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={onKeyDown}
            rows={2}
            placeholder="Ask me anything..."
            className="flex-1 bg-transparent text-[12px] text-white placeholder:text-white/95 outline-none resize-none leading-[18px] h-[40px]"
          />

          {/* Dropdown */}
          <div className="relative">
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              className="h-[28px] flex items-center gap-1.5 px-3
                         rounded-full bg-[#3C3C3C] hover:bg-[#4a4a4a]
                         transition-colors flex-shrink-0 border border-white/10"
            >
              <img src={globeIcon} alt="" className="w-3 h-3 object-contain" />
              <span className="text-[10px] text-white">{scope}</span>
              <ChevronDown size={12} className="text-white/60" />
            </button>

            {open && (
              <div className="absolute right-0 mt-1.5 w-[130px] rounded-[10px] border border-white/10 bg-[#2A2A2A] shadow-lg overflow-hidden z-50">
                {options.map((opt) => (
                  <button
                    key={opt}
                    type="button"
                    onClick={() => onSelectScope(opt)}
                    className="w-full px-2.5 py-1.5 text-left text-[10px] text-white/80 hover:bg-white/10 transition"
                  >
                    {opt}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Bottom toolbar */}
        <div className="px-4 pb-2 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={() => console.log("ATTACHMENT clicked")}
              className="flex items-center gap-1.5 text-white/65 hover:text-white/85 transition-colors"
            >
              <Paperclip size={13} />
              <span className="text-[10px]">Add Attachment</span>
            </button>

            <button
              type="button"
              onClick={() => console.log("USE IMAGE clicked")}
              className="flex items-center gap-1.5 text-white/65 hover:text-white/85 transition-colors"
            >
              <ImageIcon size={13} />
              <span className="text-[10px]">Use Image</span>
            </button>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-[10px] text-white/65">0/1500</span>
            <button
              type="button"
              onClick={onSend}
              className="p-0.5 hover:opacity-80 active:opacity-60 transition cursor-pointer"
              aria-label="Send message"
              title="Send"
            >
              <img src={sendArrow} alt="Send" className="w-6 h-6 object-contain" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile version - Split layout */}
      <div className="w-full sm:hidden flex items-center gap-2 mb-0">
        {/* Plus button */}
        <button
          type="button"
          onClick={() => console.log("ADD clicked")}
          className="w-[40px] h-[40px] rounded-[10px] border border-white/10 bg-[#212121] flex items-center justify-center text-white hover:bg-[#2a2a2a] transition flex-shrink-0"
        >
          <Plus size={20} />
        </button>

        {/* Input Container */}
        <div className="flex-1 h-[40px] rounded-[10px] border border-white/10 bg-[#333333] flex items-center px-3 gap-2">
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={onKeyDown}
            placeholder="Ask me anything..."
            className="flex-1 min-w-0 bg-transparent text-[13px] text-white placeholder:text-white/60 outline-none"
          />
          <span className="text-[10px] text-white/50 flex-shrink-0 whitespace-nowrap">0/1500</span>
          <button
            type="button"
            onClick={onSend}
            className="w-[24px] h-[24px] flex items-center justify-center hover:opacity-80 active:opacity-60 transition cursor-pointer flex-shrink-0"
            aria-label="Send message"
          >
            <img src={sendArrow} alt="Send" className="w-5 h-5 object-contain" />
          </button>
        </div>
      </div>

      {/* Privacy notice */}
      <p className="mt-3 max-sm:mt-2 text-center text-[9px] max-sm:text-[10px] text-white/50">
        Centra may display inaccurate info, so please double check the response.{" "}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            console.log("Privacy link clicked"); // dummy
          }}
          className="underline text-white/90 hover:text-white transition-colors"
        >
          Your Privacy &amp; Centra AI
        </a>
      </p>
    </div>
  );
}

