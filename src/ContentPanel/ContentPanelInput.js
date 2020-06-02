import React from "react";
import { connect } from "react-redux";
import "./ContentPanelInput.css";

const ContentPanelInput = ({ file, wrapperRef }) => {
  const [inputValue, setInputValue] = React.useState("");
  const [[cols, rows], setTextAreaColsRows] = React.useState([110, 60]);
  React.useEffect(() => {
    setAreaSize();
  }, [
    wrapperRef.current,
    wrapperRef?.current?.clientHeight,
    wrapperRef?.current?.clientWidth,
  ]);

  function setAreaSize() {
    const fontSize = parseInt(
      window.getComputedStyle(document.body, null).getPropertyValue("font-size")
    );
    const LETTER_SIZE = {
      w: (8.8 / 16) * fontSize,
      h: (19 / 16) * fontSize,
    };
    const cols = Math.floor(wrapperRef.current.clientWidth / LETTER_SIZE.w);
    const rows = Math.floor(wrapperRef.current.clientHeight / LETTER_SIZE.h);
    console.log(
      wrapperRef.current.clientWidth,
      wrapperRef.current.clientHeight
    );
    console.log({ cols, rows });
    setTextAreaColsRows([cols, rows]);
  }

  return file !== null ? (
    <div className="ContentPanelInput">
      <textarea
        name=""
        id=""
        cols={cols}
        rows={rows}
        onInput={({ target: value }) => setInputValue(value)}
      ></textarea>
    </div>
  ) : null;
};

const mapState = ({ app }) => ({ file: app.activeFile });

export default connect(mapState, null)(ContentPanelInput);
