"use client";

import { Playfair_Display, Source_Sans_3 } from "next/font/google";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Phone,
  CheckCircle,
  Scale,
  Clock,
  Award,
  MapPin,
  Shield,
  Briefcase,
  Gavel,
} from "lucide-react";
import {
  practiceAreas,
  sharedData,
} from "@/app/data/practiceAreas";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-source-sans",
  display: "swap",
});

// Group practice areas by category for better organization
const practiceCategories = [
  {
    title: "Employment Law",
    icon: Briefcase,
    description: "Protecting workers from discrimination, harassment, and wage theft",
    areas: [
      "employment-discrimination",
      "sexual-harassment",
      "pregnancy-discrimination",
      "wrongful-termination",
      "racial-discrimination",
      "workplace-harassment",
      "paid-family-leave-violations",
      "fmla-violations",
      "labor-law-violations",
      "wage-hour-violations",
    ],
  },
  {
    title: "Civil Rights",
    icon: Shield,
    description: "Holding government and law enforcement accountable",
    areas: [
      "civil-rights-violations",
      "police-brutality",
      "excessive-force",
      "false-arrest",
      "malicious-prosecution",
      "denial-of-fair-trial",
    ],
  },
];

// Map icon strings to components
const iconMap = {
  Award,
  Scale,
  Clock,
  MapPin,
};

