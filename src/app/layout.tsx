
import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { EngineeringProvider } from "@/context/EngineeringContext";
import Header from "@/components/layout/Header"; // NEW IMPORT

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  title: "The Engineering Switch | Full Stack & Web3 Portfolio",
  description: "A dual-mode portfolio showcasing expertise in Scalable Web2 Architectures and Secure Web3 Protocols.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} antialiased transition-colors duration-500`}
      >
        <EngineeringProvider>
          <Header /> {/* Replaced direct GlobalToggle with Header */}
          <main className="min-h-screen relative overflow-hidden">
            {children}
          </main>
        </EngineeringProvider>
      </body>
    </html>
  );
}
