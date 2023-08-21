import React from "react";
import { useEffect } from "react";
import { useState } from "react";
// import {
//   getStates,
//   getCities,
// } from "../../../infrastructure/api/user/userRequest";

import {
  getStates,
  getCities,
} from "../../infrastructure/api/user/userRequest";

const BasicInfo = (props) => {
  let {
    city,
    setCity,
    userInfo,
    setUserInfo,
    setRegistering,
    stage,
    setStage,
    scrollToRef,
    position,
    mainData,
    isos,
    setIsos,
  } = props;
  const [valid, setValid] = useState(false);
  const [changing, setChanging] = useState(false);
  const [stateData, setStateData] = useState([]);
  const [cityData, setCityData] = useState([]);

  // useEffect(() => {
  //   setUserInfo(userInfo);
  //   console.log(userInfo);
  //   if (
  //     userInfo["firstName"] &&
  //     userInfo["lastName"] &&
  //     userInfo["dob"] &&
  //     userInfo["address"] &&
  //     userInfo["country"] &&
  //     userInfo["zipCode"]
  //   ) {
  //     setValid(true);
  //   } else {
  //     setValid(false);
  //   }
  // }, [changing]);

  // useEffect(() => {
  //   getStates(isos["countryIso"], setStateData);
  // }, []);

  // const getStateIso = (name) => {
  //   var stateObject = stateData.find((state) => state.name === name);
  //   setIsos({ ...isos, stateIso: stateObject["iso2"] });
  //   getCities(isos["countryIso"], stateObject["iso2"], setCityData);
  //   setChanging(!changing);
  // };

  // const getCityId = (name) => {
  //   var cityObject = cityData.find((city) => city.name === name);
  //   setIsos({ ...isos, cityId: cityObject["id"] });
  //   setUserInfo({
  //     ...userInfo,
  //     locationISO: `${cityObject["id"]}#${isos["stateIso"]}#${isos["countryIso"]}`,
  //   });
  //   setChanging(!changing);
  // };

  // const handleChange = (e) => {
  //   const name = e.target.name;
  //   const value = e.target.value;
  //   setUserInfo({ ...userInfo, [name]: value });
  //   setChanging(!changing);
  // };

  return (
    <>
      <h4>Identity Verification</h4>

      <div className="formField">
        <h4>Basic Information</h4>

        <div className="section">
          <div className="input">
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              name="lastName"
              // value={
              //   userInfo["lastName"]
              //     ? userInfo["lastName"]
              //     : mainData.userData.lastName
              // }
              // onChange={handleChange}
              readOnly
              required
            />
          </div>
          <div className="input">
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              name="firstName"
              // value={
              //   userInfo["firstName"]
              //     ? userInfo["firstName"]
              //     : mainData.userData.firstName
              // }
              // onChange={handleChange}
              readOnly
              required
            />
          </div>
        </div>

        <div className="section">
          <div className="input">
            <label htmlFor="dob">Date of Birth</label>
            <input type="date" name="dob" required />
          </div>
        </div>
      </div>
      <div className="formField">
        <h4>Residential Address</h4>
        <div className="section">
          <div className="input" id="resident">
            <label htmlFor="resAddress">Residential Address</label>
            <input
              type="text"
              name="address"
              // value={userInfo["address"]}
              // onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className="section">
          <div className="input">
            {/* {stateData.length > 0 && (
              <> */}
            <label htmlFor="state">State</label>
            <select
              name="state"
              // onChange={(e) => {
              //   handleChange(e);
              //   getStateIso(e.target.value);
              // }}
            >
              <option value="State">None</option>
              {/* {stateData?.map((state) => {
                    return (
                      <>
                        <option key={state.id} value={state.name}>
                          {state.name}
                        </option>
                      </>
                    );
                  })} */}
            </select>
            {/* </>
            )} */}
          </div>
          <div className="input">
            {/* {cityData.length > 0 && (
              <> */}
            <label htmlFor="city">City</label>
            <select
              name="city"
              // onChange={(e) => {
              //   setCity(e.target.value);
              //   setChanging(!changing);
              //   getCityId(e.target.value);
              // }}
            >
              <option value="City">None</option>
              {/* {cityData?.map((city) => {
                    return (
                      <>
                        <option key={city.id} value={city.name}>
                          {city.name}
                        </option>
                      </>
                    );
                  })} */}
            </select>
            {/* </>
            )} */}
          </div>
          <div className="input">
            <label htmlFor="postalCode">Postal Code</label>
            <input
              type="text"
              name="zipCode"
              // value={userInfo["zipCode"]}
              // onChange={handleChange}
              required
            />
          </div>
        </div>
        {!valid && <p className="note">* All fields are required</p>}
      </div>

      <div className="formField">
        <div className="section" id="section">
          <div
            className="enable"
            id="back"
            onClick={() => {
              setStage(0);
              setRegistering(false);
              scrollToRef(position);
            }}
          >
            Back
          </div>
          <div
            className={valid ? "enable" : "disable"}
            id={valid ? "continue_enable" : "continue_disable"}
            onClick={() => {
              if (!valid) {
                setStage(stage + 1);
                scrollToRef(position);
              }
            }}
          >
            Submit & Continue
          </div>
        </div>
      </div>
    </>
  );
};

export default BasicInfo;
