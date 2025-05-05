import StickyNav from "./StickyNav";
import BringingOpportunity from "./bringing-oppurtunity/BringingOpportunity";
import HeroBanner from "./HeroBanner";
import ContestWinners from "./ContestWinners";
import FaqSection from "./FaqSection/FaqSection";
import PublicPreviewBanner from "./PublicPreviewBanner";
import  ProductForms  from "./ProductForms";
import SuperUserInfo from "./SuperUserInfo";
import FabricCommunitySection from  "./FabricCommunityStories";
import { FabricCommunityStories } from "../constants/fabricCommunityStories";
import { HeroBannerData } from "../constants/HeroBannerData";
import { SuperUserStepsData } from "../constants/superUserStepsData";
import { ProductFormsData } from "../constants/productForms";
import { superUserData } from "../constants/superUserContent";
import { additionalLearningData } from "../constants/AdditionalLearningData";

import { getJSONParsed, navItemsData, IOverflowData } from "../assets/utils";

// Define nav items
const navItems: IOverflowData = { ...navItemsData };

const SuperUserLandingNewApp = () => {
  return (
    <div>
      {HeroBannerData && <HeroBanner HeroBannerData={HeroBannerData} />}
      
      {/* Pass updated navItems to StickyNav */}
      {navItems && <StickyNav navItems={navItems} />}
      <div id="main">
      <section className="superuser-section-wrapper">
      {SuperUserStepsData && <ContestWinners CustomCardData={SuperUserStepsData} />}
      {ProductFormsData && <ProductForms productFormsData={ProductFormsData}/>}
      </section>
      {superUserData && <SuperUserInfo superUserData={superUserData}/>}
      {FabricCommunityStories && <FabricCommunitySection storiesData={FabricCommunityStories} />}
       {additionalLearningData && additionalLearningData.faqs && (
          <FaqSection FaqData={{ faqs: additionalLearningData.faqs }} />
        )}
      </div>
    </div>
  );
};

export default SuperUserLandingNewApp;
