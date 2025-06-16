import { HomePortfolioBox } from "../../molecules/portfolio-box";
import { PortfolioBoxData } from "../../../constants/portfolioBoxData";
import { SolidButton } from "../../atoms/buttons/solid-bitton";
import { useRouter } from "next/router";

export const HomePortfolio = () => {
  const router = useRouter();
  return (
    <section className="py-20 md:py-22 overflow-x-hidden">
      <div className="bg-portfolio h-auto w-[98%] ml-auto rounded-tl-[300px] rounded-bl-[10px] py-20">
        <div
          className="container"
          data-aos="fade-left"
          data-aos-easing="linear"
          data-aos-duration="1000"
        >
          <div className="flex flex-col gap-5 md:gap-0 md:flex-row justify-between items-center mb-11">
            <div className="text-center md:text-left">
              <h5 className="text-lg leading-5 text-secondary uppercase font-bold mb-4">
                PROJECT
              </h5>
              <h3 className="text-2xl md:text-30 leading-8 md:leading-9 font-bold mb-2.5 text-white">
                Our Portfolio
              </h3>
              <p className="text-white leading-6 font-medium">
                We have worked on some of the best projects over the years.
                Check out our work here
              </p>
            </div>
            <div className="text-center">
              <SolidButton
                className="uppercase"
                title="View All"
                hoverText="VIEW ALL"
                onClick={() => router.push("our-work")}
              />
            </div>
          </div>
          <div className="grid grid-cols-3 gap-7">
            {PortfolioBoxData.map((item, i) => (
              <HomePortfolioBox
                key={i}
                source={item.source}
                linkto={item.linkto}
                title={item.title}
                subtitle={item.subtitle}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
