import React from "react";
import { useState } from "react";
import { Country } from "./Profile_Mockdata";

const GetStarted = (props) => {
  const [valid, setValid] = useState();

  let {
    userInfo,
    setUserInfo,
    setRegistering,
    setCountry,
    stage,
    setStage,
    scrollToRef,
    position,
    mainData,
    isos,
    setIsos,
  } = props;

  // const getCountryIso = (name) => {
  //   var countryObject = mainData.countryData.find(
  //     (country) => country.name === name
  //   );
  //   setIsos({ ...isos, countryIso: countryObject["iso2"] });
  // };  

  return (
    <>
      <h4 className="font-[600] text-[20px]">Identity Verification</h4>

      <div className="text-[#696969] font-[500]">
        <p>
          An Identity Verification is required to keep KDE safe and secure for
          our Users.
        </p>
        <p>
          It is a quick and simple process that also lets us better understand
          your needs to serve you better.
        </p>
      </div>

      <div className="cflexss gap-[0.5em] text-[16px] font-[400] w-full">
        <p>Select your country/region</p>
        <select
          name="Country"
          className="min-w-[25em] p-[0.5em] border-[0.1em] border-[#A6A6A6] rounded-[0.5em] cursor-pointer"
          // onChange={(e) => {
          //   setCountry(e.target.value);
          //   setUserInfo({ ...userInfo, country: e.target.value });
          //   getCountryIso(e.target.value);
          //   setValid(true);
          // }}
        >
          <option value="Country">None</option>
          {Country.map((country) => {
            return (
              <>
                <option key={country.id} value={country.name}>
                  {country.country}
                </option>
              </>
            );
          })}
        </select>
      </div>

      <div className="">
        <div className="">
          <div className="">1</div>
          <h4> Basic Information </h4>
        </div>
        <ul>
          <li> First and Last Name </li>
          <li> Date of Birth </li>
          <li> Residential Address </li>
        </ul>
      </div>

      <div className="">
        <div className="">
          <div className="">2</div>
          <h4> Identity Verification and Facial Verification </h4>
        </div>
        <ul>
          <li> Upload a photo of your ID </li>
          <li> Take a picture of yourself to verify your identity </li>
        </ul>
      </div>

      <div
        className={valid ? "" : ""}
        onClick={() => {
          if (!valid) {
            setRegistering(true);
            setStage(stage + 1);
            scrollToRef(position);
          }
        }}
      >
        Start
      </div>
    </>
  );
};

export default GetStarted;
