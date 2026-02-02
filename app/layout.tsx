import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import MainNavigation from "./components/MainNavigation";
import Footer from "./components/Footer";
import Contact from "./sections/Contact";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MassimiLaw - Civil Rights Attorney",
  description: "MassimiLaw is a dedicated civil rights attorney committed to fighting for justice and equality. With extensive experience in handling cases related to discrimination, police misconduct, and constitutional rights, Jessica advocates for individuals whose rights have been violated. Her passion for social justice and unwavering dedication to her clients make her a trusted ally in the pursuit of fairness and accountability.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <MainNavigation />
        {children}
        <Contact />
        <Footer />
      </body>
    </html>
  );
}
