// React and React Hooks
import React, { useEffect, useState } from "react";

// Components
import Navbar from "../components/Navbar/Navbar";
import About from "../components/About/About";
import HeadContent from "../components/HeadContent/HeadContent";

const Home = () => {
  const [main, setMain] = useState({});
  const [resume, setResume] = useState({});
  const [skills, setSkills] = useState({});
  const [portfolio, setPortfolio] = useState({});

  useEffect(() => {
    fetch("/api/data")
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          setMain(data.main);
          setPortfolio(data.portfolio);
          setResume(data.resume);
          setSkills(data.skills);
        }
      });
  }, []);
  const { description }: any = main;
  return (
    <React.Fragment>
      <HeadContent description={description} />
      <div>
        <Navbar />
        <About main={main} />
      </div>
    </React.Fragment>
  );
};

export default Home;
