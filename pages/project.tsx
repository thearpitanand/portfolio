// React Hooks
import { useState } from "react";

// CSS
import projectStyle from "../styles/project.module.css";

// Next Component
import Head from "next/head";
import { useRouter } from "next/router";

// Components
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Description from "../components/ProjectPage/Description/Description";
import WebsiteScreenshot from "../components/ProjectPage/WebsiteScreenshot/WebsiteScreenshot";

const Project = ({ projects }: any) => {
  const { query }: any = useRouter();
  const [project, setProject] = useState(projects[query.id]);

  return (
    <>
      <Head>
        <title>{`thearpitanand | ${project.shorttitle}`}</title>
      </Head>
      <Navbar />
      <div>
        <p className={projectStyle.heading}>{project.title}</p>
        <Description project={project} />
        <WebsiteScreenshot screenshot={project.screenShot} />
      </div>
      <Footer />
    </>
  );
};

export default Project;

// Fetching data
export const getServerSideProps = async () => {
  // Turn localFetch true for local development mode.
  const localFetch = false;
  const res = localFetch
    ? await fetch(`http://localhost:3000/api/data`)
    : await fetch(`https://www.thearpitanand.com/api/data`);
  const data = await res.json();
  return {
    props: {
      projects: data.portfolio.projects,
    },
  };
};
