import type { Metadata } from "next";
import { Bungee, Orbitron } from "next/font/google";
import "./globals.css";

const bungee = Bungee({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bungee",
});

const orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-orbitron",
});

export const metadata: Metadata = {
  title: "ROAST-O-MATIC 9000",
  description: "The Ultimate AI Roasting Platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${orbitron.variable} ${bungee.variable} font-orbitron antialiased bg-background text-foreground`}>
        {children}
      </body>
    </html>
  );
}
