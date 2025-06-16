import { CourseBoxData } from "../../../constants/courseBoxData";
import CourseBox from "../../molecules/course-box";
import { SectionHeader } from "../../molecules/section-header";

const TrainingPeriod = () => {
  return (
    <section>
      <div className="container">
        <div className="text-center">
          <div className="bg-white w-full relative z-50 pt-28 pb-1">
            <SectionHeader
              className="mb-[0]"
              subtitle={"Industrial Training"}
              title={
                "Best 1 Year / 6 Months / 3 Months Industrial Training in Mohali."
              }
              des={
                "Learn from the industry leading experts the art and science of Web Development. Throughout this all-in-one training module, we cover a massive number of tools and technologies, including:"
              }
            />
          </div>

          <div
            className="grid grid-cols-2 md:grid-cols-4 gap-5 courseBoxWrapper py-10"
            // data-aos="fade-up"
            // data-aos-easing="linear"
            // data-aos-duration="3000"
          >
            {CourseBoxData.map((item, idx) => (
              <CourseBox
                key={idx}
                title={item.title}
                source={item.source}
                background={item.bg}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrainingPeriod;
