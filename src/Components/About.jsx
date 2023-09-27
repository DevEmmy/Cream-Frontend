import DynamicBanner from "@/AtomicComponents/DynamicBanner";
import Footer from "@/AtomicComponents/Footer";
import Nav from "@/AtomicComponents/Nav";
import PreFooter from "@/AtomicComponents/PreFooter";
import Link from "next/link";
import React from "react";
import { RiArrowRightFill } from "react-icons/ri";

const About = () => {
  return (
    <>
      <Nav active={3} />
      <DynamicBanner>
        <h1 className="text-white text-[4em] sm:text-[40px] font-[700]">
          ABOUT <span className="text-primary1">CREAM!</span>
        </h1>
        <p className="text-white font-[600] w-full text-center">
          Discover a world of unrivaled luxury where every offer and purchase is
          an experience to savor.
        </p>
        <button className="bg-primary1 text-black px-12 py-3 mt-3 rounded-md">
          Explore
        </button>
      </DynamicBanner>

      <div className="grid grid-cols-2 gap-20 sm:grid-cols-1 mx-xPadding my-44 sm:my-20 items-center">
        <div className="w-full cflexms gap-3">
          <h5>About CREAM Platform</h5>
          <h1 className="text-[2em] sm:text-[1.5em] font-[700]">
            A Luxury Market And Networking Platform For All
          </h1>
          <p className="text-gray-500">
            The King David Elites marketplace is where you find only the most
            exclusive and highest quality real estate, automobiles, luxury
            services, and collectibles. Our mission is to provide an
            unparalleled shopping experience for discerning customers seeking
            the very best in life. Our curated selection of offerings is
            carefully chosen by our team of experts, ensuring that only the most
            luxurious and desirable items are made available to our valued
            customers. From stunning properties and rare collectibles, to lavish
            experiences and the finest automobiles, we have something for every
            discerning taste. Thank you for choosing us as your go-to
            destination for all things luxury.
          </p>
          <button className="flex gap-3 items-center px-10 py-3 mt-5 bg-primary1 rounded-md">
            Get Started <RiArrowRightFill />
          </button>
        </div>

        <div>
          <img src="/frame.jpg" alt="" />
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-1 gap-20 mx-xPadding my-44 items-center">
        <div>
          <img src="/frame2.jpg" alt="" className="h-[400px] rounded-md" />
        </div>

        <div className="w-full cflexms gap-3">
          <h1 className="text-[2em] sm:text-[1.5em] font-[700]">
            Reasons For Our Establishment
          </h1>
          <p className="text-gray-500">
            We established our luxury multivendor online marketplace with the
            belief that life's most precious moments deserve only the very best.
            Whether it's finding the perfect home to create lasting memories,
            indulging in the finer things in life, or treating yourself to a
            once-in-a-lifetime experience, we are dedicated to helping you
            elevate your every day. Thank you for entrusting us with your luxury
            needs and allowing us to be a part of your journey.
          </p>
          <button className="flex gap-3 items-center px-10 py-3 mt-5 bg-black text-white rounded-md">
            Read More <RiArrowRightFill />
          </button>
        </div>
      </div>

      <div className="mx-xPadding my-20 sm:px-[10px] rounded-md bg-black text-white py-20 flex flex-col items-center justify-center">
        <p>
          HAVE ANY <span className="text-primary1">QUESTIONS</span>?
        </p>
        <p className="text-center">PLEASE REACH OUT TO US SO WE CAN HELP YOU BETTER.</p>
        <Link
          href={"/contact-us"}
          className="bg-primary1 px-5 py-2 rounded-md mt-3 sm:mt-5"
        >
          Contact Us
        </Link>
      </div>

      <PreFooter />
      <Footer />
    </>
  );
};

export default About;
