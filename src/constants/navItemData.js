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
    submenu: [
      {
        title: "Frontend Development",
        linkto: "/web-development/frontend",
      },
      {
        title: "Backend Development",
        linkto: "/web-development/backend",
      },
      {
        title: "Full Stack Development",
        linkto: "/web-development/full-stack",
      },
      {
        title: "Custom Web Applications",
        linkto: "/web-development/custom-apps",
      },
      {
        title: "API Integration Services",
        linkto: "/web-development/api-integration",
      },
      {
        title: "PHP Development",
        linkto: "/web-development/php",
      },
      {
        title: "React JS Development",
        linkto: "/web-development/react-js",
      },
      {
        title: "Python Development",
        linkto: "/web-development/python",
      },
      {
        title: "Magento Development",
        linkto: "/web-development/magento",
      },
      {
        title: "WordPress Development Services",
        linkto: "/web-development/wordpress",
      },
      {
        title: "E-commerce Website Development",
        linkto: "/web-development/ecommerce",
      },
      {
        title: "Progressive Web Apps",
        linkto: "/web-development/pwa",
      },
    ]
  },
  {
    icon: <RiShoppingBag3Fill size={30} className="text-secondary" />,
    title: "E-commerce Development",
    linkto: "/ecommerce-development",
  },
  {
    icon: <MdDeveloperMode size={30} className="text-secondary" />,
    title: "Mobile Apps Development",
    linkto: "/app-development",
    submenu: [
      {
        title: "Android App Development",
        linkto: "/app-development/android",
      },
      {
        title: "iOS App Development",
        linkto: "/app-development/ios",
      },
      {
        title: "Flutter App Development",
        linkto: "/app-development/flutter",
      },
      {
        title: "Cross-Platform App Development",
        linkto: "/app-development/cross-platform",
      },
      {
        title: "Augmented Reality / VR",
        linkto: "/app-development/ar-vr",
      },
    ],
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
    submenu: [
      {
        title: "Inventory Management",
        linkto: "/software-development/inventory-management",
      },
      {
        title: "Project Management",
        linkto: "/software-development/project-management",
      },
      {
        title: "Human Resource Management",
        linkto: "/software-development/human-resource-management",
      },
      {
        title: "Web Portal Development Services",
        linkto: "/software-development/web-portal-development",
      },
    ],
  },
  {
    icon: <FaDigitalOcean size={30} className="text-secondary" />,
    title: "Digital Marketing",
    linkto: "/digital-marketing",
    submenu: [
      {
        title: "Online Reputation Management",
        linkto: "/digital-marketing/online-reputation-management",
      },
      {
        title: "Social Media Marketing",
        linkto: "/digital-marketing/social-media-marketing",
      },
      {
        title: "Social Media Optimization",
        linkto: "/digital-marketing/social-media-optimization",
      },
      {
        title: "Search Engine Optimization",
        linkto: "/digital-marketing/seo",
      },
      {
        title: "App Store Optimization (ASO)",
        linkto: "/digital-marketing/aso",
      },
      {
        title: "Content Marketing",
        linkto: "/digital-marketing/content-marketing",
      },
      {
        title: "Search Engine Marketing",
        linkto: "/digital-marketing/sem",
      },
    ],
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
