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
  ChevronDown,
} from "lucide-react";
import { useState } from "react";
import { useParams } from "next/navigation";
import {
  getPracticeArea,
  getRelatedPracticeAreas,
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

// Map icon strings to components
const iconMap = {
  Award,
  Scale,
  Clock,
  MapPin,
};

export default function PracticePage() {
  const params = useParams();
  const slug = params.slug as string;
  const practiceArea = getPracticeArea(slug);
  const relatedAreas = getRelatedPracticeAreas(slug);

  // Handle 404 case
  if (!practiceArea) {
    return (
      <div
        className={`${playfair.variable} ${sourceSans.variable} flex min-h-screen items-center justify-center`}
        style={{
          fontFamily: "var(--font-source-sans), Georgia, serif",
          backgroundColor: "#FAFAF8",
        }}
      >
        <div className="text-center">
          <h1
            className="text-4xl"
            style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
          >
            Practice Area Not Found
          </h1>
          <p className="mt-4" style={{ opacity: 0.7 }}>
            The practice area you're looking for doesn't exist.
          </p>
          <Link
            href="/#services"
            className="mt-8 inline-flex items-center gap-2 border px-6 py-3 transition-all hover:bg-black hover:text-white"
            style={{ borderColor: "#1A1A1A" }}
          >
            View All Practice Areas
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    );
  }

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
            <Link href="/#services" className="hover:underline">
              Practice Areas
            </Link>
            <span className="mx-2">/</span>
            <span style={{ color: "#9A8866" }}>{practiceArea.title}</span>
          </motion.nav>

          {/* H1 */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl leading-[1.1] tracking-tight md:text-6xl"
            style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
          >
            {practiceArea.h1}
          </motion.h1>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-4 text-xl md:text-2xl"
            style={{ color: "#9A8866" }}
          >
            {practiceArea.tagline}
          </motion.p>

          {/* Hero description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-6 max-w-3xl text-lg leading-relaxed"
            style={{ opacity: 0.8 }}
          >
            {practiceArea.heroDescription}
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

      {/* MID-PAGE CTA BANNER */}
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
                Need help with {practiceArea.title.toLowerCase()}?
              </p>
              <p className="mt-1 text-sm" style={{ opacity: 0.7 }}>
                Get a free, confidential case evaluation today.
              </p>
            </div>
            <Link
              href="#contact"
              className="group inline-flex shrink-0 items-center gap-2 px-6 py-3 text-sm font-medium transition-all duration-300"
              style={{ backgroundColor: "#9A8866", color: "#FAFAF8" }}
            >
              Free Consultation
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CASE TYPES SECTION */}
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
              COMMON EXAMPLES
            </p>
            <h2
              className="mt-4 text-3xl tracking-tight md:text-4xl"
              style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
            >
              The following are common examples of {practiceArea.title.toLowerCase()}
            </h2>
            <p className="mt-4 max-w-2xl text-base" style={{ opacity: 0.7 }}>
              If you've experienced any of the following in New York, you may have
              grounds for a legal claim under federal, state, or city law.
            </p>
          </motion.div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {practiceArea.caseTypes.map((caseType, index) => (
              <motion.div
                key={caseType.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="border-l-2 py-2 pl-6"
                style={{ borderColor: "#9A8866" }}
              >
                <h3
                  className="text-lg font-medium"
                  style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
                >
                  {caseType.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed" style={{ opacity: 0.7 }}>
                  {caseType.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* DO I HAVE A CASE SECTION */}
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
                EVALUATE YOUR SITUATION
              </p>
              <h2
                className="mt-4 text-3xl tracking-tight md:text-4xl"
                style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
              >
                Do I Have a {practiceArea.title} Case?
              </h2>
              <p className="mt-4 max-w-2xl text-base" style={{ opacity: 0.7 }}>
                You may have a valid claim if you've experienced any of the
                following situations.
              </p>
            </motion.div>

            <div className="mt-12 grid gap-4">
              {practiceArea.signs.map((sign, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="flex items-start gap-4 border-b py-4"
                  style={{ borderColor: "rgba(26, 26, 26, 0.1)" }}
                >
                  <CheckCircle
                    className="mt-0.5 h-5 w-5 flex-shrink-0"
                    style={{ color: "#9A8866" }}
                  />
                  <span className="text-base">{sign}</span>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center"
            >
              <p className="text-base" style={{ opacity: 0.7 }}>
                Not sure if your situation qualifies?
              </p>
              <Link
                href="#contact"
                className="group inline-flex items-center gap-2 text-base font-medium transition-all"
                style={{ color: "#9A8866" }}
              >
                Get a free case evaluation
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>
          </div>

          <div
            className="h-px"
            style={{ backgroundColor: "rgba(26, 26, 26, 0.15)" }}
          />
        </div>
      </section>

      {/* SECONDARY CTA */}
      <section className="relative z-10 px-5 py-8">
        <div className="mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="border p-10 text-center"
            style={{ borderColor: "rgba(26, 26, 26, 0.2)" }}
          >
            <p
              className="text-2xl md:text-3xl"
              style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
            >
              Don't wait to protect your rights
            </p>
            <p className="mx-auto mt-3 max-w-lg text-base" style={{ opacity: 0.7 }}>
              {practiceArea.title} claims have strict filing deadlines. The sooner
              you act, the stronger your case.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="#contact"
                className="group inline-flex items-center gap-3 border px-8 py-4 text-sm tracking-wide transition-all duration-300 hover:bg-[#1A1A1A] hover:text-[#FAFAF8]"
                style={{ borderColor: "#1A1A1A" }}
              >
                Schedule Free Consultation
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <a
                href={`tel:${sharedData.phone.replace(/[^0-9]/g, "")}`}
                className="inline-flex items-center gap-2 text-sm"
                style={{ color: "#9A8866" }}
              >
                <Phone className="h-4 w-4" />
                {sharedData.phone}
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ SECTION */}
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
              FREQUENTLY ASKED QUESTIONS
            </p>
            <h2
              className="mt-4 text-3xl tracking-tight md:text-4xl"
              style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
            >
              {practiceArea.title} FAQs
            </h2>
          </motion.div>

          <div className="mt-12 space-y-0">
            {practiceArea.faqs.map((faq, index) => (
              <FAQItem key={index} faq={faq} index={index} />
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
                {practiceArea.title} Lawyers Serving All of New York
              </h2>
              <p className="mt-4 max-w-2xl text-base" style={{ opacity: 0.7 }}>
                Our New York {practiceArea.title.toLowerCase()} attorneys represent
                clients throughout the New York metropolitan area and beyond.
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
              Every {practiceArea.title.toLowerCase()} case starts with a
              confidential conversation. We'll review your situation and explain
              your legal options—at no cost to you.
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

      {/* RELATED PRACTICE AREAS */}
      {relatedAreas.length > 0 && (
        <section className="relative z-10 px-5 py-16">
          <div className="mx-auto max-w-4xl">
            <p className="text-xs tracking-[0.3em]" style={{ color: "#9A8866" }}>
              RELATED PRACTICE AREAS
            </p>
            <h2
              className="mt-4 text-2xl tracking-tight"
              style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
            >
              Other Services You May Need
            </h2>

            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {relatedAreas.map((area, index) => (
                <motion.div
                  key={area.slug}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Link
                    href={`/practice/${area.slug}`}
                    className="group flex items-center justify-between border p-5 transition-all duration-300 hover:border-[#9A8866]"
                    style={{ borderColor: "rgba(26, 26, 26, 0.15)" }}
                  >
                    <span className="text-base">{area.title}</span>
                    <ArrowRight
                      className="h-4 w-4 transition-transform group-hover:translate-x-1"
                      style={{ color: "#9A8866" }}
                    />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}

function FAQItem({
  faq,
  index,
}: {
  faq: { question: string; answer: string };
  index: number;
}) {
  const [isOpen, setIsOpen] = useState(index === 0);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="border-b"
      style={{ borderColor: "rgba(26, 26, 26, 0.15)" }}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between py-6 text-left"
      >
        <h3
          className="pr-8 text-lg"
          style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
        >
          {faq.question}
        </h3>
        <ChevronDown
          className="h-5 w-5 flex-shrink-0 transition-transform duration-300"
          style={{
            color: "#9A8866",
            transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
          }}
        />
      </button>
      <div
        className="overflow-hidden transition-all duration-300"
        style={{
          maxHeight: isOpen ? "300px" : "0",
          opacity: isOpen ? 1 : 0,
        }}
      >
        <p className="pb-6 text-base leading-relaxed" style={{ opacity: 0.7 }}>
          {faq.answer}
        </p>
      </div>
    </motion.div>
  );
}
