import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono, Geist } from "next/font/google";

import { Toaster } from "@/components/ui/sonner";
import "./globals.css";
import ThemeProvider from "@/context/Theme";
import { cn } from "@/lib/utils";
import { SessionProvider } from "next-auth/react";
import { auth } from "@/auth";

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
};

const RootLayout = async ({ children }: { children: React.ReactNode }) => {
  const session = await auth();

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
      <head>
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css"
        />
      </head>
      <SessionProvider session={session}>
        <body className="flex min-h-full flex-col">
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
            {children}
          </ThemeProvider>
          <Toaster />
        </body>
      </SessionProvider>
    </html>
  );
};
export default RootLayout;
