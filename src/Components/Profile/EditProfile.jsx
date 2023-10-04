import {
  ContentCard,
  EditProfileContainer,
  MidSection,
} from "./EditProfile.Style";
import { useFormik } from "formik";
import { HiLockClosed } from "react-icons/hi";
import {
  DragDropText,
  FileUploadContainer,
  FormField,
  UploadFileBtn,
} from "../Categories/Cars/Cars.Style";
import { useEffect, useRef, useState } from "react";
import services from "@/ioc/services";
import Return from "../Navbar/Return";
import {
  getStates,
  getCities,
} from "@/infrastructure/api/user/userRequest";
import MainButton from "../buttons/MainButton";
import Loader from "@/AtomicComponents/Loader/Loader";
import { useRouter } from "next/router";
import { getDetails } from "@/services/request";
import useLocalStorage from "use-local-storage";

const EditProfile = () => {
  const [mainData, setMainData] = useLocalStorage("user", "");

  const navigate = useRouter();
  // const location = useLocation;

  const [popUp, setPopUp] = useState(false);
  const activeOption = 2

  const isEdit = activeOption == "edit";
  const [editUserProfile, setEditUserProfile] = useState();
  const fileInputField = useRef(null);
  const [file, setFile] = useState();
  const [loader, setLoader] = useState(false);
  const [statemainData, setStatemainData] = useState([]);
  const [citymainData, setCitymainData] = useState([]);
  const [locationISO, setLocationISO] = useState();

  const [isos, setIsos] = useState();

  useEffect(() => {
    let mainData = getDetails()
    setMainData(mainData);
    setFile(mainData.cover)
    setLocationISO(mainData.locationISO)
    setIsos({
      countryIso:
        mainData.locationISO?.length > 0
          ? mainData.locationISO.split("#")[2]
          : "",
      stateIso:
        mainData.locationISO?.length > 0
          ? mainData.locationISO.split("#")[1]
          : "",
      cityId:
        mainData.locationISO?.length > 0
          ? mainData.locationISO.split("#")[0]
          : "",
    });

    
    if (mainData.userData?.locationISO?.length > 0) {
      prepopulateLocation(mainData.userData.locationISO);
    }
  }, []);

  const prepopulateLocation = async (location) => {
    let text = location.split("#");
    let countryISO = text[2];
    let stateISO = text[1];
    // let cityId = text[0]
    await getStates(countryISO, setStateData);
    await getCities(countryISO, stateISO, setCityData);
  };

  const [initialValues, setInitialValues] = useState({
    firstName: mainData.firstName,
    lastName: mainData.lastName,
    email: mainData.email,
    phoneNumber1:mainData.phoneNumber1,
    phoneNumber2:mainData.phoneNumber2,
    about: mainData.about,
    websiteURL: mainData.websiteUrl,
    facebookURL: mainData.facebookUrl,
    instagramURL: mainData.instagramUrl,
    cover: file,
    address: mainData.address,
    country: mainData.country,
    locationISO: mainData.locationISO,
    city: mainData.city,
    state:mainData.state,
    zipCode: mainData.zipCode,
  });

  // const comapanyInitialValues = {
  //   companyName: "",
  //   websiteURL: "",
  //   facebookURL: "",
  //   instagramURL: "",
  //   address1: "",
  //   address2: "",
  //   country: "",
  //   state: "",
  //   city: "",
  //   zipCode: "",
  //   email: "",
  //   alternativeEmail: "",
  //   phone1: "",
  //   phone2: "",
  //   cover: file || null,
  // };

  // const onCompanySubmit = (values) => {
  //   console.log("mainData", values);
  // };

  const validate = (values) => {
    let errors = {};
    if (!values.firstName) errors.firstName = "Required";
    if (!values.lastName) errors.lastName = "Required";
    if (!values.email) {
      errors.email = "Required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = "Invalid email format";
    }
    if (!values.address) errors.address = "Required";
    if (!values.country) errors.country = "Required";
    if (!values.city) errors.city = "Required";
    if (!values.state) errors.state = "Required";
    return errors;
  };

  const onSubmit = async (values) => {
    values.cover = file;
    values.locationISO = locationISO;
    const userDetails = {
      firstName: values.firstName?.trim(),
      lastName: values.lastName?.trim(),
      cover: values.cover?.trim(),
      about: values?.about,
      email: values.email,
      phoneNumber1:values.phoneNumber1,
      phoneNumber2:values.phoneNumber2,
      websiteUrl: values.websiteURL?.trim(),
      facebookUrl: values.facebookURL?.trim(),
      instagramUrl: values.instagramURL?.trim(),
      address: values.address,
      country: values.country,
      state: values.state,
      locationISO: values.locationISO,
      city: values.city,
      zipCode: values.zipCode,
    };

    console.log(userDetails)
    // if (isEdit) {
      setLoader(true);
      await services.api.userRequests
        .updateUserProfile(userDetails)
        .then((res) => {
          localStorage.setItem("user", JSON.stringify(res.data));
          setEditUserProfile(res.mainData);
          setLoader(false);          
          navigate.push("/profile");
        })
        .catch((error) => {
          console.log(error);
          setLoader(false);
          setPopUp(true);
        });
    // }
  };

  const handleChanging = (e) => {
    let name = e.target.name;
    formik.handleChange(e);
    if (name === "country") {
      getCountryIso(e.target.value);
    } else if (name === "state") {
      getStateISO(e.target.value);
    } else if (name === "city") {
      getCityId(e.target.value);
    }
  };

  const getCountryIso = (name) => {
    var countryObject = mainData.countryData.find(
      (country) => country.name === name
    );
    setStateData([]);
    setCityData([]);
    setIsos({ ...isos, countryIso: countryObject["iso2"] });
    getStates(countryObject["iso2"], setStateData);
    setLocationISO(
      `${isos["cityId"]}#${isos["stateIso"]}#${countryObject["iso2"]}`
    );
  };

  const getStateISO = (name) => {
    var stateObject = stateData.find((state) => state.name === name);
    setCityData([]);
    setIsos({ ...isos, stateIso: stateObject["iso2"] });
    getCities(isos["countryIso"], stateObject["iso2"], setCityData);
    setLocationISO(
      `${isos["cityId"]}#${stateObject["iso2"]}#${isos["countryIso"]}`
    );
  };

  const getCityId = (name) => {
    var cityObject = cityData.find((city) => city.name === name);
    setIsos({ ...isos, cityId: cityObject["id"] });
    setLocationISO(
      `${cityObject["id"]}#${isos["stateIso"]}#${isos["countryIso"]}`
    );
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
    validate,
  });

  // const companyFormik = useFormik({
  //   comapanyInitialValues,
  //   onCompanySubmit,
  // });

  return (
    <>
      {loader && <Loader />}
      {popUp && (
        <>
          <div
            className="fixed w-full z-50 h-[100%] top-0 left-0 flex justify-center items-center"
            style={{background:"rgba(0,0,0,0.5"}}
            onClick={() => {
              setPopUp(false);
            }}
          >
            <div className="md:w-1/3 md:h-1/3 w-2/3 h-1/4 bg-[white] flex justify-center rounded-xl items-center">
              <div className="flex flex-col justify-center items-center p-5">
                <p className="text-xl text-center font-bold">
                  Seems there is a connection error. <span className="text-[#F2BE5C] block">please try again!</span>
                </p>
              </div>
            </div>
          </div>
        </>
      )}
      <Return link="/profile" />
      <EditProfileContainer padding="12px 12px">
        <div className="content-text">
          <h3>Profile</h3>
          <p>This information will be displayed publicly</p>
        </div>

        <ContentCard background="none">
          <form onSubmit={formik.handleSubmit}>
            <label htmlFor="firstName">
              First Name <span className=" text-[red]">*</span>
            </label>
            <input
              type="text"
              className="input"
              name="firstName"
              value={formik.values.firstName?.trim()}
              onChange={formik.handleChange}
            />
            {formik.errors.firstName ? (
              <div className=" text-[red] opacity-40">
                {formik.errors.firstName}
              </div>
            ) : null}

            <label htmlFor="lastName">
              Last Name <span className="text-[red]">*</span>
            </label>
            <input
              type="text"
              className="input"
              name="lastName"
              value={formik.values.lastName}
              onChange={formik.handleChange}
            />
            {formik.errors.lastName ? (
              <div className="text-[red] opacity-40">
                {formik.errors.lastName}
              </div>
            ) : null}

            <label htmlFor="about">About</label>
            <textarea
              type="text"
              className="textarea"
              name="about"
              value={formik.values.about}
              onChange={formik.handleChange}
            />
            <p className="neutral-text">Brief description for your profile</p>

            <div className="lock-div">
              <label htmlFor="websiteURL">Website URL</label>
              <HiLockClosed size={15} />
            </div>
            <input
              type="text"
              className="input neutral-field"
              name="websiteURL"
              placeholder="www.example.com"
              value={formik.values.websiteURL}
              onChange={formik.handleChange}
            />
            <div className="btn-flex">
              <p>website url not available in your account</p>
              <button
                className="upg-btn"
                type="submit"
                onClick={() => navigate("/profile/upgrade")}
              >
                Upgrade
              </button>
            </div>

            <div className="lock-div">
              <label htmlFor="facebookURL">Facebook URL</label>
              <HiLockClosed size={15} />
            </div>
            <input
              type="text"
              className="input"
              name="facebookURL"
              value={formik.values.facebookURL}
              onChange={formik.handleChange}
            />

            <div className="lock-div">
              <label htmlFor="instagramURL">Instagram URL</label>
              <HiLockClosed size={15} />
            </div>
            <input
              type="text"
              className="input"
              name="instagramURL"
              value={formik.values.instagramURL}
              onChange={formik.handleChange}
            />

            <MainButton
              background="blue"
              border="blue"
              marginTop="1em"
              padding="18px 24px"
              type="submit"
            >
              Save
            </MainButton>
          </form>

          <div className="border"></div>

          <div className="form2">
            <h3>Address</h3>
            <form onSubmit={formik.handleSubmit}>
              <label htmlFor="address" className="space">
                Address<span className=" text-[red]">*</span>
              </label>
              <input
                type="text"
                className="input"
                name="address"
                value={formik.values.address}
                onChange={formik.handleChange}
              />
              {formik.errors.address ? (
                <div className=" text-[red] opacity-40">
                  {formik.errors.address}
                </div>
              ) : null}

              <div className="dropdown">
                <div className="sub-dropdown space">
                  <label htmlFor="country">
                    Country <span className=" text-[red]">*</span>
                  </label>
                  <select
                    name="country"
                    onChange={handleChanging}
                    className="select"
                  >
                    <option value="Country">None</option>
                    {mainData.countryData?.map((country) => {
                      return (
                        <>
                          {mainmainData.usermainData.country === country.name ? (
                            <option
                              key={country.id}
                              value={country.name}
                              selected
                            >
                              {country.name}
                            </option>
                          ) : (
                            <option key={country.id} value={country.name}>
                              {country.name}
                            </option>
                          )}
                        </>
                      );
                    })}
                  </select>
                  {formik.errors.country ? (
                    <div className=" text-[red] opacity-40">
                      {formik.errors.country}
                    </div>
                  ) : null}
                </div>
                <div className="sub-dropdown space">
                  {statemainData.length > 0 && (
                    <>
                      <label htmlFor="state">
                        State <span className="text-[red]">*</span>
                      </label>
                      <select
                        name="state"
                        onChange={handleChanging}
                        className="select"
                      >
                        <option value="State">None</option>
                        {statemainData?.map((state) => {
                          return (
                            <>
                              {mainmainData.usermainData.state == state.name ? (
                                <option
                                  key={state.id}
                                  value={state.name}
                                  selected
                                >
                                  {state.name}
                                </option>
                              ) : (
                                <option key={state.id} value={state.name}>
                                  {state.name}
                                </option>
                              )}
                            </>
                          );
                        })}
                      </select>
                      {formik.errors.state ? (
                        <div className=" text-[red] opacity-40">
                          {formik.errors.state}
                        </div>
                      ) : null}
                    </>
                  )}
                </div>
              </div>

              <div className="dropdown">
                <div className="sub-dropdown space">
                  {citymainData.length > 0 && (
                    <>
                      <label htmlFor="city">
                        City <span className=" text-[red]">*</span>
                      </label>
                      <select
                        name="city"
                        onChange={handleChanging}
                        className="select"
                      >
                        <option value="City">None</option>
                        {citymainData?.map((city) => {
                          return (
                            <>
                              {mainmainData.usermainData.city === city.name ? (
                                <option
                                  key={city.id}
                                  value={city.name}
                                  selected
                                >
                                  {city.name}
                                </option>
                              ) : (
                                <option key={city.id} value={city.name}>
                                  {city.name}
                                </option>
                              )}
                            </>
                          );
                        })}
                      </select>
                      {formik.errors.city ? (
                        <div className=" text-[red] opacity-40">
                          {formik.errors.city}
                        </div>
                      ) : null}
                    </>
                  )}
                </div>
                <div className="sub-dropdown space">
                  <label htmlFor="postalCode">Zip / Postal Code</label>
                  <input
                    type="number"
                    className="input"
                    name="zipCode"
                    id="postalCode"
                    value={formik.values.zipCode}
                  />
                </div>
              </div>
              <MainButton
                background="blue"
                border="blue"
                marginTop="1em"
                padding="18px 24px"
                type="submit"
              >
                Save
              </MainButton>
            </form>
          </div>

          <div className="border"></div>

          <div className="form2">
            <h3>Contact Information</h3>
            <form method="post" onSubmit={formik.handleSubmit}>
              <label htmlFor="email" className="space">
                Email
              </label>
              <input
                type="text"
                placeholder="company@example.com"
                className="input"
                name="email"
                value={formik.values.email}
                onChange={handleChanging}
              />
              {formik.errors.email ? (
                <div className=" text-[red] opacity-40">
                  {formik.errors.email}
                </div>
              ) : null}

              <div className="dropdown">
                <div className="sub-dropdown space">
                  <label htmlFor="phoneNumber1">Phone 1</label>
                  <input
                    type="number"
                    className="input"
                    name="phoneNumber1"
                    value={formik.values.phoneNumber1}
                    onChange={handleChanging}
                  />
                </div>
                <div className="sub-dropdown space">
                  <label htmlFor="phoneNumber2">Phone 2</label>
                  <input
                    type="number"
                    className="input"
                    name="phoneNumber2"
                    value={formik.values.phoneNumber2}
                    onChange={handleChanging}
                  />
                </div>
              </div>
              <MainButton
                background="blue"
                border="blue"
                marginTop="1em"
                padding="18px 24px"
                type="submit"
                onClick={formik.onSubmit}
              >
                Save
              </MainButton>
            </form>
          </div>
        </ContentCard>
      </EditProfileContainer>

      {/* <MidSection>
        <p>This section is not available in your account</p>
        <button type="submit" onClick={() => navigate("/profile/upgrade")}>
          Upgrade
        </button>
      </MidSection>

      <EditProfileContainer padding="12px 12px">
        <div className="content-text">
          <h3>Company / Business</h3>
          <p>This information will be displayed publicly</p>
        </div>

        <ContentCard height="120em">
          <form onSubmit={companyFormik.handleSubmit}>
            <h3 className="neutral-field">Company</h3>
            <div className="lock-div space">
              <label htmlFor="companyName">Company Name</label>
              <HiLockClosed size={15} />
            </div>
            <input
              type="text"
              className="input"
              name="companyName"
              placeholder="KingDavid Team"
              value={companyFormik.values}
              onChange={formik.handleChange}
            />

            <div className="lock-div">
              <label htmlFor="websiteURL">Website URL</label>
              <HiLockClosed size={15} />
            </div>
            <input
              type="text"
              className="input"
              name="websiteURL"
              placeholder="www.example.com"
              value={formik.values.websiteURL}
              onChange={formik.handleChange}
            />

            <div className="lock-div">
              <label htmlFor="facebookURL">Facebook URL</label>
              <HiLockClosed size={15} />
            </div>
            <input
              type="text"
              className="input"
              name="facebookURL"
              value={formik.values.websiteURL}
              onChange={formik.handleChange}
            />

            <div className="lock-div">
              <label htmlFor="instagramURL">Instagram URL</label>
              <HiLockClosed size={15} />
            </div>
            <input
              type="text"
              className="input"
              name="instagramURL"
              value={formik.values.instagramURL}
              onChange={formik.handleChange}
            />

            <DisableButton
              border={theme.backgroundColor}
              marginTop="1em"
              padding="18px 24px"
              type="submit"
            >
              Save
            </DisableButton>
          </form>

          <div className="border"></div>

          <div className="form2">
            <h3>Address</h3>
            <form onSubmit={formik.handleSubmit}>
              <label htmlFor="address" className="space">
                Address 1
              </label>
              <input
                type="text"
                className="input"
                name="address"
                value={formik.values.address}
                onChange={formik.handleChange}
              />

              <div className="lock-div">
                <label htmlFor="address2">Address 2</label>
                <HiLockClosed size={15} />
              </div>
              <input
                type="text"
                className="input"
                name="address2"
                value={formik.values.instagramURL}
                onChange={formik.handleChange}
              />

              <div className="dropdown">
                <div className="sub-dropdown space">
                  <label htmlFor="country">Country</label>
                  <select
                    name="country"
                    onChange={formik.handleChange}
                    className="select"
                  >
                    <option value="country"></option>
                    {Country.map((list, i) => {
                      return (
                        <>
                          <option key={i} value={list.country}>
                            {list.country}
                          </option>
                        </>
                      );
                    })}
                  </select>
                </div>
                <div className="sub-dropdown space">
                  <label htmlFor="state">State</label>
                  <select
                    name="state"
                    onChange={formik.handleChange}
                    className="select"
                  >
                    <option value="state"></option>
                    {Country.map((list, i) => {
                      return (
                        <>
                          <option key={i} value={list.country}>
                            {list.country}
                          </option>
                        </>
                      );
                    })}
                  </select>
                </div>
              </div>

              <div className="dropdown">
                <div className="sub-dropdown space">
                  <label htmlFor="city">City</label>
                  <select
                    name="city"
                    onChange={formik.handleChange}
                    className="select"
                  >
                    <option value="city"></option>
                    {Country.map((list, i) => {
                      return (
                        <>
                          <option key={i} value={list.country}>
                            {list.country}
                          </option>
                        </>
                      );
                    })}
                  </select>
                </div>
                <div className="sub-dropdown space">
                  <label htmlFor="postalCode">Zip / Postal Code</label>
                  <select
                    name="postalCode"
                    onChange={formik.handleChange}
                    className="select"
                  >
                    <option value="postalCode"></option>
                    {Country.map((list, i) => {
                      return (
                        <>
                          <option key={i} value={list.country}>
                            {list.country}
                          </option>
                        </>
                      );
                    })}
                  </select>
                </div>
              </div>
              <DisableButton
                border={theme.backgroundColor}
                marginTop="1em"
                padding="18px 24px"
                type="submit"
              >
                Save
              </DisableButton>
            </form>
          </div>

          <div className="border"></div>

          <div className="form2">
            <h3>Contact Information</h3>
            <form method="post" onClick={formik.handleSubmit}>
              <label htmlFor="email" className="space">
                Email
              </label>
              <input
                type="text"
                placeholder="company@example.com"
                className="input"
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange}
              />

              <label htmlFor="alternativeEmail" className="space">
                Alternative Email
              </label>
              <input
                type="text"
                className="input"
                name="alternativeEmail"
                value={formik.values.email}
                onChange={formik.handleChange}
              />

              <div className="dropdown">
                <div className="sub-dropdown space">
                  <label htmlFor="phone1">Phone 1</label>
                  <input
                    type="text"
                    className="input"
                    name="phone1"
                    value={formik.values.phone1}
                    onChange={formik.handleChange}
                  />
                </div>
                <div className="sub-dropdown space">
                  <label htmlFor="phone2">Phone 2</label>
                  <input
                    type="text"
                    className="input"
                    name="phone2"
                    value={formik.values.phone2}
                    onChange={formik.handleChange}
                  />
                </div>
              </div>
              <DisableButton
                border={theme.backgroundColor}
                marginTop="1em"
                padding="18px 24px"
                type="submit"
              >
                Save
              </DisableButton>
            </form>
          </div>

          <div className="border"></div>

          <div className="form2">
            <h3>Branding</h3>
            <form method="post" onClick={formik.handleSubmit}>
              <label htmlFor="cover" className="space">
                Cover
              </label>
              <FileUploadContainer>
                <UploadFileBtn type="button">
                  <i className="fas fa-file-upload" />
                  <span> Upload a file</span>
                </UploadFileBtn>
                <DragDropText>PNG, JPG, GIF up to 5mb</DragDropText>
                <FormField type="file" ref={fileInputField} title="" value="" />
              </FileUploadContainer>

              <DisableButton
                border={theme.backgroundColor}
                marginTop="1em"
                padding="18px 24px"
                type="submit"
              >
                Save
              </DisableButton>
            </form>
          </div>
        </ContentCard>
      </EditProfileContainer> */}
    </>
  );
};

export default EditProfile;
