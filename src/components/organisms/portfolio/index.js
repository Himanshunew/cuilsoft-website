import { SectionHeader } from "../../molecules/section-header";
import { PortfolioBox } from "../../molecules/portfolio-box";
import { PortfolioBoxData } from "../../../constants/portfolioBoxData";
import { useDispatch, useSelector } from "react-redux";
import { activeTab, selectTab } from "../../../redux/tabs-slice";

export const Portfolio = () => {
  const dispatch = useDispatch();
  const isActive = useSelector(selectTab);

  const handleTabs = (tab) => {
    dispatch(activeTab(tab));
    document
      .getElementById("portfolio_list")
      .scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="portfolio_main pt-20 md:pt-24 pb-12 md:pb-20">
      <div className="">
        <div>
          <SectionHeader
            subtitle="PROJECT"
            title="Our Portfolio"
            des="We have worked on some of the best projects over the years. Check out our work here"
          />
          <div className=" container">
            <PortfolioBox />
          </div>
        </div>
      </div>
    </section>
  );
};
