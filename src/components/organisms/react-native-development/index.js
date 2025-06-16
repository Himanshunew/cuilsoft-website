import { BsCheck2All } from "react-icons/bs";
import { CustomText } from "../../atoms/custom-text";
import { RecentJobs } from "../../molecules/recent-jobs";
import { ContactPurpose, TrainingApplicationForm } from "../../molecules/training-application-form";
import {
  ReactNativeAPIRequestData,
  ReactNativeDeploymentData,
  ReactNativeFundamentalData,
  ReactNativeNavigationData,
  ReactNativeTrainingIntroData,
  ReactNativeUIUXStyleData,
} from "../../../constants/trainingListData";
import { IconText } from "../../atoms/icon-text";
import { OrangeBadge } from "../../atoms/orange-badge";
import { CompanyDetails } from "../../molecules/company-details";
import { PopularTrainings } from "../../molecules/popular-trainings";

export const ReactNativeTrainingData = () => {
  return (
    <section>
      <div className="container">
        <div className="flex flex-col md:flex-row pt-14 gap-6">
          <div className="w-full md:w-2/3">
            <div className="shadow-2 bg-white rounded-lg p-7">
              <div>
                <OrangeBadge title="Location:" description="Mohali" />
                <OrangeBadge
                  title="Qualification:"
                  description="Diploma / Graduation"
                />
                <OrangeBadge title="Duration:" description="6 Months" />
                <OrangeBadge title="Fee:" description="₹5000 per month" />
              </div>
              <div>
                <CustomText className="mb-5 mt-10">Syllabus:</CustomText>
                <div className="mb-5">
                  <CustomText size={"xs"} className="mb-2 text-black">
                    Introduction
                  </CustomText>
                  {ReactNativeTrainingIntroData.map((item, id) => {
                    return (
                      <IconText
                        key={id}
                        title={item.title}
                        icon={<BsCheck2All className="text-secondary" />}
                      />
                    );
                  })}
                </div>
                <div>
                  <CustomText size={"xs"} className="mb-2 text-black">
                    React Native Fundamentals
                  </CustomText>

                  {ReactNativeFundamentalData.map((item, id) => {
                    return (
                      <IconText
                        key={id}
                        title={item.title}
                        icon={<BsCheck2All className="text-secondary" />}
                      />
                    );
                  })}
                </div>
              </div>
              <div>
                <CustomText size={"xs"} className="mt-6 mb-2 text-black">
                  Navigation in React Native
                </CustomText>

                {ReactNativeNavigationData.map((item, id) => {
                  return (
                    <IconText
                      key={id}
                      title={item.title}
                      icon={<BsCheck2All className="text-secondary" />}
                    />
                  );
                })}
              </div>
              <div>
                <CustomText size={"xs"} className="mt-6 mb-2 text-black">
                  Handling Data and API Requests
                </CustomText>

                {ReactNativeAPIRequestData.map((item, id) => {
                  return (
                    <IconText
                      key={id}
                      title={item.title}
                      icon={<BsCheck2All className="text-secondary" />}
                    />
                  );
                })}
              </div>
              <div>
                <CustomText size={"xs"} className="mt-6 mb-2 text-black">
                  UI/UX and Styling
                </CustomText>
                {ReactNativeUIUXStyleData.map((item, id) => {
                  return (
                    <IconText
                      key={id}
                      title={item.title}
                      icon={<BsCheck2All className="text-secondary" />}
                    />
                  );
                })}
              </div>
              <div>
                <CustomText size={"xs"} className="mt-6 mb-2 text-black">
                  Building and Deployment
                </CustomText>
                {ReactNativeDeploymentData.map((item, id) => {
                  return (
                    <IconText
                      key={id}
                      title={item.title}
                      icon={<BsCheck2All className="text-secondary" />}
                    />
                  );
                })}
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
                  Training Application Form
                </h4>
              </div>
              <div className="bg-gray-50 shadow-2 w-5/6 mx-auto -mt-6 p-7">
                <TrainingApplicationForm type={ContactPurpose.TRAINING} />
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
            <div>
              <div className="bg-secondary text-center pt-2 pb-6">
                <h4 className="mt-6 mb-5 font-semibold text-2xl text-white">
                  Recent Jobs
                </h4>
              </div>
              <div className="bg-gray-50 shadow-2 w-5/6 mx-auto -mt-6 p-7">
                <RecentJobs />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
