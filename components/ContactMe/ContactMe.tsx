// css
import contactMeStyle from "../../styles/components/ContactPage/ContactMe.module.css";

// Components
import ContactMeRight from "./ContactMeRight";

const ContactMe = ({ main, api }: any) => {
  return (
    <section id="contactus" className={contactMeStyle.contactUsSection}>
      <div className={contactMeStyle.containerContactPage}>
        <div className={contactMeStyle.rightDivContactPage}>
          <ContactMeRight main={main} />
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
