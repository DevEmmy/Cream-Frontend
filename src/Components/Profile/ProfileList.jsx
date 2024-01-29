import { setConfig } from "@/infrastructure/api/user/userRequest";
import Link from "next/link";
import axiosRequest from "@/services/axiosConfig";
import React, { useCallback, useEffect, useState } from "react";
import { FaPlus } from "react-icons/fa";
import globalApi from "../api";
import Card from "@/AtomicComponents/Card";

const ProfileList = ({ user }) => {
  const [listings, setListings] = useState([]);

  useEffect(() => {
    const getListings = async () => {
      try {
        console.log(user?._id);
        console.log("user: ", user);
        const resp = await axiosRequest.get(
          `/listing/user/${user?._id}`,
          setConfig()
        );
        const updatedListings = resp.data.data.map((listing) => {
          // Spread the user object into postedBy key of each listing
          return { ...listing, postedBy: { ...user } };
        });
        setListings(updatedListings);
        console.log(listings);
      } catch (err) {
        console.log(err);
      }
    };

    getListings();
  }, [user]);

  // useEffect(() => {
  //   listings &&
  //     listings.data?.length > 0 &&
  //     listings.data.forEach(function (listing) {
  //       listing.postedBy = { ...user };
  //     });
  //   console.log("listings with posted by", listings);
  // }, [listings]);

  // useEffect(() => {
  //   getListings();
  //   if (listings.length > 0) {
  //   }
  // }, [getListings]);

  return (
    <div className="flex flex-col items-center justify-start px-xPadding">
      {listings.datalength == 0 ? (
        <>
          <h3>No listings</h3>
          <p>Get started by creating a new listing</p>
        </>
      ) : (
        <p>Create a List</p>
      )}

      <Link href="/create-listing">
        <button className="flex gap-2 bg-blue-800 text-white px-5 py-3 rounded-md">
          <FaPlus />
          New listing
        </button>
      </Link>

      <div className="grid grid-cols-3 sm:grid-cols-1 gap-10 my-10">
        {listings?.map((items, i) => {
          return (
            // <RealEstate key={items._id} {...items} />
            <Card key={i} listing={items} />
          );
        })}
      </div>
    </div>
  );
};

export default ProfileList;
