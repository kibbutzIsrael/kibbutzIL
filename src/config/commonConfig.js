export const HeaderConfig = {
  DefaultHeader: "Default Header",
  ClassicHeader: "Classic Header",
  SideHeaderLight: "Side Header Light",
  SideHeaderDark: "Side Header Dark",
  OverlayMenu: "Overlay Menu",
};

export const IntroThemeConfig = {
  Intro1: "Intro1",
  Intro2: "Intro2",
};

export const IntroBgConfig = {
  Image: "Image",
  Video: "Video",
  Default: "Default",
};

export const IntroContentConfig = {
  Image: "Image",
  Video: "Video",
};

export const appliedConfig = {
  // apply Header : DefaultHeader | ClassicHeader | SideHeaderLight | SideHeaderDark | OverlayMenu
  appliedHeader: HeaderConfig.DefaultHeader,

  // apply Intro theme from : Intro1 | Intro2
  appliedIntro: IntroThemeConfig.Intro1,

  // apply Intro background from : Image | Video | Default
  appliedIntroBg: IntroBgConfig.Image,

  //apply Content in Intro from: Image | Video
  appliedIntroContent: IntroContentConfig.Image,
};

// your Google play store and apple app store links
export const appleAppStoreLink = "https://www.apple.com/in/app-store/";
export const googlePlayStoreLink = "https://play.google.com/store/games";

// Mailchimp Config (Newsletter)
const mailChimp_u = "0e2c20e0d66ad30718099085f";
const mailChimp_id = "d3182c602a";

export const mailChimpUrl = `https://gmail.us1.list-manage.com/subscribe/post?u=${mailChimp_u}&amp;id=${mailChimp_id}&amp;f_id=0082f8e5f0`;

// Emailjs Config (Contact Form)
export const emailjsConfig = {
  templateId: "template_si6ci69",
  serviceId: "service_i86k6ms",
  userId: "c9HsDgG60tvWyVnAL",
};

export const scrollDuration = 1000;
