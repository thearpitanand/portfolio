import React, { useEffect, useState } from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Typewriter from "typewriter-effect";
import Navbar from "../components/Navbar/Navbar";
const Home = () => {
  const [resumeData, setResumeData] = useState({});

  useEffect(() => {
    fetch("/api/data")
      .then((res) => res.json())
      .then((data) => {
        setResumeData(data);
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
        <Typewriter
          options={{
            strings: [
              "Arpit Anand",
              "Full Stack Developer",
              "Front End Developer",
              "Back End Developer",
            ],
            delay: 50,
            autoStart: true,
            loop: true,
          }}
        />
      </div>
    </React.Fragment>
  );
};

export default Home;
