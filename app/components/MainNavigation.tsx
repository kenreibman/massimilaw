"use client";

import Link from "next/link";
import { useEffect, useState, useRef } from "react";

// Practice area data organized by category
const practiceAreas = {
  employmentLaw: {
    label: "Employment Law",
    href: "/practice/employment-law",
    items: [
      { label: "Employment Discrimination", href: "/practice/employment-discrimination" },
      { label: "Sexual Harassment", href: "/practice/sexual-harassment" },
      { label: "Pregnancy Discrimination", href: "/practice/pregnancy-discrimination" },
      { label: "Wrongful Termination", href: "/practice/wrongful-termination" },
      { label: "Racial Discrimination", href: "/practice/racial-discrimination" },
      { label: "Workplace Harassment", href: "/practice/workplace-harassment" },
      { label: "Paid Family Leave Violations", href: "/practice/paid-family-leave-violations" },
      { label: "FMLA Violations", href: "/practice/fmla-violations" },
      { label: "Labor Law Violations", href: "/practice/labor-law-violations" },
      { label: "Wage and Hour Violations", href: "/practice/wage-hour-violations" },
    ],
  },
  civilRights: {
    label: "Civil Rights",
    href: "/practice/civil-rights",
    items: [
      { label: "Civil Rights Violations", href: "/practice/civil-rights-violations" },
      { label: "Police Brutality", href: "/practice/police-brutality" },
      { label: "Excessive Force", href: "/practice/excessive-force" },
      { label: "False Arrest", href: "/practice/false-arrest" },
      { label: "Malicious Prosecution", href: "/practice/malicious-prosecution" },
      { label: "Denial of Fair Trial", href: "/practice/denial-of-fair-trial" },
    ],
  },
};

const mainNavItems = [
  { label: "About", href: "/about" },
];

function ChevronDown(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" {...props}>
      <path
        fillRule="evenodd"
        d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function IconPhone(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
    </svg>
  );
}

function IconHamburger(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M3 6h18v2H3V6zm0 5.5h18v2H3v-2zM3 17h18v2H3v-2z" />
    </svg>
  );
}

function IconClose(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
    </svg>
  );
}

