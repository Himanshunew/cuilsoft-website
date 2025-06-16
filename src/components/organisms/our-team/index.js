import { TeamMembersData } from "../../../constants/teamMemberData";
import { SectionHeader } from "../../molecules/section-header";
import { TeamMemberBox } from "../../molecules/team-member-box";

export const OurTeam = ({ className }) => {
  if (!TeamMembersData || TeamMembersData.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <section
      id="team_members"
      className={`team_mains pt-16 md:py-24 pb-0 ${className}`}
      data-aos="zoom-in"
      data-aos-easing="linear"
      data-aos-duration="1000"
    >
      <div className="container">
        <SectionHeader
          subtitle="Team"
          title="The big family"
          des="We have great management and talented players, which ensures that we always give our best. Meet us here"
        />
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 text-center gap-4 lg:gap-8">
          {TeamMembersData.map((item, i) => (
            <TeamMemberBox
              key={i}
              source={item.source}
              name={item.name}
              position={item.position}
              des={item.des}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
