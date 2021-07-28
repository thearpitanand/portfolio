// Next Components
import Image from "next/image";

// css and svg
import aboutStyle from "../../styles/components/About.module.css";
import mine from "../../public/mine.svg";

// Package
import Typewriter from "typewriter-effect";

// Helper
import { typeWriterOption } from "./helper";

// Components
import SocialLinks from "./SocialLinks";

interface main {
  name: string;
  description: string;
  bio: string;
  contactmessage: string;
  email: string;
  phone: string;
  address: Object;
  website: string;
}
type props = {
  main: any;
};

const About = (props: props) => {
  const { name }: main = props.main;

  return (
    <section id="home">
      <div className={aboutStyle.main}>
        <div className={aboutStyle.main__left}>
          <h1>{name}</h1>
          <h4 className={aboutStyle.occupation}>
            <p>{`I\'m`}</p>
            <Typewriter options={typeWriterOption} />
          </h4>
          <SocialLinks />
        </div>
        <div className={aboutStyle.main__right}>
          <Image src={mine} alt="coder" />
        </div>
      </div>
    </section>
  );
};

export default About;
