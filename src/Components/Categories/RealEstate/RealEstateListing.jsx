import { Adjustments, Search } from "heroicons-react";
import React, { useRef, useEffect, useCallback } from "react";
import {
  Background,
  HeroSection,
  Input,
  Text,
  Body,
  FilterBox,
} from "../Cars/Cars.Style";
import { SearchSection, SearchC } from "./RealEstate.Style";
import axios from "axios";
import Navbar from "../../Navbar/Navbar";
import "../../Navbar/Navbar.css";
import { SpinnerCircular } from "spinners-react";
import { useState } from "react";
import Banner from "../../Banner/Banner";
import MainButton from "../../buttons/MainButton";
import Footer from "../../Footer/Footer";
import Listing from "../../Listing/Listing";
import { GridContainer } from "../../Listing/Listing.styled";
import {
  EstateAnimation,
  graduallyAppear,
  graduallyDisAppear,
} from "../Cars/AnimationOrder";
import {
  getCities,
  getListings,
  getStates,
} from "../../../infrastructure/api/user/userRequest";
import { motion } from "framer-motion";
import { setConfig } from "../../../infrastructure/api/user/userRequest";
import globalApi from "../../../api";
import theme from "../../../application/utils/Theme";
import { BiArrowBack } from "react-icons/bi";
import PaginationButtons from "../../PaginationButtons/PaginationButtons";
import building6 from "./Image/building6.jpg";

const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop);

