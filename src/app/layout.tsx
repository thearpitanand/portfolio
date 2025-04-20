import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Github, Linkedin, Instagram } from "lucide-react";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Arpit Anand | Portfolio",
  description: "Personal portfolio website of Arpit Anand",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} bg-gray-900 font-sans leading-relaxed text-gray-300 antialiased selection:bg-cyan-300 selection:text-cyan-900`}
      >
        <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
          <div className="lg:flex lg:justify-between lg:gap-4">
            <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
              <div>
                <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
                  Arpit Anand
                </h1>
                <h2 className="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">
                  Senior Frontend Engineer
                </h2>
                <p className="mt-4 max-w-xs leading-normal">
                  AI Enthusiast | Building AI Products from 0 to 1 | Scaling to
                  Billions
                </p>
                <nav className="mt-16 hidden lg:block">
                  <ul className="w-max">
                    <li>
                      <a
                        className="group active flex items-center py-3"
                        href="#about"
                      >
                        <span className="nav-indicator"></span>
                        <span className="nav-text">About</span>
                      </a>
                    </li>
                    <li>
                      <a
                        className="group flex items-center py-3"
                        href="#experience"
                      >
                        <span className="nav-indicator"></span>
                        <span className="nav-text">Experience</span>
                      </a>
                    </li>
                    <li>
                      <a className="group flex items-center py-3" href="#blogs">
                        <span className="nav-indicator"></span>
                        <span className="nav-text">Blogs</span>
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
              <ul
                className="mt-8 ml-1 flex items-center"
                aria-label="Social media"
              >
                <li className="mr-4 text-xs">
                  <a
                    className="block text-gray-400 transition-colors hover:text-gray-300"
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
                    className="block text-gray-400 transition-colors hover:text-gray-300"
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
                    className="block text-gray-400 transition-colors hover:text-gray-300"
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

              <footer className="mt-16 max-w-md pb-16 text-sm text-slate-500 sm:pb-0">
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
