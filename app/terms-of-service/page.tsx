import Link from "next/link";
import { Playfair_Display, Source_Sans_3 } from "next/font/google";

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

export default function TermsOfServicePage() {
  return (
    <div
      className={`${playfair.variable} ${sourceSans.variable} min-h-screen`}
      style={{
        fontFamily: "var(--font-source-sans), Georgia, serif",
        backgroundColor: "#FAFAF8",
        color: "#1A1A1A",
      }}
    >
      <div className="mx-auto max-w-3xl px-5 pb-20 pt-16 md:pt-32">
        {/* Breadcrumb */}
        <nav className="mb-8 text-sm" style={{ color: "rgba(26, 26, 26, 0.5)" }}>
          <Link href="/" className="transition-colors hover:text-[#9A8866]">
            Home
          </Link>
          <span className="mx-2">/</span>
          <span style={{ color: "#9A8866" }}>Terms of Service</span>
        </nav>

        {/* Heading */}
        <h1
          className="text-4xl tracking-tight md:text-5xl"
          style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
        >
          Terms of Service
        </h1>

        <p className="mt-4 text-sm" style={{ color: "rgba(26, 26, 26, 0.5)" }}>
          Effective Date: January 1, 2025
        </p>

        <div
          className="mt-6 h-px w-16"
          style={{ backgroundColor: "#9A8866" }}
        />

        {/* Content */}
        <div className="mt-10 space-y-10 text-base leading-[1.8]" style={{ opacity: 0.85 }}>
          <section>
            <h2
              className="mb-4 text-2xl tracking-tight"
              style={{ fontFamily: "var(--font-playfair), Georgia, serif", opacity: 1 }}
            >
              Acceptance of Terms
            </h2>
            <p>
              By accessing and using the MassimiLaw PLLC website at massimilaw.com
              (&ldquo;the Site&rdquo;), you accept and agree to be bound by these Terms
              of Service. If you do not agree to these terms, please do not use the
              Site. We reserve the right to modify these terms at any time, and your
              continued use of the Site constitutes acceptance of any changes.
            </p>
          </section>

          <section>
            <h2
              className="mb-4 text-2xl tracking-tight"
              style={{ fontFamily: "var(--font-playfair), Georgia, serif", opacity: 1 }}
            >
              Nature of Information
            </h2>
            <p>
              The information provided on this Site is for general informational
              purposes only and does not constitute legal advice. The content on this
              Site should not be relied upon as a substitute for professional legal
              counsel. No attorney-client relationship is formed by your use of this
              Site or by submitting information through our contact forms.
            </p>
          </section>

          <section>
            <h2
              className="mb-4 text-2xl tracking-tight"
              style={{ fontFamily: "var(--font-playfair), Georgia, serif", opacity: 1 }}
            >
              Attorney Advertising
            </h2>
            <p>
              The content of this Site may be considered attorney advertising under
              applicable rules of professional conduct. Prior results described on this
              Site do not guarantee a similar outcome in future cases. Every legal
              matter is unique, and the outcome depends on the specific facts and
              circumstances involved.
            </p>
          </section>

          <section>
            <h2
              className="mb-4 text-2xl tracking-tight"
              style={{ fontFamily: "var(--font-playfair), Georgia, serif", opacity: 1 }}
            >
              No Attorney-Client Relationship
            </h2>
            <p>
              Use of this Site, including sending us an email or completing a contact
              form, does not create an attorney-client relationship between you and
              MassimiLaw PLLC. An attorney-client relationship is only established
              through a signed engagement agreement. Do not send us confidential
              information until such a relationship has been formally established.
            </p>
          </section>

          <section>
            <h2
              className="mb-4 text-2xl tracking-tight"
              style={{ fontFamily: "var(--font-playfair), Georgia, serif", opacity: 1 }}
            >
              Intellectual Property
            </h2>
            <p>
              All content on this Site, including text, graphics, logos, and images, is
              the property of MassimiLaw PLLC or its content suppliers and is protected
              by United States and international copyright laws. You may not reproduce,
              distribute, modify, or create derivative works from any content on this
              Site without our prior written consent.
            </p>
          </section>

          <section>
            <h2
              className="mb-4 text-2xl tracking-tight"
              style={{ fontFamily: "var(--font-playfair), Georgia, serif", opacity: 1 }}
            >
              Limitation of Liability
            </h2>
            <p>
              To the fullest extent permitted by law, MassimiLaw PLLC shall not be
              liable for any direct, indirect, incidental, consequential, or punitive
              damages arising out of your access to or use of the Site. This includes,
              without limitation, damages for errors, omissions, interruptions, defects,
              delays, or any failure of performance.
            </p>
          </section>

          <section>
            <h2
              className="mb-4 text-2xl tracking-tight"
              style={{ fontFamily: "var(--font-playfair), Georgia, serif", opacity: 1 }}
            >
              Third-Party Links
            </h2>
            <p>
              This Site may contain links to third-party websites. These links are
              provided for your convenience and do not imply endorsement or
              responsibility for the content of any linked site. We are not responsible
              for the privacy practices or content of third-party websites.
            </p>
          </section>

          <section>
            <h2
              className="mb-4 text-2xl tracking-tight"
              style={{ fontFamily: "var(--font-playfair), Georgia, serif", opacity: 1 }}
            >
              Governing Law
            </h2>
            <p>
              These Terms of Service shall be governed by and construed in accordance
              with the laws of the State of New York, without regard to its conflict of
              law provisions. Any disputes arising under these terms shall be subject to
              the exclusive jurisdiction of the courts located in the State of New York.
            </p>
          </section>

          <section>
            <h2
              className="mb-4 text-2xl tracking-tight"
              style={{ fontFamily: "var(--font-playfair), Georgia, serif", opacity: 1 }}
            >
              Contact Us
            </h2>
            <p>
              If you have any questions about these Terms of Service, please contact us at:
            </p>
            <div className="mt-4 border-l-2 pl-5 py-2" style={{ borderColor: "#9A8866" }}>
              <p className="font-medium">MassimiLaw PLLC</p>
              <p>
                Email:{" "}
                <a href="mailto:info@massimilaw.com" className="underline underline-offset-2 hover:no-underline" style={{ color: "#9A8866" }}>
                  info@massimilaw.com
                </a>
              </p>
              <p>
                Phone:{" "}
                <a href="tel:+16462419800" className="underline underline-offset-2 hover:no-underline" style={{ color: "#9A8866" }}>
                  (646) 241-9800
                </a>
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
