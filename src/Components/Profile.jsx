import Card from "@/AtomicComponents/Card";
import Line from "@/AtomicComponents/Line";
import Nav from "@/AtomicComponents/Nav";
import theme from "@/application/utils/Theme";

import React, { useEffect, useState } from "react";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { RiPencilFill } from "react-icons/ri";
import TimeAgo from "react-timeago";
import styled from "styled-components";
import ProfileList from "./Profile/ProfileList";

const Profile = () => {
  let [user, setUser] = useState();
  const [active, setActive] = useState();
  const [btn, setBtn] = useState("Stats");

  useEffect(() => {
    let data = JSON.parse(localStorage.getItem("user"));
    setUser(data);
    setActive(<ProfileList user={data} />);
  }, []);

  const options = [
    // {
    //   title: "Stats",
    //   component: <ProfileStat />,
    // },
    {
      title: "List",
      component: <ProfileList user={user} />,
    },
    // {
    //   title: "Account",
    //   component: <Account />,
    // },
    // {
    //   title: "Saved Listings",
    //   component: <ListingsSaved />,
    // },
  ];

  return (
    <>
      {user && (
        <div>
          <Nav active={10} />
          <div className="cover h-[40vh]">
            <img src={user.cover} alt="" />
          </div>

          <div className="mx-xPadding my-10">
            <div className="profile flex sm:flex-col gap-6 items-center">
              <div className="sm:w-full flexsm sm:flex-wrap gap-[2em]">
                <img
                  src={user.profilePicture}
                  alt=""
                  className="avatar w-24 h-24 sm:w-16 sm:h-16"
                />

                <div className="flex flex-col">
                  <h3 className="font-[600] text-[1.2em] sm:text-[1em]">
                    {user.firstName + " " + user.lastName}
                  </h3>
                  <p className="text-[0.8em]">
                    Joined <TimeAgo date={user.createdAt} />
                  </p>
                </div>

                <a href="/profile/edit">
                  <button className="flex gap-1 items-center bg-gray-300 py-3 px-5 rounded-md text-[0.8em]">
                    <RiPencilFill />
                    Edit Profile
                  </button>
                </a>
              </div>
            </div>

            {/* <div className="my-3 sm:text-[16px]">
          <p>{user.bio}</p>
          <p>
            Email:{" "}
            <span className="pryOutline font-[700]">
            {user.email}
            </span>
          </p>
        </div> */}

            <UserDetails>
              <div className="bio">{user.about}</div>
              <div className="email">
                Email: <span className="select">{user.email}</span>
              </div>
              {user.websiteUrl && (
                <div>
                  Wesbite:{" "}
                  <a href={`https://${user.websiteUrl}`} className="select">
                    {user.websiteUrl}
                  </a>
                </div>
              )}
              <div className="email">{user?.address}</div>

              <div className="email"></div>

              <Address>
                {(user.facebookUrl || user.instagramUrl) && (
                  <p className="social">
                    Social:
                    {user.facebookUrl && (
                      <a href={user.facebookUrl}>
                        <FaFacebook color="blue" size={22} />
                      </a>
                    )}
                    {user.instagramUrl && (
                      <a href={user?.instagramUrl}>
                        <FaInstagram color="#FA5936" size={22} />
                      </a>
                    )}
                  </p>
                )}
              </Address>

              {/* {
        !logged && verify && verify != "APPROVED" &&
        <Verify>
          Verification status: {verify}
        </Verify>
      } */}
            </UserDetails>

            <Line />

            <div className="saved my-10">
              <div>
                <h3 className="text-[1.5em] s:text-[1.2em] font-[600]">
                  3 of 20 Saved Listings
                </h3>
                {/* <p className='text-red-500 text-[0.8em]'>Note: You cannot save more than 20 Listings</p> */}
              </div>

              <div className="listings-container my-10">
                {/* <Card />
                    <Card />
                    <Card /> */}
              </div>
            </div>
          </div>

          {
            user.accountType == 1 ? (
              <Switch>
                <div className="line" />
                <div className="options">
                  {options.map((option, i) => {
                    const { title, component } = option;
                    return (
                      <>
                        {user.accountType === 1 ? (
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
              <></>
            )
            // <SavedContainer>
            //   <h1>0 of 20 Saved Listings</h1>
            //   <p>Note: You cannot save more than 20 listings</p>
            // </SavedContainer>
          }
        </div>
      )}

      {active}
    </>
  );
};

export default Profile;

export const Address = styled.div`
  width: 80%;
  /* margin: 10px auto; */

  .address {
    font-weight: 600;
  }

  @media (max-width: 700px) {
    width: 96%;
    font-size: 14px;
  }

  .social {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .website {
    color: #fa5936;
    text-decoration: underline;
    font-weight: 600;
  }
`;

export const UserDetails = styled.div`
  padding: 10px;
  font-size: 14px;
  .bio {
    color: rgb(100, 100, 100);
  }

  .select {
    color: ${theme.color};
  }
`;

export const Switch = styled.div`
  margin: 50px 0;
  .line {
    /* width: 100%; */
    height: 5px;
    background-color: #e2e2e2;
  }

  .options {
    /* display: grid;
        grid-template-columns: repeat(3, 1fr); */
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 80%;
    margin: 10px auto;
    font-size: 14px;

    .option {
      background: #e2e2e2;
      color: black;
      width: fit-content;
      padding: 7px 30px;
      border-radius: 6px;
      cursor: pointer;
    }
    .option2 {
      background-color: #252625;
      color: white;
      width: fit-content;
      padding: 7px 30px;
      border-radius: 6px;
    }

    .option:hover {
      background-color: #252625;
      color: white;
      transition: all 0.3s;
    }

    @media (max-width: 600px) {
      width: 100%;
      padding: 0 10px;
      display: flex;
      justify-content: space-between;

      .option {
        padding: 5px 20px;
        font-size: 12px;
        border-radius: 3px;
        /* width: 20%; */
      }
    }
  }
`;
