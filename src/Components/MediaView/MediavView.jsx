import React, { useEffect, useRef, useState, useCallback } from "react";
import axios from "axios";
import { ArrowLeft } from "heroicons-react";
import { useParams } from "react-router-dom";
import Footer from "@/AtomicComponents/Footer";
import { EachBuildingContainer } from "../Categories/RealEstate/RealEstate.Style";
import { setConfig } from "@/infrastructure/api/user/userRequest";
import globalApi from "../api";
import { useRouter } from "next/navigation";
import ImageDisplay from "./ImageDisplay";
import MainButton from "../buttons/MainButton";
import theme from "@/application/utils/Theme";
import { SpinnerCircular } from "spinners-react";

const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop);
const MediaView = ({ id }) => {
  const router = useRouter();
  const top = useRef(null);
  const [property, setProperty] = useState("");
  const [active, setActive] = useState(0);
  const [loading, setLoading] = useState(true);
  const [displayImg, setDisplayImg] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const getAList = async () => {
    if (id) {
      await axios
        .get(`${globalApi}/listing/${id}`)
        .then((resp) => {
          setProperty(resp.data.data);
          setLoading(false);
        })
        .catch((err) => console.error(err));
    }
  };

  useEffect(() => {
    getAList();
    scrollToRef(top);
  }, [id]);

  return (
    <>
      <EachBuildingContainer ref={top}>
        {displayImg && (
          <ImageDisplay
            property={property}
            setDisplayImg={setDisplayImg}
            currentIndex={currentIndex}
          />
        )}
        <div className="upper">
          <div
            className="upperContent"
            style={{ cursor: "pointer" }}
            onClick={() => router.back()}
          >
            <ArrowLeft width="20px" />
            <p>Back</p>
          </div>
          <div className="medias">
            <MainButton
              fontWeight="300"
              background="transparent"
              border="transparent"
              color="#F2BE5C"
              onClick={() => {
                setActive(0);
              }}
            >
              Photos
            </MainButton>
            <MainButton
              fontWeight="300"
              background="transparent"
              border="transparent"
              color="#F2BE5C"
              onClick={() => {
                setActive(1);
              }}
            >
              Video
            </MainButton>
          </div>
        </div>
        {active == 0 && (
          <div className="imageGallery">
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
                {property.images.map((image, i) => {
                  return (
                    <>
                      <div
                        key={i}
                        className="image"
                        onClick={() => {
                          setCurrentIndex(i);
                          setDisplayImg(true);
                        }}
                      >
                        <img src={image} alt="media photos" />
                      </div>
                    </>
                  );
                })}
              </>
            )}
          </div>
        )}
        {active == 1 && (
          <div className="imageGallery">
            {loading ? (
              <>
                <div className="loadingImages" />
              </>
            ) : (
              <>
                {property.videos.length > 0 ? (
                  <>
                    {property.videos.map((video) => {
                      return (
                        <>
                          <div>
                            <div className="image">
                              <video width="300px" height="300px" controls>
                                <source src={video} type="video/mp4" />
                                Your browser does not support the video tag.
                              </video>
                            </div>
                          </div>
                        </>
                      );
                    })}
                  </>
                ) : (
                  <>
                    <div className="notFound">
                      <img src="/notFound.png" alt="notFound" />
                      <p>No Video Available!!</p>
                    </div>
                  </>
                )}
              </>
            )}
          </div>
        )}
      </EachBuildingContainer>
      <Footer />
    </>
  );
};

export default MediaView;
