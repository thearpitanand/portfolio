import React from "react";

// Define the type for an experience item
interface Experience {
  date: string;
  title: string;
  company: string;
  description: string;
  tags: string[];
  link?: string; // Optional link
}

// Updated Experience Data from LinkedIn Profile
const experiences: Experience[] = [
  {
    date: "Dec 2023 — Present",
    title: "Senior Software Engineer",
    company: "Zethic Technologies",
    description:
      "Led multiple projects across fintech, real estate, and hospitality (e.g., Paywize, SABA). Managed development, ensured project success, and innovated solutions enhancing user experience and operational efficiency. Focused on driving growth, leveraging technology, and fostering collaboration to create impactful, boundary-pushing software solutions.",
    tags: [
      "AWS",
      "GCP",
      "React.js",
      "Next.js",
      "Nest.js",
      "Node.js",
      "Python",
      "TypeScript",
      "System Design",
      "Project Leadership",
    ],
    link: "https://www.zethic.com/",
  },
  {
    date: "Dec 2021 — Dec 2023",
    title: "Full Stack Developer",
    company: "Zethic Technologies",
    description:
      'Developed sophisticated digital solutions, leading and contributing to key projects like "SABA - Hospitality" and "RYR - Rank Your Ride." Utilized a broad skill set to drive innovations and optimize data, significantly advancing project capabilities and crafting impactful digital experiences.',
    tags: [
      "React.js",
      "Next.js",
      "Node.js",
      "Nest.js",
      "TypeScript",
      "Python",
      "Java",
      "PostgreSQL",
      "MongoDB",
      "AWS",
      "GCP",
      "Docker",
    ],
    link: "https://www.zethic.com/",
  },
  {
    date: "Jun 2020 — Dec 2021",
    title: "Freelance Software Developer",
    company: "",
    description:
      "Up-skilled and worked on projects. Developed a deep understanding of the latest technologies and best practices in the industry.",
    tags: [
      "React.js",
      "Next.js",
      "Node.js",
      "Nest.js",
      "TypeScript",
      "Python",
      "AWS",
      "GCP",
      "Docker",
    ],
  },
];

const ExperienceSection: React.FC = () => {
  return (
    <section
      id="experience"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      aria-label="Work experience"
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
          Experience
        </h2>
      </div>
      <div>
        {experiences.length > 0 ? (
          <ol className="group/list">
            {experiences.map((exp, index) => (
              <li key={index} className="mb-12">
                <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                  <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                  <header
                    className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2"
                    aria-label={`${exp.date}`}
                  >
                    {exp.date}
                  </header>
                  <div className="z-10 sm:col-span-6">
                    <h3 className="font-medium leading-snug text-slate-200">
                      <div>
                        <a
                          className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 group/link text-base"
                          href={exp.link || "#"}
                          target="_blank"
                          rel="noreferrer noopener"
                          aria-label={`${exp.title} at ${exp.company} (opens in a new tab)`}
                        >
                          <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                          <span>{`${exp.title} ${
                            exp.company ? `· ${exp.company}` : ``
                          }`}</span>
                        </a>
                      </div>
                    </h3>
                    <p className="mt-2 text-sm leading-normal">
                      {exp.description}
                    </p>
                    <ul
                      className="mt-2 flex flex-wrap"
                      aria-label="Technologies used"
                    >
                      {exp.tags.map((tag, tagIndex) => (
                        <li key={tagIndex} className="mr-1.5 mt-2">
                          <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                            {tag}
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </li>
            ))}
          </ol>
        ) : (
          <p>Experience details coming soon...</p>
        )}
      </div>
    </section>
  );
};

export default ExperienceSection;
