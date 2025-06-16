import React from "react";
import TitleBar from "../../components/organisms/page-titlebar/pageTitleBar";
import Layout from "../../components/organisms/layout";
import Image from "next/image";
import { FaUserAlt } from "react-icons/fa";
import { AiTwotoneFolderOpen, AiFillTag } from "react-icons/ai";
import BlogShareButtons from "../../components/molecules/sharing-blog";
import { OurBlogs } from "../../components/organisms/blog";
import { BlogPostData } from "../../constants/blogPostData";
import { useRouter } from "next/router";

const ImpactOnLife = () => {
  const router = useRouter();

  const currentUrl = router.pathname

  const { blog_id } = router.query;
  let BlogPostDataArray = [];

  if (blog_id) {
    BlogPostDataArray = BlogPostData.filter(
      (item) => item.id !== parseInt(blog_id)
    );
  } else {
    BlogPostDataArray = BlogPostData;
  }
  return (
    <Layout>
      <TitleBar
        title="Web Design, Development, and Services: What Is It? How Does It Impact Your Life? Everyone Needs To Know This! "
        text="Web Design, Development, and Services: What Is It? How Does It Impact Your Life? Everyone Needs To Know This! "
      />
      <section className="py-16">
        <div className="container">
          <div className="shadow-xl p-5 md:p-10">
            <div className="my-6">
              <Image
                src="/images/blog.jpg"
                alt="alt-text"
                width={1180}
                height={500}
                className="object-cover"
              />
            </div>
            <ul className="flex flex-col md:flex-row gap-5 md:items-center mb-5">
              <li>
                <button className="bg-secondary text-white rounded py-2 px-4 text-sm">
                  18 July, 2023
                </button>
              </li>
              <li className="flex gap-2 items-center text-sm">
                <FaUserAlt className="text-secondary" />
                Abhishek Badhan
              </li>
              <li className="flex gap-2 items-center text-sm text">
                <AiTwotoneFolderOpen className="text-secondary text-lg" />
                Mobile App Development, Technology
              </li>
              <li className="flex gap-2 items-center text-sm">
                <AiFillTag className="text-secondary text-xl" />
                Technology
              </li>
            </ul>
            <p className="text-lg leading-8 mb-5">
              If you want to grow your business, it&apos;s important to have an
              online presence. But what does that mean? It means that you need a
              website. A website is the first impression of any company, and if
              it doesn&apos;t look professional or organized, then potential
              consumers will quickly turn away from it in disgust. That&apos;s why we
              offer our clients various services including
            </p>
            <h3 className="xl:text-lg text-base mt-2 mb-4 font-bold text-black">
              Responsive Web Design
            </h3>
            <p className="text-lg leading-8">
              Responsive Web Design is a technique for designing websites that
              can adapt to the device they are being viewed on.
            </p>
            <p className="text-lg leading-8 mb-5">
              Responsive design has become standard for all websites today. It
              allows your site visitors to engage with content anywhere they
              want it — whether they&apos;re at home on their desktops, at work in
              front of their laptops, or even while traveling through an airport
              terminal!
            </p>
            <h3 className="xl:text-lg text-base mt-2 mb-4 font-bold text-black">
              Website Development
            </h3>
            <p className="text-lg leading-8">
              Website development involves many elements. It&apos;s a process, not a
              one-time event. It&apos;s an ongoing process that involves
              collaboration between the client and the designer.
            </p>
            <p className="text-lg leading-8 mb-5">
              The design phase of your website is just as important as the
              development phase, but it can be more challenging because you have
              to consider how your website will look on various devices
              (desktop, tablet, and mobile) as well as how people interact with
              websites today—whether they&apos;re clicking links or scrolling down
              pages.
            </p>
            <h3 className="xl:text-lg text-base mt-2 mb-4 font-bold text-black">
              E-commerce
            </h3>
            <p className="text-lg leading-8 mb-5">
              E-commerce is any business that sells its products or services
              online. It covers a wide range of activities, from small local
              stores selling goods directly to customers, to large online
              retailers such as Amazon.com and Flipkart.In some cases,
              e-commerce might involve providing both traditional retail methods
              along with an improved customer experience through websites that
              allow customers access to information on products before making
              their purchase decision; however, there will often be an overlap
              between these two definitions depending on how closely they are
              considered related elements within one overall structure or system
              (i.e., if someone buys something at a brick-and-mortar store then
              returns soon after buying it online).
            </p>
            <h3 className="xl:text-lg text-base mt-2 mb-4 font-bold text-black">
              Creative Design
            </h3>
            <p className="text-lg leading-8 mb-5">
              Creative design is the process of coming up with a new idea,
              creating something new, or developing a new product. They&apos;re also
              responsible for working closely with project managers at all
              stages of development so that everyone knows where they stand
              before moving forward on any given task at hand; this means being
              able to communicate clearly while still being thorough enough so
              no one feels left out or forgotten about during this process!
            </p>
            <h3 className="xl:text-lg text-base mt-2 mb-4 font-bold text-black">
              User Interface (UI) and User Experience (UX) Design
            </h3>
            <p className="text-lg leading-8 mb-5">
              The user interface is the part of the software that users see,
              hear and interact with. UI design focuses on visual elements such
              as fonts, colors, and button styles. UX design focuses on how well
              your business&apos; product meets its users&apos; needs by ensuring that
              their experience matches what you envision for them.
            </p>
            <h3 className="xl:text-lg text-base mt-2 mb-4 font-bold text-black">
              SEO Service
            </h3>
            <p className="text-lg leading-8 mb-5">
              Search engine optimization (SEO) is the process of improving the
              visibility of your website in search engines through onsite
              optimization. It’s an important part of creating a successful
              digital marketing strategy. If you want to rank higher in search
              engines, you must understand what SEO is and how it works.
            </p>
            <h3 className="xl:text-lg text-base mt-2 mb-4 font-bold text-black">
              Social Media Marketing Services
            </h3>
            <p className="text-lg leading-8">
              Social media marketing is a great way to reach your target
              audience. It’s also one of the most effective ways to get their
              attention and keep them engaged, so you must choose the right
              platforms for your business.
            </p>
            <p className="text-lg leading-8 mb-5">
              The benefits of social media marketing include:
            </p>
            <ul className="mb-5">
              <li className="text-lg leading-8">
                ● Increased brand awareness – with more than half of all
                internet users visiting at least one site per month, it’s easy
                for companies to build an audience on social media sites like
                Facebook, Instagram, and Twitter. If you have a good presence on
                these platforms already, then adding social media will only help
                increase your visibility and engagement rates in general.
              </li>
              <li className="text-lg leading-8">
                ● Improved customer service – because many people use social
                networks as an outlet for sharing information about products or
                services they love (or hate), companies can use this platform as
                an additional source of feedback regarding their
                products/services by asking consumers questions directly through
                posts such as polls or surveys where they share their thoughts
                publicly online without having any personal contact between them
                beforehand. If you don&apos;t have a website yet, we can help make
                sure it looks good!
              </li>
            </ul>
            <p className="text-lg leading-8 mb-5">
              We hope that this article has given you more insight into the
              importance of website design and development. As we covered, the
              right website can make all the difference in your business’
              success. If you want to learn about how we can help your company
              with a professional website design and development solution,
              please contact us today!
            </p>
            <div className="flex justify-between items-center mt-10">
              <BlogShareButtons
                blogUrl={currentUrl}
                blogTitle="Web Design, Development, and Services: What Is It? How Does It Impact Your Life? Everyone Needs To Know This! "
                blogImageUrl="/images/blog.jpg"
                blogDescription="If you want to grow your business, it&apos;s important to have an online presence. But what does that mean? It means that you need a website."
              />
            </div>
          </div>
          <OurBlogs
            BlogPostData={BlogPostDataArray.slice(0, 3)}
            title="Recent posts"
          />
        </div>
      </section>
    </Layout>
  );
};

export default ImpactOnLife;
