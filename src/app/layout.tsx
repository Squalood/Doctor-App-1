import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";
import Footer from "@/components/footer";

const urbanist = Urbanist({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: "Clinica de Neurología>",
  description: "Clinica de Neurología de Dr. Jose Orlando Guinto Nava",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={urbanist.className}
      >
        {children}
        <Footer />
      </body>
    </html>
  );
}
