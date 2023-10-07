import DynamicBanner from "@/AtomicComponents/DynamicBanner";
import Footer from "@/AtomicComponents/Footer";
import Nav from "@/AtomicComponents/Nav";
import PreFooter from "@/AtomicComponents/PreFooter";
import React from "react";
import Categories from "./Categories";

const LandingPage = () => {
  const images = ["/pic9.jpg", "/pic1.jpg", "pic5.jpg", "pic3.jpg", "pic8.jpg", "pic7.jpg", "pic14.jpg"];
  return (
    <div>
      <Nav />
      <DynamicBanner images={images} />
      <Categories />

      {/* <PreFooter /> */}
      <Footer />
    </div>
  );
};

export default LandingPage;
