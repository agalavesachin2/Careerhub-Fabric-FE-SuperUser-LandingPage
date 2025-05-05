import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import SuccessStoryItem from "./SuccessStoryItem";
import { useState, useRef, ReactNode, isValidElement } from "react";

const BringingOpportunity = ({ BringingOppurtunityCC }: any) => {
  const sliderRef = useRef<Slider>(null);
  const [activeSlide, setActiveSlide] = useState(1);

  const { BOHeading, BOSubHeading, BOContent, ChNewinspiredHeading } = BringingOppurtunityCC;

  const sliderSettings: Slider["props"] = {
    appendDots: (dots: ReactNode[]) => (
      <div>
        <ul>
          {dots.map((item, index) => (
            <li
              key={index}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  sliderRef.current?.slickGoTo(index);
                }
              }}
            >
              {isValidElement(item) && item.props.children}
            </li>
          ))}
        </ul>
      </div>
    ),
    afterChange: (index) => {
      setActiveSlide(index + 1);
    },
    // adding thumbnails for carousel
    customPaging: (index) => (
      <a 
        href={BOContent ? BOContent[index].youtubeURL : "#"} 
        target="_blank" 
        rel="noopener noreferrer"
      >
        <img
          className="bo_thumbnail"
          src={BOContent ? BOContent[index].thumbnailImage : ""}
          tabIndex={0}
          alt={`${BOContent[index].interviewee} thumbnail`}
          data-bi-id={`careerhub_opportunityto_yourcareer_image_${index + 1}`}
          data-bi-name="Bringing Opportunity to your career image"
          data-bi-area="Bringing Opportunity to your career"
          data-bi-slot={index + 1}
        />
      </a>
    ),
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    fade: true,
    speed: 500,
    slidesPerRow: 1,
    slidesToScroll: 1,
    slidesToShow: 1,
  };

  const WorkingSlider = isValidElement(Slider) ? Slider : Slider.default;

  return (
    <div id="getinspired">
      
      <div
        className="bringing_opportunities_section"
        role="region"
        aria-label={BOHeading}
      >
        <div>
        <h2 className="getinspired-heading">{ChNewinspiredHeading}</h2>
      </div>
        <WorkingSlider {...sliderSettings} ref={sliderRef}>
          {BOContent?.map((storyItem: any, index: number) => (
            <div 
              className="slide-item" 
              key={index}
              // onClick={() => window.open(storyItem.youtubeURL, "noopener,noreferrer")}
              style={{ cursor: "pointer" }}
            >
              <SuccessStoryItem
                activeSlide={activeSlide}
                currentSlide={index + 1}
                storyItem={storyItem}
              />
            </div>
          ))}
        </WorkingSlider>
      </div>
    </div>
  );
};

export default BringingOpportunity;
