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

const ChatgptVsGoogleBrad = () => {
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
        title="ChatGPT AI vs. Google’s Brad AI"
        text="ChatGPT AI vs. Google’s Brad AI"
      />
      <section className="py-16">
        <div className="container">
          <div className="shadow-xl p-5 md:p-10">
            <div className="my-6">
              <Image
                src="/images/chatgpt.png"
                alt="alt-text"
                width={1180}
                height={500}
                className="object-cover"
              />
            </div>
            <ul className="flex flex-col md:flex-row gap-5 md:items-center mb-5">
              <li>
                <button className="bg-secondary text-white rounded py-2 px-4 text-sm">
                  28 August, 2023
                </button>
              </li>
              <li className="flex gap-2 items-center text-sm">
                <FaUserAlt className="text-secondary" />
                Shivam Tiwari
              </li>
              <li className="flex gap-2 items-center text-sm text">
                <AiTwotoneFolderOpen className="text-secondary text-lg" />
                ChatGPT AI vs. Google’s Brad AI
              </li>
              <li className="flex gap-2 items-center text-sm">
                <AiFillTag className="text-secondary text-xl" />
                Technology
              </li>
            </ul>
            <h2 className="text-2xl font-semibold mb-2">
              What is Google Bard?
            </h2>
            <p className="text-lg leading-8 mb-5">
              Google is known for a wide range of products and services,
              including its search engine, Android operating system, Google
              Maps, Gmail, Google Drive, and many others. However, I don&apos;t
              have information about any product or technology called ‘’Google
              Brad’’
            </p>
            <h2 className="text-2xl font-semibold mb-2">What is ChatGPT?</h2>
            <p className="text-lg leading-8 mb-5">
              ChatGPT is an AI-powered conversational model developed by OpenAI.
              It utilizes the GPT-3.5 architecture to generate human-like text
              responses in natural language. It can engage in text-based
              conventions, answer questions, provide information, and assist
              with a wide range of tasks, making it a versatile tool for various
              applications like customer support, content generation, and more.
            </p>

            <h3 className="xl:text-xl text-base mt-2 mb-4 font-bold text-black">
              ChatGPT AI vs. Google’s Brad AI
            </h3>
            <p className="text-lg leading-8 mb-5">
              We will compare these two AI models, highlighting their
              similarities, differences, and benefits they offer to users and
              businesses.
            </p>

            <h3 className="xl:text-xl text-base mt-2 mb-4 font-bold text-black">
              ChatGPT AI
            </h3>
            <p className="text-lg leading-8 mb-5">
              ChatGPT is a language model developed by open AI. It is built upon
              the GPT (Generative Pre-trained Transformer) architecture, which
              is known for its natural language understanding and generation
              capabilities. ChatGPT has gained popularity for its ability to
              engage in text-based conventions, answer questions, and provide
              contextual responses.
            </p>
            <h3 className="xl:text-lg text-base mt-2 mb-4 font-bold text-black">
              Here are some key features and benefits of ChatGTP AI
            </h3>
           <ul className="pl-8">
            <li> <p className="text-lg leading-8 mb-2">
              <b className="text-dark">● Nature Language Understanding:</b>{" "}
              ChatGTP excels in understanding and generating human-like, text,
              making it suitable for various applications such as:
            </p>
            <ul className="pl-4 md:pl-8 mb-6">
              <li className="text-lg leading-8">• Chatbots</li>
              <li className="text-lg leading-8">• Content generation</li>
              <li className="text-lg leading-8">• Customer support.</li>
            </ul>
            </li>
            <li><p className="text-lg leading-8 mb-2">
              <b className="text-dark">● Conversational Skills:</b> ChatGPT is
              designed to engage in dynamic text-based conversations, making it
              a valuable tool for businesses looking to improve customer
              interactions and support services.
            </p></li>
            <li><p className="text-lg leading-8 mb-2">
              <b className="text-dark">● Customization:</b> Users can fine-tune
              ChatGPT for specific tasks and domains, allowing for more tailored
              responses and better integration into various applications.
            </p></li>
           </ul>
            <h3 className="xl:text-xl text-base mt-2 mb-4 font-bold text-black">
              Google’s Brad AI
            </h3>
            <p className="text-lg leading-8 mb-5">
              Google’s Brad AI is another powerful AI model developed by one of
              the world’s leading technologies companies. While it shares some
              similarities with ChatGPT, it also has distinct features and
              applications. Here’s a closer look at Google’s Brad AI:
            </p>
            <ul className="pl-8">
              <li><p className="text-lg leading-8 mb-2">
              <b className="text-dark">● Integration with Google Services: </b>
              Brad AI is deeply integrated with Google’s suite of services,
              including Google Search, Assistant, and more. This allows users to
              seamlessly access information and perform tasks using voice
              commands and text-based interactions.
            </p></li>
            <li> <p className="text-lg leading-8 mb-2">
              <b className="text-dark">● Integration with Google Services: </b>
              Brad AI is deeply integrated with Google’s suite of services,
              including Google Search, Assistant, and more. This allows users to
              seamlessly access information and perform tasks using voice
              commands and text-based interactions.
            </p></li>
            <li><p className="text-lg leading-8 mb-2">
              <b className="text-dark">● Multimodal Capabilities: </b>
              Brad AI can process both text and images, enabling it to provide
              richer and more context-aware responses. It can also perform tasks
              like image recognition and object identification.
            </p></li>
            <li>  <p className="text-lg leading-8 mb-2">
              <b className="text-dark">● Ecosystem Benefits: </b>Google’s
              extensive ecosystem and user base provide Brad AI has access to a
              vast amount of data, making it a potent tool for information
              retrieval and assistance.
            </p></li>
            </ul>
            <h3 className="xl:text-xl text-base mt-2 mb-4 font-bold text-black">
              Comparison
            </h3>
            
            <p className="text-lg leading-8 mb-5">
              Now, Let’s compare ChatGPT AI and Google’s Brad AI in a few key
              aspects:
            </p>
            <ul className="pl-8">
              <li><p className="text-lg leading-8 mb-2">
              <b className="text-black">● Natural Language Understanding: </b> Both
              models excel in natural language understanding but ChatGPT is
              primarily focused on approach by incorporating voice commands and
              image processing.
            </p></li>
            <li><p className="text-lg leading-8 mb-2">
              <b className="text-black">● Customization: </b> ChatGPT allows users
              to fine-tune the model for specific tasks, providing more control
              and customization options. Brad AI, on the other hand, is
              optimized for Google’s services and may have limited customization
              outside of the ecosystem.
            </p></li>
            <li> <p className="text-lg leading-8 mb-2">
              <b className="text-black">● Integration: </b>Brad AI has a seamless
              integration advantage with Google’s services, which can be a
              significant benefit for users heavily reliant on Google’s
              products. ChatGPT, while versatile, may require more effort to
              integrate into existing systems.
            </p></li>
            </ul>
            <h3 className="xl:text-xl text-base mt-2 mb-4 font-bold text-black">
              Benefits
            </h3>
            <p className="text-lg leading-8 mb-5">
              ChaGPT AI and Google’s Brad AI offer various benefits, depending
              on your specific needs:
            </p>
            <ul className="pl-8">
              <li><p className="text-lg leading-8 mb-2">
              <b className="text-black">● Content Generation: </b>ChatGPT can
              assist with content generation, such as blog writing, social media
              posts, and marketing materials. Brad AI’s integration with
              Google’s Service can simplify content for users within the Google
              Ecosystem.
            </p></li>
            <li><p className="text-lg leading-8 mb-2">
              <b className="text-black">Accessibility and convenience: </b>Brad
              AI&apos;s Voice Command capabilities make it accessible for users
              with disabilities and can simplify tasks like setting reminders
              sending messages, and Searching for information.
            </p></li>
            </ul>
            <h3 className="xl:text-lg text-base mt-2 mb-4 font-bold text-black">
              Conclusion
            </h3>
            <p className="text-lg leading-8">
              Both ChatGTP Al and Google&apos;s Brad AI are powerful AI models
              with unique strengths and applications. The choice between them
              depends on your specific requirements and the ecosystem you
              operate in. ChatGPT excels in natural language understanding and
              customization, while Brad AI offers seamless integration with
              Google&apos;s Services and multimodal Capabilities. ultimately,
              the benefits of each AI model will be determined by how well they
              align with your Business goal and user needs.
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

export default ChatgptVsGoogleBrad;
