import Head from "next/head";
import { SiteLogo } from "../../atoms/site-logo";
import { TrainingMobileNavigation } from "../navigation";
import { TrainingNavigation } from "../training-navigation";

export const TrainingHeader = ({ title }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <div className="md:py-0  shadow-lg relative header bg-[#FFFCF9] ">
        <div className="container overflow-auto">
          <div className="flex justify-between py-3 lg:py-0 items-center">
            <SiteLogo srcpath="/images/svg/logo.svg" width={180} height={32} />
            <TrainingNavigation />
            <TrainingMobileNavigation />
          </div>
        </div>
      </div>
    </>
  );
};
