import { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";
import Typewriter from "typewriter-effect";

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
    <div>
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
  );
};

export default Home;
