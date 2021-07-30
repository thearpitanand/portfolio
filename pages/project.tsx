// React Hooks
import { useState } from "react";

// Next Component
import Head from "next/head";
import { useRouter } from "next/router";

// Components
import Navbar from "../components/Navbar/Navbar";

const Project = ({ projects }: any) => {
  const { query }: any = useRouter();
  // console.log(projects[query.id]);
  const [project, setProject] = useState(projects[query.id]);

  return (
    <>
      <Head>
        <title>{`thearpitanand | ${project.shorttitle}`}</title>
      </Head>
      <div>
        <Navbar />
        <p>{project.title}</p>
      </div>
    </>
  );
};

export default Project;

// Fetching data
export const getServerSideProps = async () => {
  const res = await fetch(`http://localhost:3000/api/data`);
  const data = await res.json();
  return {
    props: {
      projects: data.portfolio.projects,
    },
  };
};
