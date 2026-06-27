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
import { experiences } from "@thearpitanand/data/experience";

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
