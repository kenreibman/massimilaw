"use client";

import { motion } from "framer-motion";
import { Phone, FileSearch, Scale, Trophy } from "lucide-react";
import { useMotionEnabled } from "../hooks/useMotionEnabled";

const steps = [
  {
    number: "01",
    icon: Phone,
    title: "Free Consultation",
    description:
      "Reach out by phone or schedule online. We'll listen to your story and give you an honest assessment—no pressure, no obligation.",
  },
  {
    number: "02",
    icon: FileSearch,
    title: "Case Evaluation",
    description:
      "We investigate the facts, gather evidence, and determine the strength of your claim. You'll know exactly where you stand.",
  },
  {
    number: "03",
    icon: Scale,
    title: "Build Your Case",
    description:
      "Our team develops a strategic approach tailored to your situation—negotiation, mediation, or litigation if needed.",
  },
  {
    number: "04",
    icon: Trophy,
    title: "Resolution",
    description:
      "We fight for the best possible outcome. Most cases settle; if yours doesn't, we're fully prepared for trial.",
  },
];

export default function Process() {
  const motionEnabled = useMotionEnabled();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section className="relative overflow-hidden bg-white py-24" id="process">
      {/* Subtle grid background */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(to right, black 1px, transparent 1px),
                           linear-gradient(to bottom, black 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative mx-auto max-w-6xl px-5">
        {/* Header */}
        <motion.div
          initial={motionEnabled ? { opacity: 0, y: 20 } : false}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <div className="mb-3 flex items-center justify-center gap-2">
            <span className="h-px w-8 bg-black/20" />
            <span className="text-xs uppercase tracking-widest text-black/50">
              How It Works
            </span>
            <span className="h-px w-8 bg-black/20" />
          </div>

          <h2 className="font-serif text-4xl leading-tight tracking-tight text-black md:text-5xl">
            Your path to justice,
            <br />
            step by step.
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-black/60">
            We guide you through every stage of the legal process with clarity
            and care. Here's what to expect when you work with us.
          </p>
        </motion.div>

        {/* Steps */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="relative"
        >
          {/* Connecting line - desktop only */}
          <div className="absolute left-0 right-0 top-16 hidden h-px bg-black/10 md:block" />

          <div className="grid grid-cols-1 gap-8 md:grid-cols-4 md:gap-6">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.number}
                  variants={itemVariants}
                  className="relative"
                >
                  {/* Step card */}
                  <div className="group relative">
                    {/* Number badge */}
                    <div className="relative z-10 mb-6 flex items-center gap-4 md:flex-col md:items-center md:gap-0">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-black bg-white font-mono text-sm font-semibold text-black transition-colors group-hover:bg-black group-hover:text-white md:h-14 md:w-14">
                        {step.number}
                      </div>

                      {/* Mobile connecting line */}
                      {index < steps.length - 1 && (
                        <div className="h-px flex-1 bg-black/10 md:hidden" />
                      )}
                    </div>

                    {/* Content */}
                    <div className="md:text-center">
                      <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-black/5 text-black/70">
                        <Icon className="h-5 w-5" strokeWidth={1.5} />
                      </div>

                      <h3 className="mb-2 text-lg font-medium text-black">
                        {step.title}
                      </h3>

                      <p className="text-sm leading-relaxed text-black/60">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={motionEnabled ? { opacity: 0 } : false}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="mt-16 text-center"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full border border-black/20 bg-black/5 px-6 py-3 text-sm font-medium text-black transition-all hover:border-black hover:bg-black hover:text-white"
          >
            Start with a free consultation
            <svg
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
