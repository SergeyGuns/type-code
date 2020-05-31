import React from "react";
import { connect } from "react-redux";
const ContentPanelInputPattern = ({ text }) => <code>{text}</code>;

const masState = ({ app }) => ({
  text: app.file ? app.file.body : null,
});

export default connect(masState, null)(ContentPanelInputPattern);
