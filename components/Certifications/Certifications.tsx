import certificationsStyle from "../../styles/components/Certifications/Certifications.module.css";

// Component
import IndividualCertifications from "./IndividualCertifications";

const Certifications = ({ certification }: any) => {
  return (
    <section
      id="certifications"
      className={certificationsStyle.certificationsSection}
    >
      <h2
        className={certificationsStyle.heading}
      >{`Licenses & Certifications`}</h2>
      <div className={certificationsStyle.certificationsSectionContainer}>
        {certification.map((certificate: any) => (
          <IndividualCertifications
            certificate={certificate}
            key={certificate.credentialID}
          />
        ))}
      </div>
    </section>
  );
};

export default Certifications;
