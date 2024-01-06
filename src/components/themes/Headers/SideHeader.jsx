import React, { useState } from "react";
import { Tooltip } from "../../Tooltip";
import { Link } from "react-scroll";
import {
  appleAppStoreLink,
  googlePlayStoreLink,
  scrollDuration,
} from "../../../config/commonConfig";

function SideHeader({ darkTheme = false }) {
  const [isNavModalClose, setIsNavModalClose] = useState(true);

  return (
    <header id="header" className="sticky-top">
      {/* Navbar */}
      <nav
        className={
          "primary-menu navbar navbar-expand-lg fw-500 text-4 " +
          (darkTheme ? "navbar-dark bg-dark border-bottom-0" : "")
        }
      >
        <div className="container-lg position-relative h-100 flex-lg-column px-lg-3 px-lg-5 py-lg-4">
          {/* Logo */}
          <a
            className="logo text-lg-end d-lg-block mt-lg-3 mb-lg-4"
            href="/"
            title="MXapp"
          >
            {" "}
            <img
              src={darkTheme ? "images/logo-light.png" : "images/logo-2.png"}
              alt="MXapp"
            />{" "}
          </a>
          {/* Logo End */}
          <div
            id="header-nav"
            className={
              "collapse navbar-collapse w-100 " +
              (isNavModalClose ? "" : "show")
            }
          >
            <ul className="navbar-nav my-lg-auto text-lg-end">
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
          </div>
          <ul
            className={
              "social-icons social-icons-lg mt-lg-4 me-n1 d-none d-sm-flex ms-auto " +
              (darkTheme ? "social-icons-light" : "")
            }
          >
            <Tooltip text="Get it on Google Play" placement="top">
              <li className="social-icons-google">
                <a
                  data-bs-toggle="tooltip"
                  href={googlePlayStoreLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  title
                  data-bs-original-title="Get it on Google Play"
                >
                  <i className="fab fa-google-play" />
                </a>
              </li>
            </Tooltip>
            <Tooltip text="Get it on the App Store" placement="top">
              <li className="social-icons-apple">
                <a
                  href={appleAppStoreLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-apple" />
                </a>
              </li>
            </Tooltip>
          </ul>
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
        </div>
      </nav>
      {/* Navbar End */}
    </header>
  );
}

export default SideHeader;
