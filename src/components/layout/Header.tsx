import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa6";
import { NavLinks } from "@thearpitanand/components/NavLinks";
import { siteConfig } from "@thearpitanand/config/site";

export function Header() {
  return (
    <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
      <div>
        <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
          {siteConfig.title}
        </h1>
        <h2 className="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">
          {siteConfig.jobTitle}
        </h2>
        <p className="mt-4 max-w-xs leading-normal">
          {siteConfig.jobDescription}
        </p>
        <NavLinks />
      </div>
      <ul className="mt-8 ml-1 flex items-center" aria-label="Social media">
        <li className="mr-4 text-xs">
          <a
            className="block text-slate-400 transition-colors hover:text-slate-200"
            href={siteConfig.links.github}
            target="_blank"
            rel="noreferrer noopener"
            aria-label="GitHub (opens in a new tab)"
          >
            <FaGithub size={20} />
          </a>
        </li>
        <li className="mr-4 text-xs">
          <a
            className="block text-slate-400 transition-colors hover:text-slate-200"
            href={siteConfig.links.linkedin}
            target="_blank"
            rel="noreferrer noopener"
            aria-label="LinkedIn (opens in a new tab)"
          >
            <FaLinkedinIn size={20} />
          </a>
        </li>
        <li className="mr-4 text-xs">
          <a
            className="block text-slate-400 transition-colors hover:text-slate-200"
            href={siteConfig.links.instagram}
            target="_blank"
            rel="noreferrer noopener"
            aria-label="Instagram (opens in a new tab)"
          >
            <FaInstagram size={20} />
          </a>
        </li>
      </ul>
    </header>
  );
}
