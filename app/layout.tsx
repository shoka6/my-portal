import React from "react";

import type { Metadata } from "next";
import "./globals.css";
import Header from "./_component/Header";
// import Footer from "./_component/Footer";

export const metadata: Metadata = {
  title: "Homepage",
  description: "kei no homepage",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="h-screen">
        <Header />
        <main className="pt-24">{children}</main>
        {/* <Footer /> */}
      </body>
    </html>
  );
}
