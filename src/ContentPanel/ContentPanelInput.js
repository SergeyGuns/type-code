import React from "react";
import "./ContentPanelInput.css";
const ContentPanelInput = () => {
  const [inputValue, setInputValue] = React.useState("");
  return (
    <div className="ContentPanelInput">
      <textarea
        name=""
        id=""
        cols="110"
        rows="60"
        onInput={({ target: value }) => setInputValue(value)}
      ></textarea>
    </div>
  );
};
export default ContentPanelInput;
