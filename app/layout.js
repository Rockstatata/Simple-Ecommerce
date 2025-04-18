import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { store } from "@/redux/store";
import ClientProvider from "@/components/ClientProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Simple Ecommerce",
  description: "A simple ecommerce app built with Next.js and Redux",
  icons: {
    icon: "/favicon.ico",
  },
};

export default async function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex min-h-full flex-col bg-white`}
      >
        <ClientProvider>
          <Navbar />
          <main className="flex-grow container mx-auto px-4 py-8">
            {children}
          </main>
        </ClientProvider>
      </body>
    </html>
  );
}
