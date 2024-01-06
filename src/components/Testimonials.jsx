import React from "react";

import Slider from "react-slick";
import { HeaderConfig, appliedConfig } from "../config/commonConfig";

const Testimonials = () => {
  const reviews = [
    {
      name: "Jay Shah",
      position: "User from India",
      src: "images/testimonial/client-sm-1.jpg",
      desc: "“Easy to use, reasonably priced simply dummy text of the printing and typesetting industry. Quidam lisque persius interesset his et, in quot quidam possim iriure.”",
    },
    {
      name: "Patrick Cary",
      position: "User from USA",
      src: "images/testimonial/client-sm-2.jpg",
      desc: "“I am happy Working with printing and typesetting industry. Quidam lisque persius interesset his et, in quot quidam persequeris essent possim iriure.”",
    },
    {
      name: "Dennis Jacques",
      position: "User from Canada",
      src: "images/testimonial/client-sm-3.jpg",
      desc: "“Only trying it out since a few days. But up to now excellent. Seems to work flawlessly. priced simply dummy text of the printing and typesetting industry.”",
    },
    {
      name: "Chris Tom",
      position: "User from UK",
      src: "images/testimonial/client-sm-4.jpg",
      desc: "“I have used them twice now. Good rates, very efficient service and priced simply dummy text of the printing and typesetting industry quidam interesset his et. Excellent.”",
    },
  ];

  const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
    <button
      {...props}
      className={
        "slick-prev slick-arrow" + (currentSlide === 0 ? " slick-disabled" : "")
      }
      aria-hidden="true"
      aria-disabled={currentSlide === 0 ? true : false}
      type="button"
    >
      <i className="fa fa-chevron-left"></i>
    </button>
  );
  const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
    <button
      {...props}
      className={
        "slick-next slick-arrow" +
        (currentSlide === slideCount - 1 ? " slick-disabled" : "")
      }
      aria-hidden="true"
      aria-disabled={currentSlide === slideCount - 1 ? true : false}
      type="button"
    >
      <i className="fa fa-chevron-right"></i>
    </button>
  );

  var settings = {
    dots: true,
    arrows: true,
    prevArrow: <SlickArrowLeft />,
    nextArrow: <SlickArrowRight />,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 4500,
    slidesToShow: 2,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };

  return (
    <section
      id="testimonial"
      className={
        "section " +
        (appliedConfig.appliedHeader === HeaderConfig.SideHeaderDark ||
        appliedConfig.appliedHeader === HeaderConfig.SideHeaderLight
          ? "px-lg-4 "
          : " ")
      }
    >
      <div className="container">
        <h2 className="text-9 fw-600 text-center">What Our Users Say’s</h2>
        <hr className="heading-separator-line bg-primary opacity-10 mx-auto" />
        <p className="lead text-center mb-4">
          See what our happy Customer say about app. We are proud to have our
          users.
        </p>
        <Slider {...settings}>
          {reviews.length > 0 &&
            reviews.map((review, index) => (
              <div
                className="item testimonial border rounded text-center p-4"
                key={index}
              >
                <span className="text-9 text-body-tertiary opacity-2">
                  <i className="fa fa-quote-left" />
                </span>
                <p>{review.desc}</p>
                <img
                  className="img-fluid d-inline-block w-auto rounded-circle shadow-sm border"
                  src={review.src}
                  alt=""
                />
                <strong className="d-block fw-500">{review.name}</strong>{" "}
                <span className="text-body-tertiary text-2">
                  {review.position}
                </span>{" "}
              </div>
            ))}
        </Slider>
      </div>
    </section>
  );
};

export default Testimonials;
