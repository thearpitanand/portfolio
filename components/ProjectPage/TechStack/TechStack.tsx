// Next Js Components
import Image from "next/image";

// CSS
import techStackStyle from "../../../styles/components/ProjectPage/TechStack.module.css";

const TechStack = ({ techStack }: any) => {
  return (
    <>
      <p className={techStackStyle.title}>Tech Stack: </p>
      <div className={techStackStyle.techStack}>
        {techStack.map((technology: any) => (
          <div key={technology.title} className={techStackStyle.icon}>
            <Image
              src={technology.iconLink}
              alt={technology.title}
              height={technology.height}
              width={technology.width}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default TechStack;
