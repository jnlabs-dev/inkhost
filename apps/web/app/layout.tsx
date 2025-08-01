import type { Metadata } from "next";
import localFont from "next/font/local";
import { ClerkProvider } from '@clerk/nextjs'
import { ToastProvider } from "@/components/providers/ToastProvider"

import "./globals.css";
import 'leaflet/dist/leaflet.css';

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-sans",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "InkHost",
  description: "Connecting tattoo artists with studios worldwide",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <ToastProvider>
        <html lang="en">
          <body className={`${geistSans.variable} ${geistMono.variable} font-sans`}>
            {children}
          </body>
        </html>
      </ToastProvider>
    </ClerkProvider>
  );
}
