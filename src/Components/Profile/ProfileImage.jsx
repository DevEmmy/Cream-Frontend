import React, { useState, useEffect } from "react";
import { useGetUserDetails } from "../../application/hooks/queryhooks";
import { FaPen } from "react-icons/fa";
import { X } from "heroicons-react";
import { DisplayImage } from "./Styled";
import FileBase64 from "react-file-base64";
import Loader from "@/AtomicComponents/Loader/Loader";
import services from "../../ioc/services";

const ProfileImage = ({ data, id, type, setShowImage, setShowCover }) => {
  // const user = useGetUserDetails();
  const [user, setUser] = useState({});
  const [loader, setLoader] = useState(false);
  const [imagep, setImageP] = useState(data.profilePicture);
  const [imagec, setImageC] = useState(data.cover);

  console.log(data);
  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("user")));
  }, []);

  const upload = (image, type) => {
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
    const userDetails =
      type === "profile" ? { profilePicture: image } : { cover: image };
    services.api.userRequests
      .updateUserProfile(userDetails)
      .then((res) => {
        setLoader(false);
        if (type == "profile") {
          setImageP(image);
        } else if (type === "cover") {
          setImageC(image);
        }
        localStorage.setItem("user", JSON.stringify(res.data));
        services.toast.success("Uploaded Successfully");
      })
      .catch((error) => {
        console.log(error);
        services.toast.error(error);
      });
  };

  return (
    <>
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
