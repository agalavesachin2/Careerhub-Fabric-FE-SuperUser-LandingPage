import React, { useState } from "react";

interface StoryStep {
  key: string;
  img: string;
  title: string;
  description: string;
  quote: string;
}

interface FabricCommunityStoriesProps {
  storiesData: {
    SUStepsHeading: string;
    SUStepsSubHeading: string;
    steps: StoryStep[];
  };
}

const FabricCommunityStories: React.FC<FabricCommunityStoriesProps> = ({ storiesData }) => {
  if (!storiesData || !storiesData.steps.length) return null;

  const [selectedKey, setSelectedKey] = useState<string>(storiesData.steps[0].key);
  const selectedQuote = storiesData.steps.find(step => step.key === selectedKey)?.quote || storiesData.SUStepsSubHeading;

  return (
    
    <section className="fabric-stories">
        <div className="fabric-stories__header">
        <div id="Userstories">
          <h2 className="fabric-stories__title">{storiesData.SUStepsHeading}</h2>
          <p className="fabric-stories__quote">{selectedQuote}</p>
        </div>

        <div className="fabric-stories__cards" style={{ display: "flex" }}>
          {storiesData.steps.map((step) => (
            <div
              key={step.key}
              className={`fabric-stories__card-wrapper ${selectedKey === step.key ? "selected" : ""}`}
              onClick={() => setSelectedKey(step.key)}
            >
              <div className="fabric-stories__card">
                <div className="fabric-stories__info" style={{ textAlign: "center", marginTop: "12px" }}>
                  <div className="fabric-stories__name" style={{ fontWeight: "bold" }}>{step.title}</div>
                  <div className="fabric-stories__role" style={{ fontSize: "0.9rem", color: "#555" }}>{step.description}</div>
                </div>
                <div>
                  <img src={step.img} alt="User avatar" className="fabric-stories__avatar" />
                </div>
              </div>
            </div>
          ))}

          </div>
        </div>
    </section>
    
  );
};

export default FabricCommunityStories;
