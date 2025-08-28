'use client'

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { ThemeProvider } from "@/contexts/ThemeContext";
import ThemeToggle from "@/components/ThemeToggle";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// export const metadata: Metadata = {
//   title: "Tripp",
//   description: "Real-estate platform with escrow, AI insights, and investments",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased theme-transition`}>
        <ThemeProvider>
          <a
            href="#main"
            className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:px-3 focus:py-2 focus:bg-white focus:border"
          >
            Skip to content
          </a>
          <header className="sticky top-0 z-10 backdrop-blur supports-[backdrop-filter]:bg-card-background/70 border-b border-card-border">
            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center gap-6">
              <Link href="/" className="font-semibold text-text-primary">Tripp</Link>
              <nav className="hidden md:flex gap-6 text-sm">
                <Link href="/listings" className="text-text-secondary hover:text-text-primary transition-colors">Listings</Link>
                <Link href="/investment" className="text-text-secondary hover:text-text-primary transition-colors">Investment</Link>
              </nav>
              <div className="ml-auto flex items-center gap-3">
                <ThemeToggle />
                <Link
                  href="/auth"
                  className="px-3 py-2 rounded-md border border-card-border bg-card-background text-text-primary hover:bg-button-secondary-hover-bg transition-colors"
                >
                  Login
                </Link>
                <Link
                  href="/upload"
                  className="px-3 py-2 rounded-md bg-button-primary-bg text-button-primary-text hover:bg-button-primary-hover-bg transition-colors"
                >
                  Post Listing
                </Link>
              </div>
            </div>
          </header>
          <main id="main" className="max-w-7xl mx-auto px-6 py-10">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}