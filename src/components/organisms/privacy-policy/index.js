import { SectionHeader } from "../../molecules/section-header";

export const PrivacyContent = () => {
  return (
    <section
      className="about_main pt-16 pb-5 md:pt-20 md:pb-20 overflow-x-hidden"
      data-aos="fade-up"
      data-aos-easing="linear"
      data-aos-duration="1000"
    >
      <div className="container">
        <SectionHeader
          subtitle=" "
          title="Privacy Policy"
          des={
            <>
              At Cuilsoft, we bring ideas to reality by applying the best of the
              latest web technologies which help in creating top-notch as well
              as easy-to-use websites and apps for our clients. We as a team
              help in converting your ideas and thoughts into a living reality.
              The best thing about us is our cost-effective & user-friendly
              approach to building an app or website to ride the bandwagon of
              the ever-growing digital arena and hence create more and new
              opportunities for our clients.
              <br /> <br />
              As in the case with most success stories, we started from ground
              zero and eventually built a company with a vision to provide
              world-class websites and apps to our hundreds of satisfied
              clientele lists. We take immense pride in our vision to bring
              affordable technology to every citizen of the world and help
              improve their life and business with all our integrity.
            </>
          }
        />
      </div>
    </section>
  );
};
