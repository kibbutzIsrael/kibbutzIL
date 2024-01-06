import React from "react";
import { HeaderConfig, appliedConfig } from "../config/commonConfig";

function Features() {
  return (
    <section
      id="features"
      className={
        "section " +
        (appliedConfig.appliedHeader === HeaderConfig.SideHeaderDark ||
        appliedConfig.appliedHeader === HeaderConfig.SideHeaderLight
          ? "px-lg-4 "
          : " ")
      }
    >
      <div className="container">
        <h2 className="text-9 fw-600 text-center">App's Features</h2>
        <hr className="heading-separator-line bg-primary opacity-10 mx-auto" />
        <p className="lead text-center mb-5">
          You can present your app features. It is all very easy!
        </p>
        <div className="row">
          <div className="col-lg-4 align-self-center">
            <div className="row justify-content-center">
              <div className="col-md-6 col-lg-12">
                <div className="featured-box featured-box-reverse-xl style-3 mb-5">
                  <div className="featured-box-icon bg-body-secondary rounded-circle">
                    <i className="fas fa-pencil-ruler" />
                  </div>
                  <h3>Exclusive Design</h3>
                  <p>
                    Lisque persius interesset his et, in quot quidam persequeris
                    vim, ad mea essent possim iriure.
                  </p>
                </div>
              </div>
              <div className="col-md-6 col-lg-12">
                <div className="featured-box featured-box-reverse-xl style-3 mb-5">
                  <div className="featured-box-icon bg-body-secondary rounded-circle">
                    <i className="fas fa-cloud-upload-alt" />
                  </div>
                  <h3>Your Data in Cloud</h3>
                  <p>
                    Lisque persius interesset his et, in quot quidam persequeris
                    vim, ad mea essent possim iriure.
                  </p>
                </div>
              </div>
              <div className="col-md-6 col-lg-12">
                <div className="featured-box featured-box-reverse-xl style-3 mb-5">
                  <div className="featured-box-icon bg-body-secondary rounded-circle">
                    <i className="fas fa-tags" />
                  </div>
                  <h3>Low Pricing</h3>
                  <p>
                    Lisque persius interesset his et, in quot quidam persequeris
                    vim, ad mea essent possim iriure.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 text-center mb-4 mb-xl-0">
            <img
              alt=""
              src="images/app-showcase-feature.png"
              className="img-fluid"
            />
          </div>
          <div className="col-lg-4 align-self-center">
            <div className="row justify-content-center">
              <div className="col-md-6 col-lg-12">
                <div className="featured-box style-3 mb-5">
                  <div className="featured-box-icon bg-body-secondary rounded-circle">
                    <i className="fas fa-lock" />
                  </div>
                  <h3>Fully Secured</h3>
                  <p>
                    Lisque persius interesset his et, in quot quidam persequeris
                    vim, ad mea essent possim iriure.
                  </p>
                </div>
              </div>
              <div className="col-md-6 col-lg-12">
                <div className="featured-box style-3 mb-5">
                  <div className="featured-box-icon bg-body-secondary rounded-circle">
                    <i className="fas fa-paper-plane" />
                  </div>
                  <h3>Easy to Use</h3>
                  <p>
                    Lisque persius interesset his et, in quot quidam persequeris
                    vim, ad mea essent possim iriure.
                  </p>
                </div>
              </div>
              <div className="col-md-6 col-lg-12">
                <div className="featured-box style-3 mb-5">
                  <div className="featured-box-icon bg-body-secondary rounded-circle">
                    <i className="fas fa-sync-alt" />
                  </div>
                  <h3>Free Updates</h3>
                  <p>
                    Lisque persius interesset his et, in quot quidam persequeris
                    vim, ad mea essent possim iriure.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;
