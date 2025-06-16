"use client";
import React, { useState, useEffect, useRef } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import Image from "next/image";
import GradientText from "../heading-gradient";
import ButtonImage from "../custom-button";

interface FAQItem {
  question: string;
  answer: string;
  isOpen?: boolean;
}

const FAQSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLHeadingElement>(null);
  const faqRefs = useRef<(HTMLDivElement | null)[]>([]);
  const loadMoreRef = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [showAll, setShowAll] = useState(false);
  const [faqs, setFaqs] = useState<FAQItem[]>([
    {
      question: "What is InfluenceHer?",
      answer:
        "InfluenceHer is a platform that scales creators into five to six figure brands by combining proven marketing funnels, a curated network of high-performing talent, and a token-powered rewards ecosystem.",
      isOpen: true,
    },
    {
      question: "What is the $INFLU token?",
      answer:
        "The $INFLU token powers the platform's reward cycles and aligns incentives between creators and investors. It is a deflationary token tied to platform revenue. A portion of profits is used to buy back $INFLU from the market and permanently burn it, reducing total supply over time and increasing scarcity.",
      isOpen: false,
    },

    {
      question: "How is InfluenceHer different from other Web3 projects?",
      answer:
        "InfluenceHer bridges the creator economy with Web3, offering a real-world use case tied to proven revenue models. Unlike speculative projects, we generate revenue from actual creator earnings, making the token a utility asset backed by performance.",
      isOpen: false,
    },
    {
      question: "How does InfluenceHer generate revenue?",
      answer:
        "Revenue is generated through creator management fees. Our model directly ties platform growth to creator success and token value.",
      isOpen: false,
    },
    {
      question:
        "Is there a limit to the amount of models that InfluenceHer will onboard?",
      answer:
        "There's no hard limit to the number of creators we can onboard. However, our strategy is to focus on quality over quantity we onboard creators sequentially, ensuring each is fully optimized for success before scaling to the next.",
      isOpen: false,
    },
    {
      question:
        "What is a realistic number a model can earn on a monthly basis?",
      answer:
        "Our conservative target is $10,000+ per month per creator. While performance will vary, our systems are designed to build consistent five-figure monthly earnings for each model.",
      isOpen: false,
    },
    {
      question: "How many models will we onboard each month?",
      answer:
        "We aim to onboard 1–2 creators per month. This approach ensures we can dedicate the time and resources needed to set each creator up for long-term success and maximize earning potential.",
      isOpen: false,
    },
    {
      question: "How can investors benefit from the platform rewards?",
      answer:
        "As creators generate revenue, token buybacks, rewards pools, and platform growth initiatives are funded. This creates a direct link between creator success and token value, reinforcing the long-term sustainability of the ecosystem.",
      isOpen: false,
    },
    {
      question: "What partnerships is InfluenceHer exploring?",
      answer:
        "We're exploring partnerships with marketing platforms, Web3 projects, and creator networks to expand outreach, integrate new tools, and build a robust ecosystem for creators and investors alike.",
      isOpen: false,
    },
    {
      question: "How will InfluenceHer handle regulatory compliance?",
      answer:
        "We are structuring InfluenceHer with legal advisors to ensure compliance with applicable laws. Our token is designed as a utility token with no guarantees of financial return, and we avoid features that could trigger securities classification.",
      isOpen: false,
    },
    {
      question: "How is InfluenceHer different from a typical OnlyFans agency?",
      answer:
        "Unlike traditional agencies, InfluenceHer combines marketing funnels, automated systems, and Web3 token incentives to create scalable growth. We're building a tech-driven model, not just a talent agency.",
      isOpen: false,
    },
    {
      question: "Will token holders receive dividends or profit shares?",
      answer:
        "No. InfluenceHer is not structured as a profit-sharing model but rather as a utility token system. Staking rewards are distributed based on platform activity, but there are no direct dividends or profit guarantees.",
      isOpen: false,
    },
    {
      question: "What are the risks associated with InfluenceHer?",
      answer:
        "As with any Web3 project, risks include market volatility, regulatory changes, and creator platform dependency. We mitigate risks through diversified creator networks, lean operations, and a strong focus on compliance.",
      isOpen: false,
    },
    {
      question: "How does InfluenceHer acquire and onboard creators?",
      answer:
        "We use a multi-channel marketing system including Facebook and Google ads to identify, recruit, and onboard high-potential creators. Our automated onboarding process ensures scalability without sacrificing quality.",
      isOpen: false,
    },
    {
      question: "What makes InfluenceHer’s token model sustainable?",
      answer:
        "The $INFLU token is designed to reflect real-world creator earnings, not speculative hype. Staking mechanisms, platform fees, and token buybacks all contribute to long-term demand while reducing circulating supply over time.",
      isOpen: false,
    },
  ]);

  const displayedFaqs = showAll ? faqs : faqs.slice(0, 6);

  const animateOnScroll = () => {
    if (headerRef.current) {
      headerRef.current.style.opacity = "0";
      headerRef.current.style.transform = "translateY(30px)";

      setTimeout(() => {
        if (headerRef.current) {
          headerRef.current.style.transition = "all 0.8s ease-out";
          headerRef.current.style.opacity = "1";
          headerRef.current.style.transform = "translateY(0)";
        }
      }, 100);
    }

    faqRefs.current.slice(0, displayedFaqs.length).forEach((ref, index) => {
      if (ref) {
        ref.style.opacity = "0";
        ref.style.transform = "translateY(30px)";

        setTimeout(() => {
          if (ref) {
            ref.style.transition = "all 0.6s ease-out";
            ref.style.opacity = "1";
            ref.style.transform = "translateY(0)";
          }
        }, 300 + index * 150);
      }
    });

    if (loadMoreRef.current) {
      loadMoreRef.current.style.opacity = "0";
      loadMoreRef.current.style.transform = "translateY(30px)";

      setTimeout(() => {
        if (loadMoreRef.current) {
          loadMoreRef.current.style.transition = "all 0.6s ease-out";
          loadMoreRef.current.style.opacity = "1";
          loadMoreRef.current.style.transform = "translateY(0)";
        }
      }, 300 + displayedFaqs.length * 150 + 200);
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            animateOnScroll();
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  const toggleLoadMore = () => {
    setShowAll(!showAll);

    if (!showAll) {
      setTimeout(() => {
        const newItems = faqRefs.current.slice(6);
        newItems.forEach((ref, index) => {
          if (ref) {
            ref.style.opacity = "0";
            ref.style.transform = "translateY(30px)";

            setTimeout(() => {
              if (ref) {
                ref.style.transition = "all 0.6s ease-out";
                ref.style.opacity = "1";
                ref.style.transform = "translateY(0)";
              }
            }, index * 150);
          }
        });
      }, 50);
    }
  };

  const toggleFAQ = (index: number) => {
    setFaqs(
      faqs.map((faq, i) => ({
        ...faq,
        isOpen: i === index ? !faq.isOpen : faq.isOpen,
      }))
    );
  };

  return (
    <div
      id="faq"
      ref={sectionRef}
      className="min-h-screen bg-black text-white py-16 px-4 sm:px-6 lg:px-8"
    >
      <div className="">
        <div className="text-center mb-16">
          <h1 ref={headerRef}>
            <GradientText text="  FREQUENTLY ASKED QUESTIONS" />
          </h1>
        </div>

        <div className="max-w-4xl mx-auto space-y-4 mb-16">
          {displayedFaqs.map((faq, index) => (
            <div
              onClick={() => toggleFAQ(index)}
              key={index}
              ref={(el) => {
                faqRefs.current[index] = el;
              }}
              className="border border-white/20 bg-[#090909]  relative backdrop-blur-sm overflow-hidden"
            >
              <Image
                src="/top.png"
                width={50}
                height={50}
                className=" absolute right-0 top-0 z-10"
                alt="icon"
              />
              <Image
                src="/bottom.png"
                width={50}
                height={50}
                className=" absolute bottom-0 left-0 z-10"
                alt="icon"
              />
              <button className="w-full px-6 sm:px-8 py-6 text-left cursor-pointer flex justify-between items-center  transition-colors duration-200">
                <h3 className="text-lg sm:text-xl jakarta font-medium text-white pr-4">
                  {faq.question}
                </h3>
                <div className="cursor-pointer flex-shrink-0">
                  {faq.isOpen ? (
                    <ChevronUp
                      onClick={() => toggleFAQ(index)}
                      className="w-6 cursor-pointer h-6 text-gray-400"
                    />
                  ) : (
                    <ChevronDown
                      onClick={() => toggleFAQ(index)}
                      className="w-6 cursor-pointer h-6 text-gray-400"
                    />
                  )}
                </div>
              </button>

              <div
                className={`transition-all duration-300 ease-in-out overflow-hidden ${
                  faq.isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-6 sm:px-8 pb-6">
                  <div className="pt-2 relative">
                    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-purple-400 via-blue-400 to-purple-300"></div>
                    <p className="text-gray-300 jakarta leading-relaxed mt-4">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div ref={loadMoreRef} className="text-center">
          <ButtonImage
            text="Load More"
            showAll={showAll}
            onClick={toggleLoadMore}
          />
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
