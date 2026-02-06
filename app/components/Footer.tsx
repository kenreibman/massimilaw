"use client";

import Link from "next/link";

const employmentLaw = [
  { label: "Employment Discrimination", href: "/practice/employment-discrimination" },
  { label: "Sexual Harassment", href: "/practice/sexual-harassment" },
  { label: "Pregnancy Discrimination", href: "/practice/pregnancy-discrimination" },
  { label: "Wrongful Termination", href: "/practice/wrongful-termination" },
  { label: "Racial Discrimination", href: "/practice/racial-discrimination" },
  { label: "Workplace Harassment", href: "/practice/workplace-harassment" },
  { label: "Paid Family Leave Violations", href: "/practice/paid-family-leave-violations" },
  { label: "FMLA Violations", href: "/practice/fmla-violations" },
  { label: "Labor Law Violations", href: "/practice/labor-law-violations" },
  { label: "Wage & Hour Violations", href: "/practice/wage-hour-violations" },
];

const civilRights = [
  { label: "Civil Rights Violations", href: "/practice/civil-rights-violations" },
  { label: "Police Brutality", href: "/practice/police-brutality" },
  { label: "Excessive Force", href: "/practice/excessive-force" },
  { label: "False Arrest", href: "/practice/false-arrest" },
  { label: "Malicious Prosecution", href: "/practice/malicious-prosecution" },
  { label: "Denial of Fair Trial", href: "/practice/denial-of-fair-trial" },
];

const legal = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms of Service", href: "/terms-of-service" },
  { label: "Cookie Policy", href: "/cookie-policy" },
];

export default function Footer() {
  return (
    <footer className="border-t border-black/10 bg-white">
      <div className="mx-auto max-w-6xl px-5 py-20">
        {/* Top */}
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
          {/* Brand */}
          <div className="md:col-span-5">
            <div className="font-serif text-2xl tracking-tight text-black">
              MassimiLaw
            </div>

            <p className="mt-4 max-w-sm text-sm leading-relaxed text-black/60">
              Straightforward legal services with no hidden surprises. We help
              clients navigate complexity with clarity and confidence.
            </p>
          </div>

          {/* Employment Law */}
          <div className="md:col-span-3">
            <div className="mb-4 text-xs uppercase tracking-widest text-black/50">
              Employment Law
            </div>
            <ul className="space-y-3 text-sm">
              {employmentLaw.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-black/70 hover:text-black"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Civil Rights */}
          <div className="md:col-span-2">
            <div className="mb-4 text-xs uppercase tracking-widest text-black/50">
              Civil Rights
            </div>
            <ul className="space-y-3 text-sm">
              {civilRights.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-black/70 hover:text-black"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-2">
            <div className="mb-4 text-xs uppercase tracking-widest text-black/50">
              Contact
            </div>

            <div className="space-y-3 text-sm text-black/70">
              <div>
                <a
                  href="mailto:info@massimilaw.com"
                  className="hover:text-black"
                >
                  info@massimilaw.com
                </a>
              </div>
              <div>
                <a href="tel:+16462419800" className="hover:text-black">
                  +1 (646) 241-9800
                </a>
              </div>
              <div className="pt-2 text-xs text-black/50">
                © {new Date().getFullYear()} MassimiLaw PLLC
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 flex flex-col items-start justify-between gap-6 border-t border-black/10 pt-8 md:flex-row md:items-center">
          <div className="text-xs text-black/50">
            Attorney advertising. Prior results do not guarantee a similar
            outcome.
          </div>

          <ul className="flex flex-wrap gap-6 text-xs">
            {legal.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className="text-black/60 hover:text-black"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
