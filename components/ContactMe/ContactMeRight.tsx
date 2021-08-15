// CSS
import contactMeRightStyle from "../../styles/components/ContactPage/ContactMeRight.module.css";

// Icons
import { IoCall, IoLocationOutline, IoMail } from "react-icons/io5";

const ContactMeRight = ({ main }: any) => {
  return (
    <>
      <h3 className={contactMeRightStyle.heading}>Contact Info</h3>
      {/* Location */}
      <div className={contactMeRightStyle.location}>
        <IoLocationOutline className={contactMeRightStyle.locationLogo} />
        <div className={contactMeRightStyle.textAddress}>
          <p>{`${main.address.street}, ${main.address.city}`}</p>
          <p>{`${main.address.state}, ${main.address.country}`}</p>
          <p>{`${main.address.zip}`}</p>
        </div>
      </div>
      {/* E - mail */}
      <div className={contactMeRightStyle.email}>
        <IoMail className={contactMeRightStyle.emailLogo} />
        <p className={contactMeRightStyle.textEmail}>{`${main.email}`}</p>
      </div>
      {/* Phone Number */}
      {/* <div className={contactMeRightStyle.mobilenumber}>
        <IoCall className={contactMeRightStyle.mobilenumberLogo} />
        <p
          className={contactMeRightStyle.textMobilenumber}
        >{`${main.mobilenumber}`}</p>
      </div> */}
    </>
  );
};

export default ContactMeRight;
