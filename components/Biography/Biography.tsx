// Next Components
import Image from "next/image";

// CSS
import biographyStyle from "../../styles/components/Biography.module.css";

interface main {
  name: string;
  description: string;
  bio: string;
  contactmessage: string;
  email: string;
  profilepic: any;
  mobilenumber: string;
  address: Object;
  website: string;
}
type props = {
  main: any;
};

const Biography = ({ main }: props) => {
  const { profilepic, description,bio }: main = main;

  return (
    <section id="biography">
    <div className={biographyStyle.biography}>
      <div className={biographyStyle.bioLeftDiv}>
        <div className={biographyStyle.profilepic}>
          {profilepic && (
            <Image
              src={profilepic}
              alt={`Arpit's photo`}
              width="200px"
              height="200px"
            />
          )}
        </div>
      </div>
      <div className={biographyStyle.bioRightDiv}>
        <p className={biographyStyle.description }>{description}</p>
        <p className={biographyStyle.bio}>{bio}</p>
      </div>
    </div>
    </section>
  );
};

export default Biography;
