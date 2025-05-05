import { useBoolean } from "@fluentui/react-hooks";
import { scroller } from 'react-scroll';

function HeroBanner({ HeroBannerData }: any) {
  const [isPopupVisible, { setTrue: showPopup, setFalse: hidePopup }] = useBoolean(false);
// within scroll sections 
const scrollToSection = () => {
  scroller.scrollTo('WhatSuperUser', {
    duration: 800,
    delay: 0,
    smooth: 'easeInOutQuart',
    offset: -100, // adjust based on header height
  });
};

  // Array of image sources for different screen sizes
  const imageSources = [
    { srcSet: HeroBannerData.unauthBgImgURL320, media: "(min-width:320px) and (max-width:479px)" },
    { srcSet: HeroBannerData.unauthBgImgURL640, media: "(min-width:640px) and (max-width:1023px)" },
    { srcSet: HeroBannerData.unauthBgImgURL1024, media: "(min-width:1024px) and (max-width:1389px)" },
    { srcSet: HeroBannerData.unauthBgImgURL1440, media: "(min-width:1440px) and (max-width:2050px)" },
    { srcSet: HeroBannerData.unauthBgImgURL1920, media: "(min-width:1920x)" }
  ];

  return (
    <div className="career-hub-hero-banner">
      <div className="ch-hero-banner">
        <div className="ch-hero-banner-wp">
          <picture>
            {imageSources.map(({ srcSet, media }, index) => (
              <source key={index} srcSet={srcSet} media={media} />
            ))}
            <img
              alt="Power BI user groups Hero banner"
              src={HeroBannerData.unauthBgImgURL1920}
            />
          </picture>

          <div className="ch-hero-banner-container">
            <div className="ch-hero-banner-content">
              <div className="ch-hero-text-wrapper">
                <p className="public_preview_text">{HeroBannerData.smallTitle}</p>
                <h1>{HeroBannerData.title}</h1>
                <p>{HeroBannerData.description}</p>
                <a
                  rel="noopener noreferrer"
                  style={{ textDecoration: "none" }}
                >
                  <button
                    type="button"
                    role="button"
                    className="ch-hero-button"
                    data-bi-id="careerhub_herobanner_playvideo"
                    data-bi-name="Hero Banner Play Video"
                    data-bi-area="Career Hub Hero Banner"
                    onClick={scrollToSection}
                  >
                    {HeroBannerData.playVideoBtnText}
                    <img src="/html/assets/careerhubnewHeroVectorWhite.png" alt="External Link" style={{ marginLeft: '8px' }} />
                  </button>

                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroBanner;
