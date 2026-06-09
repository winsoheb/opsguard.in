import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";
import { SplashScreen } from "@/components/SplashScreen";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "OpsGuard | Managed IT Services & Cybersecurity in Pune",
  description: "Protect. Monitor. Manage. 24x7 Managed IT Services and Cybersecurity Solutions for businesses across India. Expert SOC, server management, and vulnerability tracking.",
  openGraph: {
    title: "OpsGuard | Managed IT Services & Cybersecurity",
    description: "24x7 Managed IT Services and Cybersecurity Solutions for businesses.",
    url: "https://opsguard.in",
    siteName: "OpsGuard",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "OpsGuard | Managed IT Services & Cybersecurity",
    description: "24x7 Managed IT Services and Cybersecurity Solutions.",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} min-h-screen bg-background flex flex-col overflow-x-hidden`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <SplashScreen />
          <Navbar />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
