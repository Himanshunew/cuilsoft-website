import Link from "next/link";
import { MdOutlineArrowRightAlt } from "react-icons/md";
import { CustomText } from "../../atoms/custom-text";

const TitleBar = ({ title, text }) => {
  return (
    <section>
      <div className="page_title_banner">
        <CustomText size="centered">{title}</CustomText>
      </div>
      <div className="bg-[#f5f5f5] py-3 shadow-lg">
        <div className="container">
          <div className="flex items-center">
            <Link href="/">
              <a className="text-black font-semibold">Home</a>
            </Link>
            <MdOutlineArrowRightAlt className="mx-4" size={25} color={"#000"} />
            <CustomText className="normal-case">{text}</CustomText>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TitleBar;
