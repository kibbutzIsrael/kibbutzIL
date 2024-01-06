import "./App.scss";
import AboutUs from "./components/About";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { useState } from "react";
import {
  HeaderConfig,
  IntroThemeConfig,
  appliedConfig,
} from "./config/commonConfig";
import { Tooltip } from "./components/Tooltip";
import FAQs from "./components/FAQs";
import ClassicHeader from "./components/themes/Headers/ClassicHeader";
import Features from "./components/Features";
import AppScreenshots from "./components/AppScreenshots";
import Pricing from "./components/Pricing";
import HowItWorks from "./components/HowItWorks";
import GetTheApp from "./components/GetTheApp";
import Subscribe from "./components/Subscribe";
import SideHeader from "./components/themes/Headers/SideHeader";
import DefaultHeader from "./components/themes/Headers/DefaultHeader";
import Intro1 from "./components/themes/Intro/Intro1";
import Intro2 from "./components/themes/Intro/Intro2";
import OverlayMenu from "./components/themes/Headers/OverlayMenu";
import { ToastContainer } from "react-toastify";
import TermsAndConditions from "./components/TermsAndConditions";
import PrivacyPolicy from "./components/PrivacyPolicy";
import Counter from "./components/Counter";

function App() {
  const appliedHeader = appliedConfig.appliedHeader;
  const appliedIntro = appliedConfig.appliedIntro;

  const handleNavClick = (section) => {
    document.getElementById(section).scrollIntoView({ behavior: "smooth" });
  };

  const [scrollTopVisible, setScrollTopVisible] = useState(false);

  const checkScrollTop = () => {
    let scrollTopBtn = document.getElementById("back-to-top");

    if (scrollTopBtn) {
      if (
        document.body.scrollTop > 400 ||
        document.documentElement.scrollTop > 400
      ) {
        setScrollTopVisible(true);
      } else {
        setScrollTopVisible(false);
      }
    }
  };

  if (typeof window !== "undefined") {
    window.addEventListener("scroll", checkScrollTop);
  }

  const getHeader = () => {
    if (appliedHeader === HeaderConfig.ClassicHeader) {
      return <ClassicHeader></ClassicHeader>;
    } else if (appliedHeader === HeaderConfig.DefaultHeader) {
      return <DefaultHeader></DefaultHeader>;
    } else if (
      appliedHeader === HeaderConfig.SideHeaderDark ||
      appliedHeader === HeaderConfig.SideHeaderLight
    ) {
      return (
        <SideHeader
          darkTheme={appliedHeader === HeaderConfig.SideHeaderDark}
        ></SideHeader>
      );
    } else if (appliedHeader === HeaderConfig.OverlayMenu) {
      return <OverlayMenu></OverlayMenu>;
    } else {
      return <DefaultHeader></DefaultHeader>;
    }
  };

  const getIntro = () => {
    if (appliedIntro === IntroThemeConfig.Intro1) {
      return <Intro1></Intro1>;
    } else if (appliedIntro === IntroThemeConfig.Intro2) {
      return <Intro2></Intro2>;
    } else {
      <Intro1></Intro1>;
    }
  };

  return (
    <>
      <div
        className={
          appliedHeader === HeaderConfig.SideHeaderDark ||
          appliedHeader === HeaderConfig.SideHeaderLight
            ? "side-header"
            : ""
        }
        style={{ position: "relative" }}
      >
        <div id="main-wrapper">
          {getHeader()}

          <div id="content" role="main">
            {/* {appliedTheme === themeConfig.FullScreenMenu &&
              getFullScreenIntro()}
            {appliedTheme === themeConfig.StandardMenu &&
              getStandardMenuIntro()} */}

            {getIntro()}

            <AboutUs></AboutUs>
            <Counter></Counter>
            <Features></Features>
            <AppScreenshots></AppScreenshots>
            <HowItWorks></HowItWorks>
            <Testimonials></Testimonials>
            <Pricing></Pricing>
            <GetTheApp></GetTheApp>
            <FAQs></FAQs>
            <Subscribe></Subscribe>
            <Contact></Contact>
          </div>
          <Footer handleNavClick={handleNavClick}></Footer>
        </div>
        {/* back to top */}
        <Tooltip text="Back to Top" placement="left">
          <span
            id="back-to-top"
            className="rounded-circle"
            style={{ display: scrollTopVisible ? "inline" : "none" }}
            onClick={() => {
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            <i className="fa fa-chevron-up"></i>
          </span>
        </Tooltip>
        <ToastContainer />
        <TermsAndConditions></TermsAndConditions>
        <PrivacyPolicy></PrivacyPolicy>
      </div>
    </>
  );
}

export default App;
