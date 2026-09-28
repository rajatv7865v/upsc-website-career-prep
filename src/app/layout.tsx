import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#0b3d91",
};

export const metadata: Metadata = {
  title: "Career Prepp | Clear notes on current affairs & public life",
  description:
    "Knowledge-first articles on geography, economy, polity, and current affairs — written for curious readers, not just exam classrooms.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable} h-full antialiased`} suppressHydrationWarning>
      <body className="min-h-full flex flex-col font-sans bg-white text-black overflow-x-hidden" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
