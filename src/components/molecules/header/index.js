import { SiteLogo } from "../../atoms/site-logo";
import { MobileNavigation, Navigations } from "../navigation";

const Header = () => {
  return (
    <>
      <div className="md:py-0  shadow-lg relative header bg-[#FFFCF9] ">
        <div className="container">
          <div className="flex justify-between py-3 lg:py-0 items-center">
            <SiteLogo srcpath="/images/svg/logo.svg" width={180} height={32} />
            <Navigations />
            <MobileNavigation />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
