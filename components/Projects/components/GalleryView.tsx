// CSS
import projectStyle from "../../../styles/components/Projects/Projects.module.css";

// React Hooks
import { useState } from "react";
import RedirectionCard from "./Cards/RedirectionCard";
import { RedirectionCardProjectInterface } from "../../../interface/RedirectionCardProject.interface";

// Components
interface Props {
  title: string;
  projects: RedirectionCardProjectInterface[];
}

const GalleryView = ({ projects, title }: Props): JSX.Element => {
  return (
    <div className={projectStyle.projectSection}>
      <h2 className={projectStyle.projectTitle}>{title}</h2>
      <div className={projectStyle.projectsBlock}>
        {projects.map((project: RedirectionCardProjectInterface) => (
          <RedirectionCard project={project} key={project.id} />
        ))}
      </div>
    </div>
  );
};

export default GalleryView;
