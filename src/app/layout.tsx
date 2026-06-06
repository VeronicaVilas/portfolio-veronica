import type { Metadata } from "next";
import { Playfair_Display, DM_Sans, DM_Mono } from 'next/font/google'
import "./globals.css";
import Navbar from "../components/layout/navbar";
import CustomCursor from "../components/ui/CustomCursor";

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  display: 'swap',
})

const dmMono = DM_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-dm-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: "Verônica Vilas — Full Stack Developer",
  description: "Desenvolvedora Full Stack com formação em Engenharia Química...",
};

export default function RootLayout({ children }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      data-theme="dark"
      className={`${playfair.variable} ${dmSans.variable} ${dmMono.variable} h-full antialiased`}
    >
      <body>
        <CustomCursor />
        <Navbar />
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
