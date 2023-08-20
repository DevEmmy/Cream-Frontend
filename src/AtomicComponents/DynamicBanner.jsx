import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import BlackOverlay from './BlackOverlay';

const DynamicBanner = ({children}) => {
    const images = [
        "/i1.jpg", "/i2.jpg", "i3.jpg"
    ]

    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 1,
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 1
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
          slidesToSlide: 1 // optional, default to 1.
        }
      };

  return (
    
    <div className='relative'>
        <Carousel 
            responsive={responsive} 
            className='w-[100%] object-cover'
            showDots={false}    
            autoPlay={true}
            ssr={true}
            autoPlaySpeed={3000}
            customTransition="all .5"
            arrows={false}
            infinite={true}
        >
            
            {
                images.map((image, i)=>{
                    return(
                        <img src={image} key={i} className='w-[100%] h-[100vh]'/>
                    )
                })
            }
        </Carousel>

        <BlackOverlay />
        <div className="textContainer absolute flex flex-col top-[35vh] left-0 right-0 items-center justify-center">
            {
                children ||
                <>
                    <h1 className='text-white text-[4em] font-[700]'>
                        LUXURY <span className='text-primary1'>REDEFINED.</span>
                    </h1>
                    <p className='text-white font-[600]'>
                        Luxury is a mindset, CREAM is all that you need.
                    </p>

                    <div className="flex gap-5 mt-5">
                        <button className='bg-primary1 text-black px-12 py-3 '>Explore</button>
                        <button className='bg-transparent border-2 border-primary1 text-primary1 px-5 py-3'>Download App</button>
                    </div>
                </>
            }
        </div>
    </div>
  )
}

export default DynamicBanner