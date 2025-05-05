import { Link } from "@fluentui/react";
import { useRef, useEffect } from "react";
import * as React from "react";
import { IOverflowData, scrollToSection } from "../assets/utils";

export const makeOneDSAtts = ({ biId, biName, biArea }: any) => {
  return {
    "data-bi-id": biId,
    "data-bi-name": biName,
    "data-bi-area": biArea,
  };
};

function StickyNav(props: any) {
  const navItems: IOverflowData = props.navItems;

  const navContainerRef = useRef<HTMLDivElement>(null);
  const [currentVisibleHref, setCurrentVisibleHref] = React.useState(
    navItems?.primary[0]?.href
  );
  const [isSticky, setIsSticky] = React.useState(false);

  const handleVisibleHref = () => {
    const containers = navItems?.primary
      ?.map((each) => {
        if (each?.href) {
          return document.querySelector(each?.href);
        }
      })
      .filter((each) => each);

    const heights = containers
      ?.map((r, index) => {
        const height = r?.getBoundingClientRect().top;
        const href = navItems.primary[index].href;
        return { height, href };
      })
      .filter((r) => r)
      .filter((r) => r && (r?.height || 0) > -70)
      .sort((a: any, b: any) => a - b);
    const [first] = heights;
    if (first) {
      setCurrentVisibleHref(first?.href);
    }
  };

  const handleSticky = () => {
    if (navContainerRef.current) {
      const { top } = navContainerRef.current.getBoundingClientRect();

      if (top <= 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      handleVisibleHref();
      handleSticky();
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const onRenderItem = (item: any) => {
    const oneDsProps = makeOneDSAtts(item.data);
    return (
      <Link
        href={item.href}
        {...oneDsProps}
        styles={{
          root: {
            borderBottom:
            currentVisibleHref === item.href ? "4px solid #117865" : "",
          },
        }}
        className={
          currentVisibleHref === item.href ? "nav-link-active" : "nav-link"
        }
        onClick={(event) => {
          event.preventDefault();
          scrollToSection(item.id);
        }}
      >
        {item.text}
      </Link>
    );
  };

  return (
    <div style={{ height: "58px" }}>
      <div
        id="sticky-nav-container"
        ref={navContainerRef}
        role="region"
        aria-label="Subnavigation"
      >
        <div
          className={
            isSticky
              ? "front-door-navigation fixed-front-nav-bar"
              : "front-door-navigation"
          }
        >
          <div className="container test">
            <div id="front-door-nav" className="front-nav-bar">
              <div className="ms-OverflowSet">
                {navItems?.primary.map((item) => onRenderItem(item))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StickyNav;
