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

export default function PrivacyPolicyPage() {
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
          <span style={{ color: "#9A8866" }}>Privacy Policy</span>
        </nav>

        {/* Heading */}
        <h1
          className="text-4xl tracking-tight md:text-5xl"
          style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
        >
          Privacy Policy
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
              Introduction
            </h2>
            <p>
              MassimiLaw PLLC (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) is committed to
              protecting the privacy of visitors to our website and our clients. This
              Privacy Policy describes how we collect, use, disclose, and safeguard your
              personal information when you visit our website at massimilaw.com or engage
              our legal services.
            </p>
          </section>

          <section>
            <h2
              className="mb-4 text-2xl tracking-tight"
              style={{ fontFamily: "var(--font-playfair), Georgia, serif", opacity: 1 }}
            >
              Information We Collect
            </h2>
            <p className="mb-4">
              We may collect personal information that you voluntarily provide to us,
              including but not limited to:
            </p>
            <ul className="list-disc space-y-2 pl-6">
              <li>Name, email address, phone number, and mailing address</li>
              <li>Information submitted through our contact forms or consultation requests</li>
              <li>Details about your legal matter that you share with us</li>
              <li>Communications you send to us via email, phone, or other channels</li>
            </ul>
            <p className="mt-4">
              We also automatically collect certain technical information when you visit
              our website, including your IP address, browser type, operating system,
              referring URLs, and information about how you interact with our site.
            </p>
          </section>

          <section>
            <h2
              className="mb-4 text-2xl tracking-tight"
              style={{ fontFamily: "var(--font-playfair), Georgia, serif", opacity: 1 }}
            >
              How We Use Your Information
            </h2>
            <p className="mb-4">We use the information we collect to:</p>
            <ul className="list-disc space-y-2 pl-6">
              <li>Respond to your inquiries and provide legal services</li>
              <li>Communicate with you about your case or our services</li>
              <li>Improve our website and the user experience</li>
              <li>Comply with legal and regulatory obligations</li>
              <li>Protect our rights and the security of our website</li>
            </ul>
          </section>

          <section>
            <h2
              className="mb-4 text-2xl tracking-tight"
              style={{ fontFamily: "var(--font-playfair), Georgia, serif", opacity: 1 }}
            >
              Cookies and Tracking Technologies
            </h2>
            <p>
              Our website may use cookies and similar tracking technologies to enhance
              your browsing experience and analyze site traffic. For more details on
              the cookies we use and how to manage them, please see our{" "}
              <Link href="/cookie-policy" className="underline underline-offset-2 hover:no-underline" style={{ color: "#9A8866" }}>
                Cookie Policy
              </Link>.
            </p>
          </section>

          <section>
            <h2
              className="mb-4 text-2xl tracking-tight"
              style={{ fontFamily: "var(--font-playfair), Georgia, serif", opacity: 1 }}
            >
              Disclosure to Third Parties
            </h2>
            <p className="mb-4">
              We do not sell, rent, or trade your personal information. We may share
              your information in the following limited circumstances:
            </p>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                <strong>Service providers:</strong> Trusted third parties who assist us
                in operating our website, conducting our business, or providing services
                to you, subject to confidentiality obligations.
              </li>
              <li>
                <strong>Legal requirements:</strong> When disclosure is required by law,
                court order, or governmental regulation.
              </li>
              <li>
                <strong>Protection of rights:</strong> To protect the rights, property,
                or safety of MassimiLaw PLLC, our clients, or others.
              </li>
            </ul>
          </section>

          <section>
            <h2
              className="mb-4 text-2xl tracking-tight"
              style={{ fontFamily: "var(--font-playfair), Georgia, serif", opacity: 1 }}
            >
              Data Security
            </h2>
            <p>
              We implement reasonable administrative, technical, and physical safeguards
              to protect your personal information from unauthorized access, use, or
              disclosure. However, no method of transmission over the internet or
              electronic storage is completely secure, and we cannot guarantee absolute
              security.
            </p>
          </section>

          <section>
            <h2
              className="mb-4 text-2xl tracking-tight"
              style={{ fontFamily: "var(--font-playfair), Georgia, serif", opacity: 1 }}
            >
              Your Rights
            </h2>
            <p>
              Depending on your jurisdiction, you may have rights regarding your
              personal information, including the right to access, correct, or delete
              your data. To exercise any of these rights, please contact us using the
              information below.
            </p>
          </section>

          <section>
            <h2
              className="mb-4 text-2xl tracking-tight"
              style={{ fontFamily: "var(--font-playfair), Georgia, serif", opacity: 1 }}
            >
              Changes to This Policy
            </h2>
            <p>
              We may update this Privacy Policy from time to time. Any changes will be
              posted on this page with a revised effective date. We encourage you to
              review this page periodically.
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
              If you have any questions about this Privacy Policy, please contact us at:
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
