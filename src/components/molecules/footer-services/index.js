import Link from "next/link";

const FooterService = ({ title, icon, linkto }) => {
  return (
    <div className="mb-4 cursor-pointer">
      <Link href={linkto}>
        <p className="w-full text-Gray-50 transition-all duration-300 hover:pl-2 hover:text-secondary ">
          {icon}
          {title}
        </p>
      </Link>
    </div>
  );
};

export default FooterService;
