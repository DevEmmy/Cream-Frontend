import React from "react";
import PriceCard from "@/AtomicComponents/PriceCard";
import Footer from "@/AtomicComponents/Footer";
import { paymentOptions } from "./payment-option";

function PaymentOptions() {
  return (
    <div className=" min-h-screen bg-gray-200 w-screen">
      <div className="w-full flex items-center flex-col">
        <div className="w-full flex flex-col items-center">
          <div className="my-4 font-bold text-lg">Prices</div>
          <div className="w-[55%]   sm:w-[90%]">
            <div className="flex flex-col items-center">
              By showcasing your exclusive listings to our highly-esteemed users
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 w-[55%] sm:w-[90%] gap-12 my-8 sm:flex sm:flex-col">
          <PriceCard
            //key={index}
            planName="Free"
            planDetails={paymentOptions[0]["free"]}
          />
          <PriceCard
            //key={index}
            planName="Basic"
            planDetails={paymentOptions[0]["basic"]}
          />
          <PriceCard
            //key={index}
            planName="Plus"
            planDetails={paymentOptions[0]["plus"]}
          />
          <PriceCard
            //key={index}
            planName="Premium"
            planDetails={paymentOptions[0]["premium"]}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default PaymentOptions;
