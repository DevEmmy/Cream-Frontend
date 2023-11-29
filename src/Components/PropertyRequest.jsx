import React from "react";
import Link from "next/link";
import PropertyRequestForm from "./PropertyRequestForm";

function PropertyRequest() {
  return (
    <div className="bg-black cflexss sm:items-center  px-xPadding rounded-sm mx- py-20 my-20 text-white justify-items-center w-[100%]">
      <div className="w-[100%] cflexss gap-5 sm:w-full sm:text-center">
        <h3 className="text-[2em] sm:text-[30px]">
          Can't find what you are looking for? make a{" "}
          <span className="font-[600] text-primary1">Property Request</span>{" "}
        </h3>
        <p>
          If you can't find the property you're looking for, don't worry! You
          can submit a property request by typing in a detailed description of
          your dream property, and we'll do our best to help you find it. Here's
          how:
        </p>

        <ol>
          <li>Click on the "Make a Property Request" button below.</li>
          <li>
            Provide as much information as possible about the property you're
            searching for, including location, size, features, and any specific
            requirements.
          </li>
          <li>
            Submit your request, and our team will get to work to find the
            perfect property for you.
          </li>
        </ol>

        <p>
          We're committed to helping you find your dream property, and your
          input is essential in this process. Start your property request today
          and let us assist you in finding the perfect home!
        </p>
      </div>
      <Link href={"/propertyRequestForm"} className="text-primary1 font-[500]">
        <button className="border-2 border-white py-3 px-8 mt-3 sm:mt-8">
          Make a Property Request
        </button>
      </Link>{" "}
    </div>
  );
}

export default PropertyRequest;
