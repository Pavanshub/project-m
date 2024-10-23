import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";

import "./globals.css";

import { ThemeProvider } from "@/components/providers/theme-provider";
import Link from "next/link";
import {
  AlarmClock,
  BellRing,
  CirclePlus,
  Mail,
  PanelsTopLeft
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";
import { MainNavbar } from "./(demo)/_components/main-navbar";
import { UserNav } from "@/components/admin-panel/user-nav";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.APP_URL
      ? `${process.env.APP_URL}`
      : process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : `http://localhost:${process.env.PORT || 3000}`
  ),
  title: "Makerble",
  description: "Makerble UI",
  alternates: {
    canonical: "/"
  },
  openGraph: {
    url: "/",
    title: "Makerble",
    description: "Makerble UI",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Makerble",
    description: "Makerble UI"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={GeistSans.className}>
        <header className="z-[50] sticky top-0 w-full bg-background/95 border-b backdrop-blur-sm dark:bg-black/[0.6] border-border/40">
          <div className="container h-14 flex items-center">
            <Link
              href="/"
              className="flex justify-start items-center hover:opacity-85 transition-opacity duration-300"
            >
              <PanelsTopLeft className="w-6 h-6 mr-3" />
              <span className="font-bold">Makerble</span>
              <span className="sr-only">Makerble</span>
            </Link>
            <nav className="ml-auto flex items-center gap-2">
              <div className="hidden md:block">
                <MainNavbar />
              </div>
              <div className="flex flex-row gap-4">
                <Link href="#">
                  <AlarmClock size={18} />
                </Link>
                <Link href="#">
                  <Mail size={18} />
                </Link>
                <Link href="#">
                  <BellRing size={18} />
                </Link>
              </div>
              <Link href="/">
                <Button variant="destructive">
                  <CirclePlus size={18} className="mr-2" /> Create
                </Button>
              </Link>

              <ThemeProvider
                attribute="class"
                defaultTheme="system"
                enableSystem
              >
                <ModeToggle />
              </ThemeProvider>
              <UserNav />
            </nav>
          </div>
        </header>
        {children}
      </body>
    </html>
  );
}
