"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import GradientText from "../heading-gradient";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const EcosystemComponent = () => {
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);

    // Wait for the next tick to ensure DOM is fully rendered
    const timer = setTimeout(() => {
      initAnimations();
    }, 50);

    return () => {
      clearTimeout(timer);
      // Cleanup animations
      cardsRef.current.forEach((card, index) => {
        if (card) {
          ScrollTrigger.getById(`card-${index}`)?.kill();
          gsap.killTweensOf(card);
        }
      });
      ScrollTrigger.clearMatchMedia();
    };
  }, []);

  const initAnimations = () => {
    // First, reset all card positions and styles
    cardsRef.current.forEach((card) => {
      if (card) {
        gsap.set(card, {
          y: 100,
          opacity: 0,
          willChange: "transform, opacity", // Optimize for animation
        });
      }
    });

    // Create ScrollTrigger animations for each card
    cardsRef.current.forEach((card, index) => {
      if (card) {
        // Kill any existing ScrollTrigger for this card
        ScrollTrigger.getById(`card-${index}`)?.kill();

        const tl = gsap.timeline({
          scrollTrigger: {
            id: `card-${index}`,
            trigger: card,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reset",
            markers: false,
            onEnter: () => {
              // Force a reflow to prevent painting issues
              void card.offsetWidth;
            },
            onEnterBack: () => {
              void card.offsetWidth;
            },
          },
        });

        tl.fromTo(
          card,
          { y: 100, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power3.out",
            delay: index * 0.2,
            immediateRender: false, // Important for initial load
          }
        );
      }
    });

    // Refresh ScrollTrigger after all animations are set up
    ScrollTrigger.refresh();
  };

  // Helper to set refs
  const setCardRef = (index: number) => (el: HTMLDivElement | null) => {
    cardsRef.current[index] = el;
    // If this is the last card and we're mounted, refresh ScrollTrigger
    if (index === cardsRef.current.length - 1 && isMounted) {
      ScrollTrigger.refresh();
    }
  };

  return (
    <div
      id="ecosystem"
      ref={sectionRef}
      className=" bg-black text-white py-16 px-4"
    >
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <div className="text-center mb-16">
          <GradientText text="Ecosystem" />
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {/* Creator Revenue */}
          <div
            ref={setCardRef(0)}
            className="bg-black/30 relative z-0 border-[1px] border-white/30 p-6 backdrop-blur-sm transition-all duration-300 ease-out hover:scale-105 hover:border-transparent card-hover"
            style={{ opacity: 0 }}
          >
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
            <div className="mb-6">
              <Image
                src="./one.svg"
                alt="icon"
                width={32}
                height={32}
                className="w-8 h-8"
              />
            </div>
            <h3 className="text-[24px] font-[400] mb-[14px] neue relative z-20">
              Creator Revenue Engine{" "}
            </h3>
            <p className="font-[400] text-white/50 text-[15px] leading-[18px] jakarta relative z-20 hover-text">
              We empower OnlyFans creators with tailored strategies and
              marketing funnels to maximize their monthly earnings.
            </p>
          </div>

          {/* Tokenized Layer */}
          <div
            ref={setCardRef(1)}
            className="bg-black/30 relative z-0 border-[1px] border-white/30 p-6 backdrop-blur-sm transition-all duration-300 ease-out hover:scale-105 hover:border-transparent card-hover"
            style={{ opacity: 0 }}
          >
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
            <div className="mb-6">
              <Image
                src="./two.svg"
                alt="icon"
                width={32}
                height={32}
                className="w-8 h-8"
              />
            </div>
            <h3 className="text-[24px] font-[400] mb-[14px] neue relative z-20">
              Tokenized Incentive Model{" "}
            </h3>
            <p className="font-[400] text-white/50 text-[15px] leading-[18px] jakarta relative z-20 hover-text">
              Our $INFLUENCE token rewards supporters and stakeholders, driving
              engagement and reinforcing platform value.
            </p>
          </div>

          {/* Staking-Based Reward System */}
          <div
            ref={setCardRef(2)}
            className="bg-black/30 relative z-0 border-[1px] border-white/30 p-6 backdrop-blur-sm transition-all duration-300 ease-out hover:scale-105 hover:border-transparent card-hover"
            style={{ opacity: 0 }}
          >
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
            <div className="mb-6">
              <Image
                src="./three.svg"
                alt="icon"
                width={32}
                height={32}
                className="w-8 h-8"
              />
            </div>
            <h3 className="text-[24px] font-[400] mb-[14px] neue relative z-20">
              Staking-Based Rewards System{" "}
            </h3>
            <p className="font-[400] text-white/50 text-[15px] leading-[18px] jakarta relative z-20 hover-text">
              Token holders who stake earn platform incentives, ensuring
              alignment between creators, investors, and users.
            </p>
          </div>

          {/* Creator & Holder Alignment */}
          <div
            ref={setCardRef(3)}
            className="bg-black/30 relative z-0 border-[1px] border-white/30 p-6 backdrop-blur-sm transition-all duration-300 ease-out hover:scale-105 hover:border-transparent card-hover"
            style={{ opacity: 0 }}
          >
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
            <div className="mb-6">
              <Image
                src="./four.svg"
                alt="icon"
                width={32}
                height={32}
                className="w-8 h-8"
              />
            </div>
            <h3 className="text-[24px] font-[400] mb-[14px] neue relative z-20">
              Creator & Holder Alignment{" "}
            </h3>
            <p className="font-[400] text-white/50 text-[15px] leading-[18px] jakarta relative z-20 hover-text">
              Our model ensures that creators and token holders are aligned
              through a rewards-driven system, where creator success directly
              benefits token holders, creating a mutually reinforcing ecosystem
              of growth.
            </p>
          </div>

          {/* Multi-Creator Network */}
          <div
            ref={setCardRef(4)}
            className="bg-black/30 relative z-0 border-[1px] border-white/30 p-6 backdrop-blur-sm transition-all duration-300 ease-out hover:scale-105 hover:border-transparent card-hover"
            style={{ opacity: 0 }}
          >
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
            <div className="mb-6">
              <Image
                src="./five.svg"
                alt="icon"
                width={32}
                height={32}
                className="w-8 h-8"
              />
            </div>
            <h3 className="text-[24px] font-[400] mb-[14px] neue relative z-20">
              Multi-Creator Network{" "}
            </h3>
            <p className="font-[400] text-white/50 text-[15px] leading-[18px] jakarta relative z-20 hover-text">
              A curated portfolio of high-earning creators fuels network effects
              and sustainable growth.
            </p>
          </div>

          {/* RWA Web3 Utility */}
          <div
            ref={setCardRef(5)}
            className="bg-black/30 relative z-0 border-[1px] border-white/30 p-6 backdrop-blur-sm transition-all duration-300 ease-out hover:scale-105 hover:border-transparent card-hover"
            style={{ opacity: 0 }}
          >
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
            <div className="mb-6">
              <Image
                src="./six.svg"
                alt="icon"
                width={32}
                height={32}
                className="w-8 h-8"
              />
            </div>
            <h3 className="text-[24px] font-[400] mb-[14px] neue relative z-20">
              RWA Web3 Utility{" "}
            </h3>
            <p className="font-[400] text-white/50 text-[15px] leading-[18px] jakarta relative z-20 hover-text">
              Our model bridges digital and real-world revenue streams,
              leveraging Web3 transparency and scalability.
            </p>
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
          z-index: 0;
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

export default EcosystemComponent;
