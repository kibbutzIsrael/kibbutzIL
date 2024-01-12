import React from "react";
import {
  HeaderConfig,
  IntroContentConfig,
  IntroThemeConfig,
  appleAppStoreLink,
  appliedConfig,
  googlePlayStoreLink,
} from "../config/commonConfig";
const AboutUs = () => {
  return (
    <section
      id="about"
      className={
        "section " +
        (appliedConfig.appliedHeader === HeaderConfig.SideHeaderDark ||
        appliedConfig.appliedHeader === HeaderConfig.SideHeaderLight
          ? "px-lg-4 "
          : " ")
      }
    >
      <div
        className={
          "container " +
          (appliedConfig.appliedIntro === IntroThemeConfig.Intro1 &&
          appliedConfig.appliedIntroContent === IntroContentConfig.Image
            ? "pt-5 "
            : " ")
        }
      >
        {/* <h2 className="text-9 fw-600 text-center">אודות</h2> */}
        {/* <hr className="heading-separator-line bg-primary opacity-10 mx-auto" /> */}
        {/* <p classN  ame="lead text-center mb-4">
          
        </p> */}
        <div className="row">
          <div className="col-lg-6 text-center">
            {" "}
            <img className="img-fluid" src="images/about-app.png" alt="" />{" "}
          </div>
          <div className="col-lg-6 text-center text-lg-end">
            {/* <h2 className="text-6 mb-3 mt-4">
            Make the impact!            </h2> */}
            <p>
              אנחנו מנצלים את הכוח הדינמי של האקוסיסטם הטכנולוגי הישראלי כדי
              לטפל ולהתמודד עם אתגרים חברתיים מבוססי קהילה באמצעות חדשנות
              והחלטיות
            </p>
            <p>
              אנחנו נשמח להתגייס ולתרום מהיכולות הטכנולוגיות כדי לסייע לטובת
              צרכים ויוזמות הצפים מהשטח במצב המורכב בו אנו נמצאים .
            </p>

            <p></p>

            <div className="d-inline-flex pt-2">
              {" "}
              {/* <a
                className="me-4"
                href={appleAppStoreLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img className="img-fluid" src="images/app-store.png" alt="" />
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
              </a>{" "} */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
