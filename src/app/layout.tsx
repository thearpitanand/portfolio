import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

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
        className={`${inter.variable} font-sans bg-gray-900 text-gray-300 leading-relaxed antialiased selection:bg-cyan-300 selection:text-cyan-900`}
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
                  Enthusiast | Building AI Products from 0 to 1 | Scaling to
                  Billions
                </p>
                <nav className="mt-16 hidden lg:block">
                  <ul className="w-max">
                    <li>
                      <a
                        className="group flex items-center py-3 active"
                        href="#about"
                      >
                        <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
                        <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">
                          About
                        </span>
                      </a>
                    </li>
                    <li>
                      <a
                        className="group flex items-center py-3"
                        href="#experience"
                      >
                        <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
                        <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">
                          Experience
                        </span>
                      </a>
                    </li>
                    <li>
                      <a
                        className="group flex items-center py-3"
                        href="#projects"
                      >
                        <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
                        <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">
                          Projects
                        </span>
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
              <ul
                className="ml-1 mt-8 flex items-center"
                aria-label="Social media"
              >
                <li className="mr-5 text-xs shrink-0">
                  <a
                    className="block hover:text-slate-200"
                    href="#"
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label="GitHub (opens in a new tab)"
                  >
                    <span>GitHub</span>
                  </a>
                </li>
                <li className="mr-5 text-xs shrink-0">
                  <a
                    className="block hover:text-slate-200"
                    href="#"
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label="LinkedIn (opens in a new tab)"
                  >
                    <span>LinkedIn</span>
                  </a>
                </li>
              </ul>
            </header>

            <main id="content" className="pt-24 lg:w-1/2 lg:py-24">
              {children}

              <footer className="max-w-md pb-16 text-sm text-slate-500 sm:pb-0 mt-16">
                <p>
                  Built with Next.js and Tailwind CSS, deployed with Vercel.
                  Inspired by{" "}
                  <a
                    href="https://brittanychiang.com/"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    Brittany Chiang's portfolio
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
