"use client";

import { useState, useEffect } from "react";

const NAV_LINKS = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Blogs", href: "#blogs" },
];

export function NavLinks() {
  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    const handleScroll = () => {
      let closestSectionId = "";
      let minDistance = Infinity;
      const targetLine = 100; // Consider section active when its top passes this line from viewport top

      NAV_LINKS.forEach((link) => {
        const sectionId = link.href.substring(1);
        const section = document.getElementById(sectionId);
        if (section) {
          const rect = section.getBoundingClientRect();
          const distance = targetLine - rect.top; // How far ABOVE the target line the section top is.

          if (
            distance >= 0 &&
            distance < minDistance &&
            rect.bottom > targetLine
          ) {
            minDistance = distance;
            closestSectionId = sectionId;
          }
        }
      });

      if (window.scrollY < 200) {
        closestSectionId = "about";
      }

      if (closestSectionId && closestSectionId !== activeSection) {
        setActiveSection(closestSectionId);
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [activeSection]);

  return (
    <nav className="mt-16 hidden lg:block" aria-label="In-page jump links">
      <ul className="w-max">
        {NAV_LINKS.map((link) => {
          const isActive = activeSection === link.href.substring(1);
          return (
            <li key={link.href}>
              <a
                className={`group flex items-center py-3 ${isActive ? "active" : ""}`}
                href={link.href}
              >
                <span
                  className={`nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none`}
                ></span>
                <span
                  className={`nav-text text-xs font-bold tracking-widest text-slate-500 uppercase transition-colors duration-300 group-hover:text-slate-200 group-focus-visible:text-slate-200 motion-reduce:transition-none`}
                >
                  {link.name}
                </span>
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
