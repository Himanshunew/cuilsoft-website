import { FaDigitalOcean, FaNodeJs, FaChalkboardTeacher } from "react-icons/fa";
import { HiOutlineUsers } from "react-icons/hi";
import { MdDeveloperMode, MdHomeFilled } from "react-icons/md";
import { RiShoppingBag3Fill } from "react-icons/ri";
import { SiHtmlacademy } from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";
import { FiSettings } from "react-icons/fi";
import { VscBriefcase } from "react-icons/vsc";
import { GiTeacher } from "react-icons/gi";

export const NavItemData = [
  {
    dropdown: false,
    pathname: "/",
    title: "Home",
    icon: <MdHomeFilled className="text-xl" />,
  },
  {
    dropdown: false,
    pathname: "/who-we-are",
    title: "Who-we-are",
    icon: <HiOutlineUsers className="text-xl" />,
  },
  {
    dropdown: true,
    pathname: "/services",
    title: "Services",
    icon: <FiSettings className="text-xl" />,
  },
  {
    dropdown: false,
    pathname: "/our-work",
    title: "Our work",
    icon: <VscBriefcase className="text-xl" />,
  },
 
];
export const DropdownData = [
  {
    icon: <FaNodeJs size={30} className="text-secondary" />,
    title: "Web Development",
    linkto: "/web-development",
  },
  {
    icon: <RiShoppingBag3Fill size={30} className="text-secondary" />,
    title: "E-commerce Development",
    linkto: "/ecommerce-development",
  },
  {
    icon: <MdDeveloperMode size={30} className="text-secondary" />,
    title: "Mobile Apps development",
    linkto: "/app-development",
  },
  {
    icon: <SiHtmlacademy size={30} className="text-secondary" />,
    title: "Modules/Plugins Development",
    linkto: "/module-development",
  },
  {
    icon: <TbBrandReactNative size={30} className="text-secondary" />,
    title: "Software/SAAS Development",
    linkto: "/software-development",
  },
  {
    icon: <FaDigitalOcean size={30} className="text-secondary" />,
    title: "Digital Marketing",
    linkto: "/digital-marketing",
  },
];
export const TrainingNavItem = [
  {
    dropdown: false,
    pathname: "/",
    title: "Home",
    icon: <MdHomeFilled className="text-xl" />,
  },
  {
    dropdown: false,
    pathname: "/jobs",
    title: "Jobs",
    icon: <FaChalkboardTeacher className="text-xl" />,
  },
  {
    dropdown: false,
    pathname: "/industrial-training",
    title: "Trainings",
    icon: <GiTeacher className="text-xl" />,
  },
];
