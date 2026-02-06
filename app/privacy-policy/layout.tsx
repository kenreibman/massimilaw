import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | MassimiLaw PLLC",
  description:
    "Privacy Policy for MassimiLaw PLLC. Learn how we collect, use, and protect your personal information when you visit our website or use our legal services.",
  alternates: {
    canonical: "/privacy-policy",
  },
};

export default function PrivacyPolicyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
