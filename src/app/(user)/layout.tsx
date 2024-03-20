import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import { Inter } from "next/font/google";
import '@/styles/globals.css'

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar static={true}></Navbar>
        <div className="py-10 px-4 lg:px-10 container mx-auto">
          {children}
        </div>
      </body>
    </html>
  );
}
