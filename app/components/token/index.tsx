"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import GradientText from "../heading-gradient";
import Image from "next/image";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

interface UtilityCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const UtilityCard: React.FC<UtilityCardProps> = ({
  icon,
  title,
  description,
}) => {
  return (
    <div className="h-full flex flex-col items-center justify-center p-8 lg:p-12">
      <div className="mb-8 text-gray-400">{icon}</div>
      <h3 className="text-white neue text-xl max-w-[280px] text-center lg:text-2xl font-medium  leading-tight">
        {title}
      </h3>
      <p className="text-white/80 jakarta max-w-[270px] text-base text-center leading-relaxed">
        {description}
      </p>
    </div>
  );
};

// Image-based icons
const QRIcon = () => (
  <Image
    width={60}
    height={60}
    src="/ones.svg"
    alt="QR Icon"
    className="w-[50px] h-[50px]"
  />
);
const LockIcon = () => (
  <Image
    width={60}
    height={60}
    src="/twos.svg"
    alt="Lock Icon"
    className="w-[50px] h-[50px]"
  />
);
const DocumentIcon = () => (
  <Image
    width={60}
    height={60}
    src="/threes.svg"
    alt="Document Icon"
    className="w-[50px] h-[50px]"
  />
);
const BarChartIcon = () => (
  <Image
    width={60}
    height={60}
    src="/fours.svg"
    alt="Bar Chart Icon"
    className="w-[50px] h-[50px]"
  />
);
const PercentIcon = () => (
  <Image
    width={60}
    height={60}
    src="/fives.svg"
    alt="Percent Icon"
    className="w-[50px] h-[50px]"
  />
);
const EyeIcon = () => (
  <Image
    width={60}
    height={60}
    src="/sixe.svg"
    alt="Eye Icon"
    className="w-[50px] h-[50px]"
  />
);

const TokenUtility: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  const utilityItems = [
    {
      icon: <QRIcon />,
      title: "Stake for Access",
      description: "Unlock participation in platform reward cycles.",
    },
    {
      icon: <LockIcon />,
      title: "Unlock Platform Rewards",
      description: "Earn incentives tied to ecosystem performance.",
    },
    {
      icon: <DocumentIcon />,
      title: "Token Tax",
      description: "5% buy & sell tax",
    },
    {
      icon: <BarChartIcon />,
      title: "Support Scalable Creator Growth",
      description: "Your stake powers onboarding and monetization tools.",
    },
    {
      icon: <PercentIcon />,
      title: "Strengthen Token Circulation and Demand",
      description: "Staking reduces supply and reinforces long-term utility.",
    },
    {
      icon: <EyeIcon />,
      title: "Engage with a Real-World Ecosystem",
      description: "Unlock participation in platform reward cycles.",
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Set initial states
      gsap.set(titleRef.current, {
        y: 50,
        opacity: 0,
      });

      gsap.set(cardsRef.current, {
        y: 80,
        opacity: 0,
      });

      // Create timeline for the section
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      });

      // Animate title first
      tl.to(titleRef.current, {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power2.out",
      });

      // Animate cards one by one with stagger
      tl.to(
        cardsRef.current,
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          ease: "power2.out",
          stagger: 0.15,
        },
        "-=0.3" // Start slightly before title animation ends
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      id="token"
      ref={sectionRef}
      className="min-h-screen bg-black relative overflow-hidden"
    >
      <Image
        src="/token-bg.svg"
        alt="bg"
        height={100}
        width={100}
        className="w-full h-full absolute inset-0 opacity-20"
      />
      <div className="relative z-10 w-full px-4 py-16 lg:py-24">
        <div ref={titleRef} className="text-center mb-16 lg:mb-24">
          <GradientText text="TOKEN UTILITY" />
        </div>

        <div className="max-w-[1400px] mx-auto relative">
          {/* Horizontal dashed divider between rows - only on large screens */}
          <div
            className="absolute left-0 right-0 h-px hidden lg:block"
            style={{
              top: "50%",
              background:
                "linear-gradient(to right, rgba(153, 153, 153, 0.28) 0%, #FFFFFF 51.44%, rgba(153, 153, 153, 0.28) 100%)",
              mask: "linear-gradient(to right, black 8px, transparent 8px)",
              maskSize: "16px 1px",
              WebkitMask:
                "linear-gradient(to right, black 8px, transparent 8px)",
              WebkitMaskSize: "16px 1px",
            }}
          />
          {/* First vertical dashed divider - only on large screens */}
          <div
            className="absolute top-0 bottom-0 w-px hidden lg:block"
            style={{
              left: "33.333%",
              background:
                "linear-gradient(to bottom, rgba(153, 153, 153, 0.28) 0%, #FFFFFF 51.44%, rgba(153, 153, 153, 0.28) 100%)",
              mask: "linear-gradient(to bottom, black 8px, transparent 8px)",
              maskSize: "1px 16px",
              WebkitMask:
                "linear-gradient(to bottom, black 8px, transparent 8px)",
              WebkitMaskSize: "1px 16px",
            }}
          />
          {/* Second vertical dashed divider - only on large screens */}
          <div
            className="absolute top-0 bottom-0 w-px hidden lg:block"
            style={{
              left: "66.666%",
              background:
                "linear-gradient(to bottom, rgba(153, 153, 153, 0.28) 0%, #FFFFFF 51.44%, rgba(153, 153, 153, 0.28) 100%)",
              mask: "linear-gradient(to bottom, black 8px, transparent 8px)",
              maskSize: "1px 16px",
              WebkitMask:
                "linear-gradient(to bottom, black 8px, transparent 8px)",
              WebkitMaskSize: "1px 16px",
            }}
          />

          <div className="grid grid-cols-1 lg:grid-cols-3 min-h-[600px]">
            {utilityItems.map((item, index) => (
              <div
                className="relative"
                key={index}
                ref={(el) => {
                  cardsRef.current[index] = el;
                }}
              >
                {/* Dashed border-bottom for small/medium screens only */}
                {index < utilityItems.length - 1 && (
                  <div
                    className="absolute bottom-0 left-0 right-0 h-px lg:hidden"
                    style={{
                      background:
                        "linear-gradient(to right, rgba(153, 153, 153, 0.28) 0%, #FFFFFF 51.44%, rgba(153, 153, 153, 0.28) 100%)",
                      mask: "linear-gradient(to right, black 8px, transparent 8px)",
                      maskSize: "16px 1px",
                      WebkitMask:
                        "linear-gradient(to right, black 8px, transparent 8px)",
                      WebkitMaskSize: "16px 1px",
                    }}
                  />
                )}
                <UtilityCard
                  icon={item.icon}
                  title={item.title}
                  description={item.description}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TokenUtility;
