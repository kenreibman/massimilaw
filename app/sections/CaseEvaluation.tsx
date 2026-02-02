"use client";

import { motion } from "framer-motion";
import { CheckCircle, Phone } from "lucide-react";
import { useMotionEnabled } from "../hooks/useMotionEnabled";

const benefits = [
  "Confidential, no-obligation consultation",
  "Understand your legal options",
  "Learn if you have a valid claim",
  "Get answers to your questions",
];

export default function CaseEvaluation() {
  const motionEnabled = useMotionEnabled();

  return (
    <section
      className="relative overflow-hidden bg-neutral-50 py-24"
      id="case-evaluation"
    >
      {/* Background texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, black 1px, transparent 0)`,
          backgroundSize: "24px 24px",
        }}
      />

      {/* Accent shape */}
      <div className="pointer-events-none absolute -bottom-32 -right-32 rounded-full bg-black/[0.02]" />
      <div className="pointer-events-none absolute -top-20 -left-20 h-40 w-40 rounded-full bg-black/[0.02]" />

      <div className="relative mx-auto max-w-6xl px-5">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2">
          {/* Left: Content */}
          <motion.div
            initial={motionEnabled ? { opacity: 0, x: -20 } : false}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-3 py-1 text-xs font-medium uppercase tracking-wider text-black/70">
              <span className="h-1.5 w-1.5 rounded-full bg-green-500" />
              Free Case Evaluation
            </div>

            <h2 className="font-serif text-4xl leading-tight tracking-tight text-black md:text-5xl">
              Find out if you
              <br />
              have a case.
            </h2>

            <p className="mt-5 max-w-md text-base leading-relaxed text-black/60">
              Call us for a free, confidential consultation. We'll review your
              situation and explain your options—no pressure, no obligation.
            </p>

            {/* Benefits list */}
            <ul className="mt-8 space-y-3">
              {benefits.map((benefit, index) => (
                <motion.li
                  key={benefit}
                  initial={motionEnabled ? { opacity: 0, x: -10 } : false}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.1, duration: 0.4 }}
                  className="flex items-center gap-3 text-sm text-black/70"
                >
                  <CheckCircle className="h-5 w-5 flex-shrink-0 text-black/40" />
                  <span>{benefit}</span>
                </motion.li>
              ))}
            </ul>

            {/* Trust signal */}
            <div className="mt-10 rounded-lg border border-black/10 bg-white p-5">
              <div className="text-sm font-medium text-black/80">
                What happens when you call?
              </div>
              <p className="mt-2 text-xs leading-relaxed text-black/50">
                You'll speak directly with our team about your situation. We'll
                ask a few questions to understand your case and explain your
                legal options clearly.
              </p>
            </div>
          </motion.div>

          {/* Right: Call CTA */}
          <motion.div
            initial={motionEnabled ? { opacity: 0, x: 20 } : false}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            {/* Call CTA container */}
            <div className="flex flex-col items-center justify-center rounded-xl border border-black/10 bg-white shadow-xl shadow-black/5 p-12 text-center min-h-[400px]">
              <div className="mb-6 grid h-20 w-20 place-items-center rounded-full bg-black/5">
                <Phone className="h-10 w-10 text-black/60" />
              </div>

              <h3 className="font-serif text-3xl text-black mb-4">
                Call us today
              </h3>

              <p className="text-base text-black/60 mb-8 max-w-sm">
                Speak directly with our team for a free case evaluation. We're ready to help.
              </p>

              <a
                href="tel:+12125551234"
                className="inline-flex items-center gap-3 bg-black px-10 py-5 text-lg font-medium text-white rounded-lg hover:bg-black/80 transition-colors"
              >
                <Phone className="h-6 w-6" />
                (212) 555-1234
              </a>

              <p className="mt-6 text-xs text-black/40">
                Available Monday–Friday, 9am–6pm EST
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
