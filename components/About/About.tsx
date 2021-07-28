import aboutStyle from "../../styles/components/About.module.css";
import Image from "next/image";
import mine from "../../public/mine.svg";
import Typewriter from "typewriter-effect";
import { typeWriterOption } from "./helper";
import SocialLinks from "./SocialLinks";

interface social {
  name: string;
  url: string;
  className: string;
}

interface main {
  name: string;
  occupation: Array<string>;
  description: string;
  image: string;
  bio: string;
  contactmessage: string;
  email: string;
  phone: string;
  address: Object;
  website: string;
  resumedownload: string;
  social: social;
}

type props = {
  main: main;
};

const About = (props: props) => {
  const {
    address,
    bio,
    contactmessage,
    description,
    email,
    image,
    name,
    occupation,
    phone,
    resumedownload,
    social,
    website,
  }: main = props.main;

  return (
    <section id="home">
      <div className={aboutStyle.main}>
        <div className={aboutStyle.main__left}>
          <h1>Arpit Anand</h1>
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
