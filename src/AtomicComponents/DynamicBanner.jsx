import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import BlackOverlay from "./BlackOverlay";
import Link from "next/link";
import { useRouter } from "next/router";

const DynamicBanner = ({ children, images }) => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  // const router = useRouter();
  // const handleScrollClick = () => {
  //   router.push("/", { scroll: true });
  // };

  return (
    <div className="relative ">
      <Carousel
        responsive={responsive}
        className="w-[100%] object-cover"
        showDots={false}
        autoPlay={true}
        ssr={true}
        autoPlaySpeed={7500}
        customTransition="all .7"
        arrows={false}
        infinite={true}
      >
        {images.map((image, i) => {
          return <img src={image} key={i} className="w-[100%] h-[100vh]" />;
        })}
      </Carousel>

      <BlackOverlay />
      <div className="textContainer absolute cflexmm sm:gap-[20px] top-[35vh] px-xPadding sm:top-[25vh] left-0 right-0">
        {children || (
          <>
            <h1 className="text-white text-[4em] sm:text-[40px] font-[700]">
              CREAM <span className="text-primary1">.</span>
            </h1>
            <p className="text-white font-[600] sm:w-full w-[50%] text-center sm:leading-[30px]">
              The Intelligent Market Place.
            </p>

            <div className="flex gap-5 mt-5 sm:mt-[50px]">
              <Link href="#category" className="scroll-smooth">
                <button className="bg-primary1 text-black px-12 py-3 rounded-md">
                  Explore
                </button>
              </Link>

              <a href="/CREAM.zip" download={"Cream"}>
              <button className="bg-transparent border-2 border-primary1 text-primary1 px-5 py-3 rounded-md">
                Download App
              </button>
              </a>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default DynamicBanner;
