import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookie Policy | MassimiLaw PLLC",
  description:
    "Cookie Policy for MassimiLaw PLLC. Learn about the cookies we use on our website, why we use them, and how you can manage your preferences.",
  alternates: {
    canonical: "/cookie-policy",
  },
};

export default function CookiePolicyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
