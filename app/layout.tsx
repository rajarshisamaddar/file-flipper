import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/navbar";
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "FileFlipper: Unlimited, Data-Saving File Converter",
  description: `Convert files effortlessly with FileFlipper using client-side FFmpeg. Enjoy unlimited transformations while prioritizing data savings. Elevate your content securely and efficiently. Start converting now!`,
  creator: "Rajarshi Samaddar",
  keywords:
    "FileFlipper, file converter, secure conversion, unlimited conversions, data-saving converter, client-side FFmpeg",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <Toaster />
          <main className="pt-32 min-h-screen lg:pt-36 2xl:pt-44 container max-w-4xl lg:max-w-6xl 2xl:max-w-7xl">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
