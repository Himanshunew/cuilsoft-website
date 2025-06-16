import { FooterLinks } from "../../../constants/footerLinksData";
import { CustomText } from "../../atoms/custom-text";
import FooterLink from "../footer-links";

export const SiteMap = () => {
  return (
    <div className="md:w-2/5 mb-8 md:mb-0">
      <CustomText className="uppercase font-bold text-light " size="base">
        Site Map
      </CustomText>
      <div className="bg-secondary h-[2px] w-10 mb-5 mt-3"></div>
      <div className="flex flex-col">
        {FooterLinks.map((item, i) => (
          <FooterLink key={i} linkto={item.link} title={item.name} />
        ))}
      </div>
    </div>
  );
};