const RealEstateListing = ({ mainData }) => {
  const top = useRef(null);
  const up = useRef(null);
  const [listing, setListing] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [loader, setLoader] = useState(false);
  const [estateId, setEstateId] = useState(1);
  const [animation, setAnimation] = useState(graduallyAppear);
  const [value, setValue] = useState({
    noOfBed: 0,
    noOfBathroom: 0,
    locationISO: "",
    price: 500,
  });
  const [activePage, setActivePage] = useState(false);
  const [stage, setStage] = useState(0);
  const [activeNav, setActiveNav] = useState(false);
  const [changing, setChanging] = useState(false);
  const [stateData, setStateData] = useState([]);
  const [cityData, setCityData] = useState([]);
  const [isos, setIsos] = useState({
    countryIso: "",
    stateIso: "",
    cityId: "",
  });

  useEffect(() => {
    setStateData(stateData);
    setCityData(cityData);
    setValue(value);
  }, [changing]);

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

  useEffect(() => {
    scrollToRef(top);
  }, []);

  const getStateIso = (name) => {
    var stateObject = stateData.find((state) => state.name === name);
    setCityData([]);
    setIsos({ ...isos, stateIso: stateObject["iso2"] });
    getCities(isos["countryIso"], stateObject["iso2"], setCityData);
    setChanging(!changing);
  };

  const getCityId = (name) => {
    var cityObject = cityData.find((city) => city.name === name);
    setIsos({ ...isos, cityId: cityObject["id"] });
    setValue({
      ...value,
      locationISO: `${cityObject["id"]}#${isos["stateIso"]}#${isos["countryIso"]}`,
    });
    setChanging(!changing);
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

  const getCountryIso = (name) => {
    var countryObject = mainData.countryData.find(
      (country) => country.name === name
    );
    setStateData([]);
    setCityData([]);
    setIsos({ ...isos, countryIso: countryObject["iso2"] });
    getStates(countryObject["iso2"], setStateData);
    setChanging(!changing);
  };

  const getTotalData = async (page) => {
    let totalListing = await getListings(
      page,
      "real-estate",
      setListing,
      setLoading
    );

    return totalListing;
  };

  const animate = useCallback(() => {
    var timer1;
    var timer2;
    timer1 = setTimeout(() => {
      if (estateId < EstateAnimation.length) {
        clearTimeout(timer2);
        clearTimeout(timer1);
        setAnimation(graduallyDisAppear);
        timer2 = setTimeout(() => {
          setEstateId(estateId + 1);
          setAnimation(graduallyAppear);
        }, [400]);
      } else if (estateId === EstateAnimation.length) {
        clearTimeout(timer2);
        clearTimeout(timer1);
        setAnimation(graduallyDisAppear);
        timer2 = setTimeout(() => {
          setEstateId(1);
          setAnimation(graduallyAppear);
        }, [500]);
      }
    }, [6000]);
  }, [estateId]);

  useEffect(() => {
    animate();
  }, [animate]);
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
              <h3 className="font-bold">LocationISO</h3>
              <label htmlFor="country">Country</label>
              <select
                className="w-full p-3 text-gray-500 bg-white border rounded-md shadow-sm outline-none focus:border-theme-color"
                name="Country"
                onChange={(e) => {
                  getCountryIso(e.target.value);
                }}
              >
                <option value="Country">None</option>
                {mainData.countryData.map((country) => {
                  return (
                    <>
                      <option key={country.id} value={country.name}>
                        {country.name}
                      </option>
                    </>
                  );
                })}
              </select>

              <div className="input">
                {stateData.length > 0 && (
                  <>
                    <label htmlFor="state">State</label>
                    <select
                      className="w-full p-3 text-gray-500 bg-white border rounded-md shadow-sm outline-none focus:border-theme-color"
                      name="state"
                      onChange={(e) => {
                        getStateIso(e.target.value);
                      }}
                    >
                      <option value="State">None</option>
                      {stateData?.map((state) => {
                        return (
                          <>
                            <option key={state.id} value={state.name}>
                              {state.name}
                            </option>
                          </>
                        );
                      })}
                    </select>
                  </>
                )}
              </div>

              <div className="input">
                {cityData.length > 0 && (
                  <>
                    <label htmlFor="city">City</label>
                    <select
                      className="w-full p-3 text-gray-500 bg-white border rounded-md shadow-sm outline-none focus:border-theme-color"
                      name="city"
                      onChange={(e) => {
                        getCityId(e.target.value);
                      }}
                    >
                      <option value="City">None</option>
                      {cityData?.map((city) => {
                        return (
                          <>
                            <option key={city.id} value={city.name}>
                              {city.name}
                            </option>
                          </>
                        );
                      })}
                    </select>
                  </>
                )}
              </div>

              <h3 className="font-bold">Bedrooms</h3>
              <div className="rounded-md">
                <input
                  className="w-full p-2 text-gray-500 bg-white border outline-none focus:border-theme-color"
                  type="number"
                  min={0}
                  onChange={(e) =>
                    setValue({ ...value, noOfBed: e.target.value })
                  }
                />
              </div>

              <h3 className="font-bold">Bathrooms</h3>
              <div className="rounded-md">
                <input
                  className="w-full p-2 text-gray-500 bg-white border outline-none focus:border-theme-color"
                  type="number"
                  min={0}
                  onChange={(e) =>
                    setValue({ ...value, noOfBathroom: e.target.value })
                  }
                />
              </div>

              <h3 className="font-bold">Price</h3>
              <input
                type="range"
                max={100000000}
                onChange={(e) => {
                  setValue({ ...value, price: e.target.value });
                }}
              />

              <div className="flex gap-5 w-full mb-5 items-center">
                <input
                  type="number"
                  className="border-2 p-2 w-[50%]"
                  value={value["price"]}
                  readOnly
                />
              </div>

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
          <Navbar active={1} />
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
                  

                    <h3 className="font-bold">Bedrooms</h3>
                    <div className="rounded-md">
                      <input
                        className="w-full p-2 text-gray-500 bg-white border outline-none focus:border-theme-color"
                        type="number"
                        min={0}
                        onChange={(e) =>
                          setValue({ ...value, noOfBed: e.target.value })
                        }
                      />
                    </div>

                    <h3 className="font-bold">Bathrooms</h3>
                    <div className="rounded-md">
                      <input
                        className="w-full p-2 text-gray-500 bg-white border outline-none focus:border-theme-color"
                        type="number"
                        min={0}
                        onChange={(e) =>
                          setValue({ ...value, noOfBathroom: e.target.value })
                        }
                      />
                    </div>

                    <h3 className="font-bold">Price</h3>
                    <input
                      type="range"
                      max={100000000}
                      onChange={(e) => {
                        setValue({ ...value, price: e.target.value });
                      }}
                    />

                    <div className="flex gap-5 w-full mb-5 items-center">
                      <input
                        type="number"
                        className="border-2 p-2 w-[50%]"
                        value={value["price"]}
                        readOnly
                      />
                    </div>

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
            {EstateAnimation.map((item) => {
              if (item.id === estateId) {
                return (
                  <motion.div
                    className="bgImage"
                    variants={animation}
                    initial="hidden"
                    animate="visible"
                  >
                    <img src={item.img} alt="real estates" />
                  </motion.div>
                );
              }
            })}
            <HeroSection>
              <Text fontSize="2rem">Luxury Real Estate</Text>
              <SearchSection>
                <SearchC>
                  <Input
                    placeholder="search desired locationISOs"
                    onChange={(e) =>
                      setValue({ ...value, locationISO: e.target.value })
                    }
                  />
                  <Search
                    width="30px"
                    onClick={(e) => searchListing(value["locationISO"])}
                    className="cursor-pointer"
                  />
                </SearchC>
                <FilterBox onClick={() => showPage()}>
                  <MainButton width="60px">Filter</MainButton>
                  <Adjustments width="30px" />
                </FilterBox>
              </SearchSection>
              <Text>One search is all it takes</Text>
            </HeroSection>
          </Background>

          <Body ref={up}>
            <Text fontSize="1rem" fontWeight="700" color="black">
              Luxury Properties For Sale
            </Text>
            {loader && (
              <SpinnerCircular
                color="white"
                className="flex justify-center"
                secondaryColor={theme.color}
                size={50}
                thickness={150}
              />
            )}
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
                {!loader && listing.length > 0 ? (
                  listing.map((items) => {
                    return (
                      <Listing key={items._id} list={items} />
                    );
                  })
                ) : (
                  <h4 className="md:text-lg text-sm font-semibold italic">
                    No Real-estate listing available
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
          <Banner category="Real Estate" img={building6} />
          <Text color="black" fontSize="0.8rem" margin="2em">
            Indulge in opulence with King David Elites. Our online marketplace
            boast a collection of exquiste, high-end properties that exude
            luxury living.From stunning homes to sprawling estates and opulent
            apartment, our offering cater to all your residential,investment and
            for-profit needs. Our secure payment system ensures hassle-free
            transactions, with the option to transfer funds directly to verified
            vendors or through our 1% transaction fee escrow account which
            further secures your funds and grants you access to our team of
            experts who provide professional advisory services and arranges
            luxurious property inspection, setting a new standard of class and
            sophistication.
          </Text>
          <Footer />
        </>
      )}
    </>
  );
};

export default RealEstateListing;
