import "./ImageDisplay.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { X } from "heroicons-react";

const ImageDisplay = ({ property, setDisplayImg, currentIndex }) => {    
  return (
    <>
      <div className="ImgContainer">
        <div className="close">
          <div
            className="enclose"
            onClick={() => {
              setDisplayImg(false);          
            }}
          >
            <X />
          </div>
        </div>
        <Carousel showThumbs={false} showStatus={false} selectedItem={currentIndex}>
          {property.images.map((image,i) => {
            return (
              <>
                <div key={i} className="contImg">
                  <img src={image} alt="display-image" />
                </div>
              </>
            );
          })}
        </Carousel>
      </div>
    </>
  );
};

export default ImageDisplay;
