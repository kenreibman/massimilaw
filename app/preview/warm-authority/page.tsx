"use client";

import { Fraunces, Inter } from "next/font/google";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Phone, CheckCircle2, MessageCircle } from "lucide-react";
import { useState, useEffect } from "react";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

// Sample content for Employment Discrimination
const practiceArea = {
  title: "Employment Discrimination",
  subtitle: "Practice Area",
  tagline: "You deserve to be treated fairly",
  description:
    "When employers make decisions based on protected characteristics rather than merit, they violate both federal and state laws designed to ensure equal opportunity in the workplace.",
  intro:
    "Employment discrimination takes many forms—from overt bias in hiring and firing to subtle patterns of exclusion in promotions and compensation. Our firm has spent over two decades holding employers accountable and securing meaningful relief for workers whose rights have been violated.",
  caseTypes: [
    {
      title: "Race and national origin discrimination",
      description: "Protection against bias based on your racial or ethnic background",
    },
    {
      title: "Gender and sex-based discrimination",
      description: "Equal treatment regardless of gender identity or expression",
    },
    {
      title: "Age discrimination (ADEA violations)",
      description: "Rights for workers 40 and older against age-based decisions",
    },
    {
      title: "Disability discrimination (ADA violations)",
      description: "Reasonable accommodations and equal access to opportunities",
    },
    {
      title: "Religious discrimination",
      description: "Freedom to practice your faith without workplace penalty",
    },
    {
      title: "Retaliation claims",
      description: "Protection when you speak up about discrimination",
    },
  ],
  process: [
    {
      step: "1",
      title: "We Listen",
      description:
        "Share your story in a confidential, judgment-free conversation. We'll help you understand if you have a case.",
    },
    {
      step: "2",
      title: "We Investigate",
      description:
        "Our team gathers evidence, interviews witnesses, and builds a comprehensive picture of what happened.",
    },
    {
      step: "3",
      title: "We Advocate",
      description:
        "From filing complaints to courtroom litigation, we fight strategically for the best possible outcome.",
    },
    {
      step: "4",
      title: "We Resolve",
      description:
        "Whether through settlement or verdict, we pursue full compensation for the harm you've suffered.",
    },
  ],
  stats: [
    { value: "$12M+", label: "Recovered for our clients" },
    { value: "200+", label: "Cases successfully handled" },
    { value: "98%", label: "Favorable outcomes achieved" },
  ],
};

