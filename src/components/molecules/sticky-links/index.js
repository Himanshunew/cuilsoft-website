import Link from "next/link";
import React from "react";
import { FaGoogle, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { SiIndeed } from "react-icons/si";

export const StickyLinks = () => {
  return (
    <div className="icon-bar">
      <Link href="https://goo.gl/maps/m4HJqYtfVSKrh2eo7">
        <a target="_blank" className="google">
          <FaGoogle />
          <p>Google</p>
        </a>
      </Link>
      <Link href="https://www.linkedin.com/company/cuilsoft/">
        <a target="_blank" className="linkedin">
          <FaLinkedinIn />
          <p>Linkedin</p>
        </a>
      </Link>
      <Link href="https://www.instagram.com/cuilsoft/">
        <a target="_blank" className="instagram">
          <FaInstagram />
          <p>Instagram</p>
        </a>
      </Link>
      {/* <Link href="#">
        <a target="_blank" className="indeed">
          <SiIndeed />
          <p>Indeed</p>
        </a>
      </Link> */}
    </div>
  );
};
