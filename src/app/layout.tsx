import Footer from "@/components/Footer";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  title: "Veritas Accounting and Tax Consultants",
  description: "Veritas Accounting",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased relative w-full`}
        style={{ width: "100%", minHeight: "100vh" }}
      >
        <main className="relative z-20 w-full" style={{ width: "100%" }}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
