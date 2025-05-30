"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

type GradientTextProps = {
  text: string;
};

export default function GradientText({ text }: GradientTextProps) {
  const headingRef = useRef<HTMLHeadingElement | null>(null);

  useEffect(() => {
    if (headingRef.current) {
      gsap.to(headingRef.current, {
        backgroundImage:
          "linear-gradient(#D467E2 100%, #5BB3EB 200%, #D467E2 300%)",
        duration: 6,
        ease: "none",
        repeat: 30,
        yoyo: true,
      });
    }
  }, []);

  return (
    <div className=" bg-black flex flex-col items-center justify-start  mb-0 text-white font-sans">
      <h1
        ref={headingRef}
        className="text-[clamp(36px,8vw,80px)] uppercase jakarta font-medium text-center"
        style={{
          backgroundImage:
            "linear-gradient(#D467E2 -200%, #5BB3EB -100%, #D467E2 0%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        {text}
      </h1>
    </div>
  );
}
