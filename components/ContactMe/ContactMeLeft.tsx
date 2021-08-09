// EmailJs Package
import emailjs from "emailjs-com";

// css
import contactMeLeftStyle from "../../styles/components/ContactPage/ContactMeLeft.module.css";

const ContactMeLeft = ({ api }: any) => {
  const sendEmail = (event: any) => {
    event.preventDefault();

    // Api Keys
    const { EmailJS_SERVICE_NAME, EmailJS_TEMPLATE_NAME, EmailJS_USER_NAME } =
      api;

    emailjs
      .sendForm(
        `${EmailJS_SERVICE_NAME}`,
        `${EmailJS_TEMPLATE_NAME}`,
        event.target,
        `${EmailJS_USER_NAME}`
      )
      .then(
        (result) => {
          console.log(result);
        },
        (error) => {
          console.log(error.text);
        }
      );
    event.target.reset();
  };

  return (
    <>
      <h4 className={contactMeLeftStyle.contact_form_heading}>
        Send a Message
      </h4>
      <form className={contactMeLeftStyle.contact_form} onSubmit={sendEmail}>
        <div className={contactMeLeftStyle.contact_form_name_div}>
          <input
            className={contactMeLeftStyle.contact_form_first_name}
            type="text"
            placeholder="First Name"
            name="user_first_name"
          />
          <input
            className={contactMeLeftStyle.contact_form_last_name}
            type="text"
            placeholder="Last Name"
            name="user_last_name"
          />
        </div>
        <input
          className={contactMeLeftStyle.contact_form_email}
          type="email"
          placeholder="Email"
          name="user_email"
        />
        <input
          className={contactMeLeftStyle.contact_form_number}
          type="number"
          placeholder="Mobile Number"
          name="user_mobile_number"
        />
        <textarea
          className={contactMeLeftStyle.contact_form_message}
          placeholder="Write Your message.. "
          name="message"
          rows={10}
          // cols={15}
        />
        <input
          type="submit"
          value="Send"
          className={contactMeLeftStyle.contact_form_button}
        />
      </form>
    </>
  );
};

export default ContactMeLeft;
