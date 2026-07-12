import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono, Geist } from "next/font/google";

import "./globals.css";
import ThemeProvider from "@/context/Theme";
import { cn } from "@/lib/utils";
import Navbar from "@/components/navigation/navbar";

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" });

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["500", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DevHocket",
  description:
    "Ask questions, share knowledge, and connect with developers. DevHocket is a community-driven Q&A platform for web development, algorithms, and programming help.",
  icons: {
    icon: "/images/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn(
        "h-full",
        "antialiased",
        spaceGrotesk.variable,
        inter.variable,
        jetbrainsMono.variable,
        "font-sans",
        geist.variable
      )}
      suppressHydrationWarning
    >
      <body className="flex min-h-full flex-col">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
