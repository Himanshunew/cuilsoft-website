import { BsCheck2All } from "react-icons/bs";
import { CustomText } from "../../atoms/custom-text";
import { RecentJobs } from "../../molecules/recent-jobs";
import { IconText } from "../../atoms/icon-text";
import { OrangeBadge } from "../../atoms/orange-badge";
import { CompanyDetails } from "../../molecules/company-details";
import {
  JobHighLightsData,
  ReactNativeJobData,
  ReactNativeKeyResponsibilitiesData,
} from "../../../constants/trainingListData";
import { PopularTrainings } from "../../molecules/popular-trainings";
import { ContactPurpose, TrainingApplicationForm } from "../../molecules/training-application-form";


export const ReactNativeDeveloperJobData = () => {
  return (
    <section>
      <div className="container">
        <div className="flex flex-col md:flex-row pt-14 gap-6">
          <div className="w-full md:w-2/3">
            <div className="shadow-2 bg-white rounded-lg p-7">
              <div>
                <OrangeBadge
                  title="Location:"
                  description="Mohali (work from office)"
                />
                <OrangeBadge
                  title="Experience:"
                  description="2 years Minimum"
                />
                <OrangeBadge title="Position:" description="2" />
                <OrangeBadge title="Salary:" description="4-6 LPA" />
              </div>
              <div className="mt-4 mb-2">
                <CustomText
                  size={"sm"}
                  className="mt-8 mb-7 text-black uppercase "
                >
                  You can directly come for walk-in Interview
                </CustomText>
              </div>
              <div>
                <div className="mb-5">
                  <CustomText size={"xs"} className="mb-2 text-black">
                    Requirements
                  </CustomText>
                  {ReactNativeJobData.map((item, id) => {
                    return (
                      <IconText
                        key={id}
                        title={item.text}
                        icon={<BsCheck2All className="text-secondary" />}
                      />
                    );
                  })}
                </div>
                <div className="mb-5">
                  <CustomText size={"xs"} className="mb-2 text-black">
                    Key Responsibilities:
                  </CustomText>
                  {ReactNativeKeyResponsibilitiesData.map((item, id) => {
                    return (
                      <IconText
                        key={id}
                        title={item.text}
                        icon={<BsCheck2All className="text-secondary" />}
                      />
                    );
                  })}
                </div>
                <div>
                  <CustomText size={"xs"} className="mb-2 text-black">
                    Highlights
                  </CustomText>
                  {JobHighLightsData.map((item, id) => {
                    return (
                      <IconText
                        key={id}
                        title={item.text}
                        icon={<BsCheck2All className="text-secondary" />}
                      />
                    );
                  })}
                </div>
              </div>
              <p className="text-black text-xl mt-8 font-medium">
                Grab the opportunity, enroll yourself now !!! Call now on{" "}
                <a className="text-secondary" href="tel:+91-890-100-1970">
                  +91-890-100-1970
                </a>{" "}
                or Email you resume on{" "}
                <a
                  className="text-secondary"
                  href="mailto:hr.cuilsoft@gmail.com"
                >
                  hr.cuilsoft@gmail.com
                </a>
              </p>
            </div>
            <CompanyDetails />
          </div>
          <div className="w-full md:w-1/3">
            <div className="mb-12">
              <div className="bg-secondary text-center pt-2 pb-6">
                <h4 className="mt-6 mb-5 font-semibold text-2xl text-white">
                  Job Application Form
                </h4>
              </div>
              <div className="bg-gray-50 shadow-2 w-5/6 mx-auto -mt-6 p-7">
                <TrainingApplicationForm type={ContactPurpose.JOB}  />
              </div>
            </div>
            <div className="mb-12">
              <div className="bg-secondary text-center pt-2 pb-6">
                <h4 className="mt-6 mb-5 font-semibold text-2xl text-white">
                  Recent Jobs
                </h4>
              </div>
              <div className="bg-gray-50 shadow-2 w-5/6 mx-auto -mt-6 p-7">
                <RecentJobs />
              </div>
            </div>
            <div className="mb-12">
              <div className="bg-secondary text-center pt-2 pb-6">
                <h4 className="mt-6 mb-5 font-semibold text-2xl text-white">
                  Most Popular Trainings
                </h4>
              </div>
              <div className="bg-gray-50 shadow-2 w-5/6 mx-auto -mt-6 p-7">
                <PopularTrainings />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
