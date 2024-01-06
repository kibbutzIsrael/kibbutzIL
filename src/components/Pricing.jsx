import React from "react";
import { HeaderConfig, appliedConfig } from "../config/commonConfig";

function Pricing() {
  return (
    <section
      id="pricing"
      className={
        "section bg-light " +
        (appliedConfig.appliedHeader === HeaderConfig.SideHeaderDark ||
        appliedConfig.appliedHeader === HeaderConfig.SideHeaderLight
          ? "px-lg-4 "
          : " ")
      }
    >
      <div className="container">
        <h2 className="text-9 fw-600 text-center">Pricing Plan</h2>
        <hr className="heading-separator-line bg-primary opacity-10 mx-auto" />
        <p className="lead text-center mb-5">
          You can present your app pricing plan here!
        </p>
        <div className="row gy-4">
          <div className="col-sm-6 col-lg-3">
            <div className="card text-center border-0 shadow-md">
              <div className="card-header text-6 fw-500 text-bg-secondary border-bottom-0 py-4">
                Basic
              </div>
              <div className="card-body">
                <h5 className="text-9 fw-600 mb-0">Free</h5>
                <p className=" text-2 badge text-bg-warning fw-600 rounded-pill">
                  Monthly
                </p>
                <ul className="list-style-2 text-2 text-start">
                  <li>
                    <span className="text-1 me-2">
                      <i className="fas fa-check" />
                    </span>
                    Fully Responsive
                  </li>
                  <li>
                    <span className="text-1 me-2">
                      <i className="fas fa-check" />
                    </span>
                    Dedicated Support
                  </li>
                  <li>
                    <span className="text-1 me-2">
                      <i className="fas fa-check" />
                    </span>
                    Clean and Modern Design
                  </li>
                  <li>
                    <span className="text-1 me-2">
                      <i className="fas fa-check" />
                    </span>
                    Simple and Professional
                  </li>
                  <li>
                    <span className="text-1 me-2">
                      <i className="fas fa-times" />
                    </span>
                    24/7 Support
                  </li>
                </ul>
                <a href="/" className="btn btn-secondary text-uppercase my-1">
                  Start Now
                </a>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-lg-3">
            <div className="card text-center border-0 shadow-md">
              <div className="card-header text-6 fw-500 text-bg-secondary border-bottom-0 py-4">
                Advance
              </div>
              <div className="card-body">
                <h5 className="text-9 fw-600 mb-0">$9.99</h5>
                <p className=" text-2 badge text-bg-warning fw-600 rounded-pill">
                  Monthly
                </p>
                <ul className="list-style-2 text-2 text-start">
                  <li>
                    <span className="text-1 me-2">
                      <i className="fas fa-check" />
                    </span>
                    Fully Responsive
                  </li>
                  <li>
                    <span className="text-1 me-2">
                      <i className="fas fa-check" />
                    </span>
                    Dedicated Support
                  </li>
                  <li>
                    <span className="text-1 me-2">
                      <i className="fas fa-check" />
                    </span>
                    Clean and Modern Design
                  </li>
                  <li>
                    <span className="text-1 me-2">
                      <i className="fas fa-check" />
                    </span>
                    Simple and Professional
                  </li>
                  <li>
                    <span className="text-1 me-2">
                      <i className="fas fa-check" />
                    </span>
                    24/7 Support
                  </li>
                </ul>
                <a href="/" className="btn btn-secondary text-uppercase my-1">
                  Start Now
                </a>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-lg-3">
            <div className="card text-center border-0 shadow-md">
              <div className="card-header text-6 fw-500 text-bg-primary border-bottom-0 py-4">
                Standard
              </div>
              <div className="card-body">
                <h5 className="text-9 fw-600 mb-0">$19.99</h5>
                <p className=" text-2 badge text-bg-warning fw-600 rounded-pill">
                  Monthly
                </p>
                <ul className="list-style-2 text-2 text-start">
                  <li>
                    <span className="text-1 me-2">
                      <i className="fas fa-check" />
                    </span>
                    Fully Responsive
                  </li>
                  <li>
                    <span className="text-1 me-2">
                      <i className="fas fa-check" />
                    </span>
                    Dedicated Support
                  </li>
                  <li>
                    <span className="text-1 me-2">
                      <i className="fas fa-check" />
                    </span>
                    Clean and Modern Design
                  </li>
                  <li>
                    <span className="text-1 me-2">
                      <i className="fas fa-check" />
                    </span>
                    Simple and Professional
                  </li>
                  <li>
                    <span className="text-1 me-2">
                      <i className="fas fa-check" />
                    </span>
                    24/7 Support
                  </li>
                </ul>
                <a href="/" className="btn btn-primary text-uppercase my-1">
                  Start Now
                </a>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-lg-3">
            <div className="card text-center border-0 shadow-md">
              <div className="card-header text-6 fw-500 text-bg-secondary border-bottom-0 py-4">
                Premium
              </div>
              <div className="card-body">
                <h5 className="text-9 fw-600 mb-0">$29.99</h5>
                <p className=" text-2 badge text-bg-warning fw-600 rounded-pill">
                  Monthly
                </p>
                <ul className="list-style-2 text-2 text-start">
                  <li>
                    <span className="text-1 me-2">
                      <i className="fas fa-check" />
                    </span>
                    Fully Responsive
                  </li>
                  <li>
                    <span className="text-1 me-2">
                      <i className="fas fa-check" />
                    </span>
                    Dedicated Support
                  </li>
                  <li>
                    <span className="text-1 me-2">
                      <i className="fas fa-check" />
                    </span>
                    Clean and Modern Design
                  </li>
                  <li>
                    <span className="text-1 me-2">
                      <i className="fas fa-check" />
                    </span>
                    Simple and Professional
                  </li>
                  <li>
                    <span className="text-1 me-2">
                      <i className="fas fa-check" />
                    </span>
                    24/7 Support
                  </li>
                </ul>
                <a href="/" className="btn btn-secondary text-uppercase my-1">
                  Start Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Pricing;
