import React from "react";

import { FaArrowLeft } from "react-icons/fa";

import "./Keypad.css";

const Keypad = ({ setValue }) => {
  return (
    <div className="keypad">
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, "00", "0", <FaArrowLeft size={28} />].map(
        (v) => {
          return (
            <div className="keypad-box" onClick={() => setValue(v)}>
              {v}
            </div>
          );
        }
      )}
    </div>
  );
};

export default Keypad;
