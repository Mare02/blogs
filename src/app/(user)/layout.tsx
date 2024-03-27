import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import { NavbarScrollWrapper } from "@/components/NavbarScrollWrapper";
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
        <NavbarScrollWrapper>
          <Navbar static={true}></Navbar>
        </NavbarScrollWrapper>
        <div className="py-10 px-4 lg:px-10 container mx-auto">
          {children}
        </div>
      </body>
    </html>
  );
}
