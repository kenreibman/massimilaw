"use client";

import { Playfair_Display, Source_Sans_3 } from "next/font/google";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Scale, FileText, Users, Clock, Phone } from "lucide-react";

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

// Sample content for Employment Discrimination
const practiceArea = {
  title: "Employment Discrimination",
  subtitle: "PRACTICE AREA 002",
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
    { value: "$12M+", label: "Recovered for clients" },
    { value: "200+", label: "Cases handled" },
    { value: "98%", label: "Success rate" },
  ],
};

export default function EditorialCounselPreview() {
  return (
    <div
      className={`${playfair.variable} ${sourceSans.variable} min-h-screen`}
      style={{
        fontFamily: "var(--font-source-sans), Georgia, serif",
        backgroundColor: "#FAFAF8",
        color: "#1A1A1A",
      }}
    >
      {/* Preview Navigation */}
      <PreviewNav current="editorial-counsel" />

      {/* Paper texture overlay */}
      <div
        className="pointer-events-none fixed inset-0 z-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%' height='100%' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Hero Section */}
      <section className="relative z-10 px-5 pb-20 pt-32">
        <div className="mx-auto max-w-4xl">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-xs tracking-[0.3em]"
            style={{ color: "#9A8866" }}
          >
            {practiceArea.subtitle}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mt-6 text-5xl leading-[1.1] tracking-tight md:text-7xl"
            style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
          >
            {practiceArea.title}
          </motion.h1>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-10 h-px origin-left"
            style={{ backgroundColor: "#1A1A1A" }}
          />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-10 text-xl leading-relaxed"
            style={{ color: "#1A1A1A", opacity: 0.7 }}
          >
            {practiceArea.description}
          </motion.p>
        </div>
      </section>

      {/* Horizontal Rule */}
      <div className="mx-auto max-w-4xl px-5">
        <div className="h-px" style={{ backgroundColor: "#1A1A1A", opacity: 0.15 }} />
      </div>

      {/* Introduction with Drop Cap */}
      <section className="relative z-10 px-5 py-20">
        <div className="mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-lg leading-[1.9]" style={{ color: "#1A1A1A" }}>
              <span
                className="float-left mr-4 mt-1 text-6xl leading-none"
                style={{
                  fontFamily: "var(--font-playfair), Georgia, serif",
                  color: "#9A8866",
                }}
              >
                E
              </span>
              {practiceArea.intro}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Case Types Section */}
      <section className="relative z-10 px-5 py-20">
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
              WHAT WE HANDLE
            </p>
            <h2
              className="mt-4 text-3xl tracking-tight md:text-4xl"
              style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
            >
              Types of Cases
            </h2>
          </motion.div>

          <div className="mt-12 grid gap-0">
            {practiceArea.caseTypes.map((caseType, index) => (
              <motion.div
                key={caseType}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-center gap-6 border-b py-5"
                style={{ borderColor: "rgba(26, 26, 26, 0.15)" }}
              >
                <span
                  className="text-sm tabular-nums"
                  style={{ color: "#9A8866" }}
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="text-lg">{caseType}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Horizontal Rule */}
      <div className="mx-auto max-w-4xl px-5">
        <div className="h-px" style={{ backgroundColor: "#1A1A1A", opacity: 0.15 }} />
      </div>

      {/* Process Section */}
      <section className="relative z-10 px-5 py-20">
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
              OUR APPROACH
            </p>
            <h2
              className="mt-4 text-3xl tracking-tight md:text-4xl"
              style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
            >
              How We Help
            </h2>
          </motion.div>

          <div className="mt-16 grid gap-16 md:grid-cols-2">
            {practiceArea.process.map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
              >
                <span
                  className="text-sm tracking-wider"
                  style={{ color: "#9A8866" }}
                >
                  STEP {item.step}
                </span>
                <h3
                  className="mt-3 text-2xl"
                  style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
                >
                  {item.title}
                </h3>
                <p className="mt-4 leading-relaxed" style={{ opacity: 0.7 }}>
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative z-10 px-5 py-20">
        <div className="mx-auto max-w-4xl">
          <div
            className="border-y py-16"
            style={{ borderColor: "rgba(26, 26, 26, 0.15)" }}
          >
            <div className="grid gap-12 md:grid-cols-3">
              {practiceArea.stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <p
                    className="text-5xl tracking-tight"
                    style={{
                      fontFamily: "var(--font-playfair), Georgia, serif",
                      color: "#9A8866",
                    }}
                  >
                    {stat.value}
                  </p>
                  <p className="mt-2 text-sm tracking-wide" style={{ opacity: 0.6 }}>
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 px-5 py-24">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2
              className="text-4xl tracking-tight md:text-5xl"
              style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
            >
              Let's discuss your case
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg" style={{ opacity: 0.7 }}>
              Every case begins with a confidential consultation. We'll listen to
              your story and provide an honest assessment of your options.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="#contact"
                className="group inline-flex items-center gap-3 border px-8 py-4 text-sm tracking-wide transition-all duration-300 hover:bg-[#1A1A1A] hover:text-[#FAFAF8]"
                style={{ borderColor: "#1A1A1A" }}
              >
                Schedule Consultation
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <a
                href="tel:+1234567890"
                className="inline-flex items-center gap-2 px-8 py-4 text-sm"
                style={{ color: "#9A8866" }}
              >
                <Phone className="h-4 w-4" />
                (123) 456-7890
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Related Practice Areas */}
      <section
        className="relative z-10 px-5 py-20"
        style={{ backgroundColor: "#1A1A1A", color: "#FAFAF8" }}
      >
        <div className="mx-auto max-w-4xl">
          <p className="text-xs tracking-[0.3em]" style={{ color: "#9A8866" }}>
            RELATED AREAS
          </p>
          <h2
            className="mt-4 text-3xl tracking-tight"
            style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
          >
            Other Practice Areas
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
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group border p-6 transition-all duration-300 hover:border-[#9A8866]"
                  style={{ borderColor: "rgba(250, 250, 248, 0.2)" }}
                >
                  <span
                    className="text-lg"
                    style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
                  >
                    {area}
                  </span>
                  <ArrowRight
                    className="mt-4 h-4 w-4 transition-all duration-300 group-hover:translate-x-1"
                    style={{ color: "#9A8866" }}
                  />
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
      className="fixed left-1/2 top-20 z-50 flex -translate-x-1/2 gap-1 rounded-full border p-1"
      style={{
        backgroundColor: "rgba(250, 250, 248, 0.95)",
        borderColor: "rgba(26, 26, 26, 0.1)",
        backdropFilter: "blur(8px)",
      }}
    >
      {previews.map((preview) => (
        <Link
          key={preview.slug}
          href={`/preview/${preview.slug}`}
          className="rounded-full px-4 py-2 text-xs font-medium transition-all"
          style={{
            backgroundColor: current === preview.slug ? "#1A1A1A" : "transparent",
            color: current === preview.slug ? "#FAFAF8" : "#1A1A1A",
          }}
        >
          {preview.name}
        </Link>
      ))}
    </div>
  );
}
