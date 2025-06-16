import Link from "next/link";
import { FaHandPointRight } from "react-icons/fa";

const FooterLink = ({ linkto, title }) => {
  return (
    <>
      <div className="mb-4">
        <Link href={linkto}>
          <a className="w-full flex items-center text-Gray-50 transition-all hover:pl-2 duration-500 hover:text-secondary ">
            {title}
          </a>
        </Link>
      </div>
    </>
  );
};

export default FooterLink;
