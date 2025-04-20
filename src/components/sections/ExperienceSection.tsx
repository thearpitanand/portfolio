import React from "react";
import {
  sectionVariants,
  sectionHeaderVariants,
  sectionHeaderTitleVariants,
} from "../ui/variants/section";
import {
  experienceItemVariants,
  experienceItemHoverBackgroundVariants,
  experienceDateVariants,
  experienceTitleVariants,
  experienceTagsContainerVariants,
  experienceTagVariants,
} from "../ui/variants/experience";

// Define the type for an experience item
interface Experience {
  date: string;
  title: string;
  company: string;
  description: string;
  tags: string[];
  link?: string; // Optional link
}

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
      className={sectionVariants()}
      aria-label="Work experience"
    >
      <div className={sectionHeaderVariants()}>
        <h2 className={sectionHeaderTitleVariants()}>Experience</h2>
      </div>
      <div>
        {experiences.length > 0 ? (
          <ol className="group/list">
            {experiences.map((exp, index) => (
              <li key={index} className="mb-12">
                <div className={experienceItemVariants()}>
                  <div
                    className={experienceItemHoverBackgroundVariants()}
                  ></div>
                  <header
                    className={experienceDateVariants()}
                    aria-label={`${exp.date}`}
                  >
                    {exp.date}
                  </header>
                  <div className="z-10 sm:col-span-6">
                    <h3 className="leading-snug font-medium text-slate-200">
                      <div>
                        <a
                          className={experienceTitleVariants()}
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
                      className={experienceTagsContainerVariants()}
                      aria-label="Technologies used"
                    >
                      {exp.tags.map((tag, tagIndex) => (
                        <li key={tagIndex} className="mt-2 mr-1.5">
                          <div className={experienceTagVariants()}>{tag}</div>
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
