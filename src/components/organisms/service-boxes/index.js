import { ServicesBoxesData } from "../../../constants/servicesBoxData";
import { SectionHeader } from "../../molecules/section-header";
import ServicesBox from "../../molecules/service-box";

const ServicesBoxes = () => {
  return (
    <section id="services" className="coreval_main py-16 md:py-20">
      <div className="container">
        <div>
          <SectionHeader
            subtitle="OUR SERVICES"
            title="We provide IT & Business solutions"
            des="Our purpose is to provide innovative IT and business solutions that exceed our customers’ expectations and provide the benefits they need. We don’t just help but we provide solutions that suit your need."
          />
          <div className="md:grid md:grid-cols-3 gap-4 lg:gap-8">
            {ServicesBoxesData.map((item, idx) => (
              <ServicesBox
                key={idx}
                title={item.title}
                subtitle={item.subtitle}
                des={item.des}
                image={item.image}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesBoxes;
