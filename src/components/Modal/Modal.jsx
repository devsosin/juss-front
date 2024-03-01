import React from "react";

import "./Modal.css";

const Modal = ({ handleModal, children }) => {
  return (
    <div
      className="modal"
      onClick={(e) => (e.target.className === "modal" ? handleModal() : null)}
    >
      {children}
    </div>
  );
};

export default Modal;
