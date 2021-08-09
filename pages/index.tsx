// Components
import Navbar from "../components/Navbar/Navbar";
import About from "../components/About/About";
import HeadContent from "../components/HeadContent/HeadContent";
import Footer from "../components/Footer/Footer";
import Biography from "../components/Biography/Biography";
import Projects from "../components/Projects/Projects";
import ContactMe from "../components/ContactMe/ContactMe";
import Certifications from "../components/Certifications/Certifications";

const Home = ({ data, api }: any) => {
  return (
    <>
      <HeadContent description="I eat, sleep and breathe Code." />
      <div>
        <Navbar />
        <About main={data.main} />
        <Biography main={data.main} />
        <Projects projects={data.portfolio.projects} />
        <Certifications certification={data.certification} />
        <ContactMe main={data.main} api={api} />
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
      api: {
        EmailJS_SERVICE_NAME: process.env.EmailJS_SERVICE_NAME,
        EmailJS_TEMPLATE_NAME: process.env.EmailJS_TEMPLATE_NAME,
        EmailJS_USER_NAME: process.env.EmailJS_USER_NAME,
      },
    },
  };
};
