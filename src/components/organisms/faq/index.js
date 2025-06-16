import React, { useState } from "react";
import { faqDataWarpper } from "../../../constants/faq_data";
import { RiArrowDownSFill, RiArrowUpSFill } from "react-icons/ri";

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  return (
    <div className="py-20">
      {faqDataWarpper.map((faq, index) => (
        <div
          key={index}
          className="container"
          data-aos="fade-up"
          data-aos-duration="800"
        >
          <h2 className="lg:text-[38px] text-2xl font-bold mb-6 text-black">
            {faq.heading}
          </h2>
          <div className="space-y-4">
            {faq.faqData.map((item, index) => (
              <div
                key={index}
                className="border-dashed border-b  border-black p-4"
                data-aos="fade-up"
                data-aos-duration="800"
              >
                <div
                  className={`cursor-pointer flex justify-between items-center w-full py-2 font-bold lg:text-lg text-base hover:text-secondary smooth focus:outline-none focus-visible:hidden  ${
                    activeIndex === index ? "text-secondary" : "text-black"
                  } `}
                  onClick={() => toggleFAQ(index)}
                >
                  <p className="hover:ml-5 smooth">{item.question}</p>
                  <span
                    className={`min-w-7 min-h-7 ${
                      activeIndex === index ? "text-black" : "text-black"
                    }  flex justify-center items-center  rounded-full  `}
                  >
                    {activeIndex === index ? (
                      <span className="text-4xl">-</span>
                    ) : (
                      <span className="text-xl"> +</span>
                    )}
                  </span>
                </div>
                {activeIndex === index && (
                  <div className="mt-2 text-black lg:text-lg text-base">
                    {item.answer}
                    <p className="my-2 text-black lg:text-lg text-base">
                      {item.desc}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Faq;
