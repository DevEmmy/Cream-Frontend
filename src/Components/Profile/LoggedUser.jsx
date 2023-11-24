import React, { useState } from "react";
import { Fragment } from "react";
import {
  FaCheckCircle,
  FaFacebook,
  FaIcons,
  FaInstagram,
  FaPen,
} from "react-icons/fa";
import ProfileList from "../../container/ProfileList";
import ProfileStat from "../../container/ProfileStat";
import ProfileImage from "./ProfileImage";
import ListingsSaved from "../../container/ListingsSaved";
import {
  Bio,
  Details,
  Header,
  Switch,
  Update,
  Address,
  UsersListings,
  UserDetails,
  SavedContainer,
} from "./Styled";
import Account from "../Account/Account";
import { a, useNavigate, useParams } from "react-router-dom";
import Return from "../Navbar/Return";
import axios from "axios";
import globalApi from "../../api";
import { useEffect } from "react";
import { GridContainer } from "../Listing/Listing.styled";
import Listing from "../Listing/Listing";
import { setConfig } from "../../infrastructure/api/user/userRequest";
import useContextAPI from "../ContextAPI/ContextAPI";
import styled from "styled-components";
import { useCallback } from "react";
import api from "../../infrastructure/api";

const LoggedUser = ({ logged }) => {
  const [active, setActive] = useState(<ProfileStat />);
  const [showImage, setShowImage] = useState(false);
  const [showCover, setShowCover] = useState(false);
  const [data, setData] = useState({});
  const [btn, setBtn] = useState("Stats");
  const navigate = useNavigate();
  const [file, setFile] = useState(data.cover);
  const { id } = useParams();
  const [listings, setListings] = useState([]);
  const mainData = useContextAPI();

  const getListings =
    (() => {
      axios
        .get(`${globalApi}/listings/user-listing?id=${id}`, setConfig())
        .then((resp) => {
          setListings(resp.data);
        })
        .catch((err) => console.log(err));
    },
    [id]);

  if (id == mainData.userData?._id) {
    navigate("/profile");
  }

  const createConversation = () => {
    axios
      .post(
        `${globalApi}/conversations/new-conversation/${id}`,
        {},
        setConfig()
      )
      .then((resp) => {
        console.log(resp.data);
        navigate(`/dashboard/messages/chat/${resp.data._id}`);
      })
      .catch((err) => console.log(err));
  };

  const getUserData = async (id) => {
    await axios
      .get(`${globalApi}/users/${id}`)
      .then((resp) => {
        setData(resp.data);
        console.log(resp.data);
        getListings();
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    if (!id) {
      setData(mainData.userData);
    } else {
      getUserData(id);
    }
  }, [id]);

  // const logged = true
  const options = [
    {
      title: "Stats",
      component: <ProfileStat />,
    },
    {
      title: "List",
      component: <ProfileList />,
    },
    {
      title: "Account",
      component: <Account />,
    },
    {
      title: "Saved Listings",
      component: <ListingsSaved />,
    },
  ];

  useEffect(() => {
    if (data.accountType === 0) {
      setActive(<ListingsSaved />);
      setBtn("Saved Listings");
    }
  }, [data]);

  const [verify, setVerify] = useState("");
  const getVerification = useCallback(async () => {
    await axios
      .get(`${globalApi}/verification/my-status`, setConfig())
      .then((resp) => {
        console.log(resp.data);
        setVerify(resp.data.status);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    getVerification();
  }, []);

  return (
    <Fragment>
      {showImage && (
        <ProfileImage
          data={data}
          id={id}
          type="profile"
          setShowImage={setShowImage}
        />
      )}
      {showCover && (
        <ProfileImage
          data={data}
          id={id}
          type="cover"
          setShowCover={setShowCover}
        />
      )}
      <Return transparent={true} link={"/"} />
      <Header
        className="cursor-pointer"
        onClick={() => {
          setShowCover(true);
        }}
      >
        <img src={data.cover} alt="" />
      </Header>

      <Details>
        <div
          className="profile"
          onClick={() => {
            setShowImage(true);
          }}
        >
          <img src={data.profilePicture} alt="" />

          <div className="title">
            <h3>{data.firstName + " " + data.lastName}</h3>
            <p>Joined in {new Date(data.createdAt).getFullYear()}</p>
          </div>

          <div className="btns">
            {!logged ? (
              <>
                <div
                  className="edit"
                  onClick={() => {
                    navigate("edit");
                  }}
                >
                  <FaPen />
                  <p>Edit Profile</p>
                </div>
                {data.accountType != 0 && (
                  <div
                    className="upgrade"
                    onClick={() => navigate("/profile/upgrade")}
                  >
                    <p>Upgrade Account</p>
                  </div>
                )}
              </>
            ) : (
              <>
                <div className="edit" onClick={createConversation}>
                  Message
                </div>

                <div className="edit">Call</div>
              </>
            )}
          </div>
        </div>
      </Details>

      <Details>
        <UserDetails>
          <div className="bio">{data.about}</div>
          <div className="email">
            Email: <span className="select">{data.email}</span>
          </div>
          {data.websiteUrl && (
            <div>
              Wesbite:{" "}
              <a href={`https://${data.websiteUrl}`} className="select">
                {data.websiteUrl}
              </a>
            </div>
          )}
          <div className="email">{data?.address}</div>

          <div className="email"></div>

          <Address>
            {(data.facebookUrl || data.instagramUrl) && (
              <p className="social">
                Social:
                {data.facebookUrl && (
                  <a href={data.facebookUrl}>
                    <FaFacebook color="blue" size={22} />
                  </a>
                )}
                {data.instagramUrl && (
                  <a href={data?.instagramUrl}>
                    <FaInstagram color="#FA5936" size={22} />
                  </a>
                )}
              </p>
            )}
          </Address>

          {!logged && verify && verify != "APPROVED" && (
            <Verify>Verification status: {verify}</Verify>
          )}
        </UserDetails>
      </Details>
      {/* <Bio>{data.about}</Bio> */}

      {!logged && data.accountType != 0 && <Update>Ugrade Account</Update>}

      {!logged && data.accountType == 1 ? (
        <Switch>
          <div className="line" />
          <div className="options">
            {options.map((option, i) => {
              const { title, component } = option;
              return (
                <>
                  {data.accountType === 1 ? (
                    <>
                      {title !== "Saved Listings" && (
                        <div
                          key={i}
                          className={btn === title ? "option2" : "option"}
                          onClick={() => {
                            setActive(component);
                            setBtn(title);
                          }}
                        >
                          {title}
                        </div>
                      )}
                    </>
                  ) : (
                    <>
                      {title === "Saved Listings" && (
                        <div
                          key={i}
                          className={btn === title ? "option2" : "option"}
                          onClick={() => {
                            setActive(component);
                            setBtn(title);
                          }}
                        >
                          {title}
                        </div>
                      )}
                    </>
                  )}
                </>
              );
            })}
          </div>
          <div className="line" />
        </Switch>
      ) : (
        <SavedContainer>
          <h1>0 of 20 Saved Listings</h1>
          <p>Note: You cannot save more than 20 listings</p>
        </SavedContainer>
      )}

      {!logged && active}

      {logged && (
        <UsersListings>
          <h3>{listings.length} Listings for Sale</h3>

          <GridContainer>
            {listings.map((items) => {
              return (
                // <RealEstate key={items._id} {...items} />
                <Listing key={items._id} list={items} />
              );
            })}
          </GridContainer>
        </UsersListings>
      )}
    </Fragment>
  );
};

export default LoggedUser;

const Verify = styled.div``;
