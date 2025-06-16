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

const ChooseWebDev = () => {
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
        title="Choosing A Web Development Company Is Easier Than You Think"
        text="Choosing A Web Development Company Is Easier Than You Think"
      />
      <section className="py-16">
        <div className="container">
          <div className="shadow-xl p-5 md:p-10">
            <div className="my-6">
              <Image
                src="/images/blog1.png"
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
                Raj Singh
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
              Using the skill of a top-quality web development company can
              change your business and make it even more successful. Having an
              attractive website is important for any business in today&apos;s
              world. It&apos;s the impression of visitors that counts. Building
              a website is one of the biggest challenges a small or start-up
              business faces, and it&apos;s important to keep in mind that not
              every site provider is created equally. A strong website with
              high-resolution images, photos, and content will present your
              company in the best possible way to customers when compared to
              other competitors in the same field. When it comes to web
              development, many aspects need to be taken into consideration,
              including security, web performance, user experience, and
              conversion rate optimization.
            </p>
            <p className="text-lg leading-8 mb-5">
              There are a lot of web development companies and services out
              there. How do you know which one to choose? Here are a few things
              to consider:
            </p>
            <ul className="mb-5">
              <li className="text-lg leading-8">
                - How much experience does the company have?
              </li>
              <li className="text-lg leading-8">
                - What kind of portfolio do they have?
              </li>
              <li className="text-lg leading-8">
                - What is their process for designing and building websites?
              </li>
              <li className="text-lg leading-8">
                - What kind of support do they offer?
              </li>
              <li className="text-lg leading-8">- What are their prices?</li>
            </ul>
            <p className="text-lg leading-8 mb-5">
              Take some time to research the different web development companies
              and services before making your decision. Read reviews, look at
              their portfolios, and contact them to ask questions. With a little
              bit of effort, you can find the perfect company or service to meet
              your needs. There is no doubt that website design and development
              is a hot topic these days. With so many businesses moving online,
              it&apos;s crucial to have a website that is both attractive and
              functional.
            </p>
            <p className="text-lg leading-8 mb-5">
              After you&apos;ve found the right designer or developer, it&apos;s
              time to start working on the actual design and development of your
              website. This is where you&apos;ll need to put some thought into
              what you want your website to look and feel like.
            </p>
            <p className="text-lg leading-8 mb-5">
              Remember, your website is an extension of your business, so you
              want it to reflect your brand in the best way possible. Take your
              time and make sure you&apos;re happy with the final product. If
              you follow these steps, you&apos;ll be well on your way to having
              a great website design and development experience.
            </p>
            <p className="text-lg leading-8 mb-5">
              Many businesses are looking for ways to boost the reach of their
              internet marketing efforts with minimum expense and maximum
              results. Launching a website design and development project is a
              good option for many companies, since their needs may be suited to
              smaller projects that can produce tangible results in relatively
              short amounts of time.Every site needs to be designed, developed,
              hosted and promoted. We build websites from scratch so you
              don&apos;t have to – from deciding on design features to writing
              your content, setting up your e-commerce system, marketing
              strategy, and social media presence, we can do it for you.If
              you&apos;re looking for a web design agency, you have many
              options. The key is to find the most suitable one for your needs.
              These tips should help you analyze your situation and search for
              the best website design company for you.Cuilsoft strives to
              provide you with all of these in a single package!
            </p>
            <p className="text-lg leading-8 mb-5">
              We built our services with the customer in mind. Quality is our
              1st priority, and we can ensure that because we know there is
              nothing more important than a client&apos;s satisfaction. We take
              great pride in each of our projects and love all of them nearly as
              much as the people who request them. It&apos;s not just about
              getting your business, it is about creating a business for
              yourself or your clients. We develop small, medium, and
              large-sized businesses on all platforms.
            </p>
            <div className="flex justify-between items-center mt-10">
              <BlogShareButtons
                blogUrl={currentUrl}
                blogTitle="Web Design, Development, and Services: What Is It? How Does It Impact Your Life? Everyone Needs To Know This! "
                blogImageUrl="/images/blog.jpg"
                blogDescription="If you want to grow your business, it's important to have an online presence. But what does that mean? It means that you need a website."
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

export default ChooseWebDev;
