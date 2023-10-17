"use client";

import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { ChevronLeft, ChevronRight, X } from "heroicons-react";

const PictureModal = ({ isOpen, onRequestClose, images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    if (currentImageIndex < images.length - 1) {
      setCurrentImageIndex(currentImageIndex + 1);
    }
  };

  const prevImage = () => {
    if (currentImageIndex > 0) {
      setCurrentImageIndex(currentImageIndex - 1);
    }
  };

  useEffect(() => {
    // Add an event listener to capture the "Escape" key press to close the modal
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onRequestClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onRequestClose]);

  if (!isOpen) {
    return null;
  }

  return ReactDOM.createPortal(
    <div className="modal">
      <div className="modal-content absolute top-[60vw] left-[5vw] xl:top-[20vw] 2xl:top-[20vw]">
        <div
          onClick={onRequestClose}
          className="close-button absolute top-2 right-2 rounded-full w-8 h-8 flex items-center justify-center"
        >
          <X size={48} />
        </div>
        <div className="small-images w-[90vw] text-center ">
          <img
            src={images[currentImageIndex]}
            alt="Property"
            className="h-[90vw] w-[100vw]  xl:h-[40vw] 2xl:h-[40vw] rounded-lg"
          />
        </div>
        <div>
          {currentImageIndex > 0 && (
            <div className="px-4 py-2   rounded-lg absolute top-1/2 left-0 transform -translate-y-1/2">
              <ChevronLeft onClick={prevImage} color="black" size={48} />
            </div>
          )}
          {currentImageIndex < images.length - 1 && (
            <div className="px-4 py-2 rounded-lg absolute top-1/2 right-0 transform -translate-y-1/2">
              <ChevronRight onClick={nextImage} color="black" size={48} />
            </div>
          )}
        </div>
      </div>
    </div>,
    document.getElementById("modal-root") // Specify the element where the modal should be rendered
  );
};

export default PictureModal;
