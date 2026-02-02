"use client";

import { Space_Mono, DM_Sans } from "next/font/google";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, Phone } from "lucide-react";

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-space-mono",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

// Sample content for Employment Discrimination
const practiceArea = {
  title: "Employment Discrimination",
  caseNumber: "PRACTICE AREA 002 / EMPLOYMENT",
  tagline: "YOUR RIGHTS. PROTECTED.",
  description:
    "When employers make decisions based on protected characteristics rather than merit, they violate both federal and state laws designed to ensure equal opportunity in the workplace.",
  intro:
    "Employment discrimination takes many forms—from overt bias in hiring and firing to subtle patterns of exclusion in promotions and compensation. Our firm has spent over two decades holding employers accountable and securing meaningful relief for workers whose rights have been violated.",
  caseTypes: [
    "Race and national origin discrimination",
    "Gender and sex-based discrimination",
    "Age discrimination (ADEA violations)",
    "Disability discrimination (ADA violations)",
    "Religious discrimination and failure to accommodate",
    "Retaliation for protected complaints",
  ],
  process: [
    {
      step: "01",
      title: "Case Evaluation",
      description:
        "We analyze your situation, review documentation, and assess the strength of potential claims under federal and state law.",
    },
    {
      step: "02",
      title: "Evidence Gathering",
      description:
        "Our team collects witness statements, employment records, communications, and statistical data to build a compelling case.",
    },
    {
      step: "03",
      title: "Strategic Filing",
      description:
        "We file with the EEOC or state agencies when required, preserving your rights while pursuing the most effective path forward.",
    },
    {
      step: "04",
      title: "Litigation & Resolution",
      description:
        "Whether through negotiation or trial, we fight for maximum compensation including back pay, reinstatement, and damages.",
    },
  ],
  stats: [
    { value: "$12M+", label: "RECOVERED" },
    { value: "200+", label: "CASES" },
    { value: "98%", label: "WIN RATE" },
  ],
};

