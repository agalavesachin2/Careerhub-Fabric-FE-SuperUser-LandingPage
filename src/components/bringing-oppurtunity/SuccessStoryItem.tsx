import { useBoolean } from "@fluentui/react-hooks";
import VideoPopup from "../VideoPopup";

const SuccessStoryItem = (props: any) => {
  const { activeSlide, currentSlide, storyItem } = props;
  const { title, quote, youtubeURL, videoImage } = storyItem;

  const [isPopupVisible, { setTrue: showPopup, setFalse: hidePopup }] =
    useBoolean(false);

  return (
    <div className="bo_item_wrapper">
      <div className="bo_video_content_section">
        <h3 className="bo_video_title">{title}</h3>
        <p className="bo_video_description">{quote}</p>
      </div>
      <div className="bo_slide_img_section">
        <div className="bo_video_img">
          {/* <a href={youtubeURL} target="_blank" rel="noopener noreferrer"> */}
            <img src={videoImage} alt={title} />
          {/* </a> */}
        </div>
      </div>
    </div>
  );
};

export default SuccessStoryItem;
