"use client";

import { Playfair_Display, Source_Sans_3 } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Scale, Award, GraduationCap, MapPin, ArrowRight } from "lucide-react";

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

// SEO-optimized attorney data
const attorney = {
  name: "Jessica Massimi",
  pronouns: "she/her",
  title: "Civil Rights & Employment Discrimination Attorney",
  tagline: "A Dedicated Advocate for Working People",

  bio: `Jessica Massimi (she/her) is a civil rights and employment discrimination attorney. She is a dedicated advocate who believes a better world is possible for working people and those wronged by police misconduct. Jessica has spent her career fighting for people harmed by government agencies, the police, and large corporations.

  As a working mother and New Yorker, Jessica understands the challenges faced by working parents and the collective desire to create a safe, just, and equitable city for all.

  Throughout her 15-year career, Jessica has litigated hundreds of cases in state and federal courts, and private mediations and arbitrations, and has recovered millions of dollars for her clients. Jessica is a proud graduate of CUNY School of Law and member of the National Police Accountability Project.`,

  education: [
    {
      degree: "Juris Doctor (J.D.)",
      school: "CUNY School of Law",
      year: "2010",
    },
    {
      degree: "Bachelor of Arts (B.A.)",
      school: "Fordham University",
      year: "2005",
    },
  ],

  admissions: [
    "New York State",
    "Eastern District of New York",
    "Southern District of New York",
    "Northern District of New York",
    "Western District of New York",
  ],

  affiliations: [
    "National Police Accountability Project",
    "New York State Bar Association",
  ],
};

