import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Activity Management App",
  description: "Manage your activities efficiently with our platform",
  keywords: ["activity", "management", "scheduling", "planning"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning className="min-h-screen bg-white flex flex-col font-inter">
        {children}
        <Footer />
      </body>
    </html>
  );
}