export default function WarmAuthorityPreview() {
  const [showBadge, setShowBadge] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBadge(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`${fraunces.variable} ${inter.variable} min-h-screen`}
      style={{
        fontFamily: "var(--font-inter), system-ui, sans-serif",
        backgroundColor: "#F5F1EB",
        color: "#2D2A26",
      }}
    >
      {/* Preview Navigation */}
      <PreviewNav current="warm-authority" />

      {/* Warm grain texture overlay */}
      <div
        className="pointer-events-none fixed inset-0 z-0 opacity-[0.025]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%' height='100%' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Radial gradient background */}
      <div
        className="pointer-events-none fixed inset-0 z-0"
        style={{
          background: "radial-gradient(ellipse at 50% 0%, #F5F1EB 0%, #EDE8E0 100%)",
        }}
      />

      {/* Floating consultation badge */}
      <AnimatePresence>
        {showBadge && (
          <motion.a
            href="tel:+1234567890"
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="fixed bottom-8 right-8 z-50 flex items-center gap-3 rounded-full px-5 py-3 shadow-lg"
            style={{
              backgroundColor: "#C4704D",
              color: "#FFFFFF",
              boxShadow: "0 10px 40px rgba(196, 112, 77, 0.3)",
            }}
          >
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Phone className="h-4 w-4" />
            </motion.div>
            <span className="text-sm font-medium">Free Consultation</span>
          </motion.a>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section className="relative z-10 px-5 pb-20 pt-36">
        <div className="mx-auto max-w-4xl">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-sm font-medium"
            style={{ color: "#C4704D" }}
          >
            {practiceArea.subtitle}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-4 text-4xl leading-[1.15] tracking-tight md:text-6xl"
            style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
          >
            {practiceArea.title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-2xl font-light md:text-3xl"
            style={{
              fontFamily: "var(--font-fraunces), Georgia, serif",
              color: "#C4704D",
            }}
          >
            {practiceArea.tagline}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 max-w-2xl text-lg leading-relaxed"
            style={{ opacity: 0.7 }}
          >
            {practiceArea.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <Link
              href="#contact"
              className="group inline-flex items-center gap-3 rounded-xl px-8 py-4 text-base font-medium shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl"
              style={{
                backgroundColor: "#C4704D",
                color: "#FFFFFF",
                boxShadow: "0 8px 30px rgba(196, 112, 77, 0.25)",
              }}
            >
              Start Your Free Consultation
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <a
              href="tel:+1234567890"
              className="inline-flex items-center gap-2 rounded-xl border-2 px-8 py-4 text-base font-medium transition-all duration-300 hover:bg-white/50"
              style={{ borderColor: "rgba(45, 42, 38, 0.2)" }}
            >
              <Phone className="h-4 w-4" />
              (123) 456-7890
            </a>
          </motion.div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="relative z-10 px-5 py-20">
        <div className="mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl p-10 shadow-xl"
            style={{
              backgroundColor: "#FFFFFF",
              boxShadow: "0 20px 60px rgba(45, 42, 38, 0.08)",
            }}
          >
            <MessageCircle
              className="h-8 w-8"
              style={{ color: "#C4704D" }}
            />
            <p
              className="mt-6 text-xl leading-relaxed md:text-2xl"
              style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
            >
              "{practiceArea.intro}"
            </p>
            <p className="mt-6 text-sm font-medium" style={{ color: "#C4704D" }}>
              — Jessica Massimi, Founding Attorney
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative z-10 px-5 py-16">
        <div className="mx-auto max-w-4xl">
          <div className="grid gap-8 md:grid-cols-3">
            {practiceArea.stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20, scale: 0.98 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="rounded-2xl p-8 text-center"
                style={{ backgroundColor: "rgba(255, 255, 255, 0.6)" }}
              >
                <p
                  className="text-4xl tracking-tight md:text-5xl"
                  style={{
                    fontFamily: "var(--font-fraunces), Georgia, serif",
                    color: "#C4704D",
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

      {/* Case Types Section */}
      <section className="relative z-10 px-5 py-20">
        <div className="mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm font-medium" style={{ color: "#C4704D" }}>
              How We Can Help
            </p>
            <h2
              className="mt-3 text-3xl tracking-tight md:text-4xl"
              style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
            >
              Types of Cases We Handle
            </h2>
          </motion.div>

          <div className="mt-12 grid gap-4 md:grid-cols-2">
            {practiceArea.caseTypes.map((caseType, index) => (
              <motion.div
                key={caseType.title}
                initial={{ opacity: 0, y: 20, scale: 0.98 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="rounded-2xl p-6 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                style={{
                  backgroundColor: "#FFFFFF",
                  boxShadow: "0 4px 20px rgba(45, 42, 38, 0.06)",
                }}
              >
                <div className="flex items-start gap-4">
                  <CheckCircle2
                    className="mt-0.5 h-5 w-5 flex-shrink-0"
                    style={{ color: "#C4704D" }}
                  />
                  <div>
                    <h3 className="text-base font-semibold">{caseType.title}</h3>
                    <p className="mt-1 text-sm" style={{ opacity: 0.6 }}>
                      {caseType.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section
        className="relative z-10 px-5 py-24"
        style={{ backgroundColor: "#2D2A26", color: "#F5F1EB" }}
      >
        <div className="mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm font-medium" style={{ color: "#C4704D" }}>
              Our Process
            </p>
            <h2
              className="mt-3 text-3xl tracking-tight md:text-4xl"
              style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
            >
              How We Work Together
            </h2>
            <p className="mt-4 max-w-xl text-base" style={{ opacity: 0.7 }}>
              From your first call to final resolution, we're with you every step of the way.
            </p>
          </motion.div>

          <div className="mt-16 grid gap-8 md:grid-cols-2">
            {practiceArea.process.map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 30, scale: 0.98 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="rounded-2xl p-8"
                style={{ backgroundColor: "rgba(245, 241, 235, 0.08)" }}
              >
                <span
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full text-lg font-semibold"
                  style={{ backgroundColor: "#C4704D", color: "#FFFFFF" }}
                >
                  {item.step}
                </span>
                <h3
                  className="mt-5 text-xl"
                  style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
                >
                  {item.title}
                </h3>
                <p className="mt-3 text-base leading-relaxed" style={{ opacity: 0.7 }}>
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 px-5 py-24">
        <div className="mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl p-12 text-center shadow-xl md:p-16"
            style={{
              backgroundColor: "#FFFFFF",
              boxShadow: "0 30px 80px rgba(45, 42, 38, 0.1)",
            }}
          >
            <h2
              className="text-3xl tracking-tight md:text-4xl"
              style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
            >
              Ready to take the first step?
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-base" style={{ opacity: 0.7 }}>
              Every case begins with a confidential, no-obligation conversation. We'll listen to
              your story and help you understand your options.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="#contact"
                className="group inline-flex items-center gap-3 rounded-xl px-10 py-5 text-base font-medium shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl"
                style={{
                  backgroundColor: "#C4704D",
                  color: "#FFFFFF",
                  boxShadow: "0 8px 30px rgba(196, 112, 77, 0.3)",
                }}
              >
                Schedule Your Free Consultation
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>

            <p className="mt-8 text-sm" style={{ opacity: 0.5 }}>
              No fees unless we win your case
            </p>
          </motion.div>
        </div>
      </section>

      {/* Related Practice Areas */}
      <section className="relative z-10 px-5 py-20">
        <div className="mx-auto max-w-4xl">
          <p className="text-sm font-medium" style={{ color: "#C4704D" }}>
            Explore More
          </p>
          <h2
            className="mt-3 text-3xl tracking-tight"
            style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
          >
            Related Practice Areas
          </h2>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {["Sexual Harassment", "Wrongful Termination", "Retaliation"].map(
              (area, index) => (
                <motion.a
                  key={area}
                  href="#"
                  initial={{ opacity: 0, y: 20, scale: 0.98 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group rounded-2xl p-6 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                  style={{
                    backgroundColor: "#FFFFFF",
                    boxShadow: "0 4px 20px rgba(45, 42, 38, 0.06)",
                  }}
                >
                  <span
                    className="text-lg"
                    style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
                  >
                    {area}
                  </span>
                  <ArrowRight
                    className="mt-4 h-4 w-4 transition-all duration-300 group-hover:translate-x-1"
                    style={{ color: "#C4704D" }}
                  />
                </motion.a>
              )
            )}
          </div>
        </div>
      </section>

      {/* Bottom spacing */}
      <div className="h-20" />
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
      className="fixed left-1/2 top-20 z-50 flex -translate-x-1/2 gap-1 rounded-full p-1 shadow-lg"
      style={{
        backgroundColor: "rgba(255, 255, 255, 0.95)",
        boxShadow: "0 4px 20px rgba(45, 42, 38, 0.1)",
        backdropFilter: "blur(8px)",
      }}
    >
      {previews.map((preview) => (
        <Link
          key={preview.slug}
          href={`/preview/${preview.slug}`}
          className="rounded-full px-4 py-2 text-xs font-medium transition-all"
          style={{
            backgroundColor: current === preview.slug ? "#2D2A26" : "transparent",
            color: current === preview.slug ? "#F5F1EB" : "#2D2A26",
          }}
        >
          {preview.name}
        </Link>
      ))}
    </div>
  );
}
