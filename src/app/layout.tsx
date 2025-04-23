import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Github, Linkedin, Instagram } from "lucide-react";
import { NavLinks } from "@thearpitanand/components/NavLinks";
import { CursorFollower } from "@thearpitanand/components/effects/CursorFollower";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const siteUrl = "https://thearpitanand.com";
const siteTitle = "Arpit Anand";
const siteDescription =
  "Personal portfolio website of Arpit Anand, Senior Software Engineer and AI Enthusiast. Building AI products from 0 to 1 and scaling to billions.";
const siteOgImage = `${siteUrl}/assets/og-images/ogimage.png`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteTitle,
    template: `%s | Arpit Anand`,
  },
  description: siteDescription,
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
    title: siteTitle,
    description: siteDescription,
    url: siteUrl,
    siteName: siteTitle,
    images: [
      {
        url: siteOgImage,
        width: 1200,
        height: 630,
        alt: siteTitle,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    creator: "@the_arpitanand",
    images: [siteOgImage],
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
  keywords: [
    "Arpit Anand",
    "Senior Software Engineer",
    "AI Enthusiast",
    "Building AI Products",
    "Scaling to Billions",
    "Software Development",
    "Python",
    "Machine Learning",
    "Deep Learning",
    "Computer Vision",
    "Natural Language Processing",
    "Generative AI",
    "LLMs",
    "Prompt Engineering",
    "RAG",
    "AI",
    "Frontend Development",
    "Backend Development",
    "Full Stack Development",
    "Software Development",
    "Software Engineer",
    "Software Developer",
    "Software Architect",
    "Software Engineer",
    "Software Developer",
  ],
  authors: [{ name: "Arpit Anand", url: "https://thearpitanand.com" }],
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Arpit Anand",
              url: "https://thearpitanand.com",
              sameAs: [
                "https://github.com/thearpitanand",
                "https://www.linkedin.com/in/thearpitanand/",
                "https://www.instagram.com/anand_arpit/",
              ],
              jobTitle: "Senior Software Engineer",
              description:
                "AI Enthusiast | Building AI Products from 0 to 1 | Scaling to Billions",
              image: siteOgImage,
              alumniOf: ["Veer Bahadur Singh Purvanchal University", "VBSPU"],
              knowsAbout: [
                "Software Development",
                "Python",
                "Machine Learning",
                "Deep Learning",
                "Computer Vision",
                "Natural Language Processing",
                "Generative AI",
                "LLMs",
                "Prompt Engineering",
                "RAG",
                "AI",
                "Frontend Development",
                "Next.js",
                "React",
                "TypeScript",
                "Node.js",
                "Express",
                "MongoDB",
                "PostgreSQL",
                "Docker",
                "Kubernetes",
                "TensorFlow",
                "PyTorch",
                "AWS",
                "CI/CD",
                "DevOps",
                "Cloud Computing",
                "Cloud Native",
                "Cloud Security",
                "Cloud Monitoring",
                "Cloud Automation",
                "Cloud Cost Optimization",
                "Cloud Performance Optimization",
              ],
            }),
          }}
        />
        <CursorFollower />
        <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
          <div className="lg:flex lg:justify-between lg:gap-4">
            <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
              <div>
                <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
                  Arpit Anand
                </h1>
                <h2 className="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">
                  Senior Software Engineer
                </h2>
                <p className="mt-4 max-w-xs leading-normal">
                  AI Enthusiast | Building AI Products from 0 to 1 | Scaling to
                  Billions
                </p>
                <NavLinks />
              </div>
              <ul
                className="mt-8 ml-1 flex items-center"
                aria-label="Social media"
              >
                <li className="mr-4 text-xs">
                  <a
                    className="block text-slate-400 transition-colors hover:text-slate-200"
                    href="https://github.com/thearpitanand"
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label="GitHub (opens in a new tab)"
                  >
                    <Github size={20} />
                  </a>
                </li>
                <li className="mr-4 text-xs">
                  <a
                    className="block text-slate-400 transition-colors hover:text-slate-200"
                    href="https://www.linkedin.com/in/thearpitanand/"
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label="LinkedIn (opens in a new tab)"
                  >
                    <Linkedin size={20} />
                  </a>
                </li>
                <li className="mr-4 text-xs">
                  <a
                    className="block text-slate-400 transition-colors hover:text-slate-200"
                    href="https://www.instagram.com/anand_arpit/"
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label="Instagram (opens in a new tab)"
                  >
                    <Instagram size={20} />
                  </a>
                </li>
              </ul>
            </header>

            <main id="content" className="pt-24 lg:w-1/2 lg:py-24">
              {children}

              <footer className="mt-16 max-w-md pb-16 text-xs text-slate-500 sm:pb-0">
                <p>
                  Built with Next.js and Tailwind CSS, deployed with Vercel.
                  Inspired by{" "}
                  <a
                    href="https://brittanychiang.com/"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    {`Brittany Chiang's portfolio`}
                  </a>
                  .
                </p>
              </footer>
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}
