"use client";
import React, { FC, useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/app/types/utils";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const faqs = [
  {
    id: 1,
    header: "Who We Are",
    text: "InfluenceHer is built by a experienced a team in the creator economy, performance marketing, and Web3 space. With years of success scaling OnlyFans creators to consistent five figure monthly earnings, we’ve led top-performing accounts, crafted high converting fans, and built multi-channel marketing systems from the ground up.",
    text_two:
      "Our background spans every key function from content strategy and personalized messaging, to paid traffic and international model onboarding. Every creator we manage gets a custom, data driven growth plan designed to match her niche and maximize revenue potential.",
    image: "/img1.png",
  },
  {
    id: 2,
    header: "Our Core Team",
    text: "The team behind InfluenceHer is composed of proven professionals with real world experience. Our core includes OnlyFans growth managers, marketing specialist and professional chatters. We also bring Web3 native insight, having personally invested in and analyzed dozens of crypto projects.",
    text_two:
      "This experience as both creator growth experts and crypto investors allows us to spot the gaps in traditional creator infrastructure and build smarter, token powered systems around what actually works. We're operators first and we’ve built this platform based on what we know delivers results.",
    image: "/two.svg",
  },
];

const AccordionItem: FC<{
  id: number;
  header: string;
  text: string;
  text_two: string;
  isLastItem: boolean;
  active: number;
  setActive: (id: number) => void;
}> = ({ id, header, text, isLastItem, text_two, active, setActive }) => {
  const contentEl = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (id === active && contentEl.current) {
      contentEl.current.style.height = `${contentEl.current.scrollHeight}px`;
    } else if (contentEl.current) {
      contentEl.current.style.height = "0px";
    }
  }, [id, active]);

  return (
    <div
      onClick={() => setActive(id)}
      className={cn(
        "relative overflow-hidden px-[0.625rem] pb-[1.25rem] pt-[1rem] transition-all duration-300 ease-in-out md:px-[1.875rem] cursor-pointer",
        !isLastItem &&
          "after:absolute after:bottom-0 after:left-0 after:z-20 after:h-[1px] after:w-full after:bg-gradient-to-r after:from-accordion-border after:via-accordion-border after:to-[rgba(17,17,17,0)] after:content-['']",
        active === id
          ? "before:absolute before:left-0 before:top-0 before:z-20 before:h-full before:w-[1px] before:bg-gradient-to-t before:from-[#D467E2] before:to-[#5BB3EB] before:content-['']"
          : "before:absolute before:left-0 before:top-0 before:z-20 before:h-full before:w-[1px] before:bg-[#3b3d3d] before:content-['']"
      )}
    >
      <div className="flex items-center justify-center gap-6 transition-all duration-300 ease-in-out md:justify-start">
        <h5 className="text-right font-heading text-[1.25rem] font-semibold text-white md:whitespace-nowrap">
          {header}
        </h5>
      </div>
      <div
        ref={contentEl}
        className="relative overflow-hidden transition-all duration-300 ease-in-out"
        style={{ height: id === active ? "auto" : "0px" }}
      >
        <div>
          <p className="pt-[0.8125rem] text-center font-text text-[0.75rem] font-light leading-[19px] text-white md:text-left">
            {text}
          </p>
          <p className="pt-[0.8125rem] text-center font-text text-[0.75rem] font-light leading-[19px] text-white md:text-left">
            {text_two}
          </p>
        </div>
      </div>
    </div>
  );
};

const AboutUs = () => {
  const [active, setActive] = useState(1); // First accordion open by default
  const accordionRef = useRef<HTMLDivElement>(null);
  const pinnedSection = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const topToBottomElements = document.querySelectorAll(
      ".sec-1-anim-top-to-bottom"
    );
    const bottomToTopElements = document.querySelectorAll(
      ".sec-2-anim-bottom-to-top"
    );

    // Existing animations
    topToBottomElements.forEach((element) => {
      gsap.fromTo(
        element,
        { opacity: 0, y: -30 },
        {
          opacity: 1,
          y: 0,
          duration: 1.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: element,
            start: "top 80%",
            toggleActions: "play none none none",
            once: true,
          },
        }
      );
    });

    bottomToTopElements.forEach((element) => {
      gsap.fromTo(
        element,
        { visibility: "hidden", opacity: 0, y: 30 },
        {
          visibility: "visible",
          opacity: 1,
          y: 0,
          duration: 1.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: element,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    });

    // New pinning logic
    if (pinnedSection.current) {
      ScrollTrigger.create({
        trigger: pinnedSection.current,
        start: "top top",
        end: "+=20%",
        pin: true,
        pinSpacing: false,
        onUpdate: (self) => {
          // Switch accordion based on scroll progress
          if (self.progress > 0.5 && active !== 2) {
            setActive(2); // Open second accordion
          } else if (self.progress <= 0.5 && active !== 1) {
            setActive(1); // Open first accordion
          }
        },
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [active]);

  return (
    <div
      ref={pinnedSection}
      className="w-full relative py-[120px] h-screen bg-black"
    >
      <Image
        src="/about-bg.svg"
        alt="bg"
        width={200}
        height={200}
        className="absolute top-0 left-0 h-full w-full object-cover"
      />
      <div
        className="flex w-full flex-col items-center justify-center px-[32px] max-w-7xl mx-auto gap-[80px] lg:flex-row lg:items-center lg:jus
tify-between"
      >
        <div className="mx-auto flex items-center justify-center">
          <div className="sec-2-anim-bottom-to-top relative h-auto w-full">
            <Image
              src={faqs.find((f) => f.id === active)?.image || "/img1.png"}
              alt="Drone Side Image"
              width={604}
              height={550}
            />
          </div>
        </div>
        <div
          ref={accordionRef}
          className="sec-2-anim-bottom-to-top w-full lg:w-1/2"
        >
          {faqs.map((faq, index) => (
            <AccordionItem
              key={faq.id}
              id={faq.id}
              header={faq.header}
              text={faq.text}
              text_two={faq.text_two}
              isLastItem={index === faqs.length - 1}
              active={active}
              setActive={setActive}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
