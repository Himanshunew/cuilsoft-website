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
          <div className=" container grid grid-cols-1 md:grid-cols-3 md:gap-7 gap-20">
            {PortfolioBoxData.map((item, i) => (
              <div key={i} onClick={() => handleTabs(item.tab)}>
                <PortfolioBox
                  bgColor={
                    isActive === item.tab ? "tab_active" : "tab_inactive"
                  }
                  color={
                    isActive === item.tab ? "text-white" : "text-secondary"
                  }
                  source={item.source}
                  linkto={item.linkto}
                  title={item.title}
                  subtitle={item.subtitle}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
