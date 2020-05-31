import React from "react";
import ContentPanelTab from "./ContentPanelTab";
import ContentPanelInput from "./ContentPanelInput";
import ContentPanelInputPattern from "./ContentPanelInputPattern";

export default function ContentPanel() {
  return (
    <div className="ContentPanel">
      <ContentPanelTab />
      <div className="ContentPanelWrapper">
        <ContentPanelInput />
        <ContentPanelInputPattern />
      </div>
    </div>
  );
}
