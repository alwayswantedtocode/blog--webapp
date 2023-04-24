import {
  AiFillFacebook,
  AiFillTwitterSquare,
  AiFillLinkedin,
  AiFillInstagram,
} from "react-icons/ai";
// import { BiUser } from "react-icons/bi";
// import { AiOutlineEdit } from "react-icons/ai";
// import { BiMessageAdd } from "react-icons/bi";
// import { RxDashboard } from "react-icons/rx";
// import { IoSettingsOutline } from "react-icons/io";
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

// const profilebar = [
//   { id: 1, Icon: <BiUser />, Iconname: <BiMessageAdd /> },
//   { id: 2, Icon: <BiUser />, Iconname: <BiMessageAdd /> },
//   { id: 3, Icon: <BiUser />, Iconname: <BiMessageAdd /> },
//   { id: 4, Icon: <BiUser />, Iconname: <BiMessageAdd /> },
// ];
export default Nav;
