"use client";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import GradientText from "../heading-gradient";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger with GSAP
gsap.registerPlugin(ScrollTrigger);

const MarketingFunnels: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    // Select all elements to animate
    const elements = section.querySelectorAll(
      ".aniamtion, .description, .cards, .video-section"
    );

    // Set initial states
    gsap.set(elements, {
      opacity: 0,
      y: 100,
    });

    // Create animation timeline
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top 80%", // Start when top of section is 80% from top of viewport
        end: "top 20%", // End when top of section is 20% from top of viewport
        toggleActions: "play none none reset",
      },
    });

    // Animate elements
    tl.to(elements, {
      opacity: 1,
      y: 0,
      duration: 1,
      stagger: 0.2,
      ease: "power3.out",
    });

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div id="marketing" className="relative overflow-hidden" ref={sectionRef}>
      <Image
        src="/market-bg.svg"
        alt="bg"
        width={1440}
        height={900}
        className="w-full h-auto absolute top-0 right-0 object-cover min-h-screen md:right-[-150px] md:top-[-50px]"
        priority
      />
      <div className="min-h-screen relative w-full text-white flex items-center justify-center p-4 md:p-8">
        <div className="max-w-7xl w-full space-y-4 md:space-y-8 px-4">
          {/* Header */}
          <p className="aniamtion">
            <GradientText text="MARKETING FUNNELS" />
          </p>
          <p className="description text-center text-white/80 mb-8 md:mb-[64px] jakarta text-base md:text-[18px] font-[400]">
            Our marketing infrastructure is designed for high-impact creator
            growth
          </p>

          {/* Cards Section */}
          <div className="cards grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            {/* Instagram Card */}
            <div className="bg-black/30 card-hover relative -z-10  border-[1px] border-white/30 p-4 md:p-6 backdrop-blur-sm hover:border-gray-600/50 transition-colors">
              <Image
                src="/top.png"
                alt="icon"
                width={70}
                height={70}
                className="absolute -top-[1px] z-10 right-0"
              />
              <Image
                src="/bottom.png"
                alt="icon"
                width={70}
                height={70}
                className="absolute -bottom-[1px] z-10 -left-[2px]"
              />
              <div className="mb-4 md:mb-6">
                <Image
                  src="/inta.svg"
                  alt="icon"
                  width={32}
                  height={32}
                  className="w-8 h-8"
                />
              </div>
              <h3 className="text-xl md:text-[24px] font-[400] mb-2 md:mb-[14px] neue">
                Instagram
              </h3>
              <p className=" hover-text font-[400] text-white/50 text-sm md:text-[15px] leading-[18px] jakarta">
                Multi-account systems target high-intent users, funneling them
                into creator profiles to drive subscriptions.
              </p>
            </div>

            {/* Dating Apps Card */}
            <div className="bg-black/30 card-hover relative -z-10  border-[1px] border-white/30 p-4 md:p-6 backdrop-blur-sm hover:border-gray-600/50 transition-colors">
              <Image
                src="/top.png"
                alt="icon"
                width={70}
                height={70}
                className="absolute -top-[1px] z-10 right-0"
              />
              <Image
                src="/bottom.png"
                alt="icon"
                width={70}
                height={70}
                className="absolute -bottom-[1px] z-10 -left-[2px]"
              />
              <div className="mb-4 md:mb-6">
                <Image
                  src="/app.svg"
                  alt="icon"
                  width={32}
                  height={32}
                  className="w-8 h-8"
                />
              </div>
              <h3 className="text-xl md:text-[24px] font-[400] mb-2 md:mb-[14px] neue">
                Dating Apps
              </h3>
              <p className=" hover-text font-[400] text-white/50 text-sm md:text-[15px] leading-[18px] jakarta">
                Optimized funnels on top dating platforms convert users into
                paying subscribers for creators.
              </p>
            </div>

            {/* TikTok Card */}
            <div className="bg-black/30 card-hover relative -z-10  border-[1px] border-white/30 p-4 md:p-6 backdrop-blur-sm hover:border-gray-600/50 transition-colors">
              <Image
                src="/top.png"
                alt="icon"
                width={70}
                height={70}
                className="absolute -top-[1px] z-10 right-0"
              />
              <Image
                src="/bottom.png"
                alt="icon"
                width={70}
                height={70}
                className="absolute -bottom-[1px] z-1 -left-[2px]"
              />
              <div className="mb-4 md:mb-6">
                <Image
                  src="/tiktok.svg"
                  alt="icon"
                  width={32}
                  height={32}
                  className="w-8 h-8"
                />
              </div>
              <h3 className="text-xl md:text-[24px] font-[400] mb-2 md:mb-[14px] neue">
                TikTok
              </h3>
              <p className=" hover-text font-[400] text-white/50 text-sm md:text-[15px] leading-[18px] jakarta">
                Viral content strategies turn engaged viewers into loyal fans
                through high-converting subscription pathways.
              </p>
            </div>
          </div>

          {/* Video Section */}
          <div className="video-section relative w-full max-w-7xl h-48 md:h-64 lg:h-[400px] xl:h-[500px] rounded-lg overflow-hidden shadow-lg mt-6 md:mt-[100px]">
            <video
              className="w-full h-full object-cover"
              autoPlay
              loop
              muted
              playsInline
            >
              <source src="/loop.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
      <style jsx>{`
        .card-hover {
          position: relative;
          overflow: hidden;
          cursor: pointer;
        }

        .card-hover::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(179deg, #5bb3eb -14.96%, #d467e2 117.48%);
          opacity: 0;
          transition: opacity 0.3s ease;
          z-index: 1;
        }

        .card-hover:hover::before {
          opacity: 1;
        }

        .card-hover:hover .hover-text {
          color: white;
        }

        .card-hover > * {
          position: relative;
          z-index: 2;
        }
      `}</style>
    </div>
  );
};

export default MarketingFunnels;
