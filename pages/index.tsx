// Components
import Navbar from "../components/Navbar/Navbar";
import About from "../components/About/About";
import HeadContent from "../components/HeadContent/HeadContent";
import Footer from "../components/Footer/Footer";
import Biography from "../components/Biography/Biography";

const Home = ({ data }: any) => {
  return (
    <>
      <HeadContent description="I eat, sleep and breathe Code." />
      <div>
        <Navbar />
        <About main={data.main} />
        <Biography main={data.main} />
        <Footer />
      </div>
    </>
  );
};

export default Home;

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
      data,
    },
  };
};
