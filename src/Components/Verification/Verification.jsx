import React from "react";
import { useState, useEffect } from "react";
import { useRef } from "react";
import verImg from "../../Assets/verImg.svg"
import GetStarted from "./GetStarted";
import BasicInfo from "./BasicInfo";
import Advanced_Verf from "./Advanced_Verf";
import Advanced_Verf_1 from "./Advanced_Verf_1";
import Advanced_Verf_2 from "./Advanced_verf_2";
import Advanced_Verf_3 from "./Advanced_Verf_3";
import Verified from "./Verified";
import Loader from "../../AtomicComponents/Loader/Loader";
import Image from "next/image";
// import { requestUserData } from "../../infrastructure/api/user/userRequest";
import Nav from "@/AtomicComponents/Nav";
const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop);

const ProfileAsElement = ({ mainData }) => {
  const [stage, setStage] = useState(0);
  const [registering, setRegistering] = useState(false);
  const [country, setCountry] = useState("");
  const [idType, setIdType] = useState({ digit: 0, text: "" });
  const [frontImage, setFrontImage] = useState([]);
  const [backImage, setBackImage] = useState([]);
  const [photo, setPhoto] = useState([]);
  const [loading, setLoading] = useState(false);
  const [city, setCity] = useState("");
  const [isos, setIsos] = useState({
    countryIso: "",
    stateIso: "",
    cityId: "",
  });

  const [userInfo, setUserInfo] = useState({
    firstName: mainData.userData?.firstName,
    lastName: mainData.userData?.lastName,
    dob: "",
    address: "",
    zipCode: "",
    country: country,
    state: "",
    city: "",
    locationISO: "",
  });

  useEffect(() => {
    setUserInfo({ ...userInfo, city });
  }, [city]);

  const position = useRef(null);

  return (    
    <div className="w-full h-[100vh]">
      <Nav active={0}/>
      {loading && <Loader />}      
      <div className="flexmm w-full h-full pt-[85px] bg-[#D9D9D9] p-[1em]">
        <div className="p-[2em] w-[45%] flexmm h-full bg-[#EEF0F1] rounded-l-xl">
          <div className="flexmm w-[15em]">
            <Image src={verImg} width={100} height={100} alt="verImg"/>            
          </div>
        </div>

        <div className="flexmm w-[55%] h-full bg-white rounded-r-xl">          
          <div className="cflexss gap-[2em] py-[2em] px-[4em] w-full h-full overflow-y-auto" ref={position}>
            {!registering && (
              <GetStarted
                setUserInfo={setUserInfo}
                userInfo={userInfo}
                setCountry={setCountry}
                stage={stage}
                setStage={setStage}
                setRegistering={setRegistering}
                scrollToRef={scrollToRef}
                position={position}
                mainData={mainData}
                isos={isos}
                setIsos={setIsos}
              />
            )}

            {stage === 1 && (
              <BasicInfo
                city={city}
                setCity={setCity}
                userInfo={userInfo}
                setUserInfo={setUserInfo}
                country={country}
                stage={stage}
                setStage={setStage}
                setRegistering={setRegistering}
                scrollToRef={scrollToRef}
                position={position}
                mainData={mainData}
                isos={isos}
                setIsos={setIsos}
              />
            )}

            {stage === 2 && (
              <Advanced_Verf
                stage={stage}
                setStage={setStage}
                scrollToRef={scrollToRef}
                idType={idType}
                setIdType={setIdType}
                position={position}
              />
            )}

            {stage === 3 && (
              <Advanced_Verf_1
                stage={stage}
                setStage={setStage}
                scrollToRef={scrollToRef}
                idType={idType}
                frontImage={frontImage}
                setFrontImage={setFrontImage}
                backImage={backImage}
                setBackImage={setBackImage}
                position={position}
              />
            )}

            {stage === 4 && (
              <Advanced_Verf_2
                stage={stage}
                setStage={setStage}
                scrollToRef={scrollToRef}
                photo={photo}
                setPhoto={setPhoto}
                position={position}
              />
            )}

            {stage === 5 && (
              <Advanced_Verf_3
                userInfo={userInfo}
                setUserInfo={setUserInfo}
                stage={stage}
                scrollToRef={scrollToRef}
                frontImage={frontImage}
                backImage={backImage}
                photo={photo}
                idType={idType}
                country={country}
                position={position}
                setStage={setStage}
                setLoading={setLoading}
                isos={isos}
                setIsos={setIsos}
              />
            )}

            {stage === 6 && <Verified stage={stage} setStage={setStage} />}          
          </div>
        </div>      
      </div>    
    </div>
  );
};

const Verification = () => {
  return (
    <>
      <ProfileAsElement mainData={[]} />
    </>
  );
};

export default Verification;
