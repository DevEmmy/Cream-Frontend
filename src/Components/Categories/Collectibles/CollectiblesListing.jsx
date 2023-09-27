import { motion } from "framer-motion";
import {
  Background,
  HeroSection,
  Input,
  Text,
  Body,
  FilterBox,
  SearchSection,
} from "../Cars/Cars.Style";
import { Adjustments, Search } from "heroicons-react";
import MainButton from "../../buttons/MainButton";
import { SearchC } from "../RealEstate/RealEstate.Style";
import Banner from "../../Banner/Banner";
import { GridContainer } from "../../Listing/Listing.styled";
import Footer from "../../Footer/Footer";
import { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";
import Navbar from "../../Navbar/Navbar";
import img1 from "../Cars/Img/brooke-campbell-Rw2-Y0nSIKQ-unsplash.jpg";
import img2 from "../Cars/Img/christian-mackie-SxBca4GcC9k-unsplash.jpg";
import img3 from "../Cars/Img/daniel-gaffey-EbH-7ReNuA0-unsplash.jpg";
import { useNavigate } from "react-router-dom";
import { useCallback } from "react";
import Listing from "../../Listing/Listing";
import { SpinnerCircular } from "spinners-react";
import theme from "../../../application/utils/Theme";
import { getListings } from "../../../infrastructure/api/user/userRequest";
import PaginationButtons from "../../PaginationButtons/PaginationButtons";
import {
  CollectibleAnimation,
  graduallyAppear,
  graduallyDisAppear,
} from "../Cars/AnimationOrder";

import cl3 from "./Image/cl3.jpg"

const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop);

const CollectiblesListing = () => {
  const top = useRef(null);
  const up = useRef(null);
  const [collectibleId, setCollectibleId] = useState(1);
  const [animation, setAnimation] = useState(graduallyAppear);
  const [listing, setListing] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const navigate = useNavigate();

  const collectibleData = [
    {
      id: 1,
      name: "Luxury Ball Pen",
      price: "100.00",
      img: img1,
    },
    {
      id: 2,
      name: "Luxury Ball Pen",
      price: "200.00",
      img: img2,
    },
    {
      id: 3,
      name: "Luxury Ball Pen",
      price: "400.00",
      img: img3,
    },
    {
      id: 4,
      name: "Luxury Ball Pen",
      price: "300.00",
      img: img3,
    },
    {
      id: 5,
      name: "Luxury Ball Pen",
      price: "9000.00",
      img: img1,
    },
    {
      id: 6,
      name: "Luxury Ball Pen",
      price: "78900.00",
      img: img2,
    },
  ];

  // const redirect = (id) => {
  //   localStorage.setItem(
  //     "collectible",
  //     JSON.stringify(collectibleData[id - 1])
  //   );
  //   navigate(`/collectible/${id}`);
  // };

  const animate = useCallback(() => {
    var timer1;
    var timer2;
    timer1 = setTimeout(() => {
      if (collectibleId < CollectibleAnimation.length) {
        clearTimeout(timer2);
        clearTimeout(timer1);
        setAnimation(graduallyDisAppear);
        timer2 = setTimeout(() => {
          setCollectibleId(collectibleId + 1);
          setAnimation(graduallyAppear);          
        }, [400]);
      } else if (collectibleId === CollectibleAnimation.length) {
        clearTimeout(timer2);
        clearTimeout(timer1);
        setAnimation(graduallyDisAppear);
        timer2 = setTimeout(() => {
          setCollectibleId(1);
          setAnimation(graduallyAppear);          
        }, [500]);
      }
    }, [6000]);
  }, [collectibleId]);

  useEffect(() => {
    animate();
  }, [animate]);

  useEffect(() => {
    scrollToRef(top);
  }, []);

  const getTotalData = async (page) => {
    scrollToRef(up);
    let totalListing = await getListings(
      page,
      "collectibles",
      setListing,
      setLoading
    );

    return totalListing;
  };

  return (
    <>
      <Navbar active={4} />
      <Background ref={top}>
        {CollectibleAnimation.map((item) => {
          if (item.id === collectibleId) {
            return (
              <motion.div
                className="bgImage"
                variants={animation}
                initial="hidden"
                animate="visible"
              >
                <img src={item.img} alt="collectibles" />
              </motion.div>
            );
          }
        })}
        <HeroSection>
          <Text fontSize="2rem">Collectibles</Text>
        </HeroSection>
      </Background>

      <Body ref={up}>
        <Text fontSize="1rem" fontWeight="700" color="black">
          Explore Collectibles
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
                return <Listing key={items._id} list={items} />;
              })
            ) : (
              <h4 className="md:text-lg text-sm font-semibold italic">
                No Collectibles available
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
      <Banner category="Collectibles" img={cl3} />
      <Text color="black" fontSize="0.8rem" margin="2em">
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        Indulge in opulence with King David Elites. Our online marketplace boast
        a collection of exquiste, high-end properties that exude luxury
        living.From stunning homes to sprawling estates and opulent
        apartment,our offering cater to all your residential,investment and
        for-profit needs. Our secure payment system ensures hassle-free
        transactions, with the option to transfer funds directly to verifies
        vendors or through our 1% transaction fee escrow account which further
        secures your funds and grants you access to our team of experts who
        provide professional advisory services and arranges luxurious property
        inspection, setting a new standard of class and sophistication.
      </Text>
      <Footer />
    </>
  );
};

export default CollectiblesListing;
