import React from "react";
import ContentPanelTab from "./ContentPanelTab";
import ContentPanelInput from "./ContentPanelInput";
import ContentPanelInputPattern from "./ContentPanelInputPattern";
import "./ContentPanel.css";
export default function ContentPanel() {
  const wrapperRef = React.createRef();
  return (
    <div className="ContentPanel">
      <ContentPanelTab />
      <div ref={wrapperRef} className="ContentPanelWrapper">
        <ContentPanelInputPattern />
        <ContentPanelInput wrapperRef={wrapperRef} />
      </div>
    </div>
  );
}
