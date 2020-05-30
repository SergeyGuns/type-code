import React from "react";
import { connect } from "react-redux";
function ContentPanelTab(activeFile) {
  return <div> {activeFile.name} </div>;
}

const mapState = ({ app }) => ({ activeFile: app.activeFile });

export default connect(mapState, null)(ContentPanelTab);
