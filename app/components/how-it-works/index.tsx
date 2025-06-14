import React from "react";
import GradientText from "../heading-gradient";
import Image from "next/image";

const HowItWorksSection: React.FC = () => {
  return (
    <section className="bg-black text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          {/* Title */}
          <div className="text-center mb-4">
            <GradientText text="How it Works" />
          </div>

          <p className="text-white/80 jakarta text-[15px] max-w-4xl mx-auto leading-relaxed mb-6">
            InfluenceHer equips OnlyFans creators with a high-conversion
            marketing and automation system that unlocks earning potential most
            creators can&apos;t access on their own.
          </p>

          <p className="text-white/80 jakarta text-[15px] max-w-4xl mx-auto leading-relaxed">
            In return, we take a percentage of the revenue — and that share is
            split transparently:
          </p>
        </div>

        {/* Percentage Breakdown with Dividers */}
        <div className="flex flex-col md:flex-row items-center justify-center mb-16 space-y-8 md:space-y-0">
          {/* 50% Section */}
          <div className="flex items-center space-x-6 md:space-x-8 flex-1 justify-center">
            <div className="flex-shrink-0">
              <Image
                src="/one.png"
                height={80}
                width={70}
                alt="Model icon"
                className=" object-contain"
              />
            </div>
            <div className="text-left">
              <h3 className="text-[45px] font-[400] jakarta mb-2 text-white/80">
                50%
              </h3>
              <p className="text-white/80 jakarta text-[15px] font-[400] leading-relaxed max-w-xs">
                goes to the model based on performance
              </p>
            </div>
          </div>

          {/* First Divider */}
          <div
            className="hidden md:block w-px h-32 mx-8"
            style={{
              background:
                "linear-gradient(179deg, #5BB3EB -14.96%, #D467E2 117.48%)",
            }}
          ></div>

          {/* 25% Section - Team */}
          <div className="flex items-center space-x-6 md:space-x-8 flex-1 justify-center">
            <div className="flex-shrink-0">
              <div className="relative">
                <Image
                  src="/two.png"
                  height={80}
                  width={70}
                  alt="Model icon"
                  className=" object-contain"
                />
              </div>
            </div>
            <div className="text-left">
              <h3 className="text-[45px] font-[400] jakarta mb-2 text-white/80">
                25%
              </h3>
              <p className="text-white/80 jakarta text-[15px] font-[400] leading-relaxed max-w-xs">
                supports our team and ongoing operations
              </p>
            </div>
          </div>

          {/* Second Divider */}
          <div
            className="hidden md:block w-px h-32 mx-8"
            style={{
              background:
                "linear-gradient(179deg, #5BB3EB -14.96%, #D467E2 117.48%)",
            }}
          ></div>

          {/* 25% Section - Token */}
          <div className="flex items-center space-x-6 md:space-x-8 flex-1 justify-center">
            <div className="flex-shrink-0">
              <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 rounded-full flex items-center justify-center relative overflow-visible">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className=" ">
                    <Image
                      src="/three.png"
                      height={80}
                      width={70}
                      alt="Model icon"
                      className=" object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="text-left">
              <h3 className="text-[45px] font-[400] jakarta mb-2 text-white/80">
                25%
              </h3>
              <p className="text-white/80 jakarta text-[15px] font-[400] leading-relaxed max-w-xs">
                used for buyback and burn of $INFLU tokens to reduce supply
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Text */}
        <div className="text-center">
          <p className="text-white/80 jakarta text-[15px] max-w-5xl mx-auto leading-relaxed ">
            As creators earn more, consistent buybacks reduce circulating
            supply, driving long-term city. It&apos;s an ecosystem built on
            aligned incentives.
          </p>
          <p className="text-white/80 jakarta text-[15px] max-w-5xl mx-auto leading-relaxed">
            we help creators earn more. That revenue powers the token. The
            token&apos;s supply deflates. Simple and scalable.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
