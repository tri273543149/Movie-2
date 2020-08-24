import React, { useState } from "react";
import "./index.scss";
import { Modal } from "react-responsive-modal";

const ReactResponsiveModal = ({ trailer }) => {
  const [isOpen, setIsOpen] = useState(false);
  const isModalOpen = () => {
    setIsOpen(true);
  };
  const isModalClose = () => {
    setIsOpen(false);
  };
  return (
    <div className="react_responsive_modal">
      <button onClick={isModalOpen}>
        <i className="fa fa-play-circle"></i>
      </button>
      <Modal
        open={isOpen}
        onClose={isModalClose}
        center
        showCloseIcon={false}
        styles={{
          overlay: { background: "rgba(255, 255, 255, 0.5)" },
          modal: { maxWidth: "1000px" },
        }}
      >
        <div className="content_box">
          <iframe
            title="trailer"
            width="853"
            height="480"
            src={`${trailer}`}
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </Modal>
    </div>
  );
};

export default ReactResponsiveModal;
