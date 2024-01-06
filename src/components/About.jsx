import React from "react";
import {
  HeaderConfig,
  IntroContentConfig,
  IntroThemeConfig,
  appleAppStoreLink,
  appliedConfig,
  googlePlayStoreLink,
} from "../config/commonConfig";
const AboutUs = () => {
  return (
    <section
      id="about"
      className={
        "section " +
        (appliedConfig.appliedHeader === HeaderConfig.SideHeaderDark ||
        appliedConfig.appliedHeader === HeaderConfig.SideHeaderLight
          ? "px-lg-4 "
          : " ")
      }
    >
      <div
        className={
          "container " +
          (appliedConfig.appliedIntro === IntroThemeConfig.Intro1 &&
          appliedConfig.appliedIntroContent === IntroContentConfig.Image
            ? "pt-5 "
            : " ")
        }
      >
        <h2 className="text-9 fw-600 text-center">About Our App</h2>
        <hr className="heading-separator-line bg-primary opacity-10 mx-auto" />
        <p className="lead text-center mb-4">
          You can present your app. It is all very easy!
        </p>
        <div className="row">
          <div className="col-lg-6 text-center">
            {" "}
            <img className="img-fluid" src="images/about-app.png" alt="" />{" "}
          </div>
          <div className="col-lg-6 text-center text-lg-start">
            <h2 className="text-6 mb-3 mt-4">
              Inspired Design for App Landing
            </h2>
            <p>
              Lisque persius interesset his et, in quot quidam persequeris vim,
              ad mea essent possim iriure. simply dummy text of the printing and
              typesetting industry quidam interesset his et.
            </p>
            <p>
              Lorem Ipsum has been the industry's standard dummy text when an
              unknown printer took a galley of type and scrambled it to make a
              type specimen book.
            </p>
            <div className="d-inline-flex pt-2">
              {" "}
              <a
                className="me-4"
                href={appleAppStoreLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img className="img-fluid" src="images/app-store.png" alt="" />
              </a>
              <a
                href={googlePlayStoreLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="img-fluid"
                  src="images/google-play-store.png"
                  alt=""
                />
              </a>{" "}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
