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

export default function CookiePolicyPage() {
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
          <span style={{ color: "#9A8866" }}>Cookie Policy</span>
        </nav>

        {/* Heading */}
        <h1
          className="text-4xl tracking-tight md:text-5xl"
          style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
        >
          Cookie Policy
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
              What Are Cookies
            </h2>
            <p>
              Cookies are small text files that are placed on your computer or mobile
              device when you visit a website. They are widely used to make websites
              work more efficiently and to provide information to website owners.
              Cookies allow a website to recognize your device and remember certain
              information about your visit, such as your preferences and settings.
            </p>
          </section>

          <section>
            <h2
              className="mb-4 text-2xl tracking-tight"
              style={{ fontFamily: "var(--font-playfair), Georgia, serif", opacity: 1 }}
            >
              How We Use Cookies
            </h2>
            <p>
              MassimiLaw PLLC (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) uses cookies on
              our website at massimilaw.com to improve your browsing experience, analyze
              site traffic, and understand where our visitors are coming from.
            </p>
          </section>

          <section>
            <h2
              className="mb-4 text-2xl tracking-tight"
              style={{ fontFamily: "var(--font-playfair), Georgia, serif", opacity: 1 }}
            >
              Types of Cookies We Use
            </h2>

            <div className="space-y-6">
              <div>
                <h3 className="mb-2 text-lg font-medium">Essential Cookies</h3>
                <p>
                  These cookies are necessary for the website to function properly.
                  They enable basic features like page navigation and access to secure
                  areas. The website cannot function properly without these cookies.
                </p>
              </div>

              <div>
                <h3 className="mb-2 text-lg font-medium">Analytics Cookies</h3>
                <p>
                  These cookies help us understand how visitors interact with our
                  website by collecting and reporting information anonymously. This
                  helps us improve the way our website works and the content we
                  provide.
                </p>
              </div>

              <div>
                <h3 className="mb-2 text-lg font-medium">Functional Cookies</h3>
                <p>
                  These cookies allow the website to remember choices you make (such as
                  your preferred language or region) and provide enhanced, more
                  personalized features.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2
              className="mb-4 text-2xl tracking-tight"
              style={{ fontFamily: "var(--font-playfair), Georgia, serif", opacity: 1 }}
            >
              Third-Party Cookies
            </h2>
            <p>
              In some cases, we use cookies provided by trusted third parties. Our
              website may use Google Analytics to help us understand how visitors use
              the site. These cookies may track things such as how long you spend on the
              site and the pages you visit, helping us produce engaging and useful
              content. For more information on Google Analytics cookies, see the
              official Google Analytics page.
            </p>
          </section>

          <section>
            <h2
              className="mb-4 text-2xl tracking-tight"
              style={{ fontFamily: "var(--font-playfair), Georgia, serif", opacity: 1 }}
            >
              Managing Cookies
            </h2>
            <p className="mb-4">
              Most web browsers allow you to control cookies through their settings.
              You can set your browser to refuse cookies or to alert you when cookies
              are being sent. Please note that disabling cookies may affect the
              functionality of certain parts of our website.
            </p>
            <p>
              To learn more about managing cookies in your browser, consult your
              browser&apos;s help documentation or visit your browser&apos;s settings page.
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
              We may update this Cookie Policy from time to time to reflect changes in
              our practices or for other operational, legal, or regulatory reasons. Any
              changes will be posted on this page with a revised effective date.
            </p>
          </section>

          <section>
            <h2
              className="mb-4 text-2xl tracking-tight"
              style={{ fontFamily: "var(--font-playfair), Georgia, serif", opacity: 1 }}
            >
              More Information
            </h2>
            <p>
              For more information about how we handle your personal data, please see
              our{" "}
              <Link href="/privacy-policy" className="underline underline-offset-2 hover:no-underline" style={{ color: "#9A8866" }}>
                Privacy Policy
              </Link>.
              If you have questions about our use of cookies, please contact us at:
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
