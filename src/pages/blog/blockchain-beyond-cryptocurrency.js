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

const BlockchainCryptocurrency = () => {
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
        title="Blockchain Beyond Cryptocurrency"
        text="Blockchain Beyond Cryptocurrency"
      />
      <section className="py-16">
        <div className="container">
          <div className="shadow-xl p-5 md:p-10">
            <div className="my-6">
              <Image
                src="/images/blockchain.png"
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
                Antriksha Rattan
              </li>
              <li className="flex gap-2 items-center text-sm text">
                <AiTwotoneFolderOpen className="text-secondary text-lg" />
                Blockchain Beyond Cryptocurrency
              </li>
              <li className="flex gap-2 items-center text-sm">
                <AiFillTag className="text-secondary text-xl" />
                Blockchain
              </li>
            </ul>
            <p className="text-lg leading-8 mb-5">
              Blockchain technology, originally designed to underpin
              cryptocurrencies like Bitcoin, has evolved into a versatile tool
              with applications across a myriad of industries. Its unique
              features, such as decentralization, immutability, and
              transparency, make it suitable for various use cases beyond
              finance. In this blog, we&apos;ll explore the diverse applications
              of blockchain technology, ranging from supply chain management to
              voting systems and healthcare.
            </p>

            <h3 className="xl:text-lg text-base mt-2 mb-4 font-bold text-black">
              Supply Chain Management:
            </h3>
            <p className="text-lg leading-8">
              Blockchain has revolutionized supply chain management by providing
              an immutable ledger for tracking goods and verifying their
              origins. Companies can use blockchain to enhance transparency and
              traceability, reducing fraud and counterfeit products. For
              example, Walmart implemented a blockchain solution to trace the
              journey of its food products, enabling swift recalls in case of
              contamination and ensuring food safety.
            </p>

            <h3 className="xl:text-lg text-base mt-2 mb-4 font-bold text-black">
              Voting Systems:
            </h3>
            <p className="text-lg leading-8">
              Blockchain offers a secure and transparent platform for voting
              systems. By leveraging blockchain, governments can mitigate
              election fraud and enhance voter trust. Votes are recorded on the
              blockchain, ensuring that they are tamper-proof and cannot be
              altered. Voatz, a blockchain-based voting platform, has been
              tested in various elections, offering accessibility and security
              to voters.
            </p>
            <h3 className="xl:text-lg text-base mt-2 mb-4 font-bold text-black">
              Healthcare:
            </h3>
            <p className="text-lg leading-8 mb-5">
              In healthcare, patient records can be securely stored and shared
              across the network with blockchain technology. Patients have
              control over their data, granting access to healthcare providers
              as needed. This reduces administrative overhead and ensures data
              integrity, while also protecting sensitive medical information.
            </p>
            <h3 className="xl:text-lg text-base mt-2 mb-4 font-bold text-black">
              Smart Contracts:
            </h3>
            <p className="text-lg leading-8 mb-5">
              Smart contracts, self-executing contracts with the terms of the
              agreement directly written into code, are a prominent application
              of blockchain. They can automate complex processes, such as
              insurance claims, legal agreements, and financial transactions,
              removing intermediaries and reducing the potential for disputes.
            </p>
            <h3 className="xl:text-lg text-base mt-2 mb-4 font-bold text-black">
              Intellectual Property:
            </h3>
            <p className="text-lg leading-8 mb-5">
              Blockchain can be used to record and protect intellectual property
              rights. Artists, writers, and creators can timestamp their work on
              the blockchain, proving its originality and ownership. This is
              especially useful in the digital age, where content can be easily
              replicated and shared.
            </p>
            <h3 className="xl:text-lg text-base mt-2 mb-4 font-bold text-black">
              Energy Trading:
            </h3>
            <p className="text-lg leading-8 mb-5">
              Blockchain enables peer-to-peer energy trading, allowing
              individuals or businesses to buy and sell excess energy directly
              to each other. This can lead to more efficient use of renewable
              energy sources and reduce reliance on centralized energy
              providers.
            </p>
            <h3 className="xl:text-lg text-base mt-2 mb-4 font-bold text-black">
              Real Estate:
            </h3>
            <p className="text-lg leading-8">
              Real estate transactions often involve multiple intermediaries and
              paperwork. Blockchain streamlines this process, making it faster
              and more transparent. Property records, ownership history, and
              transactions can be securely recorded on the blockchain.
            </p>
            <h3 className="xl:text-lg text-base mt-2 mb-4 font-bold text-black">
              Education and Credentials:
            </h3>
            <p className="text-lg leading-8">
              Educational institutions are using blockchain to verify and share
              academic credentials and certificates. This reduces the risk of
              credential fraud and simplifies the verification process for
              employers.
            </p>
            <h3 className="xl:text-lg text-base mt-2 mb-4 font-bold text-black">
              Food Safety:
            </h3>
            <p className="text-lg leading-8">
              Beyond supply chain tracking, blockchain can be used to ensure
              food safety by recording data on the conditions and handling of
              food products. Consumers can scan QR codes to access detailed
              information about the food they purchase, including its origin and
              safety certifications.
            </p>
            <h3 className="xl:text-lg text-base mt-2 mb-4 font-bold text-black">
              Conclusion
            </h3>
            <p className="text-lg leading-8">
              Blockchain technology has transcended its origins in
              cryptocurrency and is now a transformative force in various
              industries. Its decentralized and secure nature makes it an ideal
              solution for improving transparency, reducing fraud, and
              streamlining processes in areas such as supply chain management,
              voting systems, healthcare, and beyond. As blockchain continues to
              evolve, its potential to disrupt traditional systems and improve
              efficiency across diverse sectors remains promising.
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

export default BlockchainCryptocurrency;
