import React, { useCallback, useEffect } from "react";
import { LastContainer } from "./ProfileList.style";
import { FaFolderPlus } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { setConfig } from "../infrastructure/api/user/userRequest";
import { GridContainer } from "../Components/Listing/Listing.styled";
import { useState } from "react";
import { useGetUserDetails } from "../application/hooks/queryhooks";
import axiosRequest from "@/services/axiosConfig";
import { getUserListing } from "@/services/request";

export default function ProfileList() {
  let navigate;
  const [listings, setListings] = useState([]);
  const data = useGetUserDetails();
  console.log("data:", data);

  const getListings = useCallback(async () => {
    // axios
    //   .get(`${axiosRequest}/listings/user-listing?id=${data._id}`, setConfig())
    //   .then((resp) => setListings(resp.data))
    //   .catch((err) => console.log(err));
    const userListings = getUserListing(data._id);
    setListings(userListings);
    listings.forEach(function (listing) {
      listing.postedBy = { ...data };
    });
  }, [data]);

  useEffect(() => {
    getListings();
  }, [getListings]);

  useEffect(() => {
    console.log("listings", listings);
  }, [listings]);

  return (
    <LastContainer>
      {/* <FaFolderPlus className='folder'/> */}
      {listings.length == 0 ? (
        <>
          <h3>No listings</h3>
          <p>Get started by creating a new listing</p>
        </>
      ) : (
        <p>Create a List</p>
      )}

      <button
        onClick={() => {
          navigate("/profile/create-listings");
        }}
      >
        <FaPlus />
        New listing
      </button>

      <GridContainer>
        {listings.map((items) => {
          return (
            // <RealEstate key={items._id} {...items} />
            <Listing key={items._id} list={items} />
          );
        })}
      </GridContainer>
    </LastContainer>
  );
}
