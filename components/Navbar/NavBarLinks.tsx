import Link from "next/link";

const NavBarLinks = ({ open, setOpen }: any) => {
  const closeInPhone = () => {
    if (typeof open !== "undefined") {
      return setOpen(!open);
    }
    return;
  };
  return (
    <ul>
      <li>
        <Link href="/#home">
          <a onClick={closeInPhone}>Home</a>
        </Link>
      </li>
      <li>
        <Link href="/#projects">
          <a onClick={closeInPhone}>Projects</a>
        </Link>
      </li>
      <li>
        <Link href="/#certifications">
          <a onClick={closeInPhone}>Certifications</a>
        </Link>
      </li>
      <li>
        <Link href="/#contactus">
          <a onClick={closeInPhone}>Contact Me</a>
        </Link>
      </li>
    </ul>
  );
};

export default NavBarLinks;
