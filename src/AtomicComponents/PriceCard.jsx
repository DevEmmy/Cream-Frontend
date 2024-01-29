import React from "react";
import Footer from "./Footer";
import { FaCheck } from "react-icons/fa";

function PriceCard({ planName, planDetails, showButton }) {
  // You can directly access properties of planData here
  //const { planName, planDetails } = planData;
  console.log("plan name, plan details", planName, planDetails);
  // console.log("plan data", planData);

  return (
    <div className="justify-center w-full ">
      <div className=" border border-gray-400 rounded-lg shadow-sm shadow-gray-700 h-auto w-full sm:px-2 sm:py-4  px-4 py-8 bg-white">
        <h2 className="font-bold mb-4">{planName}</h2>
        <div className="flex flex-row items-end gap-x-2 mb-4">
          <p className="text-2xl font-bold font-sans">
            {planDetails.price
              ? planDetails.price.toLocaleString("en-NG", {
                  style: "currency",
                  currency: "NGN",
                })
              : ""}
          </p>
          <div>
            {planDetails.duration > 1
              ? `/${planDetails.duration} months`
              : planDetails.duration === 1
              ? "/monthly"
              : ""}
          </div>
        </div>
        <p className="font-semibold my-4">what's included</p>
        <ul>
          {planDetails.features.map((feature, index) => (
            <li key={index} className="flex flex-row gap-x-2 mb-6">
              <div className="bg-primary1 w-[1.5vw] h-[1.5vw] sm:w-[5vw] sm:h-[5vw] rounded-full items-center justify-center">
                <FaCheck
                  color="white"
                  size={12}
                  fontWeight={8}
                  className="relative top-[25%] left-[25%]"
                />
              </div>
              <div className="text-md">{feature}</div>
            </li>
          ))}
        </ul>
        {showButton && (
          <div className="w-full flex justify-center">
            <button className="bg-primary1 rounded-2xl w-full py-2 my-2 text-white">
              Get started
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default PriceCard;
