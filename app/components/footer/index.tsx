"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";

// Social Media Icons Components
const TikTokIcon: React.FC<{ className?: string }> = ({
  className = "w-6 h-6",
}) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
  </svg>
);

const InstagramIcon: React.FC<{ className?: string }> = ({
  className = "w-6 h-6",
}) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
  </svg>
);

const XIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const YouTubeIcon: React.FC<{ className?: string }> = ({
  className = "w-6 h-6",
}) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
  </svg>
);

// Types
interface NavigationLink {
  name: string;
  href: string;
}

interface SocialLink {
  name: string;
  href: string;
  icon: React.ReactNode;
  ariaLabel: string;
}

interface FooterProps {
  className?: string;
}

// Navigation data
const navigationLinks: NavigationLink[] = [
  { name: "Ecosystem", href: "#ecosystem" },
  { name: "Marketing Funnels", href: "#marketing" },
  { name: "Creator Outreach", href: "#creator" },
  { name: "Token", href: "#token" },
];

const socialLinks: SocialLink[] = [
  {
    name: "TikTok",
    href: "https://www.tiktok.com/@influencehermgt",
    icon: <TikTokIcon />,
    ariaLabel: "Follow us on TikTok",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/influencehermanagement/",
    icon: <InstagramIcon />,
    ariaLabel: "Follow us on Instagram",
  },
  {
    name: "X (Twitter)",
    href: "https://x.com/InfluenceHerMgt",
    icon: <XIcon />,
    ariaLabel: "Follow us on X",
  },
  {
    name: "YouTube",
    href: "https://www.youtube.com/@InfluencerHer",
    icon: <YouTubeIcon />,
    ariaLabel: "Subscribe to our YouTube",
  },
];

const Footer: React.FC<FooterProps> = ({ className = "" }) => {
  const currentYear = new Date().getFullYear();

  const handleLinkClick = (e: React.MouseEvent, href: string) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <footer className={`bg-[#0F0F10] text-white ${className}`}>
      <div className="px-6 pt-20 pb-[16px] lg:px-10 md:pt-24  ">
        <div className="mx-auto max-w-7xl">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-3 lg:gap-16">
            {/* Logo Section */}
            <div className="flex flex-col items-center lg:items-start">
              <div className="mb-2">
                <Image
                  src="/footers-logos.svg"
                  alt="Influenceher Logo"
                  width={260}
                  height={150}
                />
              </div>
            </div>

            {/* Navigation Section */}
            <div className="text-center lg:text-left">
              <nav>
                <ul className="space-y-5">
                  {navigationLinks.map((link) => (
                    <li className="mb-[30px]" key={link.name}>
                      <Link
                        href={link.href}
                        onClick={(e) => handleLinkClick(e, link.href)}
                        className="text-base font-light text-white transition-colors duration-300 hover:underline  hover:text-[#C7B199]"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

            {/* Social Section */}
            <div className="text-center lg:text-left">
              <h3 className="mb-8 text-lg jakarta normal text-[#C7B199]">
                Social Links
              </h3>
              <div className="flex justify-center space-x-5 lg:justify-start">
                {socialLinks.map((social) => (
                  <Link
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.ariaLabel}
                    className="group"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-white transition-all duration-300 group-hover:-translate-y-1 group-hover:bg-[#C7B19933] group-hover:text-[#C7B199] group-hover:shadow-lg lg:h-14 lg:w-14">
                      {social.icon}
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="mt-16 flex flex-col items-center gap-[20px] space-y-4 border-t border-[#D9D9D91A] pt-8 lg:flex-row lg:space-y-0">
            <div className="flex flex-col md:flex-row justify-center items-center">
              <p className="text-base jakarta font-[700] text-[#D9D9D9]">
                © {currentYear} Influenceher Management.{" "}
              </p>
              <span className="font-light jakarta  text-white/50 ">
                {" "}
                All rights reserved.
              </span>
            </div>
            <div className="flex space-x-8">
              <Link
                href="/privacy-policy"
                className="text-sm font-light jakarta text-white/50 transition-colors duration-300 hover:underline  hover:text-[#C7B199]"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms-of-service"
                className="text-sm font-light jakarta text-white/50 transition-colors duration-300 hover:underline  hover:text-[#C7B199]"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
