"use client";

import Image from "next/image";
import Link from "next/link";

type Stat = {
  value: string;
  label: string;
};

type AboutProps = {
  eyebrow?: string;
  heading?: string;
  body?: string;
  ctaHref?: string;
  ctaLabel?: string;
  imageSrc?: string;
  imageAlt?: string;
};

export default function About({
  eyebrow = "",
  heading = "For over 15 years,\nwe’ve been helping\nclients navigate their\nlegal challenges.",
  body = "MassimiLaw is a New York City–based civil rights and employment discrimination law firm dedicated to standing up for working people and holding powerful institutions accountable. The firm represents individuals harmed by police misconduct, government abuse, and unlawful workplace practices—because a safer, more just, and more equitable city is possible. \n\n With deep experience litigating in state and federal courts, MassimiLaw brings a strategic, client-centered approach to every case. The firm has handled hundreds of matters through litigation, mediation, and arbitration, and has recovered millions of dollars for clients. \n\n MassimiLaw is proud to be rooted in New York City and committed to advocacy that creates real change for individuals, families, and communities.",
  ctaHref = "#contact",
  ctaLabel = "Free case evaluation",
  imageSrc = "/images/about.png",
  imageAlt = "Mother holding baby",
}: AboutProps) {
  return (
    <section className="bg-white py-16 md:py-24" id="about">
      <div className="mx-auto max-w-6xl px-5">
        {/* Top: left copy + right image */}
        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-10 lg:gap-12">
          {/* Left */}
          <div className="lg:col-span-5">
            <p className="text-xs text-black/60">
              {eyebrow}
            </p>

            <h2 className="mt-5 whitespace-pre-line font-serif text-4xl leading-[1.03] tracking-tight text-black md:text-5xl">
              {heading}
            </h2>

            <p className="mt-6 whitespace-pre-line text-sm leading-relaxed text-black/60">
              {body}
            </p>
          </div>

          {/* Right image */}
          <div className="lg:col-span-5">
            <div className="relative overflow-hidden bg-black/5">
              <div className="relative aspect-square w-full">
                <Image
                  src={imageSrc}
                  alt={imageAlt}
                  fill
                  priority={false}
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom: button (left) + stats (right) */}
        <div className="hidden mt-14 md:grid grid-cols-1 items-end gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Link
              href={ctaHref}
              className="inline-flex items-center justify-center rounded-md bg-black px-6 py-4 text-sm font-medium text-white shadow-sm transition hover:bg-black/90"
            >
              {ctaLabel}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
