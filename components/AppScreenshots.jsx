import React from "react";
import Slider from "react-slick";
import { HeaderConfig, appliedConfig } from "../config/commonConfig";

function AppScreenshots() {
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
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
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
      id="screenshot"
      className={
        "section bg-light " +
        (appliedConfig.appliedHeader === HeaderConfig.SideHeaderDark ||
        appliedConfig.appliedHeader === HeaderConfig.SideHeaderLight
          ? "px-lg-4 "
          : " ")
      }
    >
      <div className="container">
        <h2 className="text-9 fw-600 text-center">App Screens</h2>
        <hr className="heading-separator-line bg-primary opacity-10 mx-auto" />
        <p className="lead text-center mb-4">
          You can present your app screens. It is all very easy!
        </p>
        <Slider {...settings}>
          <div className="item shadow-sm">
            <img className="img-fluid" alt="" src="images/app/01.jpg" />
          </div>
          <div className="item shadow-sm">
            <img className="img-fluid" alt="" src="images/app/02.jpg" />
          </div>
          <div className="item shadow-sm">
            <img className="img-fluid" alt="" src="images/app/03.jpg" />
          </div>
          <div className="item shadow-sm">
            <img className="img-fluid" alt="" src="images/app/04.jpg" />
          </div>
          <div className="item shadow-sm">
            <img className="img-fluid" alt="" src="images/app/05.jpg" />
          </div>
          <div className="item shadow-sm">
            <img className="img-fluid" alt="" src="images/app/06.jpg" />
          </div>
        </Slider>
      </div>
    </section>
  );
}

export default AppScreenshots;
