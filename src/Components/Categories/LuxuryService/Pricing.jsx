import { useState, useRef, useEffect } from "react";
import { MdMenu } from "react-icons/md";
import { useNavigate, useParams } from "react-router-dom";
import MainButton from "../../buttons/MainButton";
import { Brand, Header, LI, LogoText, UL } from "../../Navbar/Navbar.Style";
import { useDispatch } from "react-redux";
import { setPackagePlan } from "../../../application/store/actions/user";
import "../../Navbar/Navbar.css";
import { ImCross } from "react-icons/im";
import kde_blackBg from "../../Navbar/Image/kde_whiteBg.png";

const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop);
const Pricing = ({ active = 6 }) => {
  const { id } = useParams();
  const chauffeurRide = useRef(null);
  const chauffeurRidem = useRef(null);
  const dayCation = useRef(null);
  const dayCationm = useRef(null);
  const boatCruise = useRef(null);
  const boatCruisem = useRef(null);
  const [activeNav, setActiveNav] = useState(false);
  const dispatch = useDispatch();

  const showMenu = () => {
    setActiveNav(!activeNav);
  };

  const navigate = useNavigate();

  useEffect(() => {
    if(String(id) === "dayCation"){
      window.innerWidth > 768 && scrollToRef(dayCation)      
      window.innerWidth < 768 && scrollToRef(dayCationm)
    }
    else if(String(id) === "chauffeur-driven"){
      window.innerWidth > 768 && scrollToRef(chauffeurRide)
      window.innerWidth < 768 && scrollToRef(chauffeurRidem)
    }
    else if(String(id) === "boat-cruise"){
      window.innerWidth > 768 && scrollToRef(boatCruise)
      window.innerWidth < 768 && scrollToRef(boatCruisem)
    }
  }, []);

  const navOptions = [
    {
      title: "All",
      link: "/luxury-service",
    },
    {
      title: "Concierge Weekends",
      link: "/luxury-service/concierge-vacation",
    },
    {
      title: "Chauffeur Services",
      link: "/luxury-service/pricing",
    },
    {
      title: "Boat Cruises",
      link: "/luxury-service/pricing",
    },
    {
      title: "Concierge Vacations",
      link: "/luxury-service/pricing",
    },
    {
      title: "Helicopter Rides",
      link: "/luxury-service/helicopter-ride",
    },
    {
      title: "Pricing",
      link: "/luxury-service/pricing",
    },
  ];

  const chauffeurRidePricingOption = [
    {
      id: 1,
      name: "LUXURY CAR",
    },
    {
      id: 2,
      name: "REFRESHMENTS",
    },
    {
      id: 3,
      name: "SECURITY PERSONNEL",
    },
    {
      id: 4,
      name: "HILUX ESCORT",
    },
  ];

  const dayCationPricingOption = [
    {
      id: 1,
      name: "CHAUFFEUR RIDES",
    },
    {
      id: 2,
      name: "LUXURY ACCOMODATION",
    },
    {
      id: 3,
      name: "EXQUISITE MEALS",
    },
    {
      id: 4,
      name: "GAMING ADVENTURES",
    },
    {
      id: 5,
      name: "BOAT CRUISES",
    },
    {
      id: 6,
      name: "SPA",
    },
    {
      id: 7,
      name: "CHAMPAGNE/SPARKLING WINE",
    },
  ];

  const boatCruisePricingOption = [
    {
      id: 1,
      name: "BOAT SIZE",
    },
    {
      id: 2,
      name: "DURATION",
    },
    {
      id: 3,
      name: "ONBOARD GAMES+HOST",
    },
    {
      id: 4,
      name: "CHAMPAGNE/SPARKLING WINE",
    },
    {
      id: 5,
      name: "ONBOARD SPA TREATMENT"
    },
    {
      id: 6,
      name: "EXQUISITE ONBOARD MEALS",
    },
  ];

  const boatCruiseSilverOption = [
    {
      id: 1,
      name: "8 Passenger Mini Yacht",
    },
    {
      id: 2,
      name: "2 Hours Cruise",
    },
    {
      id: 3,
      name: "Available On Request",
    },
    {
      id: 4,
      name: "4 bottles of Gold Royal Sparkling Wine ALC) OR 6 bottles of Bosca Toselli (NON ALC)",
    },
    {
      id: 5,
      name: "Available",
    },
    {
      id: 6,
      name: "Available",
    },
  ];

  const boatCruiseDiamondOption = [
    {
      id: 1,
      name: "12 Passenger Mini Yacht",
    },
    {
      id: 2,
      name: "3 Hours Cruise",
    },
    {
      id: 3,
      name: "Available On Request",
    },
    {
      id: 4,
      name: "6 bottles of Baileys Irish Cream (ALC) OR 8 bottles of Blue Nun Silver Sparkling Wine (NON ALC)",
    },
    {
      id: 5,
      name: "Available",
    },
    {
      id: 6,
      name: "Available",
    }
  ];

  const boatCruisePlatinumOption = [
    {
      id: 1,
      name: "15 Passenger Mini Yacht",
    },
    {
      id: 2,
      name: "3 Hours Cruise",
    },
    {
      id: 3,
      name: "Available On Request",
    },
    {
      id: 4,
      name: "6 bottles of Isolabella Della Croce (ALC) or 12 bottles of Blue Nun Silver (NON ALC)",
    },
    {
      id: 5,
      name: "Available",
    },
    {
      id: 6,
      name: "Available",
    }
  ];

  const dayCationSilverplanOption = [
    {
      id: 1,
      name: "Executive Sedan (24 Hours)",
    },
    {
      id: 2,
      name: "1 Bedroom Apartment",
    },
    {
      id: 3,
      name: "3 Standard Meal",
    },
    {
      id: 4,
      name: "Adventure for 2 ",
    },
    {
      id: 5,
      name: "8 Passenger Boat",
    },
    {
      id: 6,
      name: "Home/Walk In Session (2)",
    },
    {
      id: 7,
      name: "2 bottles of Martini Rose (ALC) OR 2 bottles of Bosca Toselli (NON ALC)",
    },
  ];

  const dayCationDaimondplanOption = [
    {
      id: 1,
      name: "Executive Suv (24 Hours)",
    },
    {
      id: 2,
      name: "2 Bedroom Apartment",
    },
    {
      id: 3,
      name: "3 Standard Meals",
    },
    {
      id: 4,
      name: "Adventure for 4",
    },
    {
      id: 5,
      name: "10 Passenger Mini-Yacht",
    },
    {
      id: 6,
      name: "Home/Walk in Session (4) ",
    },
    {
      id: 7,
      name: "2 bottles of Isolabella Della Croce (ALC) OR 4 bottles of Blue Nun Silver Sparkling Wine (NON ALC)",
    },
  ];

  const dayCationPlatinimplanOption = [
    {
      id: 1,
      name: "Luxury Suv (24 Hours)",
    },
    {
      id: 2,
      name: "3 Bedroom Apartment",
    },
    {
      id: 3,
      name: "3 Standard Meals",
    },
    {
      id: 4,
      name: "Adventure for 6",
    },
    {
      id: 5,
      name: "12 Passenger Mini-Yacht",
    },
    {
      id: 6,
      name: "Home/Walk In Session(6)",
    },
    {
      id: 7,
      name: "2 bottles of Moet Imperial Brut (ALC) OR 6 bottles of Blue Nun Silver Sparkling Wine",
    },
  ];

  const chauffeurRideSilverplanOption = [
    {
      id: 1,
      name: "12 Hours Service",
    },
    {
      id: 2,
      name: "Readily Available",
    },
    {
      id: 3,
      name: "Available On Request",
    },
    {
      id: 4,
      name: "Available On Request",
    },
  ];

  const chauffeurRideDiamondplanOption = [
    {
      id: 1,
      name: "12 Hours Service",
    },
    {
      id: 2,
      name: "Readily Available",
    },
    {
      id: 3,
      name: "Available On Request",
    },
    {
      id: 4,
      name: "Available On Request",
    },
  ];

  const chauffeurRidePlatinumplanOption = [
    {
      id: 1,
      name: "12 Hours Service",
    },
    {
      id: 2,
      name: "Readily Available",
    },
    {
      id: 3,
      name: "Available On Request",
    },
    {
      id: 4,
      name: "Available On Request",
    },
  ];

  return (
    <>
      <Header
        justifyContent="space-around"
        z="0"
        paddingTop="1.5em"
        className="bg-cover"
        bg="white"
        sticky="static"
        color="black"        
      >
        <nav className={activeNav ? "navigation active" : "navigation"}>
          <ul>
            <div className="closed">
              <p>Welcome!</p>
              <ImCross className="close" color="#000" onClick={showMenu} />
            </div>
            <div className="line"></div>
            {navOptions.map((nav, i) => {
              return (
                <>
                  <li key={i} onClick={() => navigate(nav?.link)}>
                    <div className="list-items">
                      {nav?.icon}
                      {nav.title}
                    </div>
                  </li>
                  {nav.no === 1 && <div className="line"></div>}
                  {nav.no === 2 && <div className="line"></div>}
                  {nav.no === 3 && <div className="line"></div>}
                  {nav.no === 4 && <div className="line"></div>}
                  {nav.no === 5 && <div className="line"></div>}
                  {nav.no === 6 && <div className="line"></div>}
                </>
              );
            })}
          </ul>
        </nav>
        <Brand>
          <div
            className="w-[40px] h-[auto]"
            onClick={() => navigate("/luxury-service")}
          >
            <img
              src={kde_blackBg}
              className="w-[100%] h-[100%] cursor-pointer"
              alt="brandlogo"
            />
          </div>
          <LogoText
            color="black"
            fontSize="1.5rem"
            onClick={() => navigate("/luxury-service")}
          >
            Luxury Services
          </LogoText>

          <div className="menu-icon">
            <MdMenu size={30} className="menu" onClick={showMenu} />
          </div>
        </Brand>

        <div>
          <UL>
            {navOptions.map((nav, i) => {
              return (
                <LI key={i} onClick={() => navigate(nav.link)} color="black">
                  <div className={active === i && "item-active"}>
                    {nav.title}
                  </div>
                </LI>
              );
            })}
          </UL>
        </div>
      </Header>

      <div className="w-full h-full p-4 md:hidden flex flex-col gap-4">
        <h3 className="text-center text-[15px] font-semibold md:text-[19px] tracking-wide" ref={dayCationm}>
          Daycation ( 24 HOURS OF BLISS)
        </h3>

        <div className="bg-[#F2F2F2] rounded-lg flex-col gap-3 py-4 px-6">
          <p className="text-[15px] font-semibold mb-1">
            Silver ( 2 people max )
          </p>
          <p className="text-[20px] font-extrabold">&#8358;500,000</p>

          <div className="mt-5">
            <p className="text-[13px] font-semibold mb-1 capitalize">
              Chauffeur Rides: Executive Sedan (24 Hours)
            </p>
            <p className="text-[13px] font-semibold mb-1">
              Luxury Accomodation: 1 Bedroom Apartment
            </p>
            <p className="text-[13px] font-semibold mb-1">
              Exquisite Meals: 3 Standard Meal
            </p>
            <p className="text-[13px] font-semibold mb-1">
              Gaming Adventures: Adventure for 2{" "}
            </p>
            <p className="text-[13px] font-semibold mb-1">
              Boat Cruise: 8 Passenger Boat
            </p>
            <p className="text-[13px] font-semibold mb-1">
              Spa: Home/Walk In Session (2)
            </p>
            <p className="text-[13px] font-semibold mb-1">
              2 bottles of Martini Rose (ALC) OR 2 bottles of Bosca Toselli (NON
              ALC){" "}
            </p>
          </div>

          <MainButton
            marginTop="2em"
            width="100px"
            padding="24px 12px"
            onClick={() => {
              dispatch(setPackagePlan("silver"));
              navigate("/luxury-service/weekend-escape/silver");
            }}
          >
            Get Started
          </MainButton>
        </div>

        <div className="bg-[#FFECEC] rounded-lg flex-col gap-3 py-4 px-6">
          <p className="text-[15px] font-semibold mb-1">
            Diamond ( 4 people max )
          </p>
          <p className="text-[20px] font-extrabold">&#8358;750,000</p>

          <div className="mt-5">
            <p className="text-[13px] font-semibold mb-1">
              Chauffeur Rides: Executive Suv (24 Hours)
            </p>
            <p className="text-[13px] font-semibold mb-1">
              Luxury Accomodation: 2 Bedroom Apartment
            </p>
            <p className="text-[13px] font-semibold mb-1">
              Exquisite Meals: 3 Standard Meals
            </p>
            <p className="text-[13px] font-semibold mb-1">
              Gaming Adventures: Adventure for 4{" "}
            </p>
            <p className="text-[13px] font-semibold mb-1">
              Boat Cruise: 10 Passenger Mini-Yacht
            </p>
            <p className="text-[13px] font-semibold mb-1">
              Spa: Home/Walk In Session (4)
            </p>
            <p className="text-[13px] font-semibold mb-1">
              2 bottles of Isolabella Della Croce (ALC) OR 4 bottles of Blue Nun
              Silver Sparkling Wine (NON ALC)
            </p>
          </div>

          <MainButton
            marginTop="2em"
            width="100px"
            padding="24px 12px"
            onClick={() => {
              dispatch(setPackagePlan("diamond"));
              navigate("/luxury-service/weekend-escape/diamond");
            }}
          >
            Get Started
          </MainButton>
        </div>

        <div className="bg-[#333433] rounded-lg flex-col gap-3 py-4 px-6 text-white">
          <p className="text-[15px] font-semibold mb-1">
            Platinum ( 6 people max )
          </p>
          <p className="text-[20px] font-extrabold">&#8358;1,000,000</p>

          <div className="mt-5">
            <p className="text-[13px] font-semibold mb-1">
              Chauffeur Rides: Luxury Suv (24 Hours)
            </p>
            <p className="text-[13px] font-semibold mb-1">
              Luxury Accomodation: 3 Bedroom Apartment
            </p>
            <p className="text-[13px] font-semibold mb-1">
              Exquisite Meals: 3 Standard Meals
            </p>
            <p className="text-[13px] font-semibold mb-1">
              Gaming Adventures: Adventure for 6{" "}
            </p>
            <p className="text-[13px] font-semibold mb-1">
              Boat Cruise: 12 Passenger Mini-Yacht
            </p>
            <p className="text-[13px] font-semibold mb-1">
              Spa: Home/Walk In Session (6)
            </p>
            <p className="text-[13px] font-semibold mb-1">
              2 bottles of Moet Imperial Brut (ALC) OR 6 bottles of Blue Nun
              Silver Sparkling Wine
            </p>
          </div>

          <MainButton
            marginTop="2em"
            width="100px"
            padding="24px 12px"
            onClick={() => {
              dispatch(setPackagePlan("platinum"));
              navigate("/luxury-service/weekend-escape/platinum");
            }}
          >
            Get Started
          </MainButton>
        </div>

        <h3
          className="text-center text-[15px] mt-5 font-bold md:text-[19px] tracking-wide"
          id="chauffeurRide"
          ref={chauffeurRidem}
        >
          CHAUFFEUR RIDES (THE COMFORT ZONE)
        </h3>
        <div className="bg-[#F2F2F2] rounded-lg flex-col gap-3 py-4 px-6">
          <p className="text-[20px] font-extrabold">
            &#8358;100,000-&#8358;300,000
          </p>

          <div className="mt-5">
            <p className="text-[13px] font-semibold mb-1">
              Luxury Car: 12 Hours Service
            </p>
            <p className="text-[13px] font-semibold mb-1">
              Refreshments: Readily Available
            </p>
            <p className="text-[13px] font-semibold mb-1">
              Security Personnel: Available On Request
            </p>
            <p className="text-[13px] font-semibold mb-1">
              Hilux Escort: Available On Request
            </p>
          </div>

          <MainButton
            marginTop="2em"
            width="100px"
            padding="24px 12px"
            onClick={() => {
              dispatch(setPackagePlan("silver"));
              navigate("/luxury-service/chauffeur");
            }}
          >
            Get Started
          </MainButton>
        </div>

        <div className="bg-[#FFECEC] rounded-lg flex-col gap-3 py-4 px-6">
          <p className="text-[20px] font-extrabold">
            &#8358;300,000-&#8358;500,000
          </p>

          <div className="mt-5">
            <p className="text-[13px] font-semibold mb-1">
              Luxury Car: 12 Hours Service
            </p>
            <p className="text-[13px] font-semibold mb-1">
              Refreshments: Readily Available
            </p>
            <p className="text-[13px] font-semibold mb-1">
              Security Personnel: Available On Request
            </p>
            <p className="text-[13px] font-semibold mb-1">
              Hilux Escort: Available On Request
            </p>
          </div>

          <MainButton
            marginTop="2em"
            width="100px"
            padding="24px 12px"
            onClick={() => {
              dispatch(setPackagePlan("diamond"));
              navigate("/luxury-service/chauffeur");
            }}
          >
            Get Started
          </MainButton>
        </div>

        <div className="bg-[#333433] rounded-lg flex-col gap-3 py-4 px-6 text-white">
          <p className="text-[20px] font-extrabold">&#8358;500,000 Upwards</p>

          <div className="mt-5">
            <p className="text-[13px] font-semibold mb-1">
              Luxury Car: 12 Hours Service
            </p>
            <p className="text-[13px] font-semibold mb-1">
              Refreshments: Readily Available
            </p>
            <p className="text-[13px] font-semibold mb-1">
              Security Personnel: Available On Request
            </p>
            <p className="text-[13px] font-semibold mb-1">
              Hilux Escort: Available On Request
            </p>
          </div>

          <MainButton
            marginTop="2em"
            width="100px"
            padding="24px 12px"
            onClick={() => {
              dispatch(setPackagePlan("platinum"));
              navigate("/luxury-service/chauffeur");
            }}
          >
            Get Started
          </MainButton>
        </div>

        <h3 className="text-center text-[15px] mt-5 font-semibold md:text-[19px] tracking-wide" ref={boatCruisem}>
          Boat Cruises ( The Aqua Way)
        </h3>
        <div className="bg-[#F2F2F2] rounded-lg flex-col gap-3 py-4 px-6">
          <p className="text-[15px] font-semibold mb-1">
            Silver ( 8 people max )
          </p>
          <p className="text-[20px] font-extrabold">&#8358;500,000</p>

          <div className="mt-5">
            <p className="text-[13px] font-semibold mb-1">
              Boat Size: 8 Passenger Mini Yacht
            </p>
            <p className="text-[13px] font-semibold mb-1">
              Duration: 2 Hours cruise
            </p>
            <p className="text-[13px] font-semibold mb-1">
              Onboard Games+Host: Available On Request
            </p>
            <p className="text-[13px] font-semibold mb-1">
              4 bottles of Gold Royal Sparkling Wine (ALC) OR 6 bottles of Bosca
              Toselli (NON ALC)
            </p>
            <p className="text-[13px] font-semibold mb-1">
              Onboard Spa Treatment: Available
            </p>
            <p className="text-[13px] font-semibold mb-1">
              Exquisite Onboard Meals: Available
            </p>
          </div>

          <MainButton
            marginTop="2em"
            width="100px"
            padding="24px 12px"
            onClick={() => {
              dispatch(setPackagePlan("silver"));
              navigate("/luxury-service/boat-cruise/silver");
            }}
          >
            Get Started
          </MainButton>
        </div>

        <div className="bg-[#FFECEC] rounded-lg flex-col gap-3 py-4 px-6">
          <p className="text-[15px] font-semibold mb-1">
            Diamond ( 12 people max )
          </p>
          <p className="text-[20px] font-extrabold">&#8358;1,000,000</p>

          <div className="mt-5">
            <p className="text-[13px] font-semibold mb-1">
              Boat Size: 12 Passenger Mini Yacht
            </p>
            <p className="text-[13px] font-semibold mb-1">
              Duration: 3 Hours Cruise
            </p>
            <p className="text-[13px] font-semibold mb-1">
              Onboard Games+Host: Available On Request
            </p>
            <p className="text-[13px] font-semibold mb-1">
              6 bottles of Baileys Irish Cream (ALC) OR 8 bottles of Blue Nun
              Silver Sparkling Wine (NON ALC)
            </p>
            <p className="text-[13px] font-semibold mb-1">
              Onboard Spa Treatment: Available
            </p>
            <p className="text-[13px] font-semibold mb-1">
              Exquisite Onboard Meals: Available
            </p>
          </div>

          <MainButton
            marginTop="2em"
            width="100px"
            padding="24px 12px"
            onClick={() => {
              dispatch(setPackagePlan("diamond"));
              navigate("/luxury-service/boat-cruise/diamond");
            }}
          >
            Get Started
          </MainButton>
        </div>

        <div className="bg-[#333433] rounded-lg flex-col gap-3 py-4 px-6 text-white">
          <p className="text-[15px] font-semibold mb-1">
            Platinum ( 15 people max )
          </p>
          <p className="text-[20px] font-extrabold">&#8358;1,500,000</p>

          <div className="mt-5">
            <p className="text-[13px] font-semibold mb-1">
              Boat Size: 15 Passenger Mini Yacht
            </p>
            <p className="text-[13px] font-semibold mb-1">
              Duration: 3 Hours Cruise
            </p>
            <p className="text-[13px] font-semibold mb-1">
              Onboard Games+Host: Available On Request
            </p>
            <p className="text-[13px] font-semibold mb-1">
              6 bottles of Isolabella Della Croce (ALC) or 12 bottles of Blue
              Nun Silver (NON ALC)
            </p>
            <p className="text-[13px] font-semibold mb-1">
              Onboard Spa Treatment: Available
            </p>
            <p className="text-[13px] font-semibold mb-1">
              Exquisite Onboard Meals: Available
            </p>
          </div>

          <MainButton
            marginTop="2em"
            width="100px"
            padding="24px 12px"
            onClick={() => {
              dispatch(setPackagePlan("platinum"));
              navigate("/luxury-service/boat-cruise/platinum");
            }}
          >
            Get Started
          </MainButton>
        </div>
      </div>

      <div className="w-full h-[100%] md:px-[5em] px-[2em] md:py-5 mt-7 md:block hidden" ref={dayCation}>
        <h3 className="text-center text-[15px] font-semibold md:text-[19px] tracking-wide">
          Daycation (24 HOURS OF BLISS)
        </h3>
        <div className="md:flex gap-3 w-[100%] items-center h-auto mt-6 hidden">
          <p className="md:w-1/4 font-extrabold text-[22px]">Pricing</p>
          <p className="md:w-1/4 text-neutral-color font-medium text-[16px]">
            Silver ( 2 people max )
          </p>
          <p className="md:w-1/4 text-neutral-color font-medium text-[16px]">
            Diamond ( 4 people max )
          </p>
          <p className="md:w-1/4 text-neutral-color font-medium text-[16px]">
            Platinum ( 6 people max )
          </p>
        </div>

        <div className="flex gap-3 w-[100%] h-auto mt-6">
          <div className="w-1/4 flex flex-col md:mb-[-1em] lg:mb-[-2em] mt-[-1em] justify-center bg-white rounded-md p-4">
            <ul className="text-[12px] h-[300px] uppercase">
              {dayCationPricingOption.map((p, i) => {
                return (
                  <li key={i} className="md:mb-4 font-semibold">
                    {p.name}
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="w-1/4 flex flex-col items-center rounded-md md:px-3 bg-[#F2F2F2] md:py-10">
            <p className="font-bold text-[25px]">&#8358;500,000</p>
            <p
              className="text-[#2301F3] cursor-pointer text-[16px] mt-8 font-bold border-b-2 border-[#2301F3] mb-12"
              onClick={() => {
                dispatch(setPackagePlan("silver"));
                navigate(`/luxury-service/weekend-escape/silver`);
              }}
            >
              Get Started
            </p>
            <ul className="text-[12px] text-center  h-[300px]">
              {dayCationSilverplanOption.map((p, i) => {
                return (
                  <li key={i} className="md:mb-4 font-semibold">
                    {p.name}
                  </li>
                );
              })}
            </ul>
            <MainButton
              width="100px"
              padding="12px"
              marginTop="7em"
              onClick={() => {
                dispatch(setPackagePlan("silver"));
                navigate("/luxury-service/weekend-escape/silver");
              }}
            >
              Get Started
            </MainButton>
          </div>

          <div className="w-1/4 flex flex-col items-center md:px-3 bg-[#FFECEC] rounded-md md:py-10">
            <p className="font-bold text-[25px]">&#8358;750,000</p>
            <p
              className="text-[#2301F3] text-[16px] cursor-pointer mt-8 font-bold border-b-2 border-[#2301F3] mb-12"
              onClick={() => {
                dispatch(setPackagePlan("diamond"));
                navigate("/luxury-service/weekend-escape/diamond");
              }}
            >
              Get Started
            </p>
            <ul className="text-[12px] text-center  h-[300px]">
              {dayCationDaimondplanOption.map((p, i) => {
                return (
                  <li key={i} className="md:mb-4 font-semibold">
                    {p.name}
                  </li>
                );
              })}
            </ul>
            <MainButton
              width="100px"
              padding="12px"
              marginTop="7em"
              onClick={() => {
                dispatch(setPackagePlan("diamond"));
                navigate("/luxury-service/weekend-escape/diamond");
              }}
            >
              Get Started
            </MainButton>
          </div>

          <div className="w-1/4 flex flex-col items-center md:px-3 text-white bg-[#333433] rounded-md md:py-10">
            <p className="font-bold text-[25px]">&#8358;1,000,000</p>
            <p
              className="text-white text-[16px] mt-8 cursor-pointer font-bold border-b-2 border-white mb-12"
              onClick={() => {
                dispatch(setPackagePlan("platinum"));
                navigate("/luxury-service/weekend-escape/platinum");
              }}
            >
              Get Started
            </p>
            <ul className="text-[12px] text-center h-[300px]">
              {dayCationPlatinimplanOption.map((p, i) => {
                return (
                  <li key={i} className="md:mb-4 font-semibold">
                    {p.name}
                  </li>
                );
              })}
            </ul>
            <MainButton
              width="100px"
              padding="12px"
              marginTop="7em"
              onClick={() => {
                dispatch(setPackagePlan("platinum"));
                navigate("/luxury-service/weekend-escape/platinum");
              }}
            >
              Get Started
            </MainButton>
          </div>
        </div>
      </div>

      <div className="w-full h-[100%] md:px-[5em] md:py-5 mt-7 md:block hidden" ref={chauffeurRide}>
        <h3 className="text-center font-semibold text-[19px] tracking-wide">
          Chauffeur Rides (THE COMFORT ZONE)
        </h3>

        <div className="flex gap-3 w-[100%] items-center h-auto mt-6">
          <p className="w-1/4 font-extrabold text-[22px]">Pricing</p>
        </div>

        <div className="flex gap-3 w-[100%] h-auto mt-6">
          <div className="w-1/4 flex flex-col gap-[12em] lg:mt-[-1em] lg:mb-[-2em] md:px-3 justify-center bg-white rounded-md p-4">
            <ul className="text-[12px] h-[150px]">
              {chauffeurRidePricingOption.map((p, i) => {
                return (
                  <li key={i} className="md:mb-4 font-semibold">
                    {p.name}
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="w-1/4 flex flex-col items-center rounded-md md:px-5 bg-[#F2F2F2] md:py-10">
            <p className="font-bold text-[22px] whitespace-nowrap">
              &#8358;100,000-&#8358;300,000
            </p>
            <p
              className="text-[#2301F3] text-[16px] mt-8 cursor-pointer font-bold border-b-2 border-[#2301F3] mb-12"
              onClick={() => {
                dispatch(setPackagePlan("silver"));
                navigate("/luxury-service/chauffeur");
              }}
            >
              Get Started
            </p>
            <ul className="text-[12px] text-center h-[150px]">
              {chauffeurRideSilverplanOption.map((p, i) => {
                return (
                  <li key={i} className="md:mb-4 font-semibold">
                    {p.name}
                  </li>
                );
              })}
            </ul>
            <MainButton
              width="100px"
              padding="12px"
              marginTop="7em"
              onClick={() => {
                dispatch(setPackagePlan("silver"));
                navigate("/luxury-service/chauffeur");
              }}
            >
              Get Started
            </MainButton>
          </div>

          <div className="w-1/4 flex flex-col items-center  bg-[#FFECEC] md:px-3 rounded-md md:py-10">
            <p className="font-bold text-[22px]">
              &#8358;300,000-&#8358;500,000
            </p>
            <p
              className="text-[#2301F3] cursor-pointer text-[16px] mt-8 font-bold border-b-2 border-[#2301F3] mb-12"
              onClick={() => {
                dispatch(setPackagePlan("diamond"));
                navigate("/luxury-service/chauffeur");
              }}
            >
              Get Started
            </p>
            <ul className="text-[12px] text-center h-[150px]">
              {chauffeurRideDiamondplanOption.map((p, i) => {
                return (
                  <li key={i} className="md:mb-4 font-semibold">
                    {p.name}
                  </li>
                );
              })}
            </ul>
            <MainButton
              width="100px"
              padding="12px"
              marginTop="7em"
              onClick={() => {
                dispatch(setPackagePlan("diamond"));
                navigate("/luxury-service/chauffeur");
              }}
            >
              Get Started
            </MainButton>
          </div>

          <div className="w-1/4 flex flex-col items-center text-white bg-[#333433] md:px-3 rounded-md md:py-10">
            <p className="font-bold text-[22px]">&#8358;500,000 Upwards</p>
            <p
              className="text-white text-[16px] mt-8 cursor-pointer font-bold border-b-2 border-white mb-12"
              onClick={() => {
                dispatch(setPackagePlan("platinum"));
                navigate("/luxury-service/chauffeur");
              }}
            >
              Get Started
            </p>
            <ul className="text-[12px] text-center h-[150px]">
              {chauffeurRidePlatinumplanOption.map((p, i) => {
                return (
                  <li key={i} className="md:mb-4 font-semibold">
                    {p.name}
                  </li>
                );
              })}
            </ul>
            <MainButton
              width="100px"
              padding="12px"
              marginTop="7em"
              onClick={() => {
                dispatch(setPackagePlan("platinum"));
                navigate("/luxury-service/chauffeur");
              }}
            >
              Get Started
            </MainButton>
          </div>
        </div>
      </div>

      <div className="w-full h-[100%] md:px-[5em] md:py-5 mt-7 md:block hidden" ref={boatCruise}>
        <h3 className="text-center font-semibold text-[19px] tracking-wide">
          Boat Cruises ( The Aqua Way)
        </h3>

        <div className="flex gap-3 w-[100%] items-center h-auto mt-6">
          <p className="w-1/4 font-extrabold text-[22px]">Pricing</p>
          <p className="w-1/4 text-neutral-color font-medium text-[16px]">
            Silver ( 8 people max )
          </p>
          <p className="w-1/4 text-neutral-color font-medium text-[16px]">
            Diamond ( 12 people max )
          </p>
          <p className="w-1/4 text-neutral-color font-medium text-[16px]">
            Platinum ( 15 people max )
          </p>
        </div>

        <div className="flex gap-3 w-[100%] h-auto mt-6">
          <div className="w-1/4 flex flex-col gap-[12em] mb-[-2em] mt-[-1em] justify-center bg-white rounded-md p-4">
            <ul className="text-[12px] h-[250px]">
              {boatCruisePricingOption.map((p, i) => {
                return (
                  <li key={i} className="md:mb-4 pb-[0.2em] font-semibold">
                    {p.name}
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="w-1/4 flex flex-col items-center rounded-md md:px-3 bg-[#F2F2F2] md:py-10">
            <p className="font-bold text-[25px]">&#8358;500,000</p>
            <p
              className="text-[#2301F3] text-[16px] mt-8 cursor-pointer font-bold border-b-2 border-[#2301F3] mb-12"
              onClick={() => {
                dispatch(setPackagePlan("silver"));
                navigate("/luxury-service/boat-cruise/silver");
              }}
            >
              Get Started
            </p>
            <ul className="text-[12px] text-center h-[250px]">
              {boatCruiseSilverOption.map((p, i) => {
                return (
                  <li key={i} className="md:mb-4 font-semibold">
                    {p.name}
                  </li>
                );
              })}
            </ul>
            <MainButton
              width="100px"
              padding="12px"
              marginTop="7em"
              onClick={() => {
                dispatch(setPackagePlan("silver"));
                navigate("/luxury-service/boat-cruise/silver");
              }}
            >
              Get Started
            </MainButton>
          </div>

          <div className="w-1/4 flex flex-col items-center  bg-[#FFECEC] md:px-3 rounded-md md:py-10">
            <p className="font-bold text-[25px]">&#8358;1,000, 000</p>
            <p
              className="text-[#2301F3] text-[16px] mt-8 font-bold cursor-pointer border-b-2 border-[#2301F3] mb-12"
              onClick={() => {
                dispatch(setPackagePlan("diamond"));
                navigate("/luxury-service/boat-cruise/diamond");
              }}
            >
              Get Started
            </p>
            <ul className="text-[12px] text-center h-[250px]">
              {boatCruiseDiamondOption.map((p, i) => {
                return (
                  <li key={i} className="md:mb-4 font-semibold">
                    {p.name}
                  </li>
                );
              })}
            </ul>
            <MainButton
              width="100px"
              padding="12px"
              marginTop="7em"
              onClick={() => {
                dispatch(setPackagePlan("diamond"));
                navigate("/luxury-service/boat-cruise/diamond");
              }}
            >
              Get Started
            </MainButton>
          </div>

          <div className="w-1/4 flex flex-col items-center text-white bg-[#333433] md:px-3 rounded-md md:py-10">
            <p className="font-bold text-[25px]">&#8358;1,500,000</p>
            <p
              className="text-white text-[16px] mt-8 cursor-pointer font-bold border-b-2 border-white mb-12"
              onClick={() => {
                dispatch(setPackagePlan("platinum"));
                navigate("/luxury-service/boat-cruise/platinum");
              }}
            >
              Get Started
            </p>
            <ul className="text-[12px] text-center h-[250px]">
              {boatCruisePlatinumOption.map((p, i) => {
                return (
                  <li key={i} className="md:mb-4 font-semibold">
                    {p.name}
                  </li>
                );
              })}
            </ul>
            <MainButton
              width="100px"
              padding="12px"
              marginTop="7em"
              onClick={() => {
                dispatch(setPackagePlan("platinum"));
                navigate("/luxury-service/boat-cruise/platinum");
              }}
            >
              Get Started
            </MainButton>
          </div>
        </div>
      </div>
    </>
  );
};

export default Pricing;
