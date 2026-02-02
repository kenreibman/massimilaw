"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

type PracticeArea = {
  title: string;
  slug: string;
};

const practiceAreas: PracticeArea[] = [
  { title: "Civil Rights Violations", slug: "civil-rights-violations" },
  { title: "Employment Discrimination", slug: "employment-discrimination" },
  { title: "Sexual Harassment", slug: "sexual-harassment" },
  { title: "Pregnancy Discrimination", slug: "pregnancy-discrimination" },
  { title: "Wrongful Termination", slug: "wrongful-termination" },
  { title: "Racial Discrimination", slug: "racial-discrimination" },
  { title: "Workplace Harassment", slug: "workplace-harassment" },
  { title: "Paid Family Leave Violations", slug: "paid-family-leave-violations" },
  { title: "FMLA Violations", slug: "fmla-violations" },
  { title: "Labor Law Violations", slug: "labor-law-violations" },
  { title: "Wage & Hour Violations", slug: "wage-hour-violations" },
  { title: "Police Brutality", slug: "police-brutality" },
  { title: "Excessive Force", slug: "excessive-force" },
  { title: "False Arrest", slug: "false-arrest" },
  { title: "Malicious Prosecution", slug: "malicious-prosecution" },
  { title: "Denial of Fair Trial", slug: "denial-of-fair-trial" },
];

export default function Services() {
  return (
    <section className="bg-white py-24 md:py-28" id="services">
      <div className="mx-auto max-w-6xl px-5">
        {/* Header */}
        <div className="max-w-3xl">
          <p className="text-xs tracking-[0.25em] text-black/60">
            PRACTICE AREAS
          </p>

          <h2 className="mt-6 font-serif text-4xl leading-[1.1] tracking-tight text-black md:text-5xl">
            Fighting for justice across civil rights and employment law.
          </h2>

          <p className="mt-6 text-base leading-relaxed text-black/60">
            We represent individuals who have been wronged by employers, law enforcement, and government agencies.
          </p>
        </div>

        {/* Practice Areas Grid */}
        <div className="mt-16 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {practiceAreas.map((area) => (
            <Link
              key={area.slug}
              href={`/practice/${area.slug}`}
              className="group relative flex items-center justify-between gap-4 rounded-lg border border-black/30 bg-white px-5 py-4 text-black transition-all duration-200 hover:border-black hover:bg-black hover:text-white"
            >
              <span className="text-sm font-medium">{area.title}</span>
              <ArrowUpRight className="h-4 w-4 flex-shrink-0 text-black/40 transition-all duration-200 group-hover:text-white group-hover:opacity-100" />
            </Link>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <p className="text-sm text-black/50">
            Don't see your situation listed?{" "}
            <Link href="#contact" className="text-black underline underline-offset-2 hover:no-underline">
              Contact us
            </Link>{" "}
            — we handle many related cases.
          </p>
        </div>
      </div>
    </section>
  );
}
