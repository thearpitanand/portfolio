// React and React Hooks
import React, { useEffect, useState } from "react";

// Next Components
import Head from "next/head";

// Components
import Navbar from "../components/Navbar/Navbar";
import About from "../components/About/About";

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
      <Head>
        <title>thearpitanand</title>
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.9.0/css/all.min.css"
          rel="stylesheet"
        ></link>
      </Head>
      <div>
        <Navbar />
        <About main={main} />
      </div>
    </React.Fragment>
  );
};

export default Home;
