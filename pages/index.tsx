// React and React Hooks
import React, { useEffect, useState } from "react";

// Components
import Navbar from "../components/Navbar/Navbar";
import About from "../components/About/About";
import HeadContent from "../components/HeadContent/HeadContent";
import Footer from "../components/Footer/Footer";

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
  return (
    <React.Fragment>
      <HeadContent description="I eat, sleep and breathe Code." />
      <div>
        <Navbar />
        <About main={main} />
        <Footer />
      </div>
    </React.Fragment>
  );
};

export default Home;
