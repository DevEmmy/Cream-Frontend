import React, { useEffect, useMemo, useState } from "react";
import CreditCardPayment from "./CreditCardPayment";
import PriceCard from "@/AtomicComponents/PriceCard";
import { paymentOptions } from "./payment-option";
import { useRouter } from "next/router";
import TransferPayment from "./TransferPayment";
import { createAxiosInstance } from "@/services/axiosConfig";
import toast from "react-hot-toast";
import { error, loading, success } from "@/services/toaster";

function Payment() {
  const categories = [{ type: "card" }, { type: "transfer" }];
  const [selectedOption, setSelectedOption] = useState("transfer");
  const router = useRouter();
  const data = router.query;
  const id = data.id;
  console.log("data", id);

  // const paymentOption = paymentOptions.find(
  //   (option) =>
  //     option.free.id === id ||
  //     option.basic.id === 1 ||
  //     option.plus.id === id ||
  //     option.premium.id === id
  // );
  const paymentOption = paymentOptions[0][id];
  console.log("payment chosen", paymentOption);

  const [cardNumber, setCardNumber] = useState("");
  const [cardName, setCardName] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    // Form validation and submission logic here

    console.log("Form submitted", {
      cardNumber,
      cardName,
      expiryDate,
      cvv,
    });
  };

  const [formattedValue, setFormattedValue] = useState("");

  const generateReferenceNumber = () => {
    // Define the length of the reference number
    const length = 10;

    // Define a character set for the reference number
    const characters = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    // Initialize the reference number
    let referenceNumber = "";

    // Generate random characters until the reference number reaches the desired length
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      referenceNumber += characters[randomIndex];
    }

    return referenceNumber;
  };

  // Generate a random reference number
  const randomReferenceNumber = useMemo(() => {
    return generateReferenceNumber();
  }, []);

  const handlePayment = async () => {
    const axiosInstanceWithRouter = createAxiosInstance(router);
    const token = localStorage.getItem("token");
    //console.log("token:", token);
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    };
    toast.dismiss();
    const toastId = loading("verifying payment...");

    await axiosInstanceWithRouter
      .post(
        "/subscription",
        { type: id, reference: randomReferenceNumber },
        { headers: headers }
      )
      .then((response) => {
        console.log(response);
        if (response.status == 200 || response.status == 201) {
          success(response.data.message);
          return true;
        } else {
          toast.dismiss();
          error(response.data.error);
          console.log(response);
        }
        console.log(response);
        return false;
      })
      .catch((err) => {
        toast.dismiss();

        // Handle other errors
        console.log(err.response);
        error(err.response.data.error);
      });
  };

  console.log("rrr", randomReferenceNumber);

  useEffect(() => {
    // Example four-digit number
    if (expiryDate.length === 2) {
      const firstTwoDigits = expiryDate.slice(0, 2); // Get the first two digits
      const lastTwoDigits = expiryDate.slice(2); // Get the last two digits
      setFormattedValue(`${firstTwoDigits}/${lastTwoDigits}`);
    } else setFormattedValue(expiryDate);
  }, [expiryDate]);

  const handleExpiryInput = (event) => {
    const newValue = event.target.value;
    const formatted = newValue.replace(/[^0-9\/]/g, ""); // Only allow digits and "/"

    // Limit to 5 characters max, enforcing mm/yy format
    if (formatted.length <= 5) {
      const [month, year] = formatted.split("/");
      if (month.length <= 2 && year.length <= 2) {
        setFormattedValue(formatted);
        setExpiryDate(formatted); // Update expiry date state
      }
    }
  };

  const CardInput = ({ label, type, value, onChange, maxLength = 50 }) => {
    return (
      <div className="w-full">
        <label htmlFor={label} className="text-sm font-medium mb-2">
          {label}
        </label>
        <input
          id={label}
          type={type}
          value={value}
          onChange={(event) => onChange(event.target.value)}
          className="w-full px-3 py-2 border bg-inherit border-black rounded-md focus:outline-none focus:ring-primary1"
          maxLength={maxLength}
        />
      </div>
    );
  };

  return (
    <div className="flex flex-1 flex-col w-screen bg-gray-200 ">
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
              //onChange={() => setSelectedOption("card")}
              disabled={true}
            />
            Pay with your card
          </label>
          <label
            className={`inline-block cursor-pointer ${
              selectedOption === "transfer"
                ? "border-primary1 border-b-2 text-primary1"
                : ""
            }`}
          >
            <input
              type="radio"
              name="option"
              className="hidden"
              onChange={() => setSelectedOption("transfer")}
            />
            Pay using bank transfer
          </label>
        </div>
        {selectedOption === "card" && (
          <div className="mb-8 w-[50%] sm:w-[80%]">
            <form className="flex flex-col space-y-4" onSubmit={handleSubmit}>
              <CardInput
                label="Card Number"
                type="number"
                value={cardNumber}
                onChange={setCardNumber}
              />
              <CardInput
                label="Card Name"
                type="text"
                value={cardName}
                onChange={setCardName}
              />
              <div className="flex space-x-28">
                <CardInput
                  label="Expiry Date"
                  maxLength={5}
                  type="text"
                  value={formattedValue}
                  onChange={setExpiryDate}
                />
                <CardInput
                  label="CVV"
                  type="password"
                  value={cvv}
                  onChange={setCvv}
                />
              </div>
              {/* <button
             type="submit"
             className="bg-blue-500 text-white py-2 px-4 rounded-md"
           >
             Pay Now
           </button> */}
            </form>
          </div>
        )}
        <div className="w-[50%] sm:w-[80%]">
          {paymentOption && selectedOption === "card" ? (
            <CreditCardPayment
              //key={index}
              planName={paymentOption.name}
              planDetails={paymentOption}
            />
          ) : paymentOption && selectedOption === "transfer" ? (
            <TransferPayment
              planName={paymentOption.name}
              planDetails={paymentOption}
              randomReferenceNumber={randomReferenceNumber}
            />
          ) : null}
          <button
            className="bg-primary1 text-white w-full mt-8 rounded-md py-1 font-bold mb-8"
            //type="submit"
            onClick={handlePayment}
          >
            {selectedOption === "transfer"
              ? "I have made the payment"
              : "Proceed to payment"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Payment;
