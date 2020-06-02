import React from "react";
import "./ContentPanelInputPattern.css";
import { connect } from "react-redux";
const ContentPanelInputPattern = ({ file }) =>
  file ? <pre className="ContentPanelInputPattern">{file.body}</pre> : null;

const mapState = ({ app }) => ({ file: app.activeFile });

export default connect(mapState, null)(ContentPanelInputPattern);
