import React, { useCallback } from "react";
import { useState } from "react";
import {
  Background,
  HeroSection,
  SearchSection,
  SearchC,
  Input,
  Text,
  FilterBox,
  Body,
} from "./Cars.Style";
import Navbar from "../../Navbar/Navbar";
import MainButton from "../../buttons/MainButton";
import Banner from "../../Banner/Banner";
import { Search, Adjustments } from "heroicons-react";
import Footer from "../../Footer/Footer";
import { useRef } from "react";
import { useEffect } from "react";
import "../../Navbar/Navbar.css";
import { getListings, setConfig } from "../../../infrastructure/api/user/userRequest";
import { GridContainer } from "../../Listing/Listing.styled";
import PaginationButtons from "../../PaginationButtons/PaginationButtons";
import Listing from "../../Listing/Listing";
import { SpinnerCircular } from "spinners-react";
import theme from "../../../application/utils/Theme";
import {
  CarAnimation,
  graduallyAppear,
  graduallyDisAppear,
} from "./AnimationOrder";
import { motion } from "framer-motion";
import carspic from "./Image/carspic.jpg"
import { BiArrowBack } from "react-icons/bi";
import globalApi from "../../../api";
import axios from "axios";

const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop);
const CarsListing = () => {
  const top = useRef(null);
  const up = useRef(null);
  const [carId, setCarId] = useState(1);
  const [animation, setAnimation] = useState(graduallyAppear);
  const [listing, setListing] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [stage, setStage] = useState(0);
  const [activePage, setActivePage] = useState(false);
  const [activeNav, setActiveNav] = useState(false);
  const [value, setValue] = useState({
    model: "",
    color: "",
    brand: "",
    year: "",
    carCondition: "",
  });
  const [loader, setLoader] = useState(false);

  const animate = useCallback(() => {
    var timer1;
    var timer2;
    timer1 = setTimeout(() => {
      if (carId < CarAnimation.length) {
        clearTimeout(timer2);
        clearTimeout(timer1);
        setAnimation(graduallyDisAppear);
        timer2 = setTimeout(() => {
          setCarId(carId + 1);
          setAnimation(graduallyAppear);
        }, [400]);
      } else if (carId === CarAnimation.length) {
        clearTimeout(timer2);
        clearTimeout(timer1);
        setAnimation(graduallyDisAppear);
        timer2 = setTimeout(() => {
          setCarId(1);
          setAnimation(graduallyAppear);
        }, [500]);
      }
    }, [6000]);
  }, [carId]);

  useEffect(() => {
    scrollToRef(top);
  }, []);

  const getTotalData = async (page) => {
    scrollToRef(up);
    let totalListing = await getListings(page, "cars", setListing, setLoading);

    return totalListing;
  };

  const searchListing = () => {
    setLoader(true);
    const listingUrl = `${globalApi}/listings/search`;
    axios
      .post(listingUrl, value, setConfig())
      .then((resp) => {
        setListing(resp.data);
        setLoader(false);
        setStage(0);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    animate();
  }, [animate]);

  const showPage = () => {
    if (window.innerWidth > 900) {
      setStage(0);
      setActiveNav(!activeNav);
    } else {
      setStage(1);
      setActivePage(!activePage);
      setActiveNav(activeNav);
    }
  };

  return (
    <>
      {stage === 1 && (
        <div className="p-2 w-[100vw] md:hidden top-0 bottom-0 h-[100%] bg-white transition-[1s] z-20">
          <div className="p-4">
            <div className="relative w-full lg:max-w-sm flex flex-col gap-6">
              <div className="h-[40px] flex items-center gap-4">
                <BiArrowBack
                  size={30}
                  className="opacity-[0.5] cursor-pointer"
                  onClick={() => setStage(0)}
                />
                <p className="font-bold text-[20px]">Filters</p>
              </div>

              <h3 className="font-bold">Color</h3>
              <div className="rounded-md">
                <input
                  className="w-full p-2 text-gray-500 bg-white border outline-none focus:border-theme-color"
                  type="text"
                  onChange={(e) =>
                    setValue({ ...value, color: e.target.value })
                  }
                />
              </div>

              <h3 className="font-bold">Year</h3>
              <div className="rounded-md">
                <input
                  className="w-full p-2 text-gray-500 bg-white border outline-none focus:border-theme-color"
                  type="text"
                  onChange={(e) =>
                    setValue({ ...value, year: e.target.value })
                  }
                />
              </div>

              <h3 className="font-bold">Brand</h3>
              <div className="rounded-md">
                <input
                  className="w-full p-2 text-gray-500 bg-white border outline-none focus:border-theme-color"
                  type="text"
                  onChange={(e) =>
                    setValue({ ...value, brand: e.target.value })
                  }
                />
              </div>

              <h3 className="font-bold">Car Condition</h3>
              <input
                className="w-full p-2 text-gray-500 bg-white border outline-none focus:border-theme-color"
                type="text"
                onChange={(e) => {
                  setValue({ ...value, carCondition: e.target.value });
                }}
              />


              <MainButton
                width="100%"
                padding="24px 12px"
                onClick={() => {
                  searchListing();
                }}
              >
                Apply Filter{" "}
                {loader && (
                  <SpinnerCircular
                    color="white"
                    className="mr-4"
                    secondaryColor={theme.color}
                    size={50}
                    thickness={150}
                  />
                )}
              </MainButton>
            </div>
          </div>
        </div>
      )}

      {stage === 0 && (
        <>
          <Navbar active={2} />
          <nav
            className={
              activeNav
                ? "navigation active overflow-y-auto top-0"
                : "navigation hidden"
            }
          >
            <ul>
              <div className="closed">
                <div className="p-4">
                  <div className="relative w-full lg:max-w-sm flex flex-col gap-6">
                    <div className="h-[40px] flex items-center gap-4">
                      <BiArrowBack
                        size={30}
                        className="opacity-[0.5]"
                        onClick={() => setActiveNav(!activeNav)}
                      />
                      <p className="font-bold text-[20px]">Filters</p>
                    </div>


                    <h3 className="font-bold">Color</h3>
                    <div className="rounded-md">
                      <input
                        className="w-full p-2 text-gray-500 bg-white border outline-none focus:border-theme-color"
                        type="text"
                        onChange={(e) =>
                          setValue({ ...value, color: e.target.value })
                        }
                      />
                    </div>

                    <h3 className="font-bold">Year</h3>
                    <div className="rounded-md">
                      <input
                        className="w-full p-2 text-gray-500 bg-white border outline-none focus:border-theme-color"
                        type="text"
                        onChange={(e) =>
                          setValue({ ...value, year: e.target.value })
                        }
                      />
                    </div>

                    <h3 className="font-bold">Brand</h3>
                    <div className="rounded-md">
                      <input
                        className="w-full p-2 text-gray-500 bg-white border outline-none focus:border-theme-color"
                        type="text"
                        onChange={(e) =>
                          setValue({ ...value, brand: e.target.value })
                        }
                      />
                    </div>

                    <h3 className="font-bold">Car Condition</h3>
                    <input
                      className="w-full p-2 text-gray-500 bg-white border outline-none focus:border-theme-color"
                      type="text"
                      onChange={(e) => {
                        setValue({ ...value, carCondition: e.target.value });
                      }}
                    />
                    <MainButton
                      width="100%"
                      padding="24px 12px"
                      onClick={() => {
                        searchListing();
                      }}
                    >
                      Apply Filter{" "}
                      {loader && (
                        <SpinnerCircular
                          color="white"
                          className="mr-4"
                          secondaryColor={theme.color}
                          size={50}
                          thickness={150}
                        />
                      )}
                    </MainButton>
                  </div>
                </div>
              </div>
            </ul>
          </nav>

          <Background ref={top}>
            {CarAnimation.map((item) => {
              if (item.id === carId) {
                return (
                  <motion.div
                    className="bgImage"
                    variants={animation}
                    initial="hidden"
                    animate="visible"
                  >
                    <img src={item.img} alt="cars" />
                  </motion.div>
                );
              }
            })}
            <HeroSection>
              <Text fontSize="2rem">Luxury Automobiles</Text>
              <SearchSection>
                <SearchC>
                  <Input placeholder="search makes or model" />
                  <Search width="30px" />
                </SearchC>
                <FilterBox>
                  <MainButton onClick={() => showPage()} width="60px">Filter</MainButton>
                  <Adjustments width="30px" />
                </FilterBox>
              </SearchSection>
              <Text fontSize="0.8em">find new and preowned cars for sale</Text>
            </HeroSection>
          </Background>

          <Body ref={up}>
            <Text fontSize="1rem" fontWeight="700" color="black">
              Explore Luxury Automobiles
            </Text>
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
              <GridContainer>
                {listing.length > 0 ? (
                  listing.map((items) => {
                    return (
                      <Listing key={items._id} list={items} />
                    );
                  })
                ) : (
                  <h4 className="md:text-lg text-sm font-semibold italic">
                    No Automobile listing available
                  </h4>
                )}
              </GridContainer>
            )}
            <PaginationButtons
              range={[1, 2, 3]}
              pagination={12}
              page={page}
              setPage={setPage}
              loading={loading}
              setLoading={setLoading}
              getTotalData={getTotalData}
              background={theme.color}
            />
          </Body>
          <Banner category="Cars" img={carspic} />
          <Text color="black" fontSize="0.8rem" margin="2em">
            Discover the epitome of luxury automobile with King David Elites. Our
            Platform offers a collection of exclusive high-end vehicles, including
            sleek sport cars and powerful SUVs, taliored to the society's elite. Our
            easy and secure payment system allows for direct transfer to verified
            vendors or though our 1% transaction fee escrow account, which comes
            with professional check-ups and luxurious inspection services by our
            expert technicians. Make a lasting statement wherever you go with our
            unparalleled selection. At King David Elites, our standard of class is
            unmatched, and our dedication to luxury is unparalleled.
          </Text>
          <Footer />
        </>

      )}
    </>
  )
}
export default CarsListing;
