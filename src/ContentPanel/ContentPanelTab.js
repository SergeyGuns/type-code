import React from "react";
import { connect } from "react-redux";
import "./ContentPanelTab.css";
import { setActiveFile } from "../actions";
function ContentPanelTab({ activeFile, setActiveFile }) {
  return activeFile ? (
    <div className="ContentPanelTab">
      {activeFile.name} <span onClick={() => setActiveFile(null)}>[x]</span>
    </div>
  ) : null;
}

const mapState = ({ app }) => ({ activeFile: app.activeFile });
const actionCreators = { setActiveFile };

export default connect(mapState, actionCreators)(ContentPanelTab);
