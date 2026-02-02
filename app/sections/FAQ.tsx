"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { useMotionEnabled } from "../hooks/useMotionEnabled";

type FAQItem = {
  question: string;
  answer: string;
};

const faqs: FAQItem[] = [
  {
    question: "What does a free consultation include?",
    answer:
      "During your free consultation, we'll discuss the details of your situation, explain your legal rights, and assess whether you have a viable case. There's no obligation to proceed, and everything you share is confidential.",
  },
  {
    question: "How much does it cost to hire MassimiLaw?",
    answer:
      "We work on a contingency fee basis for most civil rights cases—meaning you pay nothing upfront and we only get paid if we win your case. Our fee is a percentage of your recovery, which we'll explain clearly before you sign anything.",
  },
  {
    question: "How long does a civil rights case typically take?",
    answer:
      "Every case is different. Simple matters may resolve in a few months through negotiation, while complex litigation can take one to three years. We'll give you a realistic timeline based on your specific circumstances during our initial evaluation.",
  },
  {
    question: "What types of cases do you handle?",
    answer:
      "We focus on civil rights matters including employment discrimination, police misconduct, wrongful termination, sexual harassment, wage and hour violations, and constitutional rights cases. If you're unsure whether your situation qualifies, reach out—we're happy to discuss it.",
  },
  {
    question: "What should I bring to my first meeting?",
    answer:
      "Bring any documents related to your case: employment records, correspondence, photos, witness information, police reports, or medical records. Don't worry if you don't have everything—we can help you gather what's needed.",
  },
  {
    question: "Will my case go to trial?",
    answer:
      "Most cases settle before trial through negotiation or mediation. However, we prepare every case as if it will go to trial—this strengthens your position and ensures we're ready if the other side won't offer a fair resolution.",
  },
];

function FAQAccordionItem({
  item,
  isOpen,
  onToggle,
  index,
}: {
  item: FAQItem;
  isOpen: boolean;
  onToggle: () => void;
  index: number;
}) {
  const motionEnabled = useMotionEnabled();

  return (
    <motion.div
      initial={motionEnabled ? { opacity: 0, y: 20 } : false}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05, duration: 0.4 }}
      className="border-b border-black/10"
    >
      <button
        onClick={onToggle}
        className="group flex w-full items-start justify-between gap-4 py-6 text-left transition-colors"
        aria-expanded={isOpen}
      >
        <span className="text-base font-medium text-black group-hover:text-black/70 md:text-lg">
          {item.question}
        </span>
        <span className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full border border-black/20 text-black/60 transition-all group-hover:border-black group-hover:text-black">
          {isOpen ? (
            <Minus className="h-3.5 w-3.5" />
          ) : (
            <Plus className="h-3.5 w-3.5" />
          )}
        </span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="pb-6 pr-12 text-sm leading-relaxed text-black/60">
              {item.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const motionEnabled = useMotionEnabled();

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative overflow-hidden bg-neutral-50 py-24" id="faq">
      {/* Background texture - subtle noise */}
      <div
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, black 1px, transparent 0)`,
          backgroundSize: "32px 32px",
        }}
      />

      {/* Decorative shapes */}
      <div className="pointer-events-none absolute -top-40 right-0 h-80 w-80 rounded-full bg-black/[0.02]" />
      <div className="pointer-events-none absolute -bottom-20 -left-20 h-60 w-60 rounded-full bg-black/[0.02]" />

      <div className="relative mx-auto max-w-4xl px-5">
        {/* Header */}
        <motion.div
          initial={motionEnabled ? { opacity: 0, y: 20 } : false}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <div className="mb-3 flex items-center justify-center text-xs text-black/50">
            <span className="uppercase tracking-widest">
              Frequently Asked Questions
            </span>
          </div>

          <h2 className="font-serif text-4xl leading-tight tracking-tight text-black md:text-5xl">
            Common questions,
            <br />
            clear answers.
          </h2>

          <p className="mx-auto mt-4 max-w-lg text-base leading-relaxed text-black/60">
            We believe in transparency. Here are answers to questions we hear
            most often from potential clients.
          </p>
        </motion.div>

        {/* FAQ List */}
        <div className="rounded-xl border border-black/10 bg-white p-6 shadow-sm md:p-8">
          {faqs.map((item, index) => (
            <FAQAccordionItem
              key={index}
              item={item}
              isOpen={openIndex === index}
              onToggle={() => handleToggle(index)}
              index={index}
            />
          ))}
        </div>

        {/* Bottom note */}
        <motion.div
          initial={motionEnabled ? { opacity: 0 } : false}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="mt-10 text-center"
        >
          <p className="text-sm text-black/50">
            Have a different question?{" "}
            <a
              href="#contact"
              className="font-medium text-black underline decoration-black/30 underline-offset-4 transition-colors hover:decoration-black"
            >
              Get in touch
            </a>{" "}
            and we'll be happy to help.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
