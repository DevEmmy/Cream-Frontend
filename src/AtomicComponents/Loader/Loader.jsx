import React from "react";
// import { ripples } from 'ldrs'

// ripples.register()

// Default values shown

const Loader = () => {
 
  return (
    <div className="container">
      <div className="lds-ellipsis">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
{/*      <l-ripples
  size="45"
  speed="2" 
  color="#FFD42E" 
></l-ripples> */}
    </div>
  );
}

export default Loader;