export default function PracticeAreasPage() {
  const allAreas = Object.values(practiceAreas);

  return (
    <div
      className={`${playfair.variable} ${sourceSans.variable} min-h-screen`}
      style={{
        fontFamily: "var(--font-source-sans), Georgia, serif",
        backgroundColor: "#FAFAF8",
        color: "#1A1A1A",
      }}
    >
      {/* Paper texture overlay */}
      <div
        className="pointer-events-none fixed inset-0 z-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%' height='100%' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* HERO SECTION */}
      <section className="relative z-10 px-5 pb-16 pt-32">
        <div className="mx-auto max-w-4xl">
          {/* Breadcrumb */}
          <motion.nav
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="mb-8 text-sm"
            style={{ color: "rgba(26, 26, 26, 0.5)" }}
          >
            <Link href="/" className="hover:underline">
              Home
            </Link>
            <span className="mx-2">/</span>
            <span style={{ color: "#9A8866" }}>Practice Areas</span>
          </motion.nav>

          {/* H1 */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl leading-[1.1] tracking-tight md:text-6xl"
            style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
          >
            New York Civil Rights & Employment Lawyers
          </motion.h1>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-4 text-xl md:text-2xl"
            style={{ color: "#9A8866" }}
          >
            Fighting for Justice Across 16 Practice Areas
          </motion.p>

          {/* Hero description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-6 max-w-3xl text-lg leading-relaxed"
            style={{ opacity: 0.8 }}
          >
            For over two decades, our New York attorneys have represented workers
            facing discrimination and harassment, and individuals whose civil rights
            have been violated by police and government agencies. We've recovered
            over $12 million for our clients across Manhattan, Brooklyn, Queens,
            and throughout New York State.
          </motion.p>

          {/* PRIMARY CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center"
          >
            <Link
              href="#contact"
              className="group inline-flex items-center justify-center gap-3 px-8 py-4 text-base font-medium transition-all duration-300"
              style={{
                backgroundColor: "#1A1A1A",
                color: "#FAFAF8",
              }}
            >
              Get Your Free Case Review
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <a
              href={`tel:${sharedData.phone.replace(/[^0-9]/g, "")}`}
              className="inline-flex items-center justify-center gap-2 border px-8 py-4 text-base font-medium transition-all duration-300 hover:bg-black/5"
              style={{ borderColor: "#1A1A1A" }}
            >
              <Phone className="h-4 w-4" />
              {sharedData.phone}
            </a>
          </motion.div>

          {/* Trust signals */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-10 flex flex-wrap gap-6"
          >
            {sharedData.trustSignals.map((signal) => {
              const IconComponent = iconMap[signal.icon as keyof typeof iconMap];
              return (
                <div
                  key={signal.text}
                  className="flex items-center gap-2 text-sm"
                  style={{ color: "rgba(26, 26, 26, 0.7)" }}
                >
                  <IconComponent className="h-4 w-4" style={{ color: "#9A8866" }} />
                  <span>{signal.text}</span>
                </div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* STATS SECTION */}
      <section className="relative z-10 px-5 py-12">
        <div className="mx-auto max-w-4xl">
          <div
            className="grid gap-8 border-y py-12 md:grid-cols-3"
            style={{ borderColor: "rgba(26, 26, 26, 0.15)" }}
          >
            {sharedData.stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <p
                  className="text-4xl tracking-tight md:text-5xl"
                  style={{
                    fontFamily: "var(--font-playfair), Georgia, serif",
                    color: "#9A8866",
                  }}
                >
                  {stat.value}
                </p>
                <p className="mt-2 text-sm" style={{ opacity: 0.6 }}>
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PRACTICE AREAS BY CATEGORY */}
      {practiceCategories.map((category, categoryIndex) => (
        <section key={category.title} className="relative z-10 px-5 py-16">
          <div className="mx-auto max-w-4xl">
            {categoryIndex === 0 && (
              <div
                className="mb-16 h-px"
                style={{ backgroundColor: "rgba(26, 26, 26, 0.15)" }}
              />
            )}

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex items-start gap-4"
            >
              <category.icon
                className="mt-1 h-8 w-8 flex-shrink-0"
                style={{ color: "#9A8866" }}
              />
              <div>
                <h2
                  className="text-3xl tracking-tight md:text-4xl"
                  style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
                >
                  {category.title}
                </h2>
                <p className="mt-2 text-base" style={{ opacity: 0.7 }}>
                  {category.description}
                </p>
              </div>
            </motion.div>

            <div className="mt-10 grid gap-4 md:grid-cols-2">
              {category.areas.map((slug, index) => {
                const area = practiceAreas[slug];
                if (!area) return null;
                return (
                  <motion.div
                    key={slug}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                  >
                    <Link
                      href={`/practice/${slug}`}
                      className="group flex items-start gap-4 border p-6 transition-all duration-300 hover:border-[#9A8866] hover:bg-white"
                      style={{ borderColor: "rgba(26, 26, 26, 0.15)" }}
                    >
                      <div className="flex-1">
                        <h3
                          className="text-lg font-medium"
                          style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
                        >
                          {area.title}
                        </h3>
                        <p
                          className="mt-2 line-clamp-2 text-sm leading-relaxed"
                          style={{ opacity: 0.6 }}
                        >
                          {area.caseTypes[0]?.description}
                        </p>
                      </div>
                      <ArrowRight
                        className="mt-1 h-5 w-5 flex-shrink-0 transition-transform group-hover:translate-x-1"
                        style={{ color: "#9A8866" }}
                      />
                    </Link>
                  </motion.div>
                );
              })}
            </div>

            {categoryIndex < practiceCategories.length - 1 && (
              <div
                className="mt-16 h-px"
                style={{ backgroundColor: "rgba(26, 26, 26, 0.15)" }}
              />
            )}
          </div>
        </section>
      ))}

      {/* MID-PAGE CTA */}
      <section className="relative z-10 px-5 py-8">
        <div className="mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center justify-between gap-6 p-8 md:flex-row"
            style={{ backgroundColor: "#1A1A1A", color: "#FAFAF8" }}
          >
            <div>
              <p
                className="text-xl md:text-2xl"
                style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
              >
                Not sure which practice area fits your case?
              </p>
              <p className="mt-1 text-sm" style={{ opacity: 0.7 }}>
                Tell us what happened—we'll identify your legal options.
              </p>
            </div>
            <Link
              href="#contact"
              className="group inline-flex shrink-0 items-center gap-2 px-6 py-3 text-sm font-medium transition-all duration-300"
              style={{ backgroundColor: "#9A8866", color: "#FAFAF8" }}
            >
              Free Case Evaluation
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* WHY CHOOSE US SECTION */}
      <section className="relative z-10 px-5 py-16">
        <div className="mx-auto max-w-4xl">
          <div
            className="h-px"
            style={{ backgroundColor: "rgba(26, 26, 26, 0.15)" }}
          />

          <div className="py-16">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p
                className="text-xs tracking-[0.3em]"
                style={{ color: "#9A8866" }}
              >
                WHY CHOOSE US
              </p>
              <h2
                className="mt-4 text-3xl tracking-tight md:text-4xl"
                style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
              >
                Experienced New York Attorneys Fighting for You
              </h2>
            </motion.div>

            <div className="mt-12 grid gap-8 md:grid-cols-2">
              {[
                {
                  title: "No Fee Unless We Win",
                  description:
                    "We handle cases on contingency—you pay nothing upfront and no attorney fees unless we recover compensation for you.",
                },
                {
                  title: "20+ Years of Experience",
                  description:
                    "Our attorneys have decades of experience fighting for workers' rights and civil liberties in New York courts.",
                },
                {
                  title: "Proven Track Record",
                  description:
                    "We've recovered over $12 million for our clients and achieved a 98% success rate across hundreds of cases.",
                },
                {
                  title: "Personalized Attention",
                  description:
                    "Every client works directly with experienced attorneys who understand the nuances of their specific situation.",
                },
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <CheckCircle
                    className="mt-1 h-5 w-5 flex-shrink-0"
                    style={{ color: "#9A8866" }}
                  />
                  <div>
                    <h3
                      className="text-lg font-medium"
                      style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
                    >
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed" style={{ opacity: 0.7 }}>
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div
            className="h-px"
            style={{ backgroundColor: "rgba(26, 26, 26, 0.15)" }}
          />
        </div>
      </section>

      {/* ALL PRACTICE AREAS LIST */}
      <section className="relative z-10 px-5 py-16">
        <div className="mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p
              className="text-xs tracking-[0.3em]"
              style={{ color: "#9A8866" }}
            >
              ALL PRACTICE AREAS
            </p>
            <h2
              className="mt-4 text-3xl tracking-tight md:text-4xl"
              style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
            >
              Complete List of Legal Services
            </h2>
            <p className="mt-4 max-w-2xl text-base" style={{ opacity: 0.7 }}>
              Our New York attorneys handle cases across all of the following practice
              areas. Click any area to learn more about how we can help.
            </p>
          </motion.div>

          <div className="mt-12 grid gap-0">
            {allAreas.map((area, index) => (
              <motion.div
                key={area.slug}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.03 }}
              >
                <Link
                  href={`/practice/${area.slug}`}
                  className="group flex items-center justify-between border-b py-5 transition-all duration-300 hover:pl-4"
                  style={{ borderColor: "rgba(26, 26, 26, 0.1)" }}
                >
                  <div className="flex items-center gap-4">
                    <span
                      className="text-sm tabular-nums"
                      style={{ color: "#9A8866", opacity: 0.6 }}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="text-base font-medium">{area.title}</span>
                  </div>
                  <ArrowRight
                    className="h-4 w-4 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-1"
                    style={{ color: "#9A8866" }}
                  />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* AREAS SERVED */}
      <section className="relative z-10 px-5 py-16">
        <div className="mx-auto max-w-4xl">
          <div
            className="h-px"
            style={{ backgroundColor: "rgba(26, 26, 26, 0.15)" }}
          />

          <div className="py-16">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p
                className="text-xs tracking-[0.3em]"
                style={{ color: "#9A8866" }}
              >
                SERVING NEW YORK
              </p>
              <h2
                className="mt-4 text-3xl tracking-tight md:text-4xl"
                style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
              >
                Representing Clients Throughout New York
              </h2>
              <p className="mt-4 max-w-2xl text-base" style={{ opacity: 0.7 }}>
                Our attorneys represent workers and civil rights victims throughout
                the New York metropolitan area and beyond.
              </p>
            </motion.div>

            <div className="mt-10 flex flex-wrap gap-3">
              {sharedData.areasServed.map((area, index) => (
                <motion.span
                  key={area}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="inline-flex items-center gap-2 border px-4 py-2 text-sm"
                  style={{ borderColor: "rgba(26, 26, 26, 0.2)" }}
                >
                  <MapPin className="h-3 w-3" style={{ color: "#9A8866" }} />
                  {area}
                </motion.span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA SECTION */}
      <section
        className="relative z-10 px-5 py-20"
        style={{ backgroundColor: "#1A1A1A", color: "#FAFAF8" }}
      >
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-sm tracking-[0.2em]" style={{ color: "#9A8866" }}>
              READY TO TAKE ACTION?
            </p>
            <h2
              className="mt-6 text-3xl tracking-tight md:text-5xl"
              style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
            >
              Get Your Free Case Evaluation
            </h2>
            <p
              className="mx-auto mt-6 max-w-xl text-lg"
              style={{ opacity: 0.8 }}
            >
              Whether you're facing workplace discrimination, police misconduct,
              or any other civil rights violation, we're here to help. Contact us
              today for a free, confidential consultation.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="#contact"
                className="group inline-flex items-center gap-3 px-10 py-5 text-base font-medium transition-all duration-300"
                style={{ backgroundColor: "#9A8866", color: "#FAFAF8" }}
              >
                Start Your Free Consultation
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <a
                href={`tel:${sharedData.phone.replace(/[^0-9]/g, "")}`}
                className="inline-flex items-center gap-2 border px-8 py-5 text-base transition-all duration-300 hover:bg-white/10"
                style={{ borderColor: "rgba(250, 250, 248, 0.3)" }}
              >
                <Phone className="h-4 w-4" />
                {sharedData.phone}
              </a>
            </div>

            <div
              className="mt-10 flex flex-wrap items-center justify-center gap-6 text-sm"
              style={{ opacity: 0.6 }}
            >
              <span className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4" style={{ color: "#9A8866" }} />
                No fee unless we win
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4" style={{ color: "#9A8866" }} />
                Confidential consultation
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4" style={{ color: "#9A8866" }} />
                Available 24/7
              </span>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
