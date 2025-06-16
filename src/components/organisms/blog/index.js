import { useRouter } from "next/router";
import React from "react";
import { SolidButton } from "../../atoms/buttons/solid-bitton";
import { BlogPost } from "../../molecules/blog-post-box";
import { SectionHeader } from "../../molecules/section-header";

export const OurBlogs = ({ BlogPostData, title, desc, showAll }) => {
  const router = useRouter();
  return (
    <section className="blogs_main py-16 mt-20">
      <div className="container overflow-x-hidden pb-5">
        <div
          data-aos="fade-right"
          data-aos-easing="linear"
          data-aos-duration="1000"
        >
          <SectionHeader className=" w-full "
            subtitle="BLOG"
            title={title ? title : "Latest News & Articles"}
            des={
              desc
                ? desc
                : "Find out what’s happening now, this week, or this month, so you never miss a thing"
            }
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
            {BlogPostData.map((item, i) => (
              <BlogPost
                key={i}
                source={item.source}
                date={item.date}
                month={item.month}
                linkto={item.linkto}
                title={item.title}
                des={item.des}
                id={item.id}
              />
            ))}
          </div>
          {!showAll ?
            (
              <div className="flex justify-center mt-12">
                <SolidButton
                  title="View All"
                  className="uppercase leading-5"
                  hoverText="VIEW ALL"
                  onClick={() => router.push("/blog")}
                />
              </div>
            )
            : null}
        </div>
      </div>
    </section>
  );
};
