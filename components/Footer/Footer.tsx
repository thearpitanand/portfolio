// CSS
import footerStyle from "../../styles/components/Footer.module.css";
import SocialLinks from "../About/SocialLinks";

const Footer = () => {
  return (
    <footer className={footerStyle.footer}>
      <div className={footerStyle.socialLinksDiv}>
          <SocialLinks />
      </div>
      <p className={footerStyle.footerText}>
        Copyright © 2021 Arpit Anand • India based Full Stack Web Developer.
      </p>
    </footer>
  );
};

export default Footer;
