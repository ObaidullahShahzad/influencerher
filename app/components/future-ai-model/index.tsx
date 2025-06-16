"use client";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const FutureAiModel: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (sectionRef.current && contentRef.current) {
      // Set initial state (hidden)
      gsap.set(contentRef.current, { y: 100, opacity: 0 });

      // Create animation timeline
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%", // When top of section hits 75% of viewport
          end: "bottom 25%",
          toggleActions: "play none none none",
          // markers: true, // For debugging (remove in production)
        },
      });

      tl.to(contentRef.current, {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
      });
    }

    // Clean up ScrollTrigger instances
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div
      id="creator"
      ref={sectionRef}
      className="border max-w-[1100px] mb-[88px] p-4 mx-auto border-white/10 overflow-hidden"
    >
      <div className="bg-black flex items-center justify-center">
        <div className="w-full max-w-[1060px] mx-auto">
          <div className="relative overflow-visible">
            <Image
              src="/top.png"
              width={100}
              height={100}
              className="absolute right-0 top-0 z-10"
              alt="icon"
            />
            <Image
              src="/bottom.png"
              width={100}
              height={100}
              className="absolute bottom-0 left-0 z-10"
              alt="icon"
            />
            {/* Background Image */}
            <div className="absolute w-full inset-0">
              <Image
                src="/creator-bg.png"
                alt="Background"
                fill
                className="object-cover opacity-20"
              />
            </div>

            <div
              ref={contentRef}
              className="relative z-10 flex flex-col lg:flex-row items-center"
            >
              {/* Content Section */}
              <div className="flex-1 p-6 text-center md:p-16 text-white">
                <h1 className="text-3xl jakarta sm:text-4xl lg:text-[46px] xl:text-5xl font-[700] mb-2 md:mb-2 leading-tight">
                  FUTURE AI MODELS EXPANSIONS{" "}
                </h1>

                {/* <p className="text-white/80 text-[14px] mb-[28px] md:text-[18px] font-normal jakarta">
                  FUTURE AI MODELS EXPANSIONS{" "}
                </p> */}
                <p className="text-sm jakarta sm:text-base lg:text-lg xl:text-xl leading-relaxed text-white/90">
                  InfluenceHer is strategically expanding into AI-generated
                  models to build a highly scalable, ultra-profitable vertical
                  alongside our human creator portfolio. By leveraging platforms
                  like Fanvue the leading hub for AI influencer monetization we
                  can deploy fully digital models that operate 24/7, require
                  minimal overhead, and deliver 80%+ profit margins. These AI
                  avatars produce infinite content variations, serve global
                  audiences without geographic limits, and unlock multiple
                  revenue streams including subscriptions, GPT-powered chats,
                  custom content, and live AI streaming. This expansion allows
                  InfluenceHer to combine viral human creator growth with
                  consistent, defensible AI revenue, positioning the platform
                  for long-term scalability and market dominance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FutureAiModel;
