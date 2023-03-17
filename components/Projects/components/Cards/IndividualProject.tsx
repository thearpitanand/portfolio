// Next Js Components
import Image from "next/image";
import Link from "next/link";

// CSS
import projectBoxStyle from "../../styles/components/Projects/IndividualProject.module.css";

const IndividualProject = ({ project }: any) => {
  return (
    <Link href={`/project?id=${project.id}`} passHref>
      <div className={projectBoxStyle.projectBox}>
        <div className={projectBoxStyle.imageScreenshot}>
          <Image
            src={project.image}
            alt="Project Screenshot"
            width="640px"
            height={!!project.imageHeight ? project.imageHeight : "300px"}
          />
        </div>
        <h3 className={projectBoxStyle.projectBoxTitle}>{project.title}</h3>
        <Link href={project.url}>
          <a className={projectBoxStyle.projectBoxUrl}>{project.url}</a>
        </Link>
        <div className={projectBoxStyle.projectBoxTechStack}>
          <h4 className={projectBoxStyle.projectBoxTechStackTitle}>
            Tech Stack:
          </h4>
          {project.techStack.map((techName: any) => (
            <p
              key={techName.iconLink}
              className={projectBoxStyle.projectBoxTechStackName}
            >
              {`${techName.title}`}
              {!!techName?.end ? "." : ", "}
            </p>
          ))}
        </div>
      </div>
    </Link>
  );
};

export default IndividualProject;
