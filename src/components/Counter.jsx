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
                  <h4 className="text-11 text-white fw-500">  </h4>
                  <p className="text-light mb-0">קהילה חזקה, תורמים ולומדים אחד מהשני</p>


                </div>
              </div>
              <div className="col-6 col-md-3">
                <div className="featured-box text-center">
                  <div className="featured-box-icon text-white">
                    <i className="fas fa-user-astronaut" />
                    {/* <FontAwesomeIcon icon="fa-solid fa-user-astronaut" /> */}

                  </div>
                  <h4 className="text-11 text-white fw-500"> </h4>
                  {/* <p className="text-light mb-0">Positive Ratings</p> */}
                  <p className="text-light mb-0">מוצרים מתקדמים טכנולוגית</p>

                </div>
              </div>
              <div className="col-6 col-md-3">
                <div className="featured-box text-center">
                  <div className="featured-box-icon text-white">
                    <i className="fas fa-heart" />
                  </div>
                  {/* <h4 className="text-11 text-white fw-500">שיתופי פעולה </h4> */}
                  <p className="text-light mb-0">שיתופי פעולה רחבים עם ארגונים ואנשים מוכשרים</p>

                </div>
              </div>
              <div className="col-6 col-md-3">
                <div className="featured-box text-center">
                  <div className="featured-box-icon text-white">
                    <i className="fas fa-comment" />
                    {/* <FontAwesomeIcon icon="fa-regular fa-comment" /> */}
                    {/* <FontAwesomeIcon icon="fa-solid fa-thumbtack" /> */}


                  </div>
                  {/* <h4 className="text-11 text-white fw-500">כבוד לשיח</h4> */}
                  <p className="text-light mb-0">מקדמים שיח מכבד ופתוח</p>
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
