/* eslint-disable @next/next/no-img-element */

const JobBox = () => {
  return (
    <section
      className="pb-20 bg-white w-full relative z-50"
      data-aos="fade-up"
      data-aos-easing="linear"
      data-aos-duration="1000"
    >
      <div className="container">
        <h2 className="text-[28px] md:text-4xl font-bold leading-9 md:leading-10 lg:leading-[60px] text-center text-black mb-7 md:w-3/4 mx-auto">
          Job Based Industrial Training in Mohali,Chandigarh
        </h2>
        <p className="block">
          Cuilsoft Private Limited, Mohali (Chandigarh) offers 1 Year / 6 Months /
          3 Months Industrial training for B.Tech (All Branches)/MCA/M.Sc
          (IT)/Polytechnic Diploma (All Branches), MBA, BBA, B.Voc and other
          graduate students. Students who are interested to get training with
          Spoken English, Personality Development and Interview Preparation
          (HR+Technical Round) classes and 100% placement assistance are
          required to register and enroll for Aptitude-cum-Technical Test.
          Students clearing the exam may get a scholarship upto 100% depending
          upon the marks they are getting in this test.
        </p>
        <div className="md:grid md:grid-cols-2 gap-10 mt-10 items-center">
          <img src="/images/about.jpg" alt="training  " />
          <div>
            {" "}
            <p className="mt-7 md:mt-0">
              Over the years, with its hard work, dedication and commitment,
              Cuilsoft Private Limited has become one of the biggest brand names
              for quality industrial training in Chandigarh, Mohali and India.
              Cuilsoft Private Limited is the only company in India which is Three
              Times National Level Award Winner for Best Industrial Training and
              got these awards from various Bollywood Film Stars and
              Politicians. Cuilsoft Private Limited has the highest level of
              infrastructure with 200+ computers, 14 Labs and top industry
              experts as trainers. The Placement team at Cuilsoft Private Limited
              is fully passionate to place each and every student at any cost
              with quality placements. Here at Cuilsoft Private Limited, to
              provide quality industrial training is not a business, it is a
              passion for us which drives us to do better more and more everyday
              in the field of quality training and placements.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JobBox;
