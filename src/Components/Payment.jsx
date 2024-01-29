import React, { useState } from "react";
import CreditCardPayment from "./CreditCardPayment";
import PriceCard from "@/AtomicComponents/PriceCard";
import { paymentOptions } from "./payment-option";

function Payment() {
  const categories = [{ type: "card" }, { type: "transfer" }];
  const [selectedOption, setSelectedOption] = useState(null);
  return (
    <div className="flex flex-1 flex-col w-screen">
      <div className="flex flex-col mt-12 w-full items-center">
        <div className="font-bold text-lg font-sans">Payment</div>
        <div>Select a payment method for your transaction</div>
        <div className="flex justify-between w-[30%] sm:w-[80%] my-8">
          <label
            className={`inline-block cursor-pointer ${
              selectedOption === "card"
                ? "border-primary1 border-b-2 text-primary1"
                : ""
            }`}
          >
            <input
              type="radio"
              name="option"
              className="hidden"
              onChange={() => setSelectedOption("card")}
            />
            Pay with your card
          </label>
          <label
            className={`inline-block cursor-pointer ${
              selectedOption === "bank"
                ? "border-primary1 border-b-2 text-primary1"
                : ""
            }`}
          >
            <input
              type="radio"
              name="option"
              className="hidden"
              onChange={() => setSelectedOption("bank")}
            />
            Pay using bank transfer
          </label>
        </div>
        <CreditCardPayment />
        <div className="w-[50%] sm:w-[80%]">
          <PriceCard
            //key={index}
            planName="Basic"
            planDetails={paymentOptions[0]["basic"]}
            showButton={false}
          />
          <button className="bg-primary1 text-white w-full mt-8 rounded-md py-1">
            click to proceed payment
          </button>
        </div>
      </div>
    </div>
  );
}

export default Payment;
