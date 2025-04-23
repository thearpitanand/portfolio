import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { CursorFollower } from "@thearpitanand/components/effects/CursorFollower";
import { siteConfig } from "@thearpitanand/config/site";
import { Header } from "@thearpitanand/components/layout/Header";
import { Footer } from "@thearpitanand/components/layout/Footer";
import { SchemaScript } from "@thearpitanand/components/layout/SchemaScript";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.title}`,
  },
  description: siteConfig.description,
  manifest: "/assets/favicons/site.webmanifest",
  icons: {
    icon: [
      { url: "/assets/favicons/favicon.ico", sizes: "any" },
      {
        url: "/assets/favicons/favicon-16x16.png",
        type: "image/png",
        sizes: "16x16",
      },
      {
        url: "/assets/favicons/favicon-32x32.png",
        type: "image/png",
        sizes: "32x32",
      },
    ],
    apple: [
      {
        url: "/assets/favicons/apple-touch-icon.png",
        type: "image/png",
        sizes: "180x180",
      },
    ],
    other: [
      {
        rel: "android-chrome-192x192",
        url: "/assets/favicons/android-chrome-192x192.png",
        type: "image/png",
        sizes: "192x192",
      },
      {
        rel: "android-chrome-512x512",
        url: "/assets/favicons/android-chrome-512x512.png",
        type: "image/png",
        sizes: "512x512",
      },
    ],
  },
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.title,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.title,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    creator: siteConfig.links.twitterHandle,
    images: [siteConfig.ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  keywords: siteConfig.keywords,
  authors: [{ name: siteConfig.author, url: siteConfig.url }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} bg-black font-sans leading-relaxed text-slate-400 antialiased selection:bg-cyan-300 selection:text-cyan-900`}
      >
        <SchemaScript />
        <CursorFollower />
        <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
          <div className="lg:flex lg:justify-between lg:gap-4">
            <Header />

            <main id="content" className="pt-24 lg:w-1/2 lg:py-24">
              {children}
              <Footer />
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}
