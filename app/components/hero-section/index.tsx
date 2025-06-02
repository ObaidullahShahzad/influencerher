"use client";
import React, { useState } from "react";
import { Menu, X, Search, ChevronDown, FileText } from "lucide-react";
import Image from "next/image";
import "../../font.css";

interface NavItem {
  label: string;
  href: string;
  hasDropdown?: boolean;
  isExternal?: boolean;
}

const HeroSection: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems: NavItem[] = [
    { label: "ECOSYSTEM", href: "#ecosystem" },
    { label: "MARKETING FUNNELS", href: "#marketing", hasDropdown: true },
    { label: "CREATOR OUTREACH", href: "#creator" },
    { label: "TOKEN", href: "#token" },
    {
      label: "WHITE PAPER",
      href: "https://influenceher.gitbook.io/docs",
      isExternal: true,
    },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const scrollToNextSection = () => {
    const nextSectionId = navItems[0].href.substring(1); // Remove '#' from href
    const nextSection = document.getElementById(nextSectionId);
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
      console.log(`Scrolling to section: ${nextSectionId}`);
    }
  };

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
    isExternal?: boolean
  ) => {
    if (isExternal) {
      // Don't prevent default for external links - let them open in new tab
      return;
    }

    e.preventDefault();
    const sectionId = href.substring(1); // Remove '#' from href
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      console.log(`Scrolling to section: ${sectionId}`);
    }
  };

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Top 20% Overlay with shadow fade */}
      <div className="absolute top-0 left-0 w-full h-[25vh] z-10 pointer-events-none bg-gradient-to-b from-black via-black/40 to-transparent" />

      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/Influenceher.mov" type="video/mp4" />
          {/* Fallback image if video doesn't load */}
          <div className="w-full h-full bg-gradient-to-br from-blue-900 via-blue-800 to-teal-700"></div>
        </video>
        {/* Video overlay */}
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      {/* Navigation */}
      <nav
        className={`relative z-50 top-6 transition-all bg-transparent duration-300`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <div className="flex-shrink-0">
              <div className="flex items-center">
                <Image
                  src="/footers-logos.svg"
                  alt="logo"
                  width={154}
                  height={90}
                />
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:block">
              <div className="flex items-center space-x-8">
                {navItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={(e) =>
                      handleNavClick(e, item.href, item.isExternal)
                    }
                    target={item.isExternal ? "_blank" : undefined}
                    rel={item.isExternal ? "noopener noreferrer" : undefined}
                    className={`text-white neue hover:text-blue-300 transition-colors duration-200 text-[16px] font-medium tracking-wide flex items-center group ${
                      item.isExternal
                        ? "hover:bg-blue-600/20 px-3 py-2 rounded-md"
                        : ""
                    }`}
                  >
                    {item.isExternal && <FileText className="mr-2 h-4 w-4" />}
                    {item.label}
                    {item.hasDropdown && (
                      <ChevronDown className="ml-1 h-4 w-4 group-hover:rotate-180 transition-transform duration-200" />
                    )}
                  </a>
                ))}
              </div>
            </div>

            {/* Desktop Search */}
            <div className="hidden lg:flex items-center">
              <button className="text-white hover:text-blue-300 transition-colors duration-200">
                <Search className="h-5 w-5" />
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden flex items-center space-x-4">
              <button className="text-white hover:text-blue-300 transition-colors duration-200">
                <Search className="h-5 w-5" />
              </button>
              <button
                onClick={toggleMobileMenu}
                className="text-white hover:text-blue-300 transition-colors duration-200"
              >
                {isMobileMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        <div
          className={`lg:hidden fixed inset-0 z-40 transition-opacity duration-300 ${
            isMobileMenuOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          }`}
        >
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm"
            onClick={toggleMobileMenu}
          ></div>

          {/* Drawer */}
          <div
            className={`fixed top-0 right-0 h-full w-80 bg-black/95 backdrop-blur-md transform transition-transform duration-300 ${
              isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <div className="p-6">
              {/* Close button */}
              <div className="flex justify-end mb-8">
                <button
                  onClick={toggleMobileMenu}
                  className="text-white hover:text-blue-300 transition-colors duration-200"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              {/* Mobile Navigation Items */}
              <div className="space-y-6">
                {navItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={(e) => {
                      if (!item.isExternal) {
                        handleNavClick(e, item.href);
                        toggleMobileMenu();
                      } else {
                        toggleMobileMenu();
                      }
                    }}
                    target={item.isExternal ? "_blank" : undefined}
                    rel={item.isExternal ? "noopener noreferrer" : undefined}
                    className={`block text-white neue hover:text-blue-300 transition-colors duration-200 text-lg font-medium tracking-wide py-2 border-b border-white/10 ${
                      item.isExternal
                        ? "hover:bg-blue-600/20 rounded-md px-2 -mx-2"
                        : ""
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        {item.isExternal && (
                          <FileText className="mr-2 h-4 w-4" />
                        )}
                        {item.label}
                      </div>
                      {item.hasDropdown && <ChevronDown className="h-4 w-4" />}
                    </div>
                  </a>
                ))}
              </div>

              {/* Mobile Search */}
              <div className="mt-8 pt-6 border-t border-white/10">
                <button className="flex items-center text-white hover:text-blue-300 transition-colors duration-200 text-lg font-medium">
                  <Search className="h-5 w-5 mr-3" />
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Scroll Indicator */}
      <div
        className="absolute bottom-8 left-1/2 cursor-pointer transform -translate-x-1/2 z-10 "
        onClick={scrollToNextSection}
      >
        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
