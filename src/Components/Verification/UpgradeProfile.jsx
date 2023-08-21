import { useEffect, useState, useRef } from "react";
import { Upgrade } from "./UpgradeProfile.Style";
import { ChevronLeft } from "heroicons-react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setListWithUs } from "../../../application/store/actions/user";
const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop);

const UpgradeProfile = () => {
  const dispatch = useDispatch();
  const [active, setActive] = useState(0);
  const navigate = useNavigate();
  const listWithUs = useSelector((state) => state.user.listWithUs);
  const top = useRef(null);
  useEffect(() => {
    scrollToRef(top);
  }, [top]);

  const PaymentTypeData = [
    {
      background: "#f2f2f2",
      textColor: "black",
      priceValue: "Silver",
      amount: ["50,000", "550,000"],
      description: [
        "Number Of Listings: 12 Listings Maximum (including rental properties)",
        "Availability Of Plan: Available to individual vendors only",
        "Special Feature: None",
        "Prestige Tag: None",
      ],
    },
    {
      background: "#ffecec",
      textColor: "black",
      priceValue: "Diamond",
      amount: ["75,000", "750,000"],
      description: [
        "Number Of Listings: 25 Listings Maximum (including rental properties)",
        "Availability Of Plan: Available to individual vendors only",
        "Special Feature: None",
        "Prestige Tag: KDE Prestige Tag (White)",
      ],
    },
    {
      background: "#333433",
      textColor: "white",
      priceValue: "Platinum",
      amount: ["100,000", "1,000,000"],
      description: [
        "Number Of Listings: 40 Listings Maximum (including rental properties)",
        "Availability Of Plan: Exclusive to corporate vendors / business entities",
        "Special Feature: Feature on our homepage and caategory page display screen for more visibility and profile visits",
        "Prestige Tag: KDE Prestige Tag (Gold)",
      ],
    },
  ];
  return (
    <>
      <Upgrade ref={top}>
        <div className="bck">
          <div className="cont" onClick={() => navigate(-1)}>
            <ChevronLeft size="25px" />
          </div>
        </div>
        <div className="head">
          <p className="h1">Real Estate Or Automobiles?</p>
          <p className="h2">Don't worry, you can list both.</p>
        </div>
        <div className="typeBtn">
          <div
            className={active === 0 ? "selectBtn1" : "selectBtn2"}
            onClick={() => {
              setActive(0);
            }}
          >
            Monthly
          </div>
          <div
            className={active === 1 ? "selectBtn1" : "selectBtn2"}
            onClick={() => {
              setActive(1);
            }}
          >
            Yearly
          </div>
        </div>

        <div className="packages">
          {active === 0 && (
            <>
              {PaymentTypeData.map((item) => {
                return (
                  <>
                    <div
                      className="package"
                      style={{ background: `${item.background}` }}
                    >
                      <div className="up">
                        <div
                          className="top"
                          style={{ color: `${item.textColor}` }}
                        >
                          {item.priceValue}
                        </div>
                        <div
                          className="descr"
                          style={{ color: `${item.textColor}` }}
                        >
                          {item.description.map((des) => {
                            return <p>{des}</p>;
                          })}
                        </div>
                        <div className="pricing">
                          <p>
                            <span style={{ color: `${item.textColor}` }}>
                              &#x20A6; {item.amount[0]}
                            </span>
                            /mo
                          </p>
                        </div>
                      </div>
                      <div
                        className="btn"
                        onClick={() => {
                          if (listWithUs) {
                            dispatch(setListWithUs(false));
                            navigate("/dashboard/profile/verification");
                          } else {
                            navigate("/dashboard/wallet");
                          }
                        }}
                      >
                        {" "}
                        Get Started{" "}
                      </div>
                    </div>
                  </>
                );
              })}
            </>
          )}

          {active === 1 && (
            <>
              {PaymentTypeData.map((item) => {
                return (
                  <>
                    <div
                      className="package"
                      style={{ background: `${item.background}` }}
                    >
                      <div className="up">
                        <div
                          className="top"
                          style={{ color: `${item.textColor}` }}
                        >
                          {item.priceValue}
                        </div>
                        <div
                          className="descr"
                          style={{ color: `${item.textColor}` }}
                        >
                          {item.description.map((des) => {
                            return <p>{des}</p>;
                          })}
                        </div>
                        <div className="pricing">
                          <p>
                            <span style={{ color: `${item.textColor}` }}>
                              &#x20A6; {item.amount[1]}
                            </span>
                            /yr
                          </p>
                        </div>
                      </div>
                      <div
                        className="btn"
                        onClick={() => {
                          if (listWithUs) {
                            dispatch(setListWithUs(false));
                            navigate("/dashboard/profile/verification");
                          } else {
                            navigate("/dashboard/wallet");
                          }
                        }}
                      >
                        {" "}
                        Get Started{" "}
                      </div>
                    </div>
                  </>
                );
              })}
            </>
          )}
        </div>
        {listWithUs && (
          <div className="base">
            your account will not be charged until you’re verified.{" "}
            <span onClick={() => navigate("/terms")}>T&Cs apply.</span>
          </div>
        )}
      </Upgrade>
    </>
  );
};

export default UpgradeProfile;
