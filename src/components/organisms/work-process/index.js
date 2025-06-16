import { SectionHeader } from "../../molecules/section-header";
import { useDispatch, useSelector } from "react-redux";
import { activeTab, selectTab } from "../../../redux/tabs-slice";
import { WorkProcessFlow } from "../../molecules/work-process";

export const WorkProcess = () => {
  const dispatch = useDispatch();
  const isActive = useSelector(selectTab);

  const handleTabs = (tab) => {
    dispatch(activeTab(tab));
    document
      .getElementById("portfolio_list")
      .scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="pt-20 md:pb-24 md:pt-24 pb-20">
      <div className="container">
        <div>
          <SectionHeader
            subtitle="Workflow"
            title="We Follow Our Work Process"
            des="We follow a streamlined workflow to ensure that our clients receive the best possible services."
          />
          <WorkProcessFlow />
        </div>
      </div>
    </section>
  );
};