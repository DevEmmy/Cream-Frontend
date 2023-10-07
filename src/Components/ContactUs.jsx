import DynamicBanner from "@/AtomicComponents/DynamicBanner";
import Footer from "@/AtomicComponents/Footer";
import Nav from "@/AtomicComponents/Nav";
import React from "react";

const ContactUs = () => {
  const images = ["/help.jpg", "/pic8.jpg", "pic16.jpg"];
  return (
    <div>
      <Nav active={4} />
      <DynamicBanner images={images}>
        <h1 className="text-white text-[4em] sm:text-[40px] font-[700]">
          CONTACT <span className="text-primary1">US</span>
        </h1>
        <p className="text-white font-[600] text-center">
          All you need to know about CREAM.
        </p>
      </DynamicBanner>

      <div className="grid grid-cols-2 gap-20 sm:grid-cols-1 mx-xPadding my-24 items-center">
        <h1 className="text-[4em] sm:text-[25px] font-[600]">
          Have Anything In Mind? Let's talk.
        </h1>

        <form className="flex flex-col gap-3">
          <p>Send A Message</p>

          <div className="flex gap-2 items-center sm:flex-col sm:w-full">
            <div className="sm:w-full">
              <p className="text-[0.8em]">Name</p>
              <input type="text" />
            </div>

            <div className="sm:w-full">
              <p className="text-[0.8em]">Email</p>
              <input type="email" />
            </div>
          </div>

          <div className="flex gap-2 items-center sm:flex-col sm:w-full">
            <div className="sm:w-full">
              <p className="text-[0.8em]">Your Website</p>
              <input type="text" />
            </div>

            <div className="sm:w-full">
              <p className="text-[0.8em]">Phone Number</p>
              <input type="tel" />
            </div>
          </div>

          <div>
            <p className="text-[0.8em]">Comment</p>
            <textarea
              name=""
              id=""
              cols="10"
              rows="10"
              className="resize-none w-[95%]"
            />
          </div>

          <button className="bg-primary1 py-3 text-center w-[95%] rounded-md">
            Send Message
          </button>
        </form>
      </div>

      <Footer />
    </div>
  );
};

export default ContactUs;
