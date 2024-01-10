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
        <h2 className="text-9 fw-600 text-center">קול קורא  2024</h2>
        <hr className="heading-separator-line bg-primary opacity-10 mx-auto" />
        <p className="lead text-center mb-5">
        לייצר אימפקט משמעותי ולהשפיע על החברה הישראלית        </p>
        <div className="row">
          <div className="col-lg-4 align-self-center">
            <div className="row justify-content-center">
              <div className="col-md-6 col-lg-12">
                <div className="featured-box featured-box-reverse-xl style-3 mb-5">
                  <div className="featured-box-icon bg-body-secondary rounded-circle">
                    <i className="fas fa-pencil-ruler" />
                  </div>
                  <h3>בניית קהילה מחוזקת</h3>
                  <p>
                  ליצור חוויות משותפות ולשדרג את האופי החברתי של הקהילה.
                  </p>
                </div>
              </div>
              <div className="col-md-6 col-lg-12">
                <div className="featured-box featured-box-reverse-xl style-3 mb-5">
                  <div className="featured-box-icon bg-body-secondary rounded-circle">
                    <i className="fas fa-cloud-upload-alt" />
                  </div>
                  <h3>מיזמים ופרויקטים משולבים</h3>
                  <p>
                  תרומה יכולה ליצור דינמיקה של שיתוף פעולה וחידוש בפרויקטים ומיזמים שמתבצעים בקרבת הקהילה.

                  </p>
                </div>
              </div>
              <div className="col-md-6 col-lg-12">
                <div className="featured-box featured-box-reverse-xl style-3 mb-5">
                  <div className="featured-box-icon bg-body-secondary rounded-circle">
                    <i className="fas fa-tags" />
                  </div>
                  <h3> פיתוח אישי ומקצועי</h3>
                  <p>
                  השתתפות בתרומה לקהילה יכולה להבטיח פיתוח אישי ומקצועי, דרך ראיית עולם רחבה יותר ומקום לחשיבה יצירתית.
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
                  <h3> יצירת אימפקט חברתי</h3>
                  <p>
                  תרומה יכולה ליצור אימפקט חברתי ממשי, ולסייע לאנשים ולקהילות במגוון דרכים, מתן עזרה לאחרים ויצירת שיפור כלכלי וחברתי.
סה"כ, התרומה
                  </p>
                </div>
              </div>
              <div className="col-md-6 col-lg-12">
                <div className="featured-box style-3 mb-5">
                  <div className="featured-box-icon bg-body-secondary rounded-circle">
                    <i className="fas fa-paper-plane" />
                  </div>
                  <h3>רגש של משמעות וסיפוק</h3>
                  <p>
                  התרומה מקנה תחושה של משמעות וסיפוק כיוון שהיא מעניקה לך הזדמנות לתרום ולהשפיע בצורה חיובית.
                  </p>
                </div>
              </div>
              <div className="col-md-6 col-lg-12">
                <div className="featured-box style-3 mb-5">
                  <div className="featured-box-icon bg-body-secondary rounded-circle">
                    <i className="fas fa-sync-alt" />
                  </div>
                  <h3>בניית קשרים חברתיים</h3>
                  <p>
                  השתתפות בפעילויות קהילתיות ותרומה מאפשרים לך לבנות קשרים חברתיים, להכיר אנשים חדשים ולהרחיב את רשת ההכרויות שלך.
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
