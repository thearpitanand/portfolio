// Next Components
import Image from "next/image";
import Link from "next/link";

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
          <div className={aboutStyle.buttons}>
            <a className={aboutStyle.resumeButton} href="/assets/pdf/resume.pdf" download>Resume</a>
            <Link href="\#contactus"><a className={aboutStyle.hireButton}>Hire Me</a></Link>
          </div>
        </div>
        <div className={aboutStyle.main__right}>
          <Image src={mine} alt="coder" />
        </div>
      </div>
    </section>
  );
};

export default About;
