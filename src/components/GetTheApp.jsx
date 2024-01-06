import React from "react";
import { Parallax } from "react-parallax";
import { appleAppStoreLink, googlePlayStoreLink } from "../config/commonConfig";

function GetTheApp() {
  return (
    <section id="download" className="hero-wrap">
      <div className="hero-mask opacity-9 bg-primary" />

      <Parallax
        bgImage="images/intro-bg-2.jpg"
        bgImageAlt="Intro"
        strength={200}
      >
        <div className="hero-content section">
          <div className="container">
            <div className="justify-content-center text-center">
              <h2 className="text-9 fw-600 text-white text-center mb-3">
                Get the App
              </h2>
              <hr className="heading-separator-line bg-white opacity-10 mx-auto" />
              <p className="lead text-center text-white mb-4">
                Download our app! Join over 500,000 people already using Our
                App.
              </p>
              <a
                className="d-inline-flex mx-3 my-2"
                href={appleAppStoreLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="images/app-store.png" alt="" />
              </a>
              <a
                className="d-inline-flex mx-3 my-2"
                href={googlePlayStoreLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="images/google-play-store.png" alt="" />
              </a>
            </div>
          </div>
        </div>
      </Parallax>
    </section>
  );
}

export default GetTheApp;
