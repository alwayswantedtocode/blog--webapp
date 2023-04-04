import {
  AiFillFacebook,
  AiFillTwitterSquare,
  AiFillLinkedin,
  AiFillInstagram,
} from "react-icons/ai";
const Nav = [
  {
    id: 1,
    Path: "./",
    Menu: "Home",
    Icon: <AiFillFacebook />,
  },
  {
    id: 2,
    Path: "./about",
    Menu: "About",
    Icon: <AiFillInstagram />,
  },
  {
    id: 3,
    Path: "./contact",
    Menu: "Contact",
    Icon: <AiFillLinkedin />,
  },
  {
    id: 4,
    Path: "./write",
    Menu: "Write",
    Icon: <AiFillTwitterSquare />,
  },
];
export default Nav;
