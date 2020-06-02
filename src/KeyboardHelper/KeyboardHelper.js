import React from "react";
import Keycap from "./Keycap";
import "./KeyboardHelper.css";
import { qwerty } from "./keys.json";
const KeyboardHelper = ({ keyboardData }) => {
  const [position, setPosition] = React.useState({ x: 0, y: 0 });
  const [isHide, setIsHide] = React.useState(true);
  return (
    <div className="KeyboardHelper">
      <div
        onClick={() => setIsHide(!isHide)}
        className="KeyboardHelper__dragger"
      >
        [{isHide ? "+ keyboard layout helper" : "-"}]
      </div>
      {isHide
        ? null
        : keyboardData.map((row, i) => {
            return (
              <div className="KeyboardHelper__row">
                {row.map((key, index, arr) => {
                  const params =
                    typeof arr[index - 1] === "object" ? arr[index - 1] : {};
                  return (
                    <Keycap
                      key={"" + i + index}
                      keyButton={key}
                      params={params}
                    />
                  );
                })}
              </div>
            );
          })}
    </div>
  );
};
export default () => <KeyboardHelper keyboardData={qwerty} />;
