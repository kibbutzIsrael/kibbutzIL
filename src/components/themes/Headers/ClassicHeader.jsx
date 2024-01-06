import React, { useState } from "react";
import { scrollDuration } from "../../../config/commonConfig";
import { Link } from "react-scroll";

function ClassicHeader() {
  const [stickyHeader, setStickyHeader] = useState(false);
  const [isNavModalClose, setIsNavModalClose] = useState(true);

  const checkScrollTop = () => {
    let header = document.getElementsByClassName("primary-menu");

    if (header) {
      if (
        document.body.scrollTop > 180 ||
        document.documentElement.scrollTop > 180
      ) {
        setStickyHeader(true);
      } else {
        setStickyHeader(false);
      }
    }
  };

  if (typeof window !== "undefined") {
    window.addEventListener("scroll", checkScrollTop);
  }

  return (
    <header id="header" className="sticky-top-slide">
      {/* Navbar */}
      <nav
        className={
          "primary-menu navbar navbar-expand-lg text-uppercas text-3 fw-600 " +
          (stickyHeader ? "sticky-on " : " ")
        }
      >
        <div className="container-lg">
          {/* Logo */}
          <a className="logo" href="/" title="MXapp">
            {" "}
            <img src="images/logo.png" alt="MXapp" />{" "}
          </a>
          {/* Logo End */}
          <button
            className={
              "navbar-toggler " + (isNavModalClose ? "collapsed" : "show")
            }
            type="button"
            onClick={() => setIsNavModalClose(!isNavModalClose)}
          >
            <span />
            <span />
            <span />
          </button>
          <div
            id="header-nav"
            className={
              "collapse navbar-collapse justify-content-end " +
              (isNavModalClose ? "" : "show")
            }
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link
                  className="nav-link "
                  smooth="easeInOutQuint"
                  duration={scrollDuration}
                  style={{ cursor: "pointer" }}
                  activeClass="active"
                  spy
                  to="home"
                  onClick={(e) => {
                    e.preventDefault();
                    setIsNavModalClose(true);
                  }}
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link "
                  smooth="easeInOutQuint"
                  duration={scrollDuration}
                  style={{ cursor: "pointer" }}
                  activeClass="active"
                  spy
                  to="about"
                  onClick={(e) => {
                    e.preventDefault();
                    setIsNavModalClose(true);
                  }}
                >
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link "
                  smooth="easeInOutQuint"
                  duration={scrollDuration}
                  style={{ cursor: "pointer" }}
                  activeClass="active"
                  spy
                  to="features"
                  onClick={(e) => {
                    e.preventDefault();
                    setIsNavModalClose(true);
                  }}
                >
                  Features
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link "
                  smooth="easeInOutQuint"
                  duration={scrollDuration}
                  style={{ cursor: "pointer" }}
                  activeClass="active"
                  spy
                  to="screenshot"
                  onClick={(e) => {
                    e.preventDefault();
                    setIsNavModalClose(true);
                  }}
                >
                  Screenshot
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link "
                  smooth="easeInOutQuint"
                  duration={scrollDuration}
                  style={{ cursor: "pointer" }}
                  activeClass="active"
                  spy
                  to="testimonial"
                  onClick={(e) => {
                    e.preventDefault();
                    setIsNavModalClose(true);
                  }}
                >
                  Testimonial
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link "
                  smooth="easeInOutQuint"
                  duration={scrollDuration}
                  style={{ cursor: "pointer" }}
                  activeClass="active"
                  spy
                  to="pricing"
                  onClick={(e) => {
                    e.preventDefault();
                    setIsNavModalClose(true);
                  }}
                >
                  Pricing
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link "
                  smooth="easeInOutQuint"
                  duration={scrollDuration}
                  style={{ cursor: "pointer" }}
                  activeClass="active"
                  spy
                  to="faq"
                  onClick={(e) => {
                    e.preventDefault();
                    setIsNavModalClose(true);
                  }}
                >
                  Faq
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link "
                  smooth="easeInOutQuint"
                  duration={scrollDuration}
                  style={{ cursor: "pointer" }}
                  activeClass="active"
                  spy
                  to="contact"
                  onClick={(e) => {
                    e.preventDefault();
                    setIsNavModalClose(true);
                  }}
                >
                  Contact Us
                </Link>
              </li>
              <li className="align-items-center h-auto ms-lg-3">
                <Link
                  className="nav-link btn btn-primary link-light text-3 fw-600 shadow-none d-inline-block mt-3 mt-lg-0 smooth-scroll"
                  smooth="easeInOutQuint"
                  duration={scrollDuration}
                  style={{ cursor: "pointer" }}
                  activeClass="active"
                  spy
                  to="download"
                  onClick={(e) => {
                    e.preventDefault();
                    setIsNavModalClose(true);
                  }}
                >
                  Download
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/* Navbar End */}
    </header>
  );
}

export default ClassicHeader;