export default function AdvocateBrutalistPreview() {
  return (
    <div
      className={`${spaceMono.variable} ${dmSans.variable} min-h-screen`}
      style={{
        fontFamily: "var(--font-dm-sans), Arial, sans-serif",
        backgroundColor: "#FFFFFF",
        color: "#000000",
      }}
    >
      {/* Preview Navigation */}
      <PreviewNav current="advocate-brutalist" />

      {/* Grid overlay */}
      <div
        className="pointer-events-none fixed inset-0 z-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(0,0,0,0.03) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(0,0,0,0.03) 1px, transparent 1px)
          `,
          backgroundSize: "48px 48px",
        }}
      />

      {/* Hero Section - Black */}
      <section
        className="relative z-10 min-h-[80vh] px-5 pb-20 pt-32"
        style={{ backgroundColor: "#000000", color: "#FFFFFF" }}
      >
        {/* Case number stamp */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.2 }}
          className="absolute right-5 top-32 border-2 px-3 py-1 md:right-10"
          style={{
            fontFamily: "var(--font-space-mono), monospace",
            borderColor: "#E63228",
            color: "#E63228",
            fontSize: "10px",
            letterSpacing: "0.1em",
          }}
        >
          {practiceArea.caseNumber}
        </motion.div>

        <div className="mx-auto max-w-5xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
            className="text-sm tracking-[0.2em]"
            style={{
              fontFamily: "var(--font-space-mono), monospace",
              color: "#E63228",
            }}
          >
            {practiceArea.tagline}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2, delay: 0.05 }}
            className="mt-6 text-5xl font-bold uppercase leading-[0.95] tracking-tight md:text-8xl"
            style={{ fontFamily: "var(--font-space-mono), monospace" }}
          >
            Employment
            <br />
            Discrimination
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2, delay: 0.1 }}
            className="mt-10 max-w-2xl text-lg leading-relaxed"
            style={{ opacity: 0.7 }}
          >
            {practiceArea.description}
          </motion.p>

          {/* Stats Row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2, delay: 0.15 }}
            className="mt-16 flex flex-wrap gap-12"
          >
            {practiceArea.stats.map((stat) => (
              <div key={stat.label}>
                <p
                  className="text-4xl font-bold md:text-5xl"
                  style={{
                    fontFamily: "var(--font-space-mono), monospace",
                    color: "#E63228",
                  }}
                >
                  {stat.value}
                </p>
                <p
                  className="mt-1 text-xs tracking-[0.2em]"
                  style={{
                    fontFamily: "var(--font-space-mono), monospace",
                    opacity: 0.5,
                  }}
                >
                  {stat.label}
                </p>
              </div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2, delay: 0.2 }}
            className="mt-16 flex flex-wrap gap-4"
          >
            <Link
              href="#contact"
              className="group inline-flex items-center gap-3 px-8 py-4 text-sm font-bold uppercase tracking-wider transition-all duration-150"
              style={{
                backgroundColor: "#E63228",
                color: "#FFFFFF",
                fontFamily: "var(--font-space-mono), monospace",
                boxShadow: "4px 4px 0 #FFFFFF",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translate(2px, 2px)";
                e.currentTarget.style.boxShadow = "2px 2px 0 #FFFFFF";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translate(0, 0)";
                e.currentTarget.style.boxShadow = "4px 4px 0 #FFFFFF";
              }}
            >
              Get Free Consultation
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <a
              href="tel:+1234567890"
              className="inline-flex items-center gap-2 border-2 px-8 py-4 text-sm font-bold uppercase tracking-wider"
              style={{
                borderColor: "#FFFFFF",
                fontFamily: "var(--font-space-mono), monospace",
              }}
            >
              <Phone className="h-4 w-4" />
              Call Now
            </a>
          </motion.div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="relative z-10 px-5 py-24">
        <div className="mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3 }}
            className="border-l-4 pl-8"
            style={{ borderColor: "#E63228" }}
          >
            <p className="text-xl leading-relaxed md:text-2xl">
              {practiceArea.intro}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Case Types Section */}
      <section className="relative z-10 px-5 py-24" style={{ backgroundColor: "#000000", color: "#FFFFFF" }}>
        <div className="mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.2 }}
          >
            <p
              className="text-xs tracking-[0.2em]"
              style={{
                fontFamily: "var(--font-space-mono), monospace",
                color: "#E63228",
              }}
            >
              WHAT WE FIGHT FOR
            </p>
            <h2
              className="mt-4 text-3xl font-bold uppercase tracking-tight md:text-5xl"
              style={{ fontFamily: "var(--font-space-mono), monospace" }}
            >
              Types of Cases
            </h2>
          </motion.div>

          <div className="mt-16 grid gap-4 md:grid-cols-2">
            {practiceArea.caseTypes.map((caseType, index) => (
              <motion.div
                key={caseType}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.2, delay: index * 0.05 }}
                className="flex items-center gap-4 border-2 p-5 transition-all duration-150"
                style={{
                  borderColor: "#FFFFFF",
                  boxShadow: "4px 4px 0 #E63228",
                }}
              >
                <span
                  className="text-2xl font-bold"
                  style={{
                    fontFamily: "var(--font-space-mono), monospace",
                    color: "#E63228",
                  }}
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="text-base font-medium">{caseType}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="relative z-10 px-5 py-24">
        <div className="mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.2 }}
          >
            <p
              className="text-xs tracking-[0.2em]"
              style={{
                fontFamily: "var(--font-space-mono), monospace",
                color: "#E63228",
              }}
            >
              THE PROCESS
            </p>
            <h2
              className="mt-4 text-3xl font-bold uppercase tracking-tight md:text-5xl"
              style={{ fontFamily: "var(--font-space-mono), monospace" }}
            >
              How We Fight
            </h2>
          </motion.div>

          <div className="mt-16 grid gap-8 md:grid-cols-2">
            {practiceArea.process.map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.2, delay: index * 0.05 }}
                className="border-t-4 pt-6"
                style={{ borderColor: "#000000" }}
              >
                <span
                  className="text-4xl font-bold"
                  style={{
                    fontFamily: "var(--font-space-mono), monospace",
                    color: "#E63228",
                  }}
                >
                  {item.step}
                </span>
                <h3
                  className="mt-4 text-xl font-bold uppercase"
                  style={{ fontFamily: "var(--font-space-mono), monospace" }}
                >
                  {item.title}
                </h3>
                <p className="mt-3 leading-relaxed" style={{ opacity: 0.7 }}>
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        className="relative z-10 px-5 py-24"
        style={{ backgroundColor: "#E63228", color: "#FFFFFF" }}
      >
        <div className="mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3 }}
            className="text-center"
          >
            <h2
              className="text-4xl font-bold uppercase tracking-tight md:text-6xl"
              style={{ fontFamily: "var(--font-space-mono), monospace" }}
            >
              Ready to Fight?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg" style={{ opacity: 0.9 }}>
              Every case begins with a confidential consultation. We'll listen to
              your story and provide an honest assessment of your options.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="#contact"
                className="group inline-flex items-center gap-3 px-10 py-5 text-sm font-bold uppercase tracking-wider transition-all duration-150"
                style={{
                  backgroundColor: "#FFFFFF",
                  color: "#000000",
                  fontFamily: "var(--font-space-mono), monospace",
                  boxShadow: "4px 4px 0 #000000",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translate(2px, 2px)";
                  e.currentTarget.style.boxShadow = "2px 2px 0 #000000";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translate(0, 0)";
                  e.currentTarget.style.boxShadow = "4px 4px 0 #000000";
                }}
              >
                Schedule Free Consultation
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Related Practice Areas */}
      <section className="relative z-10 px-5 py-24" style={{ backgroundColor: "#000000", color: "#FFFFFF" }}>
        <div className="mx-auto max-w-5xl">
          <p
            className="text-xs tracking-[0.2em]"
            style={{
              fontFamily: "var(--font-space-mono), monospace",
              color: "#E63228",
            }}
          >
            MORE PRACTICE AREAS
          </p>
          <h2
            className="mt-4 text-3xl font-bold uppercase tracking-tight"
            style={{ fontFamily: "var(--font-space-mono), monospace" }}
          >
            Related Cases
          </h2>

          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {["Sexual Harassment", "Wrongful Termination", "Retaliation"].map(
              (area, index) => (
                <motion.a
                  key={area}
                  href="#"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.2, delay: index * 0.05 }}
                  className="group flex items-center justify-between border-2 p-6 transition-all duration-150"
                  style={{
                    borderColor: "#FFFFFF",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = "#E63228";
                    e.currentTarget.style.borderColor = "#E63228";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "transparent";
                    e.currentTarget.style.borderColor = "#FFFFFF";
                  }}
                >
                  <span
                    className="text-sm font-bold uppercase tracking-wider"
                    style={{ fontFamily: "var(--font-space-mono), monospace" }}
                  >
                    {area}
                  </span>
                  <ArrowUpRight className="h-5 w-5" />
                </motion.a>
              )
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

function PreviewNav({ current }: { current: string }) {
  const previews = [
    { slug: "editorial-counsel", name: "Editorial Counsel" },
    { slug: "advocate-brutalist", name: "Advocate Brutalist" },
    { slug: "warm-authority", name: "Warm Authority" },
  ];

  return (
    <div
      className="fixed left-1/2 top-20 z-50 flex -translate-x-1/2 gap-0 border-2"
      style={{
        backgroundColor: "#FFFFFF",
        borderColor: "#000000",
        fontFamily: "var(--font-space-mono), monospace",
      }}
    >
      {previews.map((preview) => (
        <Link
          key={preview.slug}
          href={`/preview/${preview.slug}`}
          className="px-4 py-2 text-xs font-bold uppercase tracking-wider transition-all"
          style={{
            backgroundColor: current === preview.slug ? "#000000" : "transparent",
            color: current === preview.slug ? "#FFFFFF" : "#000000",
          }}
        >
          {preview.name}
        </Link>
      ))}
    </div>
  );
}
