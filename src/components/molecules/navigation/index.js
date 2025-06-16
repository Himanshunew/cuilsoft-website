/* eslint-disable @next/next/no-html-link-for-pages */
import { useRouter } from "next/router";
import React from "react";
import { DropdownData, NavItemData } from "../../../constants/navItemData";
import { NavItem } from "../../atoms/nav-link";

export const Navigations = () => {
  const router = useRouter();
  return (
    <div className="uppercase items-center text-sm text-[#232323] font-bold lg:flex gap-10 hidden">
      {NavItemData.map((item, idx) => (
        <React.Fragment key={idx}>
          {item.dropdown ? (
            <>
              <div className="dropdown">
                <NavItem
                  className={
                    router.pathname === item.pathname
                      ? "text-secondary border-b-2 border-secondary"
                      : "text-[#403D3D]"
                  }
                  title={item.title}
                  icon={item.icon}
                  linkto={item.pathname}
                />
                <div className="dropdown-content">
                  {DropdownData.map((itm, i) => (
                    <NavItem
                      key={i}
                      icon={itm.icon}
                      title={itm.title}
                      linkto={itm.linkto}
                    />
                  ))}
                </div>
              </div>
            </>
          ) : (
            <NavItem
              className={
                router.pathname === item.pathname
                  ? "text-secondary border-b-2 border-secondary"
                  : "text-[#403D3D]"
              }
              key={idx}
              icon={item.icon}
              title={item.title}
              linkto={item.pathname}
            />
          )}
        </React.Fragment>
      ))}
      <div className="flex gap-3">
        <button
          onClick={() => router.push("/contact")}
          className="outlineBtn outlineBtnWrap hoverBtn relative inline-block bg-transparent cursor-pointer outline-none"
        >
          <span className="hover:text-[#403D3D] text-secondary border-2 border-[#403d3d] transition-all relative inline-block left-0 top-0 px-5 py-3">
            Contact us
          </span>
        </button>
        <div className="solidBtnOuter align-center expanded text-center solidBtn relative z-[1]">
          <button
            onClick={() => router.push("/industrial-training")}
            data-hover="Industrial Training"
            className="font-bold transition-all duration-700 overflow-hidden mx-3 p-0"
          >
            <span className="block px-5 py-3 bg-secondary text-white border-2 border-secondary">Industrial Training</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export const MobileNavigation = () => {
  return (
    <nav className="navbar lg:hidden block">
      <div className="navbar-container">
        <input type="checkbox" name="" id="" />
        <div className="hamburger-lines">
          <span className="line line1"></span>
          <span className="line line2"></span>
          <span className="line line3"></span>
        </div>
        <ul className="menu-items">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/who-we-are">Who-we-are</a>
          </li>
          <li>
            <a href="/services">Services</a>
          </li>
          <li>
            <a href="/our-work">Our Work</a>
          </li>
          <li>
            <a href="/industrial-training">Industrial Training</a>
          </li>
          <li>
            <a href="/contact">Contact Us</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
export const TrainingMobileNavigation = () => {
  return (
    <nav className="navbar lg:hidden block">
      <div className="navbar-container">
        <input type="checkbox" name="" id="" />
        <div className="hamburger-lines">
          <span className="line line1"></span>
          <span className="line line2"></span>
          <span className="line line3"></span>
        </div>
        <ul className="menu-items">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/jobs">Jobs</a>
          </li>
          <li>
            <a href="/industrial-training">Trainings</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

