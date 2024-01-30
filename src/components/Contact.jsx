import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import { useFormik } from "formik"; // Import Formik
import * as Yup from "yup";
import axios from "axios";

import "react-toastify/dist/ReactToastify.css";
import {
  HeaderConfig,
  appliedConfig,
  emailjsConfig,
} from "../config/commonConfig";

const Contact = () => {
  const form = useRef();
  const [sendingMail, setSendingMail] = useState(false);

  const formik = useFormik({
    initialValues: {
      contactName: "",
      contactEmail: "",
      contactMessageBody: "",
    },
    validationSchema: Yup.object({
      contactName: Yup.string().required("שם מלא הוא שדה חובה"),
      contactEmail: Yup.string()
        .email("כתובת מייל לא חוקית")
        .min(2, "Minimum length is 2 characters")
        .required("כתובת מייל היא שדה חובה"),
      contactMessageBody: Yup.string()
        .required("הודעה היא שדה חובה")
        .min(2, "Minimum length is 2 characters"),
    }),
    onSubmit: async (values, { resetForm }) => {
      console.log(values);

      // contacts-forms

      try {
        const response = await axios.post(
          "https://kibbutzil.online/contacts-forms",
          values
        );
        console.log("Server Response:2", response.data);
        formik.resetForm();

        toast.success("הפרטים נשלחו בהצלחה", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        resetForm({ values: "" });
      } catch (error) {
        console.error("Error submitting form:", error.response);
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
      }
    },
  });

  const handlePhoneNumberClick = () => {
    const phoneCallLink = `tel:0507353157`;
    window.location.href = phoneCallLink;
  };

  const sendEmail = (values, setSubmitting, resetForm) => {
    emailjs
      .sendForm(
        emailjsConfig.serviceId,
        emailjsConfig.templateId,
        form.current,
        emailjsConfig.userId
      )
      .then(
        (result) => {
          resetForm();
          toast.success("contactMessageBody sent successfully!", {
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
            <h1 className="fw-600 text-center mb-3">צור קשר</h1>
            <hr className="heading-separator-line bg-primary opacity-10 mx-auto" />
            <p className="lead text-center mb-5">
              .אנחנו זמינים עבורכם לכל שאלה{" "}
            </p>
            <form id="contact-form" ref={form} onSubmit={formik.handleSubmit}>
              <div className="mb-3">
                <input
                  id="name"
                  name="contactName"
                  type="text"
                  className={`form-control border-2 text-end ${
                    formik.touched.contactName && formik.errors.contactName
                      ? "is-invalid"
                      : ""
                  }`}
                  {...formik.getFieldProps("contactName")}
                  placeholder="שם מלא"
                />
                {formik.touched.contactName && formik.errors.contactName && (
                  <div className="invalid-feedback">
                    {formik.errors.contactName}
                  </div>
                )}
              </div>
              <div className="mb-3">
                <input
                  id="email"
                  name="contactEmail"
                  type="email"
                  className={`form-control border-2 text-end ${
                    formik.touched.contactEmail && formik.errors.contactEmail
                      ? "is-invalid"
                      : ""
                  }`}
                  {...formik.getFieldProps("contactEmail")}
                  placeholder="מייל"
                />
                {formik.touched.contactEmail && formik.errors.contactEmail && (
                  <div className="invalid-feedback">
                    {formik.errors.contactEmail}
                  </div>
                )}
              </div>
              <div className="mb-3">
                <textarea
                  id="form-contactMessageBody"
                  name="contactMessageBody"
                  className={`form-control border-2 text-end ${
                    formik.touched.contactMessageBody &&
                    formik.errors.contactMessageBody
                      ? "is-invalid"
                      : ""
                  }`}
                  rows={3}
                  {...formik.getFieldProps("contactMessageBody")}
                  placeholder=".....שלח הודעה"
                />
                {formik.touched.contactMessageBody &&
                  formik.errors.contactMessageBody && (
                    <div className="invalid-feedback">
                      {formik.errors.contactMessageBody}
                    </div>
                  )}
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
                    <>{"שלח הודעה"}</>
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
          <section className="section px-4 px-sm-5 mx-lg-4 text-end ">
            <h2 className="fw-600 mb-3 ">פרטי קשר</h2>
            <p className="lead ">
              : מוזמנים ליצור איתנו קשר באחד הדרכים הבאות{" "}
            </p>
            <div className="featured-box style-1">
              <h3>:כתובתנו</h3>
              <p>
                תל אביב
                <br />
                אבן גבירול
                <br />
              </p>
            </div>
            <div className="featured-box style-1">
              <h3>: מספר הטלפון</h3>
              <p>
                <a href="050-735-3157" onClick={handlePhoneNumberClick}>
                  050-735-3157
                </a>
              </p>
            </div>
            <div className="featured-box style-1">
              <h3>כתובת האתר</h3>
              <a href="kibbutzil.com">kibbutzil.com</a>
            </div>
            <div className="featured-box style-1">
              <div className="featured-box style-1">
                <h3>כתובת המייל</h3>
                <p>
                  <a href="mailto:kibbutzil@kibbutzil.community">
                    kibbutzil@kibbutzil.community
                  </a>
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
};

export default Contact;
