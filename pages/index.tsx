// React and React Hooks
import React, { useEffect, useState } from "react";

// Components
import Navbar from "../components/Navbar/Navbar";
import About from "../components/About/About";
import HeadContent from "../components/HeadContent/HeadContent";
import Footer from "../components/Footer/Footer";
import Biography from "../components/Biography/Biography";

const Home = ({ data }: any) => {
  return (
    <React.Fragment>
      <HeadContent description="I eat, sleep and breathe Code." />
      <div>
        <Navbar />
        <About main={data.main} />
        <Biography main={data.main} />
        <Footer />
      </div>
    </React.Fragment>
  );
};

export default Home;

// Fetching data
export const getServerSideProps = async () => {
  const res = await fetch(`http://localhost:3000/api/data`);
  const data = await res.json();
  return {
    props: {
      data,
    },
  };
};
