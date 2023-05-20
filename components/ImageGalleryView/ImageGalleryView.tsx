// CSS
import React from "react";
import { useOnClickOutside } from "usehooks-ts";
import imageGalleryViewStyle from "../../styles/components/ImageGalleryView.module.css";

interface Props {
  isOpen: boolean;
  onClose?: (event: Event) => void;
  images?: string[];
}

const ImageGalleryView = ({ isOpen, onClose, images }: Props) => {
  const galleryWrapper = React.useRef(null);
  useOnClickOutside(galleryWrapper, () => {
    console.log("outsideClick");
  });

  if (!isOpen) return <></>;

  return (
    <>
      <div className={imageGalleryViewStyle.backdrop} />
      <div
        ref={galleryWrapper}
        className={imageGalleryViewStyle.containerWrapper}
      >
        slider
      </div>
    </>
  );
};

export default ImageGalleryView;
