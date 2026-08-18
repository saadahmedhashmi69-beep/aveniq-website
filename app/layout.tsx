import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/navigation/Navbar";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Aveniq — Digital Systems Engineered Around Your Business",
    template: "%s | Aveniq",
  },
  description:
    "Aveniq designs and builds custom business software, websites, CRMs, dashboards, and automation — systems engineered around the way your business actually works.",
  openGraph: {
    title: "Aveniq — Digital Systems Engineered Around Your Business",
    description:
      "Aveniq designs and builds custom business software, websites, CRMs, dashboards, and automation — systems engineered around the way your business actually works.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-canvas text-ink">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
