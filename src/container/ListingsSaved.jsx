import React, { useCallback, useEffect } from "react";
import { LastContainer } from "./ListingsSaved.Style";
import theme from "../application/utils/Theme";
import axios from "axios";
import globalApi from "../api";
import { setConfig, getUser } from "../infrastructure/api/user/userRequest";
import { GridContainer } from "../Components/Listing/Listing.styled";
import Listing from "../Components/Listing/Listing";
import { useState } from "react";
import { useGetUserDetails } from "../application/hooks/queryhooks";
import { SpinnerCircular } from "spinners-react";
import notFound from "../Components/Categories/MediaView/notFound.png";

const GetUserDetails = () => {
  return useGetUserDetails()
};

export default function ListingsSaved() {
  const [loading, setLoading] = useState(true);
  const [savedListings, setSavedListings] = useState([]);  

  const getAList = async (id) => {
    try {
      let property = await axios.get(`${globalApi}/listings/each/${id}`);
      return property;
    } catch (err) {
      console.log(err);
    }
  };

  const getSavedListings = async () => {
    const mockListings = [];
    await getUser();
    const data = await GetUserDetails();
    for (let i = 0; i < data.savedListing.length; i++) {
      let list = await getAList(data.savedListing[i]);
      console.log(list.data);
      if (list.data) {
        mockListings.push(list.data);
      }
    }
    console.log(mockListings);
    setSavedListings(mockListings);
    setLoading(false);
  };

  useEffect(() => {
    getSavedListings();
  }, []);

  return (
    <LastContainer>
      {loading ? (
        <>
          <SpinnerCircular
            color="white"
            className="flex justify-center"
            secondaryColor={theme.color}
            size={50}
            thickness={150}
          />
        </>
      ) : (
        <>
          {savedListings.length == 0 ? (
            <>
              <div className="flex flex-col gap-[0.5em] justify-center items-center w-full">
                <div className="md:w-[20em]">
                  <img src={notFound} width="100%" height="auto" alt="" />
                </div>
                <p>No Saved Listing Available</p>
              </div>
            </>
          ) : (
            <GridContainer>
              {savedListings.map((items) => {
                return <Listing key={items._id} list={items} />;
              })}
            </GridContainer>
          )}
        </>
      )}
    </LastContainer>
  );
}
