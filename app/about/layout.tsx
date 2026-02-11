import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Jessica Massimi | Civil Rights & Employment Discrimination Attorney | NYC",
  description:
    "Jessica Massimi is an experienced NYC civil rights and employment discrimination attorney with 15+ years fighting for working people. CUNY Law graduate. Free consultation available.",
  keywords: [
    "civil rights attorney NYC",
    "employment discrimination lawyer New York",
    "Jessica Massimi attorney",
    "police misconduct lawyer",
    "workplace discrimination attorney",
    "CUNY Law graduate attorney",
    "New York employment lawyer",
  ],
  openGraph: {
    title: "About Jessica Massimi | Civil Rights Attorney NYC",
    description:
      "Meet Jessica Massimi — a dedicated civil rights and employment discrimination attorney fighting for working people in New York City. 15+ years experience.",
    type: "profile",
    firstName: "Jessica",
    lastName: "Massimi",
    locale: "en_US",
    siteName: "MassimiLaw",
    images: [
      {
        url: "/images/hero.webp",
        width: 800,
        height: 1000,
        alt: "Jessica Massimi - Civil Rights Attorney",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Jessica Massimi | Civil Rights Attorney NYC",
    description:
      "15+ years fighting for civil rights and employment discrimination cases in NYC. CUNY Law graduate. Free consultation.",
    images: ["/images/hero.webp"],
  },
  alternates: {
    canonical: "/about",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
