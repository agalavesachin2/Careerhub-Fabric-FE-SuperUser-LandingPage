import { useEffect, useState, useRef } from "react";
import { useWindowDimensions } from "../../assets/utils";

const RoleItem = (props: any) => {
  const { height } = useWindowDimensions();
  const {
    roleContent,
    index,
    isActive,
    contentTitle_1,
    contentTitle_2,
    contentTitle_3,
  } = props;
  const {
    role,
    roleDescription,
    certification,
    openCertLinkInNewTab,
    averageSalary,
    scopeInFabric,
    architectureDiagram,
  } = roleContent;
  const certificationLink = roleContent.certificationLink.trim();
  const mdrRightRef = useRef<HTMLDivElement>(null);
  const [isArchDiagLoading, setIsArchDiagLoading] = useState(true);
  const [archDiagSrc, setArchDiagSrc] = useState("");
  const [mdrRightActive, setMdrRightActive] = useState(false);

  const handleReveal = () => {
    const elementTop = mdrRightRef.current?.getBoundingClientRect().top;
    const elementVisible = 150;
    if (elementTop && height) {
      if (elementTop < height - elementVisible) {
        setMdrRightActive(true);
      } else {
        setMdrRightActive(false);
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleReveal);
    return () => window.removeEventListener("scroll", handleReveal);
  }, []);

  useEffect(() => {
    const img = new Image();
    img.onload = () => {
      setArchDiagSrc(img.src);
      setIsArchDiagLoading(false);
    };
    img.src = architectureDiagram;

    return () => {
      img.onload = null;
    };
  }, []);

  return (
    <>
      <div className="mdr-left-section">
        <div className="role-description-section">
          <h3>{contentTitle_1}</h3>
          <p className="role-description">{roleDescription}</p>
        </div>
        <div className="scope-in-fabric-section">
          <h3>{contentTitle_2}</h3>
          <ul className="scope-items-list">
            {scopeInFabric.map((scopeItem: string, itemIndex: number) => (
              <li key={itemIndex}>{scopeItem}</li>
            ))}
          </ul>
        </div>
        <div className="average-salary">
          <h3>{contentTitle_3}</h3>
          <p>{averageSalary}</p>
        </div>
        {certificationLink ? (
          <a
            className="mdr-explore-btn"
            data-bi-id={`careerhub_moderndataroles_certification_link_${role}`}
            data-bi-name={`Modern data roles Certification ${role}`}
            data-bi-area="Modern data roles in Microsoft Fabric"
            data-bi-slot={index + 1}
            href={certificationLink}
            target={openCertLinkInNewTab === "yes" ? "_blank" : "_self"}
          >
            <span>{certification}</span>
            <img
              src="/html/assets/ch-opennewlink.svg"
              alt="link icon"
              aria-hidden
            />
          </a>
        ) : (
          <div className="mdr-explore-btn">
            <span>{certification}</span>
          </div>
        )}
      </div>
      {isArchDiagLoading ? (
        <div className="ch-loader"></div>
      ) : (
        <div
          className={`mdr-right-section reveal fade-right ${
            mdrRightActive || isActive ? "active" : ""
          }`}
          ref={mdrRightRef}
        >
          <img
            className="architecture-diagram"
            src={archDiagSrc}
            alt={`${role} architecture diagram`}
          />
        </div>
      )}
    </>
  );
};

export default RoleItem;
