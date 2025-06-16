import {  useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const GridItem = ({ item }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className="relative h-64 perspective-1000  bg-white min-w-[400px]"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <div
        className={`absolute w-full h-full transition-transform duration-500 ease-in-out transform-style-3d ${
          isFlipped ? "rotate-y-180" : ""
        }`}
      >
        <div className="absolute w-full h-full backface-hidden">
          <div className="p-10 h-full  relative overflow-hidden w-[400px] rounded-bl-[80px] rounded-tr-[80px] border-secondary  border-r-2 border-l-2 cursor-pointer smooth shadow-xl">
            <h3 className="max-w-[900px] mx-auto text-center lg:text-[22px] text-xl font-normal text-black flex justify-center items-center gap-2 px-[20px] py-[8px]">
              Years Of Experience In Digital Industry{item}
            </h3>
            <p className="lg:text-[15px] text-base text-center font-normal text-black flex justify-center items-center gap-2 px-[20px] py-[8px]">
              All the Team Members of following teams are Certified and have
              more that 12+ years of experience in respective fields.
            </p>
          </div>
        </div>
        <div className="absolute w-full h-full backface-hidden rotate-y-180">
          <div className=" h-full p-10 relative overflow-hidden w-[400px] rounded-bl-[80px] rounded-tr-[80px] border-secondary border-r-2 border-l-2 cursor-pointer smooth shadow-xl">
            <p className="lg:text-[15px] text-base text-center font-normal text-black flex justify-center items-center gap-2 px-[20px] py-[8px]">
              All the Team Members of following teams are Certified and have
              more that 12+ years of experience in respective fields.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function GridLayout() {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          loop: true,
          dots: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          loop: true,
          dots: true,
        },
      },
    ],
  };

  return (
    <div
      className="container mx-auto p-4"
      data-aos="fade-out"
      data-aos-easing="linear"
      data-aos-duration="1000"
    >
      <div className="relative w-full  messageItem">
        <Slider {...settings} >
          {[1, 2, 3].map((item, i) => (
              <GridItem item={item} />
          ))}
        </Slider>
      </div>
    </div>
  );
}