export default function AboutPage() {
  return (
    <div
      className={`${playfair.variable} ${sourceSans.variable} min-h-screen`}
      style={{
        fontFamily: "var(--font-source-sans), Georgia, serif",
        backgroundColor: "#FAFAF8",
        color: "#1A1A1A",
      }}
    >
      {/* Subtle paper texture overlay */}
      <div
        className="pointer-events-none fixed inset-0 z-0 opacity-[0.025]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%' height='100%' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* HERO SECTION */}
      <section className="relative z-10 overflow-hidden">
        {/* Warm gradient backdrop */}
        <div
          className="absolute inset-0 z-0"
          style={{
            background: "linear-gradient(135deg, #f5f0e6 0%, #FAFAF8 50%, #f8f5f0 100%)",
          }}
        />

        <div className="relative z-10 mx-auto max-w-6xl px-5 pb-20 pt-16 md:pt-40">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            {/* Left: Portrait */}
            <motion.div
              className="lg:col-span-5"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="relative">
                {/* Decorative frame accent */}
                <div
                  className="absolute -right-4 -top-4 h-full w-full border-2"
                  style={{ borderColor: "#9A8866" }}
                />
                <div className="relative aspect-[4/5] w-full overflow-hidden bg-neutral-200">
                  <Image
                    src="/images/jessica.png"
                    alt="Jessica Massimi - Civil Rights Attorney"
                    fill
                    priority
                    className="object-cover"
                  />
                </div>
              </div>
            </motion.div>

            {/* Right: Introduction */}
            <motion.div
              className="flex flex-col justify-center lg:col-span-7"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {/* Breadcrumb */}
              <nav className="mb-6 text-sm" style={{ color: "rgba(26, 26, 26, 0.5)" }}>
                <Link href="/" className="transition-colors hover:text-[#9A8866]">
                  Home
                </Link>
                <span className="mx-2">/</span>
                <span style={{ color: "#9A8866" }}>About</span>
              </nav>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-xs tracking-[0.3em] uppercase"
                style={{ color: "#9A8866" }}
              >
                Meet the Attorney
              </motion.p>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="mt-4 text-4xl leading-[1.1] tracking-tight md:text-5xl lg:text-6xl"
                style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
              >
                {attorney.name}
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="mt-3 text-lg md:text-xl"
                style={{ color: "#9A8866" }}
              >
                {attorney.title}
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="mt-6 text-lg leading-relaxed"
                style={{ opacity: 0.8 }}
              >
                {attorney.tagline}
              </motion.p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* BIO SECTION */}
      <section className="relative z-10 px-5 py-20" style={{ backgroundColor: "#fff" }}>
        <div className="mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Decorative line */}
            <div
              className="mb-12 h-px w-16"
              style={{ backgroundColor: "#9A8866" }}
            />

            <h2
              className="text-3xl tracking-tight md:text-4xl"
              style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
            >
              Fighting for Justice
            </h2>

            <div className="mt-8 columns-1 gap-12 md:columns-2">
              {attorney.bio.split("\n\n").map((paragraph, index) => (
                <p
                  key={index}
                  className="mb-6 text-base leading-[1.8] first:mt-0"
                  style={{ opacity: 0.8 }}
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CREDENTIALS SECTION */}
      <section
        className="relative z-10 px-5 py-20"
        style={{ backgroundColor: "#1A1A1A", color: "#FAFAF8" }}
      >
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <p className="text-xs tracking-[0.3em]" style={{ color: "#9A8866" }}>
              CREDENTIALS
            </p>
            <h2
              className="mt-4 text-3xl tracking-tight md:text-4xl"
              style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
            >
              Education & Admissions
            </h2>
          </motion.div>

          <div className="grid gap-12 md:grid-cols-2">
            {/* Education */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <GraduationCap className="h-5 w-5" style={{ color: "#9A8866" }} />
                <h3
                  className="text-xl"
                  style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
                >
                  Education
                </h3>
              </div>

              <div className="space-y-6">
                {attorney.education.map((edu, index) => (
                  <motion.div
                    key={edu.school}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                    className="border-l-2 pl-5 py-2"
                    style={{ borderColor: "#9A8866" }}
                  >
                    <p className="text-lg font-medium">{edu.degree}</p>
                    <p className="text-base mt-1" style={{ opacity: 0.7 }}>
                      {edu.school}
                    </p>
                    <p className="text-sm mt-1" style={{ opacity: 0.5 }}>
                      {edu.year}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Admissions */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <Scale className="h-5 w-5" style={{ color: "#9A8866" }} />
                <h3
                  className="text-xl"
                  style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
                >
                  Court Admissions
                </h3>
              </div>

              <div className="space-y-4">
                {attorney.admissions.map((admission, index) => (
                  <motion.div
                    key={admission}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.08 }}
                    className="flex items-center gap-3 border-b pb-4"
                    style={{ borderColor: "rgba(250, 250, 248, 0.1)" }}
                  >
                    <MapPin className="h-4 w-4 flex-shrink-0" style={{ color: "#9A8866" }} />
                    <span className="text-base">{admission}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="relative z-10 px-5 py-20">
        <div className="mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="border p-10 md:p-16 text-center"
            style={{ borderColor: "rgba(26, 26, 26, 0.15)" }}
          >
            <h2
              className="text-2xl md:text-3xl"
              style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
            >
              Ready to Discuss Your Case?
            </h2>

            <p className="mt-4 text-base mx-auto max-w-lg" style={{ opacity: 0.7 }}>
              Schedule a free, confidential consultation to learn how Jessica can help protect your rights.
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="#contact"
                className="group inline-flex items-center gap-3 px-8 py-4 text-base font-medium transition-all duration-300"
                style={{ backgroundColor: "#1A1A1A", color: "#FAFAF8" }}
              >
                Free Case Evaluation
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Attorney",
            name: "Jessica Massimi",
            description: "Experienced civil rights and employment discrimination attorney serving New York City. 15+ years litigating cases in state and federal courts.",
            image: "/images/about.png",
            url: "https://massimiLaw.com/about",
            telephone: "(212) 555-1234",
            address: {
              "@type": "PostalAddress",
              addressLocality: "New York",
              addressRegion: "NY",
              addressCountry: "US",
            },
            alumniOf: [
              {
                "@type": "CollegeOrUniversity",
                name: "CUNY School of Law",
              },
              {
                "@type": "CollegeOrUniversity",
                name: "Fordham University",
              },
            ],
            knowsAbout: [
              "Civil Rights Law",
              "Employment Discrimination",
              "Police Misconduct",
              "Federal Court Litigation",
            ],
            memberOf: {
              "@type": "Organization",
              name: "National Police Accountability Project",
            },
          }),
        }}
      />
    </div>
  );
}
