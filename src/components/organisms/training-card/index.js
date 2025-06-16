import Link from "next/link";
import { PopularTrainings } from "../../molecules/popular-trainings";
import { RecentJobs } from "../../molecules/recent-jobs";
import { MdDoubleArrow } from "react-icons/md";
import { FaHandPointRight } from "react-icons/fa";
import Image from "next/image";

export const TrainingCardsData = () => {
  return (
    <section className="relative bg-white z-40">
      <div className="container">
        <div className="flex flex-col md:flex-row pt-14 gap-6">
          <div className="w-full md:w-2/3">
            <div className="shadow-2 overflow-hidden px-7 py-8 relative mb-10 tile-main">
              <h2 className="top-tile font-semibold px-4 py-1 text-white text-xl absolute top-0 left-0">
                Development
              </h2>
              <h4 className="mt-6 mb-5 font-semibold text-xl">
                Python Web Development
              </h4>
              <div className="mb-5">
                <h5 className="font-semibold text-lg">Duration</h5>
                <div className="flex items-center">
                  <FaHandPointRight
                    color="#fba42b"
                    size={20}
                    className="mr-2"
                  />
                  <span>6 months</span>
                </div>
              </div>
              <div>
                <h5 className="font-semibold text-lg">Qualification</h5>
                <div className="flex items-center">
                  <FaHandPointRight
                    color="#fba42b"
                    size={20}
                    className="mr-2"
                  />
                  <span>Diploma / Graduation</span>
                </div>
              </div>
              <div className="btnWrapper flex mt-4">
                <Link href="/training/courses/python-web-development">
                  <a className="readMoreBtn">
                    <span className="flex items-center gap-1 hover:text-secondary transition-all duration-300 px-4 py-[6px]">
                      Read More <MdDoubleArrow size={20} />
                    </span>
                  </a>
                </Link>
              </div>
              <div className="box-after">
                <div className="mt-7 pr-11">
                  <Image
                    src={"/images/designIcon.png"}
                    alt="designIcon"
                    width={70}
                    height={70}
                  />
                </div>
              </div>
            </div>
            <div className="shadow-2 overflow-hidden px-7 py-8 relative mb-10 tile-main">
              <h2 className="top-tile font-semibold px-4 py-1 text-white text-xl absolute top-0 left-0">
                Development
              </h2>
              <h4 className="mt-6 mb-5 font-semibold text-xl">
                MERN stack Developer (Javascript)
              </h4>
              <div className="mb-5">
                <h5 className="font-semibold text-lg">Duration</h5>
                <div className="flex items-center">
                  <FaHandPointRight
                    color="#fba42b"
                    size={20}
                    className="mr-2"
                  />
                  <span>6 months</span>
                </div>
              </div>
              <div>
                <h5 className="font-semibold text-lg">Qualification</h5>
                <div className="flex items-center">
                  <FaHandPointRight
                    color="#fba42b"
                    size={20}
                    className="mr-2"
                  />
                  <span>Diploma / Graduation</span>
                </div>
                <div className="btnWrapper flex mt-4">
                  <Link href="/training/courses/mern-stack-development">
                    <a className="readMoreBtn">
                      <span className="flex items-center gap-1 hover:text-secondary transition-all duration-300 px-4 py-[6px]">
                        Read More <MdDoubleArrow size={20} />
                      </span>
                    </a>
                  </Link>
                </div>
                <div className="box-after">
                  <div className="mt-7 pr-11">
                    <Image
                      src={"/images/designIcon.png"}
                      alt="designIcon"
                      width={70}
                      height={70}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="shadow-2 overflow-hidden px-7 py-8 relative mb-10 tile-main">
              <h2 className="top-tile font-semibold px-4 py-1 text-white text-xl absolute top-0 left-0">
                Designing
              </h2>
              <h4 className="mt-6 mb-5 font-semibold text-xl">
                UI/UX Designer
              </h4>
              <div className="mb-5">
                <h5 className="font-semibold text-lg">Duration</h5>
                <div className="flex items-center">
                  <FaHandPointRight
                    color="#fba42b"
                    size={20}
                    className="mr-2"
                  />
                  <span>6 months</span>
                </div>
              </div>
              <div>
                <h5 className="font-semibold text-lg">Qualification</h5>
                <div className="flex items-center">
                  <FaHandPointRight
                    color="#fba42b"
                    size={20}
                    className="mr-2"
                  />
                  <span>Diploma / Graduation</span>
                </div>
              </div>
              <div className="btnWrapper flex mt-4">
                <Link href="/training/courses/uiux-designer">
                  <a className="readMoreBtn">
                    <span className="flex items-center gap-1 hover:text-secondary transition-all duration-300 px-4 py-[6px]">
                      Read More <MdDoubleArrow size={20} />
                    </span>
                  </a>
                </Link>
              </div>
              <div className="box-after">
                <div className="mt-7 pr-11">
                  <Image
                    src={"/images/designIcon.png"}
                    alt="designIcon"
                    width={70}
                    height={70}
                  />
                </div>
              </div>
            </div>
            <div className="shadow-2 overflow-hidden px-7 py-8 relative mb-10 tile-main">
              <h2 className="top-tile font-semibold px-4 py-1 text-white text-xl absolute top-0 left-0">
                Development
              </h2>
              <h4 className="mt-6 mb-5 font-semibold text-xl">
                React Native Development
              </h4>
              <div className="mb-5">
                <h5 className="font-semibold text-lg">Duration</h5>
                <div className="flex items-center">
                  <FaHandPointRight
                    color="#fba42b"
                    size={20}
                    className="mr-2"
                  />
                  <span>6 months</span>
                </div>
              </div>
              <div>
                <h5 className="font-semibold text-lg">Qualification</h5>
                <div className="flex items-center">
                  <FaHandPointRight
                    color="#fba42b"
                    size={20}
                    className="mr-2"
                  />
                  <span>Diploma / Graduation</span>
                </div>
              </div>
              <div className="btnWrapper flex mt-4">
                <Link href="/training/courses/react-native-development">
                  <a className="readMoreBtn">
                    <span className="flex items-center gap-1 hover:text-secondary transition-all duration-300 px-4 py-[6px]">
                      Read More <MdDoubleArrow size={20} />
                    </span>
                  </a>
                </Link>
              </div>
              <div className="box-after">
                <div className="mt-7 pr-11">
                  <Image
                    src={"/images/designIcon.png"}
                    alt="designIcon"
                    width={70}
                    height={70}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/3">
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
