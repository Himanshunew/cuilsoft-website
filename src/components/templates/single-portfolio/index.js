import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import { FaHandPointRight } from "react-icons/fa";
import { settingData } from "../../../constants/settingData";
import Layout from "../../organisms/layout";
import TitleBar from "../../organisms/page-titlebar/pageTitleBar";

export const SinglePortfolioTemplate = () => {
  const router = useRouter();
  const { name, id } = router.query;
  return (
    <Layout>
      <TitleBar
        title={settingData[name] && settingData[name][id]?.pageTitle}
        text={settingData[name] && settingData[name][id]?.pageTitle}
      />
      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-16">
            <div>
              <h5 className="text-secondary font-bold text-base uppercase">
                {settingData[name] && settingData[name][id]?.pageTitle}
              </h5>
              <h2 className="text-4xl font-bold my-5">
                About {settingData[name] && settingData[name][id]?.pageTitle}
              </h2>
              <p className="text-lg leading-8">
                {settingData[name] && settingData[name][id]?.about}
              </p>
            </div>
            <div>
              {settingData[name] && settingData[name][id] && (
                <Image
                  src={settingData[name] && settingData[name][id]?.aboutImg}
                  alt="alt-text"
                  width={600}
                  height={600}
                />
              )}
            </div>
          </div>
        </div>
      </section>
      <section className="py-20  library_tools">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
            {settingData[name] &&
              settingData[name][id]?.tools.map((item, i) => (
                <div
                  key={i}
                  className="text-center shadow-xl bg-white p-9 text-[#232323] rounded-xl tool_card "
                >
                  {item.srcPath && (
                    <Image
                      src={item.srcPath}
                      alt="alt-text"
                      width={100}
                      height={100}
                    />
                  )}
                  <p className="text-2xl font-semibold mt-2">{item.title}</p>
                </div>
              ))}
          </div>
        </div>
      </section>
      <section className="py-10">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-16 items-center">
            <div>
              <Image
                src="/images/idea.png"
                alt="alt-text"
                width={600}
                height={600}
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold my-5">Key Features</h2>
              {settingData[name] &&
                settingData[name][id]?.keyFeatures.map((item, i) => (
                  <div key={i} className="flex gap-4 items-start my-2">
                    <div><FaHandPointRight color="#fba42b" size={25} /></div>
                    <p>{item}</p>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[#fbfbfb] pt-8 md:pt-20 pb-40">
        <div className="container">
          <div>
            <h2 className="text-4xl font-bold my-5 text-center">Result</h2>
          </div>
          <div className="md:px-1 mt-10 gap-4 md:gap-10 grid grid-cols-2 md:grid-cols-3">
            {settingData[name] &&
              settingData[name][id]?.resultImg.map((item, i) => (
                <div key={i} className="shadow-1 flex">
                  {item && (
                    <Image src={item} alt="alt-text" width={400} height={250} />
                  )}
                </div>
              ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};
