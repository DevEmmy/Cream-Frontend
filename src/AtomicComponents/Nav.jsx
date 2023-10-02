import Link from "next/link";
import React, { useEffect, useState } from "react";
import {
  RiBellFill,
  RiBook2Fill,
  RiContactsFill,
  RiInformationFill,
  RiLoginBoxFill,
  RiLogoutBoxFill,
  RiMenu2Fill,
  RiMessage2Fill,
  RiUser2Fill,
  RiWallet2Fill,
} from "react-icons/ri";
import { HiUserGroup, HiX } from "react-icons/hi";
import Line from "./Line";
import { validateLoggedIn } from "@/services/request";

const Nav = ({ active = 0 }) => {
  const [showSideNav, setShowSideNav] = useState(false);

  const nav = [
    {
      name: "HOME",
      link: "/",
      icon: null,
    },
    {
      name: "REAL ESTATE",
      link: "/real-estate",
      icon: null,
    },
    {
      name: "AUTOMOBILE",
      link: "/automobile",
      icon: null,
    },
    {
      name: "ABOUT",
      link: "/about",
      icon: null,
    },
    {
      name: "CONTACT US",
      link: "/contact-us",
      icon: null,
    },
  ];

  const sideNav = [
    {
      name: "Real Estate",
      icon: <RiUser2Fill />,
      link: "/real-estate",
    },
    {
      name: "Automobile",
      icon: <RiUser2Fill />,
      link: "/automobile",
    },
    // {
    //   name: "Profile",
    //   icon: <RiUser2Fill />,
    //   link: "/profile",
    // },
    // {
    //   name: "Messages",
    //   icon: <RiMessage2Fill />,
    //   link: "/messages",
    // },
    // {
    //   name: "Notifications",
    //   icon: <RiBellFill />,
    //   link: "/notifications",
    // },
    // {
    //   name: "My Account",
    //   icon: <RiWallet2Fill />,
    //   link: "/wallet",
    // },
  ];

  const otherNav = [
    {
      name: "Help & FAQ",
      icon: <RiInformationFill />,
      link: "/",
    },
    {
      name: "About",
      icon: <RiBook2Fill />,
      link: "/about",
    },
    {
      name: "Contact Us",
      icon: <RiContactsFill />,
      link: "/contact-us",
    },
  ];

  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    setLoggedIn(validateLoggedIn);
  });
  return (
    <div className="bg-black text-white w-full flex justify-between py-3 px-xPadding items-center fixed top-0 left-0 right-0 z-40">
      <div>
        <img src="./logo.png" className="w-[30%]" alt="" />
      </div>

      <div className="block flexss font-[700] gap-5 md:hidden">
        {nav.map((item, i) => {
          return (
            <Link
              href={item.link}
              key={i}
              className={`text-[0.8em] hover:text-primary1 ${
                active === i && "text-primary1 border-primary1"
              }`}
            >
              {item.name}
            </Link>
          );
        })}
      </div>

      <div className="block flexsm gap-8 items-center md:hidden">
        {loggedIn ? (
          <Link href={"/profile"}>
            <button className="bg-primary1 px-6 py-3 text-[0.8em] rounded-md text-black font-[600]">
              Profile
            </button>
          </Link>
        ) : (
          <Link href={"/login"}>
            <button className="bg-primary1 px-6 py-3 text-[0.8em] rounded-md text-black font-[600]">
              LOG IN
            </button>
          </Link>
        )}

        <RiMenu2Fill
          color="white"
          size={24}
          className="cursor-pointer"
          onClick={() => setShowSideNav(true)}
        />
      </div>

      <div className="hidden md:block">
        <RiMenu2Fill
          color="white"
          size={24}
          className="cursor-pointer"
          onClick={() => setShowSideNav(true)}
        />
      </div>

      <div
        className={`fixed w-[15%] md:w-[80%] top-0  bg-white h-full ${
          showSideNav ? "right-0" : "right-[-100%]"
        } transition-all ease-linear text-black p-5 border-l-gray-300 border`}
      >
        <div className="flex justify-between items-center">
          <p className="font-[600]">Welcome</p>
          <HiX
            size={24}
            onClick={() => setShowSideNav(false)}
            className="cursor-pointer"
          />
        </div>

        <Line />
        <div className="block my-5 cflexss gap-4 md:hidden">
        {
              loggedIn
              ?
              <Link href={"/create-listing"} className="flex items-center gap-3">
                <HiUserGroup />
                <p>Sell</p>
              </Link>
            : 

                <Link href={"/login"} className="flex items-center gap-3">
                  <RiLoginBoxFill />
                  <p>Login</p>
                </Link>
            }

          {
            loggedIn && 
            <Link href={"/profile"} className="flex items-center gap-3">
            <RiUser2Fill />
            <p>Profile</p>
          </Link>
          }
          
          {sideNav.map((item, i) => {
            return (
              <>
                {i !== 0 && i !== 1 && (
                  <Link
                    href={item.link}
                    key={i}
                    className="flex items-center gap-3"
                    onClick={() => {
                      setShowSideNav(false);
                    }}
                  >
                    {item.icon}
                    <p>{item.name}</p>
                  </Link>
                )}
              </>
            );
          })}
        </div>

        <div className="hidden md:block">
          <div className="cflexss gap-[16px]">
            {
              loggedIn
              ?
              <Link href={"/create-listing"} className="flex items-center gap-3">
                <HiUserGroup />
                <p>Sell</p>
              </Link>
            : 

                <Link href={"/login"} className="flex items-center gap-3">
                  <RiLoginBoxFill />
                  <p>Login</p>
                </Link>
            }

            {
            loggedIn && 
            <Link href={"/profile"} className="flex items-center gap-3">
            <RiUser2Fill />
            <p>Profile</p>
          </Link>
          }
            {sideNav.map((item, i) => {
              return (
                <>
                  <Link
                    href={item.link}
                    key={i}
                    className="flex items-center gap-3"
                    onClick={() => {
                      setShowSideNav(false);
                    }}
                  >
                    {item.icon}
                    <p>{item.name}</p>
                  </Link>
                </>
              );
            })}
          </div>
        </div>

        <Line />

        <div className="my-5 flex flex-col gap-4">
          {otherNav.map((item, i) => {
            return (
              <Link
                href={item.link}
                key={i}
                className="flex items-center gap-3"
                onClick={() => {
                  setShowSideNav(false);
                }}
              >
                {item.icon}
                <p>{item.name}</p>
              </Link>
            );
          })}

          {
            loggedIn && 
            <Link href={"/login"} onClick={()=> localStorage.clear()} className="flex items-center gap-3">
              <RiLogoutBoxFill />
              <p>Log Out</p>
            </Link>            
          }
          
        </div>
      </div>
    </div>
  );
};

export default Nav;
