import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import {
  HeaderConfig,
  appliedConfig,
  emailjsConfig,
} from "../config/commonConfig";

const Contact = () => {
  const form = useRef();
  const [sendingMail, setSendingMail] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setSendingMail(true);
    emailjs
      .sendForm(
        emailjsConfig.serviceId,
        emailjsConfig.templateId,
        form.current,
        emailjsConfig.userId
      )
      .then(
        (result) => {
          document.getElementById("contact-form").reset();
          toast.success("Message sent successfully!", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
          console.log(result.text);
          setSendingMail(false);
        },
        (error) => {
          toast.error("Something went wrong!", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
          console.log(error.text);
          setSendingMail(false);
        }
      );
  };

  return (
    <section
      id="contact"
      className={
        appliedConfig.appliedHeader === HeaderConfig.SideHeaderDark ||
        appliedConfig.appliedHeader === HeaderConfig.SideHeaderLight
          ? "bg-light"
          : ""
      }
    >
      <div className="row g-0">
        <div className="col-md-6 col-lg-7">
          <div className="section px-4 px-sm-5 mx-lg-5">
            <h2 className="fw-600 text-center mb-3">Contact Us</h2>
            <hr className="heading-separator-line bg-primary opacity-10 mx-auto" />
            <p className="lead text-center mb-5">
              We will get back to you in less than 24 hours.
            </p>
            <form id="contact-form" ref={form} onSubmit={sendEmail}>
              <div className="mb-3">
                <input
                  id="name"
                  name="user_name"
                  type="text"
                  className="form-control border-2"
                  required
                  placeholder="Name"
                />
              </div>
              <div className="mb-3">
                <input
                  id="email"
                  name="user_email"
                  type="email"
                  className="form-control border-2"
                  required
                  placeholder="Email"
                />
              </div>
              <div className="mb-3">
                <textarea
                  id="form-message"
                  name="message"
                  className="form-control border-2"
                  rows={3}
                  required
                  placeholder="Message........"
                  defaultValue={""}
                />
              </div>
              <p className="text-center mt-4 mb-0">
                <button
                  id="submit-btn"
                  className="btn btn-primary text-uppercase"
                  type="submit"
                >
                  {sendingMail ? (
                    <>
                      <span
                        role="status"
                        aria-hidden="true"
                        className="spinner-border spinner-border-sm align-self-center me-2"
                      ></span>
                      Sending.....
                    </>
                  ) : (
                    <>{"Send Message"}</>
                  )}
                </button>
              </p>
            </form>
          </div>
        </div>
        <div
          className={
            "col-md-6 col-lg-5  " +
            (appliedConfig.appliedHeader === HeaderConfig.SideHeaderDark ||
            appliedConfig.appliedHeader === HeaderConfig.SideHeaderLight
              ? "bg-white"
              : "bg-light")
          }
        >
          <section className="section px-4 px-sm-5 mx-lg-4">
            <h2 className="fw-600 mb-3">Our Headquarter</h2>
            <hr className="heading-separator-line bg-primary opacity-10" />
            <p className="lead">
              For Customer Support and Query, Get in touch with us.
            </p>
            <div className="featured-box style-1">
              <div className="featured-box-icon text-6">
                {" "}
                <i className="fas fa-map-marker-alt" />
              </div>
              <h3>MXapp Inc.</h3>
              <p>
                4th Floor, Plot No.22, Above Public Park
                <br />
                145 Murphy Canyon Rd.
                <br />
                Suite 100-18
                <br />
                San Diego CA 2028{" "}
              </p>
            </div>
            <div className="featured-box style-1">
              <div className="featured-box-icon text-6">
                {" "}
                <i className="fas fa-phone" />{" "}
              </div>
              <h3>Telephone</h3>
              <p>(+060) 9898980098, (+060) 8898880088</p>
            </div>
            <div className="featured-box style-1">
              <div className="featured-box-icon text-6">
                {" "}
                <i className="fas fa-envelope" />{" "}
              </div>
              <h3>Business Inquiries</h3>
              <p>info@mxapp.com</p>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
};

export default Contact;
