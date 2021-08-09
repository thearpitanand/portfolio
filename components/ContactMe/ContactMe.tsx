// css
import contactMeStyle from "../../styles/components/ContactPage/ContactMe.module.css";

// Components
import ContactMeLeft from "./ContactMeLeft";
import ContactMeRight from "./ContactMeRight";

const ContactMe = ({ main }: any) => {
  return (
    <section id="contactus" className={contactMeStyle.contactUsSection}>
      {/* <h2 className={contactMeStyle.heading}>Contact Us</h2> */}
      <div className={contactMeStyle.containerContactPage}>
        <div className={contactMeStyle.leftDivContactPage}>
          <ContactMeLeft />
        </div>
        <div className={contactMeStyle.rightDivContactPage}>
          <ContactMeRight main={main}/>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
