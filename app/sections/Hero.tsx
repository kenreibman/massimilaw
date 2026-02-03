"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion, cubicBezier } from "framer-motion";

export default function Hero() {
  const reduceMotion = useReducedMotion();

  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: reduceMotion
      ? { opacity: 0 }
      : { opacity: 0, x: -14, y: -10, filter: "blur(6px)" },
    show: reduceMotion
      ? { opacity: 1 }
      : {
          opacity: 1,
          x: 0,
          y: 0,
          filter: "blur(0px)",
          transition: { duration: 0.65, ease: cubicBezier(0.22, 1, 0.36, 1) },
        },
  };

  return (
    <section className="bg-white">
      <div className="max-w-480 mx-auto grid h-full w-full grid-cols-1 gap-0 md:grid-cols-2">
        {/* Left image */}
        <div className="overflow-hidden">
          <motion.div
            className="relative aspect-video w-full md:aspect-auto md:h-[calc(100vh-5rem)]"
            initial={reduceMotion ? { opacity: 1 } : { opacity: 0, scale: 1.08 }}
            whileInView={reduceMotion ? { opacity: 1 } : { opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0 }}
            transition={{ duration: 1.1, ease: cubicBezier(0.22, 1, 0.36, 1) }}
          >
            <Image
              src="/images/hero.webp"
              alt="People holding hands at a park with city skyline in the background, kids playing in the foreground."
              fill
              priority
              className="object-cover object-center"
            />
          </motion.div>
        </div>

        {/* Right content */}
        <div className="flex items-center p-4 md:pl-10">
          <motion.div
            className="w-full max-w-xl py-14 md:py-0"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0 }}
          >
            <motion.h1
              variants={item}
              className="font-serif text-5xl leading-[1.05] tracking-tight text-black md:text-6xl"
            >
              We deliver
              <br />
              results that are <br />
              worth your trust.
            </motion.h1>

            <motion.p
              variants={item}
              className="mt-6 max-w-md text-base leading-relaxed text-black/70"
            >
              At MassimiLaw, we understand that legal matters can be complex. Our team is here to guide you
              through every step of the process.
            </motion.p>

            <motion.div variants={item} className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href="tel:+16462419800"
                className="rounded-md bg-black px-6 py-3 text-base font-medium text-white shadow-sm"
              >
                Call for Free Consultation
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
