import React from "react";
import { Header, UL, LI, LogoText, Brand, Login } from "./Navbar.Style";
import kde_blackBg from "./Image/kde_whiteBg.png";
import { useNavigate } from "react-router-dom";
import { X } from "heroicons-react";
import { useState } from "react";
import { FaUserCircle, FaUser } from "react-icons/fa";
import { AiFillHome } from "react-icons/ai";
import {
  MdRealEstateAgent,
  MdMessage,
  MdMenu,
  MdAccountBalanceWallet,
} from "react-icons/md";
import { IoMdCar } from "react-icons/io";
import {
  BsFillBellFill,
  BsFillHeartFill,
  BsCollection,
  BsCart3,
} from "react-icons/bs";
import "./Navbar.css";
import MainButton from "../buttons/MainButton";
import useContextAPI from "../ContextAPI/ContextAPI";
import { useDispatch } from "react-redux";
import { setListWithUs } from "../../application/store/actions/user";
import theme from "../../application/utils/Theme";

const Navbar = ({ bg, sticky, active }) => {
  const mainData = useContextAPI();
  const [activeNav, setActiveNav] = useState(false);
  const dispatch = useDispatch();

  const toRun = () => {
    dispatch(setListWithUs(true));
    navigate("/profile/upgrade");
  };

  const showMenu = () => {
    setActiveNav(!activeNav);
  };

  const navigate = useNavigate();

  const navOptions = [
    {
      title: "HOME",
      link: "/",
    },
    {
      title: "REAL ESTATE",
      link: "/real-estate",
    },
    {
      title: "AUTOMOBILES",
      link: "/cars",
    },
    {
      title: "LUXURY SERVICES",
      link: "/luxury-service",
    },
    {
      title: "COLLECTIBLES",
      link: "/collectible",
    },
    {
      title: "ABOUT",
      link: "/about",
    },
    {
      title: (
        <BsCart3 size={18} color={theme.color} className="cursor-pointer" />
      ),
      link: "/cart",
    },
  ];

  const mobileNavOptions = [
    {
      no: 0,
      icon: <FaUserCircle size={20} />,
      title: "List with us",
      link: "/profile/create-listings",
    },
    {
      no: 1,
      icon: <AiFillHome size={20} />,
      title: "Home",
      link: "/",
    },
    {
      no: 2,
      icon: <MdRealEstateAgent size={20} />,
      title: "Real Estate",
      link: "/real-estate",
    },
    {
      no: 3,
      icon: <IoMdCar size={20} />,
      title: "Automobiles",
      link: "/cars",
    },
    {
      no: 4,
      icon: <FaUser size={20} />,
      title: "Luxury Services",
      link: "/luxury-service",
    },
    {
      no: 5,
      icon: <BsCollection size={20} />,
      title: "Collectibles",
      link: "/collectible",
    },
    {
      no: 6,
      icon: <FaUser size={20} />,
      title: "Profile",
      link: "/profile",
    },
    {
      no: 7,
      icon: <MdMessage size={20} />,
      title: "Messages",
      link: "/dashboard/messages",
    },
    {
      no: 8,
      icon: <BsFillBellFill size={20} />,
      title: "Notifications",
      link: "/dashboard/notifications",
    },
    {
      no: 9,
      icon: <BsFillHeartFill size={20} />,
      title: "Saved Listing",
      link: "/saved-listings",
    },
    {
      no: 10,
      icon: <MdAccountBalanceWallet size={20} />,
      title: "My Account",
      link: "/dashboard/wallet",
    },
    {
      no: 11,
      icon: <BsCart3 size={20} />,
      title: "Cart",
      link: "/cart",
    },
  ];

  const otherNav = [
    {
      no: 11,
      title: "Help & FAQs",
      link: "/help",
    },
    {
      no: 12,
      title: "About",
      link: "/about",
    },
    {
      no: 13,
      title: "Contact Us",
      link: "/contact",
    },
    {
      no: 14,
      icon: <FaUserCircle size={20} />,
      title: "Log In",
      link: "/login",
    },
    {
      no: 15,
      icon: <FaUserCircle size={20} />,
      title: "Log Out",
      link: "/login",
    },
  ];

  const token = localStorage.getItem("token");

  return (
    <>
      <Header className="bg-cover" bg={bg} position={sticky}>
        <nav className={activeNav ? "navigation active" : "navigation"}>
          <ul>
            <div className="closed">
              <p>Welcome!</p>
              <X
                className="close"
                size="20px"
                color="#000"
                onClick={showMenu}
              />
            </div>
            <div className="line"></div>
            {mobileNavOptions.map((nav, i) => {
              return (
                <>
                  {token ? (
                    <>
                      {mainData.userData?.accountType === 1 ? (
                        <>
                          <li key={i} onClick={() => navigate(nav?.link)}>
                            <div className="list-items">
                              {nav?.icon}
                              {nav.title}
                            </div>
                          </li>
                          {nav.no === 5 && <div className="line"></div>}
                          {nav.no === 10 && <div className="line"></div>}
                        </>
                      ) : (
                        <>
                          {nav.no === 0 ? (
                            <>
                              <li key={i} onClick={toRun}>
                                <div className="list-items">
                                  {nav?.icon}
                                  {nav.title}
                                </div>
                              </li>
                            </>
                          ) : (
                            <>
                              {nav.no !== 9 && (
                                <>
                                  <li
                                    key={i}
                                    onClick={() => navigate(nav?.link)}
                                  >
                                    <div className="list-items">
                                      {nav?.icon}
                                      {nav.title}
                                    </div>
                                  </li>
                                  {nav.no === 5 && <div className="line"></div>}
                                  {nav.no === 10 && (
                                    <div className="line"></div>
                                  )}
                                </>
                              )}
                            </>
                          )}
                        </>
                      )}
                    </>
                  ) : (
                    <>
                      {nav.no === 2 ||
                      nav.no === 3 ||
                      nav.no === 4 ||
                      nav.no === 5 ? (
                        <>
                          <li key={i} onClick={() => navigate("/login")}>
                            <div className="list-items">
                              {nav?.icon}
                              {nav.title}
                            </div>
                          </li>
                          {nav.no === 5 && <div className="line"></div>}
                        </>
                      ) : (
                        <>
                          {nav.no === 1 && (
                            <li key={i} onClick={() => navigate(nav.link)}>
                              <div className="list-items">
                                {nav?.icon}
                                {nav.title}
                              </div>
                            </li>
                          )}
                        </>
                      )}
                    </>
                  )}
                </>
              );
            })}

            {otherNav.map((navigation, i) => {
              return (
                <>
                  <li
                    key={i}
                    onClick={() => {
                      if (navigation.title === "Log Out") {
                        localStorage.clear();
                        showMenu();
                        navigate(navigation?.link);
                      } else {
                        navigate(navigation?.link);
                      }
                    }}
                  >
                    {token ? (
                      <>
                        {navigation.title !== "Log In" && (
                          <>
                            <div className="list-items">
                              {navigation?.icon}
                              {navigation.title}
                            </div>
                            {navigation.no === 13 && (
                              <div className="line"></div>
                            )}
                          </>
                        )}
                      </>
                    ) : (
                      <>
                        {navigation.title !== "Log Out" && (
                          <>
                            <div className="list-items">
                              {navigation?.icon}
                              {navigation.title}
                            </div>
                            {navigation.no === 13 && (
                              <div className="line"></div>
                            )}
                          </>
                        )}
                      </>
                    )}
                  </li>
                </>
              );
            })}
          </ul>
        </nav>

        <Brand>
          <div className="w-[40px] h-[auto]" onClick={() => navigate("/")}>
            <img
              src={kde_blackBg}
              className="w-[100%] h-[100%] cursor-pointer"
              alt="brandlogo"
            />
          </div>
          
          <LogoText onClick={() => navigate("/")}>KING DAVID ELITES</LogoText>

          <div className="menu-icon">
            <MdMenu size={30} className="menu" onClick={showMenu} />
          </div>
        </Brand>

        <div>
          <UL>
            {navOptions.map((nav, i) => {
              return (
                <>
                  {token ? (
                    <LI key={i} onClick={() => navigate(nav.link)}>
                      <div className={active === i && "item-active"}>
                        {nav.title}
                      </div>
                    </LI>
                  ) : (
                    <>
                      {nav.title !== "ABOUT" && nav.title !== "HOME" ? (
                        <LI key={i} onClick={() => navigate("/login")}>
                          <div className={active === i && "item-active"}>
                            {nav.title}
                          </div>
                        </LI>
                      ) : (
                        <LI key={i} onClick={() => navigate(nav.link)}>
                          <div className={active === i && "item-active"}>
                            {nav.title}
                          </div>
                        </LI>
                      )}
                    </>
                  )}
                </>
              );
            })}
          </UL>
        </div>

        <Login>
          {token ? (
            <>
              {mainData.userData?.accountType === 1 ? (
                <div onClick={() => navigate("/profile")} className="dashboard">
                  DASHBOARD
                </div>
              ) : (
                <div className="cursor-pointer text-sm" onClick={toRun}>
                  LIST WITH US
                </div>
              )}
            </>
          ) : (
            <MainButton
              color="#000"
              className="login"
              onClick={() => navigate("/login")}
            >
              LOG IN
            </MainButton>
          )}

          <MdMenu
            size={30}
            className="menu cursor-pointer"
            onClick={showMenu}
          />
        </Login>
      </Header>
    </>
  );
};

export default Navbar;
