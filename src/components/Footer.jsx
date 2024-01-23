import React from "react";
import { Tooltip } from "./Tooltip";
import { HeaderConfig, appliedConfig } from "../config/commonConfig";

const Footer = () => {
  return (
    <footer
      id="footer"
      className={
        "section  " +
        (appliedConfig.appliedHeader === HeaderConfig.SideHeaderDark ||
        appliedConfig.appliedHeader === HeaderConfig.SideHeaderLight
          ? "px-lg-4 "
          : "bg-dark footer-text-light ")
      }
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-4 align-self-center text-center text-lg-start">
            <p className="mb-0">
              <a
                href="/"
                className="link-underline link-underline-opacity-0-hover"
              >
                KibutzIL האתר פותח על ידי חברי קהילת
              </a>
            </p>
          </div>
          <div className="col-lg-4 align-self-center justify-content-center justify-content-lg-start">
            <ul className="social-icons social-icons-lg social-icons-muted justify-content-center py-3 py-lg-0">
              {/* <Tooltip text="Twitter" placement="top">
                <li className="social-icons-twitter">
                  <a
                    data-bs-toggle="tooltip"
                    href="/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-twitter" />
                  </a>
                </li>
              </Tooltip> */}
              {/* <Tooltip text="Facebook" placement="top">
                <li className="social-icons-facebook">
                  <a
                    data-bs-toggle="tooltip"
                    href="/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-facebook-f" />
                  </a>
                </li>
              </Tooltip> */}
              <Tooltip text="Linkedin" placement="top">
                <li className="social-icons-linkedin">
                  <a
                    data-bs-toggle="tooltip"
                    href="https://www.linkedin.com/company/kibbutzil/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-linkedin-in" />
                  </a>
                </li>
              </Tooltip>
              <Tooltip text="Instagram" placement="top">
                <li className="social-icons-instagram">
                  <a
                    data-bs-toggle="tooltip"
                    href="https://www.instagram.com/kibutz.il/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-instagram" />
                  </a>
                </li>
              </Tooltip>
            </ul>
          </div>
          <div className="col-lg-4 align-self-center">
            <ul className="nav nav-separator nav-separator-light justify-content-center justify-content-lg-end">
              <li className="nav-item">
                {" "}
                <a
                  className="nav-link"
                  data-bs-toggle="modal"
                  data-bs-target="#terms"
                  href="/"
                >
                  תנאי שימוש
                </a>
              </li>
              <li className="nav-item">
                {" "}
                <a
                  className="nav-link"
                  data-bs-toggle="modal"
                  data-bs-target="#privacy"
                  href="/"
                >
                  מדיניות פרטיות
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
