import Image from "next/image";
import { CustomText } from "../../atoms/custom-text";

const ServicesBox = ({ title, subtitle, des, image }) => {
  return (
    <div className="shadow-lg lg:p-10 mb-8 p-5 border rounded-xl">
      {/* <CustomText className="text-7xl text-[#fbe9d5]">{title}</CustomText> */}
      <Image src={image} alt="service" width={100} height={100} />
      <CustomText className="text-black mt-8" size={"lg"}>
        {subtitle}
      </CustomText>
      <CustomText className="mt-4" size={"base"}>
        {des}
      </CustomText>
    </div>
  );
};

export default ServicesBox;
