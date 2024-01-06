import React from "react";
import { Parallax } from "react-parallax";

function Counter() {
  return (
    <section id="counter" className=" hero-wrap">
      <div className="hero-mask opacity-8 bg-dark" />

      <Parallax
        bgImage="images/intro-bg-4.jpg"
        bgImageAlt="Intro"
        strength={200}
      >
        <div className="hero-content section">
          <div className="container">
            <div className="row gy-5">
              <div className="col-6 col-md-3">
                <div className="featured-box text-center">
                  <div className="featured-box-icon text-white">
                    <i className="fas fa-users" />
                  </div>
                  <h4 className="text-11 text-white fw-500">120K</h4>
                  <p className="text-light mb-0">Happy Users</p>
                </div>
              </div>
              <div className="col-6 col-md-3">
                <div className="featured-box text-center">
                  <div className="featured-box-icon text-white">
                    <i className="fas fa-star-half-alt" />
                  </div>
                  <h4 className="text-11 text-white fw-500">46K</h4>
                  <p className="text-light mb-0">Positive Ratings</p>
                </div>
              </div>
              <div className="col-6 col-md-3">
                <div className="featured-box text-center">
                  <div className="featured-box-icon text-white">
                    <i className="fas fa-download" />
                  </div>
                  <h4 className="text-11 text-white fw-500">125K</h4>
                  <p className="text-light mb-0">Total Download</p>
                </div>
              </div>
              <div className="col-6 col-md-3">
                <div className="featured-box text-center">
                  <div className="featured-box-icon text-white">
                    <i className="fas fa-gem" />
                  </div>
                  <h4 className="text-11 text-white fw-500">58K</h4>
                  <p className="text-light mb-0">Premium Users</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Parallax>
    </section>
  );
}

export default Counter;
