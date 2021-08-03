// CSS
import projectStyle from "../../styles/components/Projects/Projects.module.css";

// React Hooks
import { useState } from "react";

// Components
import IndividualProject from "./IndividualProject";

const Projects = ({ projects }: any) => {
  const [projectOnFront] = useState(
    projects.filter((project: any) => project.onFront)
  );
  return (
    <section id="projects">
      <div className={projectStyle.projectSection}>
        <h2 className={projectStyle.projectTitle}>Projects</h2>
        <div className={projectStyle.projectsBlock}>
          {projectOnFront.map((project: any) => (
            <IndividualProject project={project} key={project.id} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
