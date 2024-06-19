"use client";
import React from "react";
import { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";
import Return from "../Components/Navbar/Return";
import CreateCarsListing from "./CreateCarsListing";
import { ListingForm, ListingHead } from "./CreateListing.style";
import CreateRealEstateListing from "./CreateRealEstateListing";

const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop);
const CreateListing = () => {
  const [listing, setListing] = useState("Real Estate");
  const top = useRef(null);
  const categories = [
    {
      type: "Real Estate",
    },
    {
      type: "Cars",
    },
  ];

  const [email, setEmail] = useState(null);

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      const parsedUser = JSON.parse(user);
      console.log("User found:", parsedUser);
      setEmail(parsedUser.email);
    }
  }, []);

  // Function to toggle `trigger` state
  const updateEmail = () => {
    setTrigger((prev) => !prev);
  };

  useEffect(() => {
    scrollToRef(top);
  }, [top]);

  return (
    <>
      <Return transparent={true} />
      <ListingHead ref={top}>
        <div className="heading">
          <h3 className="head1">Earn A Decent Commission</h3>
          <p className="head2">
            by showcasing your exclusive listings to our highly-esteemed users
          </p>
          <select
            name="listings"
            onChange={(e) => {
              setListing(e.target.value);
            }}
          >
            {categories.map((category, i) => {
              return (
                <option key={i} value={category.type}>
                  {category.type}
                </option>
              );
            })}
          </select>
        </div>
      </ListingHead>
      <ListingForm>
        <div className="body">
          {listing === "Real Estate" && (
            <CreateRealEstateListing email={email} />
          )}
          {listing === "Cars" && <CreateCarsListing email={email} />}
        </div>
      </ListingForm>
    </>
  );
};
export default CreateListing;
