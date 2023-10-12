import React from "react";
import BlackOverlay from "./BlackOverlay";

const Category = ({ image, title, available }) => {
  return (
    <div className="w-auto rounded-md h-[350px] relative">
      <BlackOverlay height="350px" r={"rounded-lg"} />
      <img src={image} alt="" className="h-full w-full rounded-lg" />

      <div className="absolute bottom-5 left-5 text-[1.2em] text-white font-[600] leading-none">
        <p>{title}</p>
        {!available && (
          <p className="text-[0.6em] font-[400] mt-2">Coming Soon</p>
        )}
      </div>
    </div>
  );
};

export default Category;
