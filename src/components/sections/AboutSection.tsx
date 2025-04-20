import React from "react";
import {
  sectionVariants,
  sectionHeaderVariants,
  sectionHeaderTitleVariants,
} from "../ui/variants/section";

const AboutSection: React.FC = () => {
  return (
    <section id="about" className={sectionVariants()} aria-label="About me">
      <div className={sectionHeaderVariants()}>
        <h2 className={sectionHeaderTitleVariants()}>About</h2>
      </div>
      <div>
        <p className="mb-4">
          {`Back in 2012, I decided to try my hand at creating custom Tumblr
          themes and tumbled head first into the rabbit hole of coding and web
          development. Fast-forward to today, and I've had the privilege of
          building software for an advertising agency, a start-up, a huge
          corporation, and a digital product studio.`}
        </p>
        <p className="mb-4">
          {`My main focus these days is building products and leading projects for
          our clients at Upstatement. In my free time I've also released an
          online video course that covers everything you need to know to build a
          web app with the Spotify API.`}
        </p>
        <p>
          {`When I'm not at the computer, I'm usually rock climbing, hanging out
          with my wife and two cats, or running around Hyrule searching for
          Korok seeds.`}
        </p>
      </div>
    </section>
  );
};

export default AboutSection;
