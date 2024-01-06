import React from "react";
import { Parallax } from "react-parallax";
import SubscribeForm from "./SubscribeForm";
import { mailChimpUrl } from "../config/commonConfig";
import MailchimpSubscribe from "react-mailchimp-subscribe";

function Subscribe() {
  return (
    <section className="hero-wrap ">
      <div className="hero-mask opacity-9 bg-primary" />

      <Parallax
        bgImage="images/intro-bg-3.jpg"
        bgImageAlt="Intro"
        strength={200}
      >
        <div className="hero-content section">
          <div className="container">
            <div className="justify-content-center text-center">
              <h2 className="text-9 fw-600 text-white text-center mb-3">
                Subscribe to Newsletter
              </h2>
              <hr className="heading-separator-line bg-white opacity-10 mx-auto" />
              <p className="lead text-center text-white mb-4">
                Subscribe to receive latest news, new features and updates.
              </p>
              <div className="row justify-content-center">
                <div className="col-md-8 col-lg-6 col-xl-5">
                  {/* Subscribe Form */}
                  <MailchimpSubscribe
                    url={mailChimpUrl}
                    render={({ subscribe, status, message }) => (
                      <SubscribeForm
                        subscribe={subscribe}
                        status={status}
                        message={message}
                      ></SubscribeForm>
                    )}
                  />
                  {/* Subscribe Form End */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Parallax>
    </section>
  );
}

export default Subscribe;