// Dropdown component for practice areas
function PracticeAreaDropdown({
  category,
  isOpen,
  onToggle,
  onClose,
}: {
  category: typeof practiceAreas.employmentLaw;
  isOpen: boolean;
  onToggle: () => void;
  onClose: () => void;
}) {
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        onClose();
      }
    };
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen, onClose]);

  return (
    <div ref={dropdownRef} className="relative">
      <button
        onClick={onToggle}
        className={`flex items-center gap-1 px-4 py-5 text-[15px] transition-colors duration-200 ${
          isOpen ? "text-black" : "text-black/70 hover:text-black"
        }`}
      >
        {category.label}
        <ChevronDown
          className={`h-4 w-4 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
        />
      </button>

      {/* Dropdown panel */}
      <div
        className={`absolute left-0 top-full z-50 min-w-[280px] bg-white shadow-lg border border-black/10 transition-all duration-200 ${
          isOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2"
        }`}
      >
        <div className="p-6">
          <ul className="space-y-3">
            {category.items.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={onClose}
                  className="block text-[15px] text-black/70 transition-colors duration-150 hover:text-black"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-6 pt-4 border-t border-black/10">
            <a
              href="tel:+12125551234"
              onClick={onClose}
              className="inline-block w-full text-center border border-black px-4 py-2.5 text-sm font-medium text-black transition-colors duration-200 hover:bg-black hover:text-white"
            >
              Call for Free Consultation
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function MainNavigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileAccordion, setMobileAccordion] = useState<string | null>(null);

  // Prevent background scroll when mobile menu open
  useEffect(() => {
    if (!mobileMenuOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [mobileMenuOpen]);

  // Close on Escape
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMobileMenuOpen(false);
        setOpenDropdown(null);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  const toggleDropdown = (key: string) => {
    setOpenDropdown(openDropdown === key ? null : key);
  };

  const closeDropdown = () => {
    setOpenDropdown(null);
  };

  const toggleMobileAccordion = (key: string) => {
    setMobileAccordion(mobileAccordion === key ? null : key);
  };

  return (
    <header className="sticky top-0 z-50 w-full">
      {/* Top Bar - Beige */}
      <div className="bg-[#f5f0e6]">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
          {/* Logo */}
          <Link href="/" className="text-black">
            <span className="text-xl font-medium tracking-tight">MassimiLaw</span>
          </Link>

          {/* Right side: Phone, Lang, Contact */}
          <div className="hidden items-center gap-6 md:flex">
            {/* Phone */}
            <a
              href="tel:+12125551234"
              className="flex items-center gap-2 text-black/70 transition-colors hover:text-black"
            >
              <IconPhone className="h-4 w-4" />
              <span className="text-sm">(212) 555-1234</span>
            </a>

            {/* Contact Button */}
            <a
              href="tel:+12125551234"
              className="bg-black px-6 py-2.5 text-sm font-medium text-white transition-colors hover:bg-black/80"
            >
              Call Now
            </a>
          </div>

          {/* Mobile: Phone + Hamburger */}
          <div className="flex items-center gap-2 md:hidden">
            <a
              href="tel:+12125551234"
              className="inline-flex items-center justify-center p-2 text-black"
              aria-label="Call us"
            >
              <IconPhone className="h-5 w-5" />
            </a>
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 text-black"
              aria-label="Open menu"
              onClick={() => setMobileMenuOpen(true)}
            >
              <IconHamburger className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Main Nav Bar - White */}
      <nav className="hidden border-b border-black/10 bg-white md:block">
        <div className="mx-auto flex max-w-7xl items-center px-6">
          {/* Practice Area Dropdowns */}
          <PracticeAreaDropdown
            category={practiceAreas.employmentLaw}
            isOpen={openDropdown === "employmentLaw"}
            onToggle={() => toggleDropdown("employmentLaw")}
            onClose={closeDropdown}
          />
          <PracticeAreaDropdown
            category={practiceAreas.civilRights}
            isOpen={openDropdown === "civilRights"}
            onToggle={() => toggleDropdown("civilRights")}
            onClose={closeDropdown}
          />

          {/* Other nav items */}
          {mainNavItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="px-4 py-5 text-[15px] text-black/70 transition-colors duration-200 hover:text-black"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-50 bg-white md:hidden transition-opacity duration-300 ${
          mobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
        }`}
      >
        {/* Mobile Header */}
        <div className="flex h-16 items-center justify-between bg-[#f5f0e6] px-6">
          <Link href="/" onClick={() => setMobileMenuOpen(false)} className="text-black">
            <span className="text-xl font-medium tracking-tight">MassimiLaw</span>
          </Link>
          <button
            type="button"
            className="p-2 text-black"
            aria-label="Close menu"
            onClick={() => setMobileMenuOpen(false)}
          >
            <IconClose className="h-6 w-6" />
          </button>
        </div>

        {/* Mobile Nav Content */}
        <div className="h-[calc(100dvh-4rem)] overflow-y-auto px-6 py-6">
          {/* Phone */}
          <a
            href="tel:+12125551234"
            className="mb-6 flex items-center gap-2 text-black/80"
          >
            <IconPhone className="h-5 w-5" />
            <span>(212) 555-1234</span>
          </a>

          {/* Practice Areas Accordion */}
          <div className="border-t border-black/10">
            {/* Employment Law */}
            <div className="border-b border-black/10">
              <button
                onClick={() => toggleMobileAccordion("employmentLaw")}
                className="flex w-full items-center justify-between py-4 text-left text-lg font-medium text-black"
              >
                {practiceAreas.employmentLaw.label}
                <ChevronDown
                  className={`h-5 w-5 transition-transform duration-200 ${
                    mobileAccordion === "employmentLaw" ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  mobileAccordion === "employmentLaw" ? "max-h-[600px] pb-4" : "max-h-0"
                }`}
              >
                <ul className="space-y-3 pl-4">
                  {practiceAreas.employmentLaw.items.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="block text-black/70"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Civil Rights */}
            <div className="border-b border-black/10">
              <button
                onClick={() => toggleMobileAccordion("civilRights")}
                className="flex w-full items-center justify-between py-4 text-left text-lg font-medium text-black"
              >
                {practiceAreas.civilRights.label}
                <ChevronDown
                  className={`h-5 w-5 transition-transform duration-200 ${
                    mobileAccordion === "civilRights" ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  mobileAccordion === "civilRights" ? "max-h-[400px] pb-4" : "max-h-0"
                }`}
              >
                <ul className="space-y-3 pl-4">
                  {practiceAreas.civilRights.items.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="block text-black/70"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Other links */}
            {mainNavItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block border-b border-black/10 py-4 text-lg font-medium text-black"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Contact Button */}
          <div className="mt-8">
            <a
              href="tel:+12125551234"
              onClick={() => setMobileMenuOpen(false)}
              className="block w-full bg-black py-4 text-center text-lg font-medium text-white"
            >
              Call Now
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
