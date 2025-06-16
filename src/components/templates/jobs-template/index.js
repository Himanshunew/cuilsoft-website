import React from "react";
import JobBox from "../../organisms/job-box";
import TitleBar from "../../organisms/page-titlebar/pageTitleBar";
import TrainingBox from "../../organisms/training-box";
import TrainingPeriod from "../../organisms/training-period";
import TrainingLayout from "../../organisms/training-layout";
import { FaHandPointRight } from "react-icons/fa";
import Link from "next/link";
import { BlogPostData } from "../../../constants/blogPostData";
import { OurBlogs } from "../../organisms/blog";
import { PopularTrainings } from "../../molecules/popular-trainings";
import { RecentJobs } from "../../molecules/recent-jobs";
import { MdDoubleArrow } from "react-icons/md";
import Image from "next/image";

export const JobsTemplate = () => {
  return (
    <TrainingLayout title="Transforming Talent in Half the Time: A Unique 3-Month or 6-Month Industrial Training Experience!">
      <TitleBar title={"Jobs"} text={"Training"} />
      <section className="bg-white relative z-40">
        <div className="container">
          <div className="flex flex-col md:flex-row pt-14 gap-6">
            <div className="w-full md:w-2/3">
              <div className="shadow-2 overflow-hidden px-7 py-8 relative mb-10 tile-main">
                <h2 className="top-tile font-semibold px-4 py-1 text-white text-xl absolute top-0 left-0">
                  Development
                </h2>
                <h4 className="mt-6 mb-5 font-semibold text-xl">
                  MERN Stack Developer
                </h4>
                <div className="mb-5">
                  <h5 className="font-semibold text-lg">Experience</h5>
                  <div className="flex items-center">
                    <FaHandPointRight
                      color="#fba42b"
                      size={20}
                      className="mr-2"
                    />
                    <span>2 years Minimum </span>
                  </div>
                </div>
                <div className="mb-5">
                  <h5 className="font-semibold text-lg">Salary</h5>
                  <div className="flex items-center">
                    <FaHandPointRight
                      color="#fba42b"
                      size={20}
                      className="mr-2"
                    />
                    <span>4 LPA - 6 LPA </span>
                  </div>
                </div>
                <div>
                  <h5 className="font-semibold text-lg">Type</h5>
                  <div className="flex items-center">
                    <FaHandPointRight
                      color="#fba42b"
                      size={20}
                      className="mr-2"
                    />
                    <span>Full-Time</span>
                  </div>
                </div>
                <div className="btnWrapper flex mt-4">
                  <Link href="/jobs/mern-stack-developer-job">
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
                  MEAN Stack Developer
                </h4>
                <div className="mb-5">
                  <h5 className="font-semibold text-lg">Experience</h5>
                  <div className="flex items-center">
                    <FaHandPointRight
                      color="#fba42b"
                      size={20}
                      className="mr-2"
                    />
                    <span>2 years Minimum </span>
                  </div>
                </div>
                <div className="mb-5">
                  <h5 className="font-semibold text-lg">Salary</h5>
                  <div className="flex items-center">
                    <FaHandPointRight
                      color="#fba42b"
                      size={20}
                      className="mr-2"
                    />
                    <span>4 LPA - 6 LPA </span>
                  </div>
                </div>
                <div>
                  <h5 className="font-semibold text-lg">Type</h5>
                  <div className="flex items-center">
                    <FaHandPointRight
                      color="#fba42b"
                      size={20}
                      className="mr-2"
                    />
                    <span>Full-Time</span>
                  </div>
                </div>
                <div className="btnWrapper flex mt-4">
                  <Link href="/jobs/mean-stack-developer-job">
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
                  React Developer
                </h4>
                <div className="mb-5">
                  <h5 className="font-semibold text-lg">Experience</h5>
                  <div className="flex items-center">
                    <FaHandPointRight
                      color="#fba42b"
                      size={20}
                      className="mr-2"
                    />
                    <span>2 years Minimum </span>
                  </div>
                </div>
                <div className="mb-5">
                  <h5 className="font-semibold text-lg">Salary</h5>
                  <div className="flex items-center">
                    <FaHandPointRight
                      color="#fba42b"
                      size={20}
                      className="mr-2"
                    />
                    <span>4 LPA - 6 LPA </span>
                  </div>
                </div>
                <div>
                  <h5 className="font-semibold text-lg">Type</h5>
                  <div className="flex items-center">
                    <FaHandPointRight
                      color="#fba42b"
                      size={20}
                      className="mr-2"
                    />
                    <span>Full-Time</span>
                  </div>
                </div>
                <div className="btnWrapper flex mt-4">
                  <Link href="/jobs/react-developer">
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
                  React Native Developer
                </h4>
                <div className="mb-5">
                  <h5 className="font-semibold text-lg">Experience</h5>
                  <div className="flex items-center">
                    <FaHandPointRight
                      color="#fba42b"
                      size={20}
                      className="mr-2"
                    />
                    <span>2 years Minimum </span>
                  </div>
                </div>
                <div className="mb-5">
                  <h5 className="font-semibold text-lg">Salary</h5>
                  <div className="flex items-center">
                    <FaHandPointRight
                      color="#fba42b"
                      size={20}
                      className="mr-2"
                    />
                    <span>4 LPA - 6 LPA </span>
                  </div>
                </div>
                <div>
                  <h5 className="font-semibold text-lg">Type</h5>
                  <div className="flex items-center">
                    <FaHandPointRight
                      color="#fba42b"
                      size={20}
                      className="mr-2"
                    />
                    <span>Full-Time</span>
                  </div>
                </div>
                <div className="btnWrapper flex mt-4">
                  <Link href="/jobs/react-native-developer">
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
                  Python Developer
                </h4>
                <div className="mb-5">
                  <h5 className="font-semibold text-lg">Experience</h5>
                  <div className="flex items-center">
                    <FaHandPointRight
                      color="#fba42b"
                      size={20}
                      className="mr-2"
                    />
                    <span>2 years Minimum </span>
                  </div>
                </div>
                <div className="mb-5">
                  <h5 className="font-semibold text-lg">Salary</h5>
                  <div className="flex items-center">
                    <FaHandPointRight
                      color="#fba42b"
                      size={20}
                      className="mr-2"
                    />
                    <span>4 LPA - 6 LPA </span>
                  </div>
                </div>
                <div>
                  <h5 className="font-semibold text-lg">Type</h5>
                  <div className="flex items-center">
                    <FaHandPointRight
                      color="#fba42b"
                      size={20}
                      className="mr-2"
                    />
                    <span>Full-Time</span>
                  </div>
                </div>
                <div className="btnWrapper flex mt-4">
                  <Link href="/jobs/python-developer">
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
                    Recent Jobs
                  </h4>
                </div>
                <div className="bg-gray-50 shadow-2 w-5/6 mx-auto -mt-6 p-7">
                  <RecentJobs />
                </div>
              </div>
              <div>
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
      <TrainingPeriod />
      <JobBox />
      <TrainingBox />

      <OurBlogs BlogPostData={BlogPostData.slice(0, 3)} />
    </TrainingLayout>
  );
};
