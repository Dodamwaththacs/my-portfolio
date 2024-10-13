"use client";

import { useEffect, useState } from "react";
import { Inter } from "next/font/google";
import "../styles/globals.css";
import "../styles/tailwind.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import StarsCanvas from "@/components/threeJS/main/StarBackground";
import { SessionProvider } from "next-auth/react";
import DevelopmentWarning from "../components/DevelopmentWarning";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  const [accepted, setAccepted] = useState(false);

  useEffect(() => {
    // Check if the user has already visited the site
    const hasVisited = localStorage.getItem("hasVisited");
    if (hasVisited) {
      setAccepted(true); // Skip modal if they've already visited
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("hasVisited", "true"); // Set flag in localStorage
    setAccepted(true); // Allow browsing after acceptance
  };

  return (
    <html lang="en">
      <body className={inter.className}>
        <SessionProvider>
          {!accepted && <DevelopmentWarning onAccept={handleAccept} />}
          {accepted && (
            <div className="flex flex-col h-screen bg-[#030014] overflow-y-scroll overflow-x-hidden">
              <div className="fixed bottom-0 w-full">
                <StarsCanvas />
              </div>
              <Header />
              <main className="flex-grow">{children}</main>
              <Footer />
            </div>
          )}
        </SessionProvider>
      </body>
    </html>
  );
}
