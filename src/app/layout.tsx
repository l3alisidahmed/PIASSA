import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/layouts/sidebar";
import { FormProvider } from "@/providers/FormProvider";
import SearchProvider from "@/providers/SearchProvider";
import { UpdateProvider } from "@/providers/UpdateProvider";

// Initialize Geist Sans font with specific variable and subset
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

// Initialize Geist Mono font with specific variable and subset
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Metadata for the application
export const metadata: Metadata = {
  title: "PIASSA | Admin",
  description: "Generated by create next app",
  icons: "/logo.png",
};

// Root layout component
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" style={{overflow: 'hidden'}}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[url('/bgPic.png')] bg-cover bg-center bg-no-repeat`}
      >
        <div className="w-screen h-screen grid grid-cols-[250px_1fr] gap-4 backdrop-blur-[100px] bg-white/10">
          {/* Sidebar component */}
          <Sidebar />
          <div className="pt-3">
            {/* Providers wrapping the children components */}
            <SearchProvider>
              <FormProvider>
                <UpdateProvider>
                  {children}
                </UpdateProvider>
              </FormProvider>
            </SearchProvider>
          </div> 
        </div>
      </body>
    </html>
  );
}
