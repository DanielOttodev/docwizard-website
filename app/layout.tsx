import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";
import { GoogleTagManager } from '@next/third-parties/google'

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  
  title: "DocWizard — Generate Word Documents Automatically",
  description:
    "Upload a Word template once. DocWizard detects the merge fields and generates polished PDFs or Word documents from your data — one at a time, in bulk from a spreadsheet, or through the API.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
 <GoogleTagManager gtmId="G-6LJJNDV979" />
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
