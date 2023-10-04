import { Categories, Category } from "../../Home/Home.Style";
import LuxuryServiceNavbar from "../../Navbar/LuxuryServiceNavbar";
import c1 from "../LuxuryService/images/alexandre-chambon-aapSemzfsOk-unsplash.webp";
import c2 from "../LuxuryService/images/greg-wilson-ro-GJ-Hlz-s-unsplash.webp";
import c3 from "../LuxuryService/images/samuele-errico-piccarini-MyjVReZ5GLQ-unsplash.webp";
import c4 from "../LuxuryService/images/pics4.webp";
import c5 from "../LuxuryService/images/ishan-seefromthesky-EOAnV_C1a4w-unsplash.webp"
import c6 from '../LuxuryService/images/pics5.webp'
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Footer from "../../Footer/Footer";
import { IoMdArrowForward } from "react-icons/io";

const categories = [
    {
        bg: c4,
        title: "Daycation",
        other: "Get the ultimate VIP experience with our Concierge Weekends service. Whether you’re looking to relax or explore",
        link: "/luxury-service/pricing/daycation"
    },
    {
        bg: c6,
        title: "Boat Cruises",
        other: "Set sail on an unforgettable adventure with our Boat Cruises. Whether you,re looking for a romantic getaw",
        link: "/luxury-service/pricing/boat-cruise"
    },
    {
        bg: c3,
        title: "Chauffeur-Driven Services",
        other: "Get the ultimate VIP experience with our Concierge Weekends service. Whether you’re looking to relax or explore",
        link: "/luxury-service/pricing/chauffeur-driven"
    },
    {
        bg: c1,
        title: "Exclusive Events",
        other: "We offer an exceptional and unforgettable experiences to our highly-esteemed clients. From specially curated",
        link: "/luxury-service/exclusive-event",
    },
    {
        bg: c2,
        title: "Helicopter Rides",
        other: "Soar above the world with our Helicopter Rides. Whether you’re looking for a scenic tour, a corporate event, or ",
        // link: "/luxury-service/helicopter-ride",
        comingSoon: true
    },
    {
        bg: c5,
        title: "Concierge Vacations",
        other: "Leave the planning to us and let us create the ultimate customized vacation experience. Our Concierge Read More",
        // link: "/luxury-service/concierge-vacation",
        comingSoon: true
    },
];

const LuxuryServiceListing = () => {
    const navigate = useNavigate();
    const [showLess, setShowLess] = useState(true);
    const [step, setStep] = useState(false);

    const toggleText = () => {
        setStep(true);
        setShowLess(prevState => !prevState);
    }

    return (
        <>
            <LuxuryServiceNavbar active={0} />
            <Categories margin='-8em 0em 3em 0em' gap='1em' flexWrap='wrap' z='100'>
                {categories.map((category, index) => {
                    return (
                        <Category
                            onClick={() => {
                                navigate(category?.link);
                            }}
                            bg={category.bg}
                            key={index}
                            className='hover:text-black hover:bg-[#E98C00]'
                            flex='1 0 30%'
                        >
                            <div className="text-white flex flex-col p-2 md:px-5 font-semibold md:text-lg text-sm mb-4 h-full justify-center md:justify-end">
                                <div className="flex items-center text-[15px] justify-between">
                                    {category.title}{" "}
                                    <IoMdArrowForward size={30} color='black' className="bg-theme-color rounded-full p-2 w-8 h-8" onClick={() => navigate(category.link)} />
                                </div>

                                {
                                    category.comingSoon ? <p className="md:text-[#A6A6A6] text-white md:text-[14px] text-[14px]">Coming Soon</p> : <p onClick={toggleText} className="md:text-[#A6A6A6] text-white md:text-[14px] text-[14px]">
                                        {showLess ? category.other.substring(0, 80).concat("....", "ReadMore") : category.other}
                                    </p>
                                }

                            </div>
                        </Category>
                    );
                })}
            </Categories>
            <Footer />
        </>

    );
}

export default LuxuryServiceListing;