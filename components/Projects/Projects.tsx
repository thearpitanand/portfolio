// CSS
import projectStyle from "../../styles/components/Projects/Projects.module.css";

// React Hooks
import { useState } from "react";

// Components
import RedirectionCard from "./RedirectionCard";
import { Portfolio } from "../../interface/Portfolio.interface";
import { RedirectionCardProjectInterface } from "../../interface/RedirectionCardProject.interface";

interface Props {
  portfolio: Portfolio;
}

const Projects = ({ portfolio }: Props): JSX.Element => {
  // State Filtering to show value
  const [webDesignOnFront] = useState(
    portfolio.webDesign.filter(
      (project: RedirectionCardProjectInterface) => project.onFront
    )
  );
  const [brandGuidelineOnFront] = useState(
    portfolio.brandGuideline.filter(
      (project: RedirectionCardProjectInterface) => project.onFront
    )
  );
  const [presentationOnFront] = useState(
    portfolio.presentation.filter(
      (project: RedirectionCardProjectInterface) => project.onFront
    )
  );

  console.log({ portfolio });

  const renderWebsiteUIUXDesign = (): JSX.Element => {
    return (
      <div className={projectStyle.projectSection}>
        <h2 className={projectStyle.projectTitle}>Web UI/UX Designs</h2>
        <div className={projectStyle.projectsBlock}>
          {webDesignOnFront.map((project: RedirectionCardProjectInterface) => (
            <RedirectionCard project={project} key={project.id} />
          ))}
        </div>
      </div>
    );
  };

  const renderBrandGuideline = (): JSX.Element => {
    return (
      <div className={projectStyle.projectSection}>
        <h2 className={projectStyle.projectTitle}>Brand Guideline</h2>
        <div className={projectStyle.projectsBlock}>
          {brandGuidelineOnFront.map(
            (project: RedirectionCardProjectInterface) => (
              <RedirectionCard project={project} key={project.id} />
            )
          )}
        </div>
      </div>
    );
  };

  const renderPresentation = (): JSX.Element => {
    return (
      <div className={projectStyle.projectSection}>
        <h2 className={projectStyle.projectTitle}>Presentations</h2>
        <div className={projectStyle.projectsBlock}>
          {presentationOnFront.map(
            (project: RedirectionCardProjectInterface) => (
              <RedirectionCard project={project} key={project.id} />
            )
          )}
        </div>
      </div>
    );
  };

  return (
    <section id="projects">
      {renderWebsiteUIUXDesign()}
      {renderBrandGuideline()}
      {renderPresentation()}
    </section>
  );
};

export default Projects;
