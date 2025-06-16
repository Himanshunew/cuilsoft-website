// import { NewsLetter } from "../../molecules/newsletter";
import { FooterContent } from "../footer-content";
import { CopyRightBar } from "../../molecules/copyright-bar";
import { StickyLinks } from "../../molecules/sticky-links";

const Footer = () => {
  return (
    <>
      {/* <NewsLetter /> */}
      <section className="bg-[url('/images/footer-bg.png')] overflow-x-hidden bg-no-repeat bg-cover bg-top pb-4 md:pb-8 pt-20 md:pt-40">
        <div
          className="container"
          data-aos="fade-right"
          data-aos-easing="linear"
          data-aos-duration="1000"
        >
          <FooterContent />
          
          <CopyRightBar />
        </div>
      </section>
      <StickyLinks />
    </>
  );
};

export default Footer;
