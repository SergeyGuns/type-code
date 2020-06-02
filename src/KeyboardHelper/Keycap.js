import React from "react";
import "./Keycap.css";
const KEYCAP = {
  size: 45,
};

const Keycap = ({ key, keyButton, params: { w = 1, x = 0 } }) => {
  return typeof keyButton === "string" ? (
    <span
      key={key}
      style={{ width: KEYCAP.size * w + "px", height: KEYCAP.size + "px" }}
      className="Keycap"
    >
      <pre>{keyButton}</pre>
    </span>
  ) : null;
};

export default Keycap;
