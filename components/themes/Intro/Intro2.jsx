import React from "react";
import {
  HeaderConfig,
  IntroBgConfig,
  IntroContentConfig,
  appleAppStoreLink,
  appliedConfig,
  googlePlayStoreLink,
} from "../../../config/commonConfig";
import videobg from "../../../videos/intro.mp4";
import { Parallax } from "react-parallax";

function Intro2() {
  const applyOpacityAndMask = () => {
    if (appliedConfig.appliedIntroBg === IntroBgConfig.Default) {
      return "opacity-1 bg-primary";
    } else if (appliedConfig.appliedIntroBg === IntroBgConfig.Image) {
      return "opacity-5 bg-primary";
    } else {
      return "opacity-9 bg-dark";
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
                height: "100%",
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
            >
              <div className="hero-bg parallax" />
            </Parallax>
          </div>
        )}

        <div
          className={
            "hero-content d-flex " +
            (appliedConfig.appliedHeader === HeaderConfig.ClassicHeader
              ? "fullscreen-with-header "
              : "fullscreen pt-5 ") +
            (appliedConfig.appliedHeader === HeaderConfig.SideHeaderDark ||
            appliedConfig.appliedHeader === HeaderConfig.SideHeaderLight
              ? "px-lg-5 "
              : " ")
          }
        >
          <div className="container my-auto">
            <div className="row my-5 my-lg-0">
              <div className="col-lg-6 align-self-center text-center text-lg-start order-1 order-lg-0">
                <h2
                  className={
                    "text-17 fw-600 mb-3 " +
                    (appliedConfig.appliedIntroBg === IntroBgConfig.Video ||
                    appliedConfig.appliedIntroBg === IntroBgConfig.Image
                      ? "text-white "
                      : " ")
                  }
                >
                  Your Mobile{" "}
                  <span
                    className={
                      appliedConfig.appliedIntroBg === IntroBgConfig.Default
                        ? "text-primary"
                        : ""
                    }
                  >
                    App
                  </span>{" "}
                  Showcase
                </h2>
                <p
                  className={
                    "lead mb-4 " +
                    (appliedConfig.appliedIntroBg === IntroBgConfig.Video ||
                    appliedConfig.appliedIntroBg === IntroBgConfig.Image
                      ? "text-white "
                      : " ")
                  }
                >
                  Create your next mobile app landing page in minutes. Lisque
                  persius interesset his et, in quot quidam persequeris vim, ad
                  mea essent possim iriure.
                </p>
                <div className="d-inline-flex pt-2">
                  <a
                    className="me-4"
                    href={appleAppStoreLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      className="img-fluid"
                      src="images/app-store.png"
                      alt=""
                    />
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
                  </a>
                </div>
              </div>
              {/* image content start */}
              {appliedConfig.appliedIntroContent ===
                IntroContentConfig.Image && (
                <div className="col-lg-6 d-flex align-items-center justify-content-center order-0 order-lg-1 mb-4 mb-lg-0">
                  <img
                    className="img-fluid"
                    src="images/app-showcase.png"
                    alt=""
                  />
                </div>
              )}
              {/* image content end */}

              {/* youtube content start */}
              {appliedConfig.appliedIntroContent ===
                IntroContentConfig.Video && (
                <div className="col-lg-6 align-self-center order-0 order-lg-1 mb-5 mb-lg-0">
                  <div className="player shadow-lg rounded-lg ratio ratio-16x9">
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
              {/* youtube content end */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Intro2;
