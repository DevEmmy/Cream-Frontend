import Link from "next/link";
import React, { useState } from "react";
import { HiLocationMarker } from "react-icons/hi";
import { RiHeart2Fill, RiHeart2Line } from "react-icons/ri";

const Card = ({ listing }) => {
  const [like, setLike] = useState(false);
  return (
    <a href={`/real-estate/${listing._id}`}>
      <div className="border cflexms border-gray-300 p-3 gap-[10px] rounded-lg">
        <div className="flex gap-2 w-full items-center">
          <img
            src={listing.postedBy.profilePicture}
            alt=""
            className="w-14 h-14 rounded-[50%]"
          />
          <p className="font-[600]">
            {listing.postedBy.firstName + " " + listing.postedBy.lastName}
          </p>
        </div>
        <div className="relative w-full">
          <img
            src={listing.images[0]}
            alt=""
            className="w-full h-[200px] rounded-tl-3xl rounded-br-3xl my-3"
          />

          <div
            className="absolute text-white bg-[rgb(200,200,200)] top-[20px] left-[20px] w-6 h-6 flex items-center justify-center rounded-[50%] cursor-pointer"
            onClick={() => setLike(!like)}
          >
            {like ? (
              <RiHeart2Fill className="text-primary1" />
            ) : (
              <RiHeart2Line />
            )}
          </div>
        </div>

        <p>{listing.title}</p>
        <p className="text-[0.8em]">
          {new Intl.NumberFormat("en-NG", {
            style: "currency",
            currency: "NGN",
          }).format(listing.price)}
        </p>
        <p className="text-[0.8em] flex items-center">
          <HiLocationMarker /> {listing.location}
        </p>

        <Link href={`/real-estate/${listing._id}`} scroll={false}>
          <button className="bg-primary1 py-3 px-10 rounded-md font-[600] mt-3 text-[0.8em]">
            Enquire Now
          </button>
        </Link>
      </div>
    </a>
  );
};

export default Card;
