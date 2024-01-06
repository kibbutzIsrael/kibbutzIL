import React from "react";
import {
  HeaderConfig,
  IntroBgConfig,
  IntroContentConfig,
  appliedConfig,
} from "../../../config/commonConfig";
import videobg from "../../../videos/intro.mp4";
import { Parallax } from "react-parallax";

function Intro1() {
  const applyOpacityAndMask = () => {
    if (appliedConfig.appliedIntroBg === IntroBgConfig.Default) {
      return "opacity-1 bg-primary";
    } else if (appliedConfig.appliedIntroBg === IntroBgConfig.Image) {
      return "opacity-5 bg-primary";
    } else {
      if (appliedConfig.appliedHeader === HeaderConfig.SideHeaderDark)
        return "opacity-9 bg-primary";
      else return "opacity-9 bg-dark";
    }
  };
  return (
    <section id="home">
      <div className="hero-wrap">
        <div className={"hero-mask  " + applyOpacityAndMask()} />
        {appliedConfig.appliedIntroBg === IntroBgConfig.Video && (
          <div className="player hero-bg ">
            <video
              src={videobg}
              autoPlay
              muted
              loop
              playsinline="true"
              style={{
                width: "100%",
                height: "100vh",
                minHeight: "100%",
                objectFit: "cover",
              }}
            ></video>
          </div>
        )}
        {appliedConfig.appliedIntroBg === IntroBgConfig.Image && (
          <div className="intro-parallax-container">
            <Parallax
              style={{
                width: "100%",
                height: "100%",
              }}
              bgImage="images/intro-bg.jpg"
              bgImageAlt="Intro"
              strength={200}
            ></Parallax>
          </div>
        )}

        <div
          className={
            "hero-content d-flex " +
            (appliedConfig.appliedHeader === HeaderConfig.ClassicHeader
              ? "fullscreen-with-header "
              : "fullscreen ") +
            (appliedConfig.appliedHeader === HeaderConfig.DefaultHeader ||
            appliedConfig.appliedHeader === HeaderConfig.OverlayMenu
              ? "pt-5 "
              : " ")
          }
        >
          <div className="container my-auto pt-5">
            <div className="row mt-5">
              <div className="col-lg-12 align-self-center text-center">
                <p
                  className={
                    " ls-4 text-uppercase " +
                    (appliedConfig.appliedIntroBg === IntroBgConfig.Video ||
                    appliedConfig.appliedIntroBg === IntroBgConfig.Image
                      ? "text-white "
                      : " ")
                  }
                >
                  - Most flexible landing page -
                </p>
                <h2
                  className={
                    "text-13 fw-600  mb-3 " +
                    (appliedConfig.appliedIntroBg === IntroBgConfig.Video ||
                    appliedConfig.appliedIntroBg === IntroBgConfig.Image
                      ? "text-white "
                      : " ")
                  }
                >
                  Your Mobile App Showcase
                </h2>
                <p
                  className={
                    "lead  mb-5 " +
                    (appliedConfig.appliedIntroBg === IntroBgConfig.Video ||
                    appliedConfig.appliedIntroBg === IntroBgConfig.Image
                      ? "text-white "
                      : " ")
                  }
                >
                  Create your next mobile app landing page in minutes.
                </p>
                {/* image start */}
                {appliedConfig.appliedIntroContent ===
                  IntroContentConfig.Image && (
                  <img
                    className="img-fluid mb-n5"
                    src="images/app-showcase.png"
                    alt=""
                  />
                )}
                {/* image end */}
              </div>
              {/* youtube video start */}
              {appliedConfig.appliedIntroContent ===
                IntroContentConfig.Video && (
                <div className="col-lg-9 mx-auto">
                  <div className="player shadow-lg rounded-lg ratio ratio-16x9 mb-5">
                    <iframe
                      src="https://www.youtube.com/embed/5W29ZASPo3I?autoplay=1&mute=1"
                      title="App explainer video | Now Health International | 2016"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowfullscreen
                    ></iframe>
                  </div>
                </div>
              )}
              {/* youtube video end */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Intro1;
