import React from "react";
import mainOrb from "../../assets/main-orb.png";

export default function Greeting({ userName = "John" }) {
    const hour = new Date().getHours();
    let greeting = "Good Morning";
    if (hour >= 12 && hour < 17) greeting = "Good Afternoon";
    else if (hour >= 17) greeting = "Good Evening";

    return (
        <div className="flex flex-col items-center gap-1">
            {/* Orb (100x100) with softer surrounding glow */}
            <div className="relative w-[100px] h-[100px] flex items-center justify-center">
                {/* Very soft outer glow*/}
                <div className="absolute -inset-6 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.06)_0%,rgba(255,255,255,0.03)_35%,transparent_90%)] blur-3xl opacity-10" />

                {/* Inner halo*/}
                <div className="absolute -inset-1.5 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.07)_0%,transparent_68%)] blur-xl opacity-30" />

                {/* Orb image */}
                <div className="relative w-[100px] h-[100px] rounded-full overflow-hidden">
                    <img
                        src={mainOrb}
                        alt="AI Assistant"
                        draggable={false}
                        className="w-full h-full object-cover scale-[1.36] rotate-0 opacity-100
                 drop-shadow-[0_10px_22px_rgba(0,0,0,0.35)]"
                    />
                </div>
            </div>

            <div className="flex flex-col items-center gap-0.5">
                <span className="text-[11px] text-white/60">
                    {greeting}, {userName}
                </span>
                <h1 className="text-[20px] font-semibold text-white">
                    How can i assist you today?
                </h1>
            </div>
        </div>
    );
}
