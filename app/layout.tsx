"use client";
import type { Metadata } from "next";
import { Inter, Zilla_Slab } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

import { Zilla_Slab as FontZilla } from "next/font/google";

import React from "react";
import Header from "@/components/header/header";
import Footer from "@/components/header/footer";

const zilla_slab = Zilla_Slab({ subsets: ["latin-ext"], weight: "400" });

const fontZilla = FontZilla({
  subsets: ["latin-ext"],
  variable: "--font-zilla",
  weight: "500",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "antialiased bg-gray-900 text-white",
          fontZilla.variable,
          zilla_slab.className
        )}
      >
        <div className="mx-auto max-w-3xl px-4 sm:px-6 xl:max-w-5xl xl:px-0 flex flex-col justify-between min-h-dvh">
          <div className="flex-1">
            <Header />
            {children}
          </div>

          <Footer />
        </div>
      </body>
    </html>
  );
}
