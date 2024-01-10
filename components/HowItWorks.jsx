import React, { useState } from "react";
import ModalVideo from "react-modal-video";
import { Parallax } from "react-parallax";

function HowItWorks() {
  const [isOpen, setIsOpen] = useState(false);
  const videoId = "PMNnEEEacCg";
  return (
    <>
      <section id="how-it-works" className="hero-wrap">
        <div className="hero-mask opacity-7 bg-dark" />

        <Parallax
          bgImage="images/intro-bg-4.jpg"
          bgImageAlt="Intro"
          strength={200}
        >
          <div className="hero-content section">
            <div className="container text-center">
              <h2 className="text-9 fw-600 text-white mb-4 mb-lg-5">
                How it's Works? Play And Watch!
              </h2>
              <span
                onClick={() => {
                  setIsOpen(true);
                }}
                className="popup-youtube btn-video-play"
              >
                <i className="fas fa-play" />
              </span>
              <p className="text-white font text-uppercase ls-1 mt-2 mb-0">
                View Promo
              </p>
            </div>
          </div>
        </Parallax>
        <ModalVideo
          channel={"youtube"}
          autoplay
          isOpen={isOpen}
          videoId={videoId}
          onClose={() => setIsOpen(false)}
        ></ModalVideo>
      </section>
    </>
  );
}

export default HowItWorks;
