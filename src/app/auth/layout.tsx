import type { Metadata } from "next";
import { Inter } from "next/font/google";
import '@/styles/globals.css'


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sign in | Devinarium",
  description: "Log in or create an account on Devinarium",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="pb-10 pt-32 px-4 lg:px-10 container mx-auto">
          {children}
        </div>
      </body>
    </html>
  );
}
