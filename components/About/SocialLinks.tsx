// CSS
import style from "../../styles/components/SocialLinks.module.css";

// Icons
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillTwitterCircle,
} from "react-icons/ai";
import { FaFacebookSquare } from "react-icons/fa";
import { RiUnsplashFill } from "react-icons/ri";

const SocialLinks = () => {
  return (
    <ul className={style.socialLink}>
      <li className={style.instagram}>
        <a href="https://www.instagram.com/anand_arpit/">
          <AiFillInstagram size="20px" />
        </a>
      </li>
      <li className={style.facebook}>
        <a href="https://www.facebook.com/thearpitanand">
          <FaFacebookSquare size="20px" />
        </a>
      </li>
      <li className={style.github}>
        <a href="https://github.com/thearpitanand">
          <AiFillGithub size="20px" />
        </a>
      </li>
      <li className={style.unsplash}>
        <a href="https://unsplash.com/@thearpitanand">
          <RiUnsplashFill size="20px" />
        </a>
      </li>
      <li className={style.twitter}>
        <a href="https://twitter.com/the_arpitanand">
          <AiFillTwitterCircle size="20px" />
        </a>
      </li>
      <li className={style.linkedin}>
        <a href="https://www.linkedin.com/in/thearpitanand/">
          <AiFillLinkedin size="20px" />
        </a>
      </li>
    </ul>
  );
};

export default SocialLinks;
