import React, { useEffect, useMemo, useState } from "react";

export default function ScaledStage({
  baseWidth = 1920,
  baseHeight = 1080,
  children,
}) {
  const [vw, setVw] = useState(() => window.innerWidth);
  const [vh, setVh] = useState(() => window.innerHeight);

  useEffect(() => {
    const onResize = () => {
      setVw(window.innerWidth);
      setVh(window.innerHeight);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const scale = useMemo(() => {
    return Math.min(vw / baseWidth, vh / baseHeight, 1);
  }, [vw, vh, baseWidth, baseHeight]);

  return (
    <div className="w-screen h-screen overflow-hidden bg-[#0b0b0b]">
      <div
        className="origin-top-left"
        style={{
          width: baseWidth,
          height: baseHeight,
          transform: `scale(${scale})`,
        }}
      >
        {children}
      </div>
    </div>
  );
}
