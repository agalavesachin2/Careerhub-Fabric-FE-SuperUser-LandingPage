import React from 'react';
import { Element, scroller } from 'react-scroll';

function ContestWinners({ CustomCardData }: { CustomCardData: any }) {
  if (!CustomCardData) {
    return <div className="no-winners">No winners data available.</div>;
  }

  const { SUStepsHeading, SUStepsSubHeading, steps } = CustomCardData;

  const handleScrollClick = () => {
    const width = window.innerWidth;
    let offset = -430; // default for desktop
  
    if (width <= 768) {
      offset = -180; // true mobile phones
    } else if (width <= 1024) {
      offset = -300; // small tablets/laptops
    }
  
    scroller.scrollTo('ProductForms', {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart',
      offset,
    });
  };
  

  const renderWinnerCard = (winner: any) => {
    const isScrollCard = winner.key === 'step-4';
    return (
      <div
        key={winner.key}
        rel="noopener noreferrer"
        className="content-layout"
      >
        {/* Graphic Section */}
        <div className="graphic">
          <img src={winner.img} alt={winner.title} />
        </div>

        {/* Text Section */}
        <div className="text">
          <div className="frame-2018777074">
            <h3 className="contest-winners-text">{winner.title}</h3>
            <p>{winner.description}</p>
          </div>

          {/* Button Section */}
          {isScrollCard ? (
            <div
              onClick={handleScrollClick}
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              <div
                className="vector-button-text"
                style={{ alignItems: 'center', cursor: 'pointer' }}
              >
                <span>{winner.btnText}</span>
                <img
                  src="/html/assets/careerhubnew_Vector.png"
                  alt="Scroll Link"
                  style={{ marginLeft: '8px' }}
                />
              </div>
            </div>
          ) : (
            <a
              href={winner.btnLink}
              rel="noopener noreferrer"
              // target="_blank"
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              <div
                className="vector-button-text"
                style={{ alignItems: 'center', cursor: 'pointer' }}
              >
                <span>{winner.btnText}</span>
                <img
                  src="/html/assets/careerhubnew_Vector.png"
                  alt="External Link"
                  style={{ marginLeft: '8px' }}
                />
              </div>
            </a>
          )}
        </div>
      </div>
    );
  };

  return (
    // <Element name="BecomeSuperUser">
      <div id="BecomeSuperUser">
        <div className="contest-winners-section">
          {/* Header Section */}
          <div className="heading-subheading">
            <h2 className="heading">{SUStepsHeading}</h2>
            <p className="subheading">{SUStepsSubHeading}</p>
          </div>

          {/* Winners Grid */}
          <div className="content-row">
            {steps.map((winner: any) => renderWinnerCard(winner))}
          </div>
        </div>
      </div>
    // </Element>
  );
}

export default ContestWinners;
