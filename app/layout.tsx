import React from "react";

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { UIProvider } from "./component/UIProvider";
import Header from "./component/Header";

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
          {/* <ul className="flex h-12 items-center justify-around">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/skill">Skill</Link>
              </li>
              {/* 工事中 */}
          {/* <li>
              <Link href="/blog/">Blog</Link>
            </li> */}
          {/* </ul>  */}
          {children}
        </UIProvider>
      </body>
    </html>
  );
}
