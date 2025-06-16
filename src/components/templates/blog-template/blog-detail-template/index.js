import React, { useEffect, useRef, useState } from "react";
import Layout from "../../../organisms/layout";
import TitleBar from "../../../organisms/page-titlebar/pageTitleBar";
import Image from "next/image";

export const BlogDetailTemplate = () => {
  const [activeSection, setActiveSection] = useState("what-is-generative-ai");

  const sections = [
    { id: "what-is-generative-ai", label: "What is Generative AI?" },
    {
      id: "role-of-generative-ai",
      label: "Role of Generative AI in Various Industries",
    },
    { id: "testing-criteria", label: "Our Testing Criteria" },
    {
      id: "best-generative-ai-tools",
      label: "Best Generative AI Tools to Choose in 2025",
    },
  ];

  const sectionRefs = sections.reduce(
    (acc, section) => ({ ...acc, [section.id]: useRef(null) }),
    {}
  );

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    Object.values(sectionRefs).forEach((ref) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => {
      Object.values(sectionRefs).forEach((ref) => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      });
    };
  }, []);

  return (
    <Layout>
      <TitleBar
        title="Blockchain Beyond Cryptocurrency"
        text="Blockchain Beyond Cryptocurrency"
      />
      <section className="flex flex-col lg:flex-row gap-8 p-8 max-w-7xl mx-auto">
        {/* Sticky Sidebar Table of Contents */}
        <div className="w-full lg:w-1/4 sticky top-10 self-start">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Table of Contents
          </h2>
          <ul className="space-y-2 border-l border-gray-200 pl-6">
            {sections.map((section) => (
              <li key={section.id}>
                <a
                  href={`#${section.id}`}
                  className={`${
                    activeSection === section.id
                      ? "text-secondary font-medium"
                      : "text-gray-600"
                  } hover:text-secondary transition-colors`}
                >
                  {section.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Main Content */}
        <div className="w-full lg:w-3/4 space-y-8">
          {sections.map((section) => (
            <div key={section.id} id={section.id} ref={sectionRefs[section.id]}>
              <h3 className="text-3xl font-medium text-gray-900 mb-4">
                {section.label}
                <div className="w-40 p-[2px] bg-secondary mt-2"></div>
              </h3>
              {section.id === "what-is-generative-ai" && (
                <p className="text-gray-700 leading-relaxed">
                  Generative AI is a branch of artificial intelligence that uses
                  machine learning to generate data such as text, images,
                  videos, audio, and more Generative AI is a branch of
                  artificial intelligence that uses machine learning to generate
                  data such as text, images, videos, audio, and more Generative
                  AI is a branch of artificial intelligence that uses machine
                  learning to generate data such as text, images, videos, audio,
                  and more Generative AI is a branch of artificial intelligence
                  that uses machine learning to generate data such as text,
                  images, videos, audio, and more Generative AI is a branch of
                  artificial intelligence that uses machine learning to generate
                  data such as text, images, videos, audio, and more Generative
                  AI is a branch of artificial intelligence that uses machine
                  learning to generate data such as text, images, videos, audio,
                  and more Generative AI is a branch of artificial intelligence
                  that uses machine learning to generate data such as text,
                  images, videos, audio, and more...
                </p>
              )}
              {section.id === "role-of-generative-ai" && (
                <>
                  <p className="text-gray-700 leading-relaxed">
                    Generative AI is revolutionizing multiple industries by
                    enhancing creativity, automation, and efficiency. Generative
                    AI is revolutionizing multiple industries by enhancing
                    creativity, automation, and efficiency. Generative AI is
                    revolutionizing multiple industries by enhancing creativity,
                    automation, and efficiency. Generative AI is revolutionizing
                    multiple industries by enhancing creativity, automation, and
                    efficiency. Generative AI is revolutionizing multiple
                    industries by enhancing creativity, automation, and
                    efficiency. Generative AI is revolutionizing multiple
                    industries by enhancing creativity, automation, and
                    efficiency. Generative AI is revolutionizing multiple
                    industries by enhancing creativity, automation, and
                    efficiency. Generative AI is revolutionizing multiple
                    industries by enhancing creativity, automation, and
                    efficiency. Generative AI is revolutionizing multiple
                    industries by enhancing creativity, automation, and
                    efficiency. Generative AI is revolutionizing multiple
                    industries by enhancing creativity, automation, and
                    efficiency...
                  </p>
                  <div className="mt-5 w-full">
                    <div className="relative w-full h-auto aspect-w-16 aspect-h-9">
                      <Image
                        src="/images/blog1.jpg"
                        alt="Generative AI in Industries"
                        width={1000}
                        height={500}
                        fill
                        className="rounded-lg object-cover"
                      />
                    </div>
                  </div>
                </>
              )}
              {section.id === "testing-criteria" && (
                <>
                  <p className="text-gray-700 leading-relaxed">
                    Generative AI is revolutionizing multiple industries by
                    enhancing creativity, automation, and efficiency. Generative
                    AI is revolutionizing multiple industries by enhancing
                    creativity, automation, and efficiency. Generative AI is
                    revolutionizing multiple industries by enhancing creativity,
                    automation, and efficiency. Generative AI is revolutionizing
                    multiple industries by enhancing creativity, automation, and
                    efficiency. Generative AI is revolutionizing multiple
                    industries by enhancing creativity, automation, and
                    efficiency. Generative AI is revolutionizing multiple
                    industries by enhancing creativity, automation, and
                    efficiency. Generative AI is revolutionizing multiple
                    industries by enhancing creativity, automation, and
                    efficiency. Generative AI is revolutionizing multiple
                    industries by enhancing creativity, automation, and
                    efficiency. Generative AI is revolutionizing multiple
                    industries by enhancing creativity, automation, and
                    efficiency. Generative AI is revolutionizing multiple
                    industries by enhancing creativity, automation, and
                    efficiency...
                  </p>
                  <div className="mt-5 w-full">
                    <div className="relative w-full h-auto aspect-w-16 aspect-h-9">
                      <Image
                        src="/images/blog1.jpg"
                        alt="Generative AI in Industries"
                        width={1000}
                        height={500}
                        fill
                        className="rounded-lg object-cover"
                      />
                    </div>
                  </div>
                </>
              )}
              {section.id === "best-generative-ai-tools" && (
                <>
                  <p className="text-gray-700 leading-relaxed">
                    Generative AI is revolutionizing multiple industries by
                    enhancing creativity, automation, and efficiency. Generative
                    AI is revolutionizing multiple industries by enhancing
                    creativity, automation, and efficiency. Generative AI is
                    revolutionizing multiple industries by enhancing creativity,
                    automation, and efficiency. Generative AI is revolutionizing
                    multiple industries by enhancing creativity, automation, and
                    efficiency. Generative AI is revolutionizing multiple
                    industries by enhancing creativity, automation, and
                    efficiency. Generative AI is revolutionizing multiple
                    industries by enhancing creativity, automation, and
                    efficiency. Generative AI is revolutionizing multiple
                    industries by enhancing creativity, automation, and
                    efficiency. Generative AI is revolutionizing multiple
                    industries by enhancing creativity, automation, and
                    efficiency. Generative AI is revolutionizing multiple
                    industries by enhancing creativity, automation, and
                    efficiency. Generative AI is revolutionizing multiple
                    industries by enhancing creativity, automation, and
                    efficiency...
                  </p>
               
                </>
              )}
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
};
