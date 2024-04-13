import React from "react";

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { UIProvider } from "./component/UIProvider";
import Header from "./component/Header";
import Footer from "./component/Footer";

const inter = Inter({ subsets: ["latin"] });

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
      <body className={`${inter.className} h-screen`}>
        <UIProvider>
          <Header />
          {children}
          <Footer />
        </UIProvider>
      </body>
    </html>
  );
}
