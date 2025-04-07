import type { Metadata } from "next";
import { Inter, Barlow, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";

// Fonts
const interFont = Inter({ subsets: ["latin"] });
const barlowFont = Barlow({
  subsets: ["latin"],
  weight: ["500", "700"],
  variable: "--font-barlow",
});
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// clerk Provider
import {ClerkProvider,} from '@clerk/nextjs'

// Metadata
export const metadata: Metadata = {
  title: "GoShop",
  description:
    "Welcome to GoShop, your ultimate destination for seamless online shopping! Discover a vast array of products from trusted sellers, all in one convenient marketplace. With GoShop, shopping is made easy, fast, and enjoyable. Find everything you need, from fashion and electronics to home essentials, and experience the joy of hassle-free online shopping. Start exploring today!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${interFont.className} ${barlowFont.variable} ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
    </ClerkProvider>
  );
}
