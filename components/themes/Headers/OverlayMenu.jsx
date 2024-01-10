import React, { useState } from "react";
import {
  IntroBgConfig,
  appleAppStoreLink,
  appliedConfig,
  googlePlayStoreLink,
  scrollDuration,
} from "../../../config/commonConfig";
import { Link } from "react-scroll";

const OverlayMenu = () => {
  const [stickyHeader, setStickyHeader] = useState(false);
  const [isNavModalClose, setIsNavModalClose] = useState(true);

  const checkScrollTop = () => {
    let header = document.getElementsByClassName("primary-menu");

    if (header) {
      if (
        document.body.scrollTop > 1 ||
        document.documentElement.scrollTop > 1
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
    <header id="header" className="sticky-top">
      {/* Navbar */}
      <nav
        className={
          "primary-menu navbar navbar-expand-none navbar-overlay bg-transparent navbar-underline border-bottom-0 text-5 fw-600 " +
          (stickyHeader ? "sticky-on-top " : " ") +
          (appliedConfig.appliedIntroBg === IntroBgConfig.Default
            ? " "
            : "navbar-dark ")
        }
      >
        <div className="container-lg">
          {/* Logo */}
          <a className="logo" href="/" title="MXapp">
            {" "}
            <img src="images/logo-light.png" alt="MXapp" />{" "}
          </a>
          {/* Logo End */}
          <button
            className={
              "navbar-toggler ms-auto " +
              (isNavModalClose ? "collapsed" : "show")
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
              "collapse navbar-collapse " + (isNavModalClose ? "" : "show")
            }
          >
            <div className="d-flex flex-column h-100 align-items-center justify-content-center">
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
              </ul>
              <div className="text-center">
                <a
                  href={appleAppStoreLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={
                    "btn rounded-pill shadow-none fw-600 d-inline-flex align-items-center m-2 " +
                    (appliedConfig.appliedIntroBg === IntroBgConfig.Default
                      ? "btn-outline-dark "
                      : "btn-outline-light ")
                  }
                >
                  <i className="fab fa-apple text-5 me-3" />
                  App Store
                </a>
                <a
                  href={googlePlayStoreLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={
                    "btn rounded-pill shadow-none fw-600 d-inline-flex align-items-center m-2 " +
                    (appliedConfig.appliedIntroBg === IntroBgConfig.Default
                      ? "btn-outline-dark "
                      : "btn-outline-light ")
                  }
                >
                  <i className="fab fa-google-play text-5 me-3" />
                  Play Store
                </a>
              </div>
            </div>
          </div>
          <Link
            className={
              "btn  btn-sm px-4 rounded-pill text-uppercase fw-600 shadow-none smooth-scroll ms-2 " +
              (appliedConfig.appliedIntroBg === IntroBgConfig.Default
                ? "btn-outline-dark "
                : "btn-outline-light ")
            }
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
        </div>
      </nav>
      {/* Navbar End */}
    </header>
  );
};

export default OverlayMenu;
