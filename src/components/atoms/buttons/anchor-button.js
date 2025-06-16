import Link from "next/link";
import { MdDoubleArrow } from "react-icons/md";

export const AnchorButton = ({ title, className, linkTo }) => {
  return (
    <div className="btnWrapper flex mt-4">
      <Link href={linkTo}>
        <a className="readMoreBtn">
          <span
            className={`flex items-center gap-1 hover:text-secondary transition-all duration-300 py-[6px] px-4 ${className}`}
          >
            {title} <MdDoubleArrow size={20} />
          </span>
        </a>
      </Link>
    </div>
  );
};
