import React from "react";
import { MoreHorizontal } from "lucide-react";
import userProfileImg from "../../assets/user-profile.png";

export default function UserProfile() {
    return (
        <div className="w-full py-2 px-1.5 flex items-center justify-between flex-shrink-0">
            {/* LEFT: avatar + name/email */}
            <div className="flex items-center gap-2 min-w-0 flex-1">
                {/* Profile image */}
                <div className="w-[30px] h-[30px] rounded-full overflow-hidden flex-shrink-0">
                    <img
                        src={userProfileImg}
                        alt="Nutan Sai Nandam"
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Name + Email */}
                <div className="flex flex-col gap-0 min-w-0 flex-1">
                    <div className="text-[11px] leading-[140%] font-medium text-white whitespace-nowrap overflow-hidden text-ellipsis">
                        Nutan Sai Nandam
                    </div>
                    <div className="text-[9px] leading-[140%] text-white/50 whitespace-nowrap overflow-hidden text-ellipsis">
                        nutansainandam.com
                    </div>
                </div>
            </div>

            {/* More button */}
            <button className="w-[22px] h-[22px] flex items-center justify-center text-white/50 hover:text-white flex-shrink-0">
                <MoreHorizontal size={16} />
            </button>
        </div>
    );
}
