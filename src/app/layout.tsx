import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Prathibha P | AI, Data & Product Portfolio",
  description: "A Computer Science Engineering student exploring AI, data analytics, and product development.",
  openGraph: {
    title: "Prathibha P | AI & Data Portfolio",
    description: "Exploring how data and technology can solve real-world problems.",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}><body className="min-h-full flex flex-col">{children}</body></html>;
}
