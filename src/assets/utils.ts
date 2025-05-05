import { useEffect, useState } from "react";
import { IContextualMenuItem } from "@fluentui/react/lib/ContextualMenu";

export const getJSONParsed = (text: string | undefined | null) => {
  try {
    if (!text || typeof text !== "string") {
      console.error("getJSONParsed received invalid input:", text);
      return null;
    }

    return JSON.parse(decodeURIComponent(text).replace(/<#--[\s\S]*?-->/g, ""));
  } catch (err) {
    console.error("Error parsing custom content:", err, "Input:", text);
    return null;
  }
};

export const useWindowDimensions = () => {
  const hasWindow = typeof window !== "undefined";

  function getWindowDimensions() {
    return hasWindow
      ? { width: window.innerWidth, height: window.innerHeight }
      : { width: null, height: null };
  }

  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions);

  useEffect(() => {
    if (hasWindow) {
      const handleResize = () => setWindowDimensions(getWindowDimensions());
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, [hasWindow]);

  return windowDimensions;
};

export interface IOverflowData {
  primary: IContextualMenuItem[];
  secondary: IContextualMenuItem[];
}

const navItemsList: IContextualMenuItem[] = [
  {
    text: "Become a Super User",
    href: "#BecomeSuperUser",
    id: "BecomeSuperUser",
    key: "BecomeSuperUser",
    data: {
      biId: "fabric_nav_participate",
      biName: "BecomeSuperUser",
      biArea: "Fabric Community Navigation",
    },
  },
  {
    text: "What is a Super User",
    href: "#WhatSuperUser",
    id: "WhatSuperUser",
    key: "WhatSuperUser",
    data: {
      biId: "fabric_nav_WhatSuperUser",
      biName: "WhatSuperUser",
      biArea: "Fabric Community Navigation",
    },
  },
  {
    text: "User stories",
    href: "#Userstories",
    id: "Userstories",
    key: "Userstories",
    data: {
      biId: "fabric_nav_Userstories",
      biName: "Userstories",
      biArea: "Fabric Community Navigation",
    },
  },
  {
    text: "FAQs",
    href: "#faqs",
    id: "faqs",
    key: "faqs",
    data: {
      biId: "fabric_nav_faqs",
      biName: "FAQs",
      biArea: "Fabric Community Navigation",
    },
  },
];

export const navItemsData: IOverflowData = {
  primary: [...navItemsList], // Ensure new array references
  secondary: [...navItemsList],
};

export const scrollToSection = (id: string) => {
  const section = document.getElementById(id);
  if (section) {
    const yOffset = window.scrollY === 0 ? 170 : 120;
    const sectionPosition = section.getBoundingClientRect().top + window.scrollY - yOffset;
    
    window.scrollTo({
      top: sectionPosition,
      behavior: "smooth",
    });
  }
};
