// CSS
import projectStyle from "../../styles/components/Projects/Projects.module.css";

// React Hooks
import { useState } from "react";

// Components
import RedirectionCard from "./components/Cards/RedirectionCard";
import { Portfolio } from "../../interface/Portfolio.interface";
import { RedirectionCardProjectInterface } from "../../interface/RedirectionCardProject.interface";
import Project from "./components/Project";
import ImageGalleryView from "../ImageGalleryView/ImageGalleryView";

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
  const [logoOnFront] = useState(
    portfolio.logos.filter(
      (project: RedirectionCardProjectInterface) => project.onFront
    )
  );

  return (
    <section id="projects">
      <Project title={`Web UI/UX Designs`} projects={webDesignOnFront} />
      <Project title={`Brand Guideline`} projects={brandGuidelineOnFront} />
      <Project title={`Logo`} projects={logoOnFront} />
      <Project title={`Presentations`} projects={presentationOnFront} />
      {/* <ImageGalleryView isOpen /> */}
    </section>
  );
};

export default Projects;
