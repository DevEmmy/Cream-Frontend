import React, { useState, useEffect } from "react";
import { useGetUserDetails } from "../../application/hooks/queryhooks";
import { FaPen } from "react-icons/fa";
import { X } from "heroicons-react";
import { DisplayImage } from "./Styled";
import FileBase64 from "react-file-base64";
import Loader from "@/AtomicComponents/Loader/Loader";
import services from "../../ioc/services";
import { createAxiosInstance } from "@/services/axiosConfig";
import { useRouter } from "next/router";
import { success } from "@/services/toaster";

const ProfileImage = ({ data, id, type, setShowImage, setShowCover }) => {
  // const user = useGetUserDetails();
  const [user, setUser] = useState({});
  const [loader, setLoader] = useState(false);
  const [imagep, setImageP] = useState(data.profilePicture);
  const [imagec, setImageC] = useState(data.cover);
  const [popUp, setPopUp] = useState(false);

  console.log(data);
  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("user")));
  }, []);

  const router = useRouter();

  const upload = async (image, type) => {
    setLoader(true);
    console.log("updating");
    if (type === "profile") {
      if (!id) {
        data.profilePicture = image;
      }
    } else if (type === "cover") {
      if (!id) {
        data.cover = image;
      }
    }

    const axiosInstanceWithRouter = createAxiosInstance(router);
    const token = localStorage.getItem("token");
    //console.log("token:", token);
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    };
    //const id = user.id;
    //toast.dismiss();
    //const toastId = loading("verifying payment...");

    const userDetails = type === "profile" ? { dp: image } : { cover: image };

    console.log("lll", userDetails);

    await axiosInstanceWithRouter
      .patch(`/user/profile-picture`, userDetails)
      .then((res) => {
        console.log("response", res);
        success(res.data.message);
        localStorage.setItem("user", JSON.stringify(res.data.data));
        //setEditUserProfile(res.mainData);
        setLoader(false);
        router.push("/profile");
      })
      .catch((error) => {
        console.log(error);
        setLoader(false);
        setPopUp(true);
      });
  };

  return (
    <>
      {popUp && (
        <>
          <div
            className="fixed w-full z-50 h-[100%] top-0 left-0 flex justify-center items-center"
            style={{ background: "rgba(0,0,0,0.5" }}
            onClick={() => {
              setPopUp(false);
            }}
          >
            <div className="md:w-1/3 md:h-1/3 w-2/3 h-1/4 bg-[white] flex justify-center rounded-xl items-center">
              <div className="flex flex-col justify-center items-center p-5">
                <p className="text-xl text-center font-bold">
                  Seems there is a connection error.{" "}
                  <span className="text-[#F2BE5C] block">
                    please try again!
                  </span>
                </p>
              </div>
            </div>
          </div>
        </>
      )}
      <DisplayImage>
        {loader && <Loader />}
        <div className="background">
          <div
            className="close"
            onClick={() => {
              type === "profile" ? setShowImage(false) : setShowCover(false);
            }}
          >
            <X width="20px" />
          </div>
          <div className="imageCont">
            {type === "profile" && (
              <div className="profileName">
                <h1>
                  {data.firstName?.toUpperCase() +
                    " " +
                    data.lastName?.toUpperCase()}
                </h1>
              </div>
            )}
            <div className="image">
              <img
                src={type === "profile" ? imagep : imagec}
                alt={type === "profile" ? "profile picture" : "cover picture"}
              />
            </div>
            {user._id == data._id && (
              <div className="editProfile">
                <FaPen />
                <p>Edit</p>
                <div className="input">
                  <FileBase64
                    name="cover"
                    defaultValue={type === "profile" ? imagep : imagec}
                    multiple={false}
                    onDone={(base64) => {
                      upload(base64.base64, type);
                    }}
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </DisplayImage>
    </>
  );
};

export default ProfileImage;
