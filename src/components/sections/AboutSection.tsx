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
          {`I’m the engineer businesses call when “good enough” isn’t. My passion for computers sparked the moment my dad first showed me how to play Mario when I was barely 8 years old. Since then, I've been hooked, turning that early fascination into a career of solving challenging tech problems.`}
        </p>

        <p className="mb-4">
          {`Over the past 4.5+ years, I’ve shipped AI-powered products from scratch and scaled real-time platforms to handle billions of requests. Today, I lead full-stack teams, architect multi-cloud systems, and automate everything—from CI/CD pipelines to IoT device fleets. My go-to tools include TypeScript, Go, Python, Terraform, and Kubernetes, but what drives me is always the business impact.`}
        </p>

        <p>
          {`Off‑keyboard you’ll find me turning ideas into Medium deep‑dives, mentoring
          budding devs, or experimenting with 3‑D‑printing rigs. Got a gnarly tech
          challenge—or just want to swap scaling war stories? Let’s talk.`}
        </p>
      </div>
    </section>
  );
};

export default AboutSection;
