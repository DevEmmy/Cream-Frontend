import DynamicBanner from "@/AtomicComponents/DynamicBanner";
import Footer from "@/AtomicComponents/Footer";
import Nav from "@/AtomicComponents/Nav";
import PreFooter from "@/AtomicComponents/PreFooter";
import React from "react";
import Categories from "./Categories";
import PropertyRequest from "./PropertyRequest";
import HomeBlog from "@/AtomicComponents/HomeBlog";
import NewsletterSubscription from "@/AtomicComponents/NewsletterSubscription";

const LandingPage = () => {
  const images = [
    "/pic25.jpg",
    "/pic28.jpg",
    "/pic26.jpg",
    "/pic27.jpg",
    "/pic28.jpg",
    "/pic29.jpg",
    "/pic30.jpg",
    // "pic14.jpg",
  ];
  return (
    <div className="scroll-smooth">
      <Nav />
      <DynamicBanner images={images} />
      <Categories />
      <NewsletterSubscription />
      <HomeBlog />
      <PropertyRequest />

      {/* <PreFooter /> */}
      <Footer />
    </div>
  );
};

export default LandingPage;
