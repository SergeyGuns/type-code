import React from "react";
import "./LeftPanel.css";
import { connect } from "react-redux";
import { setFiles, setActiveFile } from "../actions";
const LeftPanel = ({ stateFiles, activeFile, setFiles, setActiveFile }) => {
  function onClickDir(event, file, files) {
    event.stopPropagation();
    file.isOpen = !file.isOpen;
    setFiles([...files]);
  }

  function onClickFile(event, file) {
    event.stopPropagation();
    setActiveFile(file);
  }

  function FilesRender(files, activeFile, depth = 0, path = "", stateFiles) {
    return files.map((file) => (
      <div
        key={path + "/" + file.name}
        onClick={
          file.children
            ? (event) => onClickDir(event, file, stateFiles)
            : (event) => onClickFile(event, file)
        }
        style={{ paddingLeft: `${depth * 5}px` }}
      >
        {file.name}
        {file.children && file.isOpen
          ? FilesRender(
              file.children,
              activeFile,
              depth + 1,
              path + file.name + "/",
              stateFiles
            )
          : null}
      </div>
    ));
  }
  return (
    <div className="LeftPanel">
      {FilesRender(stateFiles, activeFile, 0, "", stateFiles)}
    </div>
  );
};

const mapState = ({ app }) => {
  return {
    stateFiles: app.files,
    activeFile: app.activeFile,
  };
};

const actionCreators = { setFiles, setActiveFile };

export default connect(mapState, actionCreators)(LeftPanel);
