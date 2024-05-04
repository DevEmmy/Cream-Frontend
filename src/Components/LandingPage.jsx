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
    "/cpre10.jpg",
    "/cra5.jpeg",
    "/cpre2.jpg",
    "/cra6.jpeg",
    "/cpre3.jpg",
    "f main.jpg",
    "/cpre4.jpg",
    "/cra7.jpeg",
    "/cpre1.jpg",
    "k main.jpg",
    "/cpre8.jpg",
    "GAC main.jpg",
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
