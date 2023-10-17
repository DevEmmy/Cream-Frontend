import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { X } from "heroicons-react";



// .contImg > img{
//   object-fit: contain;    
//   width:100%;
//   height: 100%;
// }

const ImageDisplay = ({ property, setDisplayImg, currentIndex }) => {    
  return (
    <>
      <div className="fixed bg-black w-full h-full cflexmm z-50">
        <div className="w-full flexem p-[1em] text-white">
          <div
            className="cursor-pointer"
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
                <div key={i} className="h-[80vh] flexmm mb-[2em]">
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
