import Link from "next/link";
import individualCertificationsStyle from "../../styles/components/Certifications/IndividualCertifications.module.css";

const IndividualCertifications = ({ certificate }: any) => {
  return (
    <div className={individualCertificationsStyle.certificateCard}>
      <Link href={certificate.credentialURL} passHref>
        <a>
          <h4 className={individualCertificationsStyle.certificateCardHeading}>
            {certificate.name}
          </h4>
          <h6
            className={
              individualCertificationsStyle.certificateCardIssuingOrganization
            }
          >
            {certificate.issuingOrganization}
          </h6>
          <h6
            className={individualCertificationsStyle.certificateCardIssueDate}
          >
            {`Issued ${certificate.issueDate}`}
          </h6>
          <p className={individualCertificationsStyle.certificateCardLink}>
            {`Credential ID: ${certificate.credentialID}`}
          </p>
        </a>
      </Link>
    </div>
  );
};

export default IndividualCertifications;
