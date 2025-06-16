import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import { AiOutlineClose } from "react-icons/ai";

export const CommonModal = ({
  children,
  closeModal,
  isOpen,
  width,
  className,
}) => {
  const [modalStyles, setModalStyles] = useState({});

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      width: width || "706px",
      border: "none",
      zIndex: "9999",
      overflow: "visible",
      maxheight: "636px",
      background:"#18181a"
    },
  };
  const mobileStyles = {
    content: {
      ...customStyles.content,
      width: "95%",
      margin: "0 auto",
    },
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setModalStyles(mobileStyles);
      } else {
        setModalStyles(customStyles);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <Modal
      style={modalStyles}
      isOpen={isOpen}
      onRequestClose={closeModal}
      className={className}
    >
      {children}
    </Modal>
  );
};
