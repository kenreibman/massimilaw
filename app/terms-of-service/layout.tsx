import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | MassimiLaw PLLC",
  description:
    "Terms of Service for MassimiLaw PLLC. Review the terms and conditions governing your use of our website and legal services.",
  alternates: {
    canonical: "/terms-of-service",
  },
};

export default function TermsOfServiceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
