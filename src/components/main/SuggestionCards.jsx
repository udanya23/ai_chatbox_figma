import React from "react";
import iconDocument from "../../assets/icon-document.png";
import iconPresentation from "../../assets/icon-presentation.png";
import iconList from "../../assets/icon-list.png";

const suggestions = [
  { icon: iconDocument, text: "Help Me To Create A Personal Branding And Web Page" },
  { icon: iconPresentation, text: "Write A Report Based On My Website Data" },
  { icon: iconList, text: "Write A Tailored, Engaging Content, With A Focus Quality" },
];

export default function SuggestionCards() {
  return (
    <div className="w-full max-w-[720px] max-lg:max-w-[500px] flex flex-wrap items-center justify-center gap-2 max-sm:gap-2">
      {suggestions.map((item, index) => (
        <button
          key={index}
          className={`
            flex-1 min-w-[200px] max-w-[230px] h-[100px] max-lg:h-[90px] p-3.5 rounded-[10px]
            border border-white/10 bg-[#333333]
            hover:bg-[#3A3A3A] hover:border-white/15 transition
            flex flex-col items-start gap-2.5 text-left
            
            /* Mobile: first 2 cards half width, 3rd card full width */
            max-sm:min-w-0 max-sm:p-2.5 max-sm:rounded-[16px]
            ${index < 2
              ? "max-lg:flex-[1_1_calc(50%-6px)] max-lg:max-w-[calc(50%-6px)] max-sm:flex-[1_1_calc(50%-4px)] max-sm:max-w-[calc(50%-4px)] max-sm:h-[110px]"
              : "max-lg:flex-[1_1_calc(50%-6px)] max-lg:max-w-[calc(50%-6px)] max-sm:flex-[1_1_100%] max-sm:max-w-full max-sm:h-[100px]"
            }
          `}
        >
          <div className="w-[32px] h-[32px] max-sm:w-[28px] max-sm:h-[28px] rounded-[8px] overflow-hidden flex items-center justify-center">
            <img
              src={item.icon}
              alt=""
              draggable={false}
              className="w-full h-full object-contain"
            />
          </div>

          <span className="text-[10px] max-sm:text-[10px] leading-[140%] text-white/90 overflow-hidden text-ellipsis line-clamp-2">
            {item.text}
          </span>
        </button>
      ))}
    </div>
  );
}

