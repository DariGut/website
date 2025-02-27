import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { NavBar } from '@/components/NavBar';
import { ThemeProvider } from '@/components/theme-provider';
import { PostHogProvider } from "@/providers/PostHogProvider";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });
// 
// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  title: "Benjamin Haag - IT Services",
  description: "IT Services",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <html lang="en" className="scroll-p-20 scroll-smooth">
        <head />
        <body>
          <PostHogProvider>
            <NavBar />
            {children}
          </PostHogProvider>
        </body>
      </html>
    </>
  );
}
