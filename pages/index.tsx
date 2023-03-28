// Components
import Navbar from "../components/Navbar/Navbar";
import About from "../components/About/About";
import HeadContent from "../components/HeadContent/HeadContent";
import Footer from "../components/Footer/Footer";
import Biography from "../components/Biography/Biography";
import Projects from "../components/Projects/Projects";
import ContactMe from "../components/ContactMe/ContactMe";
import Certifications from "../components/Certifications/Certifications";
import { GetServerSideProps } from "next";

const Home = ({ data }: any): JSX.Element => {
  return (
    <>
      <HeadContent description="Graphics Designer" />
      <div>
        <Navbar />
        <About main={data.main} />
        <Biography main={data.main} />
        <Projects portfolio={data.portfolio} />
        {/* <Certifications certification={data.certification} /> */}
        <ContactMe main={data.main} />
        <Footer />
      </div>
    </>
  );
};

export default Home;

// Fetching data
export const getServerSideProps: GetServerSideProps<{
  data: unknown;
}> = async (context) => {
  const hostname = context.req.headers.host || "";
  let res = null;
  if (hostname.includes("localhost"))
    res = await fetch(`http://localhost:3000/api/data`);
  else res = await fetch(`https://chandni-portfolio-v1.netlify.app/api/data`);

  const data = !!res ? await res.json() : {};
  return {
    props: {
      data,
    },
  };
};
