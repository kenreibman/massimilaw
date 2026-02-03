"use client";

import { Mail, Phone } from "lucide-react";

export default function Contact() {
  return (
    <section className="bg-white py-24" id="contact">
      <div className="mx-auto max-w-2xl px-5 text-center">
        <div className="mb-3 text-xs text-black/50">
          <span className="uppercase tracking-widest">Free Consultation</span>
        </div>

        <h2 className="font-serif text-4xl leading-tight tracking-tight text-black md:text-5xl">
          Let's talk about your case.
        </h2>

        <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-black/70">
          Tell us what you're dealing with and we'll help you understand next
          steps. Give us a call or send an email—we're here to help.
        </p>

        <div className="mt-10 flex flex-col items-center gap-6">
          <a
            href="tel:+16462419800"
            className="inline-flex items-center gap-2 rounded-md bg-black px-8 py-4 text-base font-medium text-white transition-colors hover:bg-black/80"
          >
            <Phone className="h-5 w-5" />
            Call (646) 241-9800
          </a>

          <a
            href="mailto:info@massimilaw.com"
            className="inline-flex items-center gap-2 text-sm text-black/70 underline-offset-4 hover:text-black hover:underline"
          >
            <Mail className="h-4 w-4" />
            info@massimilaw.com
          </a>
        </div>

        <p className="mt-8 text-xs text-black/50">
          Response time: Within 1 business day
        </p>
      </div>
    </section>
  );
}
