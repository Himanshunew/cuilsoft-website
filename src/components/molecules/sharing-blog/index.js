import React from "react";
import {
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
  PinterestShareButton,
} from "react-share";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaPinterestP } from "react-icons/fa";

const BlogShareButtons = ({
  blogUrl,
  blogTitle,
  blogImageUrl,
  blogDescription,
}) => {

  const basePath = typeof window !== 'undefined' ? window.location.origin : ""

  blogUrl = `${basePath}${blogUrl}`

  return (
    <div className="flex gap-5 justify-end w-full">
      <b>Share:</b>
      <FacebookShareButton url={blogUrl}>
        <FaFacebookF size={18} className="text-secondary" />
      </FacebookShareButton>

      <TwitterShareButton url={blogUrl} title={blogTitle}>
        <FaTwitter size={18} className="text-secondary" />
      </TwitterShareButton>

      <LinkedinShareButton url={blogUrl}>
        <FaLinkedinIn size={18} className="text-secondary" />
      </LinkedinShareButton>

      <PinterestShareButton
        url={blogUrl}
        media={blogImageUrl}
        description={blogDescription}
      >
        <FaPinterestP size={18} className="text-secondary" />
      </PinterestShareButton>
    </div>
  );
};

export default BlogShareButtons;
