import Image from "next/image"
import { CustomText } from "../../atoms/custom-text"
import { SiteLogo } from "../../atoms/site-logo"

export const CompanyDetails = () => {
    return(
        <div className="shadow-2 bg-white rounded-lg p-7 mt-10">
        <CustomText
          size={"lg"}
          className="text-black mb-8 border-b-2 border-secondary pb-1"
        >
          Company Details
        </CustomText>
        <SiteLogo
          srcpath="/images/svg/logo.svg"
          width={180}
          height={32}
        />
        <div className="flex items-start mt-8 text-Gray-50 mb-7 gap-5">
          <Image
            src="/images/svg/address.svg"
            alt="alt-text"
            width={50}
            height={50}
          />
          <div>
            <CustomText className="text-black" size={'xs'}>Address:</CustomText>
            <CustomText size={'base'}>D-234(C&P), 4th Floor, phase-8B, Sector-74, Sahibzada Ajit Singh
            Nagar, Punjab 140308</CustomText>
          </div>
        </div>

        <div className="flex items-start text-Gray-50 mb-7 gap-5">
          <Image
            src="/images/web.png"
            alt="alt-text"
            width={50}
            height={50}
          />
          <div>
            <CustomText className="text-black" size={'xs'}>Website Link:</CustomText>
            <span className="text-secondary">
              <a href="https://www.cuilsoft.com/">
                https://www.cuilsoft.com/
              </a>
            </span>
          </div>
        </div>
      </div>
    )
}