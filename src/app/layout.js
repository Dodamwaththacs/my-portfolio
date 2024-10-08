"use client";

import { Inter } from "next/font/google";
import "../styles/globals.css";
import "../styles/tailwind.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import StarsCanvas from "@/components/threeJS/main/StarBackground";
import { SessionProvider } from "next-auth/react";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SessionProvider>
          <div className="flex flex-col h-screen bg-[#030014] overflow-y-scroll overflow-x-hidden">
            <div className="fixed bottom-0 w-full">
              <StarsCanvas />
            </div>
            <Header />
            <main className="flex-grow">{children}</main>
            <Footer />
          </div>
        </SessionProvider>
      </body>
    </html>
  );
}
