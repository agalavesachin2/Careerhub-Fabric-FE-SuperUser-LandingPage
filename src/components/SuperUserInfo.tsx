import React, { useState } from "react";
import { Element, scroller } from 'react-scroll';

const SuperUserInfo = ({ superUserData }: any) => {
    const [activeTab, setActiveTab] = useState(0);

    const imageSources = [
        { srcSet: superUserData.bgImgURL320, media: "(min-width: 320px) and (max-width: 639px)" },
        { srcSet: superUserData.bgImgURL640, media: "(min-width: 640px) and (max-width: 1023px)" },
        { srcSet: superUserData.bgImgURL1024, media: "(min-width: 1024px) and (max-width: 1439px)" },
        { srcSet: superUserData.bgImgURL1440, media: "(min-width: 1440px) and (max-width: 1919px)" },
        { srcSet: superUserData.bgImgURL1920, media: "(min-width: 1920px)" }
    ];

    return (
        <section className="what-is-super-user-section">
            <Element name="BecomeSuperUser">
                <div id='WhatSuperUser'>
                    {/* Left Column: Text and Tabs */}
                    <div className="content-wrapper">
                        <div className="heading-subheading">
                            <h2>{superUserData.heading}</h2>
                            <p>{superUserData.description}</p>
                        </div>

                        <div className="tabs-container">
                            <div className="tab-list">
                                {superUserData.tabs.map((tab: any, index: number) => (
                                    <div
                                        key={index}
                                        className={`tab ${activeTab === index ? "active" : ""} ${tab.wide ? "wide" : ""}`}
                                        onClick={() => setActiveTab(index)}
                                    >
                                        <div className="text">{tab.title}</div>
                                        <div className="underline"></div>
                                    </div>
                                ))}
                            </div>

                            <div className="tab-content">
                                <div className="content-title">{superUserData.tabs[activeTab].subTitle}</div>
                                {superUserData.tabs[activeTab].points.map((point: string, index: number) => {
                                    const isLast = index === superUserData.tabs[activeTab].points.length - 1;
                                    const isBenefitsTab = superUserData.tabs[activeTab].title === "Program benefits";

                                    // Only remove bullet if it's the last point in "Program benefits"
                                    if (isBenefitsTab && isLast) {
                                        return (
                                            <div key={index} className="list-item no-bullet">
                                                <p>{point}</p>
                                            </div>
                                        );
                                    }

                                    // Default bullet list item
                                    return (
                                        <div key={index} className={`list-item ${point.length > 100 ? "long" : ""}`}>
                                            <ul className="content-list">
                                                <li className="list-item">{point}</li>
                                            </ul>
                                        </div>
                                    );
                                })}
                            </div>


                        </div>
                    </div>
                </div>

                {/* Right Column: Responsive Image */}
                <div className="ch-hero-banner">
                    <div className="ch-hero-banner-wp">
                        <picture>
                            {imageSources.map(({ srcSet, media }, index) => (
                                <source key={index} srcSet={srcSet} media={media} />
                            ))}
                            <img src={superUserData.bgImgURL1920} alt="Super User Background" />
                        </picture>
                    </div>
                </div>
            </Element>
        </section>
    );
};

export default SuperUserInfo;
