import { Pivot, PivotItem } from "@fluentui/react";
import DataRoleItem from "./DataRoleItem";
import { useState } from "react";

const ModernDataRoles = ({ ModernDataRolesCC }: any) => {
  const [activeKey, setActiveKey] = useState<string | undefined>("");
  // activeKey is used to notify `DataRoleItem` when a tab is clicked
  const {
    MDRHeading,
    MDRContent,
    MDRSubHeading,
    LegalCompliance,
    contentTitle_1,
    contentTitle_2,
    contentTitle_3,
  } = ModernDataRolesCC;

  const handleLinkClick = (item: PivotItem | undefined) => {
    setActiveKey(item?.props.itemKey);
  };

  return (
    <div id="moderndataroles">
      <div
        className="modern_data_roles_section"
        role="region"
        aria-label={MDRHeading}
      >
        <div className="mdr-title">
          <h2>{MDRHeading}</h2>
          <p>{MDRSubHeading}</p>
        </div>
        <Pivot
          linkFormat="tabs"
          className="mdr-tabs-container"
          onLinkClick={handleLinkClick}
          selectedKey={activeKey ? activeKey : "key-0"}
        >
          {MDRContent?.map((roleItem: any, index: number) => (
            <PivotItem
              key={roleItem.onedsID}
              itemKey={`key-${index}`}
              className="mdr-tab-item"
              headerText={roleItem.role}
              headerButtonProps={{
                "data-bi-id": `careerhub_moderndataroles_tabbutton_${roleItem.onedsID}`,
                "data-bi-name": `Modern data roles tab${roleItem.role}`,
                "data-bi-area": "Modern data roles in Microsoft Fabric",
                "data-bi-slot": index,
              }}
            >
              <DataRoleItem
                roleContent={roleItem}
                index={index}
                isActive={activeKey === `key-${index}`}
                {...{ contentTitle_1, contentTitle_2, contentTitle_3 }}
              />
            </PivotItem>
          ))}
        </Pivot>
        <div className="mdr-legal-compliance">
          <p dangerouslySetInnerHTML={{ __html: LegalCompliance }}></p>
        </div>
      </div>
    </div>
  );
};

export default ModernDataRoles;
