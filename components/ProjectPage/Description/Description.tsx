// Next Js Components
import Image from "next/image";
import Link from "next/link";

// Next Js Components
// CSS
import descriptionStyle from "../../../styles/components/ProjectPage/Description.module.css";

// Components
import TechStack from "../TechStack/TechStack";

const Description = ({ project }: any) => {
  return (
    <div className={descriptionStyle.mainDescriptionDiv}>
      <div className={descriptionStyle.leftDescriptionDiv}>
        <Link href={project.image}>
          <a>
            <Image
              src={project.image}
              className={descriptionStyle.imageScreenshot}
              alt="Project Screenshot"
              width="640px"
              height={!!project.imageHeight ? project.imageHeight : "300px"}
            />
          </a>
        </Link>
      </div>
      <div className={descriptionStyle.rightDescriptionDiv}>
        <p className={descriptionStyle.description}>{project.description}</p>
        <Link href={project.url}>
          <a className={descriptionStyle.url}>{project.url}</a>
        </Link>
        <div className={descriptionStyle.gitHubButtons}>
          {project.frontEnd && (
            <Link href={project.githubCodeUrlFrontEnd} passHref>
              <button className={descriptionStyle.gitHubFrontend}>
                Client Code
              </button>
            </Link>
          )}
          {project.backEnd && (
            <Link href={project.githubCodeUrlBackEnd} passHref>
              <button className={descriptionStyle.gitHubBackend}>
                Server Code
              </button>
            </Link>
          )}
        </div>
        <TechStack techStack={project.techStack} />
      </div>
    </div>
  );
};

export default Description;
