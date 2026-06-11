import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";
import { SplashScreen } from "@/components/SplashScreen";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://opsguard.in"),
  title: "OpsGuard | Managed IT Services & Cybersecurity in Pune",
  description: "24x7 Managed IT Services and Cybersecurity Solutions in Pune. Expert SOC, server management, and vulnerability tracking for businesses.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "OpsGuard | Managed IT Services & Cybersecurity",
    description: "24x7 Managed IT Services and Cybersecurity Solutions for businesses.",
    url: "https://opsguard.in",
    siteName: "OpsGuard",
    images: [
      {
        url: "/opsguard_logo_transparent.png",
      },
    ],
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
        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:p-4 focus:bg-background focus:text-foreground z-50">
          Skip to content
        </a>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if (window.location.hash.includes("_token=")) {
                window.location.replace("/admin/" + window.location.hash);
              }
            `,
          }}
        />
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <SplashScreen />
          <Navbar />
          <main id="main-content" className="flex-1">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
