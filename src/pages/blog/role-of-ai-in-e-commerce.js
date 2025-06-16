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

const RoleOfAI = () => {
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
        title="Role of AI in e-commerce"
        text="Role of AI in e-commerce"
      />
      <section className="py-16">
        <div className="container">
          <div className="shadow-xl p-5 md:p-10">
            <div className="my-6">
              <Image
                src="/images/role-of-ai.jpg"
                alt="alt-text"
                width={1180}
                height={500}
                className="object-cover"
              />
            </div>
            <ul className="flex flex-col md:flex-row gap-5 md:items-center mb-5">
              <li>
                <button className="bg-secondary text-white rounded py-2 px-4 text-sm">
                  14 August, 2023
                </button>
              </li>
              <li className="flex gap-2 items-center text-sm">
                <FaUserAlt className="text-secondary" />
                Harish Maurya
              </li>
              <li className="flex gap-2 items-center text-sm text">
                <AiTwotoneFolderOpen className="text-secondary text-lg" />
                Role of AI in e-commerce
              </li>
              <li className="flex gap-2 items-center text-sm">
                <AiFillTag className="text-secondary text-xl" />
                Technology
              </li>
            </ul>
            <p className="text-lg leading-8 mb-5">
              In today’s digital era, e-commerce has become an integral part of
              our daily routines. whether it’s buying groceries or selecting
              birthday presents, we rely heavily on the Internet for our
              shopping needs. However, beneath the surface, a quiet revolution
              is reshaping the future of online shopping. Artificial
              Intelligence (AI), once thought of as a far-off idea, is now at
              the forefront of revolutionizing how we shop online.
            </p>
            <p className="text-lg leading-8 mb-5">
              In this blog post, we’ll explore the fascinating and unique ways
              in which AI is Changing the landscape of e-commerce.
            </p>

            <h3 className="xl:text-lg text-base mt-2 mb-4 font-bold text-black">
              Visual search and Image Recognition:
            </h3>
            <p className="text-lg leading-8">
              Imagine finding the perfect item by simply uploading a photo.
              AI-powered visual search and image recognition technology are
              making this a reality. By analyzing images, AI can identify
              products and help shoppers find similar items, streamlining the
              Search process and reducing frustration.
            </p>

            <h3 className="xl:text-lg text-base mt-2 mb-4 font-bold text-black">
              Price Optimization and Dynamic Pricing:
            </h3>
            <p className="text-lg leading-8">
              Have you ever noticed that when you look at a product in an online
              store, its price can sometimes change the next time you visit the
              website? Well, this happened because the computer Programs, like
              smart robots, are working behind the scenes. These programs use
              lots of information, like how many people want the product, what
              other stores are charging, and what the price has been in the
              past. Then, they adjust the price to try to make sure you get a
              good deal, and the store makes as much money as possible. So, it’s
              like a game where the price goes up and down to give you the best
              offer and make the store happy too.
            </p>
            <h3 className="xl:text-lg text-base mt-2 mb-4 font-bold text-black">
              AI-Powered visual Search:
            </h3>
            <p className="text-lg leading-8 mb-5">
              Have you seen a stylish outfit on the street and wished you could
              find similar clothing online? AI-powered visual Search can make
              this dream a reality. Using image recognition technology, it
              allows you to take a picture or upload one to find identical or
              similar products from various online retailers. No more endless
              searching with vague keywords!
            </p>
            <h3 className="xl:text-lg text-base mt-2 mb-4 font-bold text-black">
              Price Optimization and Dynamic Pricing:
            </h3>
            <p className="text-lg leading-8 mb-5">
              Have you ever noticed that when you visit an online store the
              price of a product can sometimes change from one time you look at
              it to another? This happens because there are computer programs,
              like smart robots, that decide how much to charge for things.
              These programs look at things like how much people want the
              product, what other stores are charging, what people want the
              product, what other stores are charging, and what people have paid
              for it in the past. They use all this information to make sure
              customers get good prices while the store makes as much money as
              possible. So, it’s like a game where everyone tries to get the
              best deal.
            </p>
            <h3 className="xl:text-lg text-base mt-2 mb-4 font-bold text-black">
              AI and the Future of Online Shopping
            </h3>
            <p className="text-lg leading-8 mb-5">
              Our journey doesn’t stop here. AI (Artificial Intelligence) keeps
              getting better, and so does online shopping. In the future, we
              might see AI creating Virtual shopping experiences, where you can
              try on clothing using augmented reality, and even AI-making
              fashion designs just for you.
            </p>
            <p className="text-lg leading-8 mb-5">
              In conclusion, AI in online shopping is like a magical story of
              new ideas and big changes. It’s a story where technology is like a
              magician and a helper, making shopping more personal, helping
              stores get products to you faster, and predicting what you might
              want to buy. As we move into the future, let’s enjoy this mix of
              technology and shopping, and have fun with all the cool things AI
              will bring to our online shopping experience
            </p>
            <h3 className="xl:text-lg text-base mt-2 mb-4 font-bold text-black">
              Chatbots as Personal Shoppers:
            </h3>
            <p className="text-lg leading-8 mb-5">
              Imagine having a helpful AI chatbot as your personal shopper.
              These digital helpers can assist you in finding the right
              products, provide answers to your questions, and even handle your
              purchases. They are always available, day and night, providing
              excellent customer support that not only gets the job done quickly
              but also saves businesses money.
            </p>
            <h3 className="xl:text-lg text-base mt-2 mb-4 font-bold text-black">
              Conclusion
            </h3>
            <p className="text-lg leading-8">
              In simple terms, AI ( Artificial intelligence) plays a significant
              role in making your online shopping experience better. It helps by
              suggesting products you might like, adjusting prices, and even
              promoting eco-friendly options. So, when you shop online, remember
              that AI is working quietly in the background to make it easier and
              more enjoyable is becoming increasingly important in online
              shopping, and it&apos;s not going away anytime soon. So enjoy your
              shopping.
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

export default RoleOfAI;
