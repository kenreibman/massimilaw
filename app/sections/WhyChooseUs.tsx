"use client";

import { motion } from "framer-motion";
import { Shield, Scale, Clock, Award } from "lucide-react";
import { useMotionEnabled } from "../hooks/useMotionEnabled";

const differentiators = [
  {
    icon: Shield,
    title: "No Fee Unless We Win",
    description:
      "You pay nothing upfront. We only get paid when you get paid—our interests are aligned with yours.",
  },
  {
    icon: Scale,
    title: "15+ Years Fighting for Justice",
    description:
      "Decades of experience in civil rights law means we know how to build winning cases.",
  },
  {
    icon: Clock,
    title: "Responsive & Personal",
    description:
      "You'll work directly with experienced attorneys—not paralegals. We return calls within 24 hours.",
  },
  {
    icon: Award,
    title: "Millions Recovered",
    description:
      "A proven track record of significant settlements and verdicts for our clients.",
  },
];

export default function WhyChooseUs() {
  const motionEnabled = useMotionEnabled();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section className="relative overflow-hidden bg-black py-24" id="why-us">
      {/* Subtle diagonal pattern overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `repeating-linear-gradient(
            -45deg,
            transparent,
            transparent 1px,
            white 1px,
            white 2px
          )`,
          backgroundSize: "8px 8px",
        }}
      />

      {/* Accent glow */}
      <div className="pointer-events-none absolute -top-40 left-1/2 h-80 w-150 -translate-x-1/2 rounded-full bg-white/5 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-5">
        {/* Header */}
        <motion.div
          initial={motionEnabled ? { opacity: 0, y: 20 } : false}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mb-16 max-w-2xl"
        >
          <div className="mb-3 flex items-center gap-2">
            <span className="h-px w-8 bg-white/30" />
            <span className="text-xs uppercase tracking-widest text-white/50">
              Why MassimiLaw
            </span>
          </div>

          <h2 className="font-serif text-4xl leading-tight tracking-tight text-white md:text-5xl">
            Your fight is our fight.
          </h2>

          <p className="mt-4 text-base leading-relaxed text-white/60">
            We take on powerful institutions so you don't have to face them
            alone. Here's what sets us apart.
          </p>
        </motion.div>

        {/* Differentiators grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 gap-6 md:grid-cols-2"
        >
          {differentiators.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                variants={itemVariants}
                className="group relative rounded-xl border border-white/10 bg-white/2 p-8 transition-colors hover:border-white/20 hover:bg-white/4"
              >
                {/* Corner accent on hover */}
                <div className="absolute right-0 top-0 h-16 w-16 overflow-hidden rounded-tr-xl">
                  <div className="absolute -right-8 -top-8 h-16 w-16 rotate-45 bg-white/0 transition-colors group-hover:bg-white/5" />
                </div>

                <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-white/10 text-white">
                  <Icon className="h-6 w-6" strokeWidth={1.5} />
                </div>

                <h3 className="mb-2 text-xl font-medium text-white">
                  {item.title}
                </h3>

                <p className="text-sm leading-relaxed text-white/60">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom CTA hint */}
        <motion.div
          initial={motionEnabled ? { opacity: 0 } : false}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-12 text-center"
        >
          <a
            href="#case-evaluation"
            className="inline-flex items-center gap-2 text-sm text-white/50 transition-colors hover:text-white"
          >
            <span>See if you have a case</span>
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
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
