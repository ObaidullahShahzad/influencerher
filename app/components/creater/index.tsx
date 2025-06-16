"use client";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const CreatorOutreach: React.FC = () => {
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
      className="border max-w-[1100px] mt-[88px] p-4 mx-auto border-white/10 overflow-hidden"
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
                <h1 className="text-3xl cinzel sm:text-4xl lg:text-[46px] xl:text-5xl font-[700] mb-2 md:mb-2 leading-tight">
                  CREATOR OUTREACH
                </h1>

                <p className="text-white/80 text-[14px] mb-[28px] md:text-[18px] font-normal jakarta">
                  Global Creator Acquisition Engine
                </p>
                <p className="text-sm jakarta sm:text-base lg:text-lg xl:text-xl leading-relaxed text-white/90">
                  We run continuous outreach campaigns across Facebook and
                  Google to target creators seeking monetization opportunities.
                  Our optimized ad funnels attract high-potential talent, while
                  our streamlined onboarding system enables scalable growth.
                  This approach ensures a predictable pipeline of new creators,
                  fueling ecosystem expansion and reinforcing long-term token
                  value.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatorOutreach;
