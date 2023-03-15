// Next Js Components
import Image from "next/image";
import Link from "next/link";
import { RedirectionCardProjectInterface } from "../../interface/RedirectionCardProject.interface";

// CSS
import projectBoxStyle from "../../styles/components/Projects/RedirectionCard.module.css";

interface Props {
  project: RedirectionCardProjectInterface;
}

const RedirectionCard = ({ project }: Props): JSX.Element => {
  return (
    <Link href={project.url} passHref>
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
      </div>
    </Link>
  );
};

export default RedirectionCard;
