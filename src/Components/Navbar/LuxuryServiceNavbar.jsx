import React from 'react'
import { Header, UL, LI, LogoText, Brand, Login } from './Navbar.Style'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react';
import './Navbar.css'
import { MdMenu } from 'react-icons/md';
import { ImCross } from 'react-icons/im';
import kde_blackBg from "./Image/kde_whiteBg.png";

const LuxuryServiceNavbar = ({ bg, sticky, active }) => {

    const [activeNav, setActiveNav] = useState(false);

    const showMenu = () => {
        setActiveNav(!activeNav);
    }

    const navigate = useNavigate()

    const navOptions = [
        {
            no: 1,
            title: "All",
            link: "/luxury-service"
        },
        {
            no: 2,
            title: "Concierge Weekends",
            // link: "/luxury-service/concierge-vacation"
        },
        {
            no: 3,
            title: "Chauffeur Services",
            link: "/luxury-service/pricing"
        },
        {
            no: 4,
            title: "Boat Cruises",
            link: "/luxury-service/pricing"
        },
        {
            no: 5,
            title: "Concierge Vacations",
            link: "/luxury-service/pricing",
        },
        {
            no: 6,
            title: "Helicopter Rides",
            link: "/luxury-service/helicopter-ride",
        },
        {
            no: 7,
            title: "Pricing",
            link: "/luxury-service/pricing",
        },
    ]

    return (
        <>
            <Header justifyContent="space-around" z="0" paddingTop='1.5em' className='bg-cover' alignItems='flex-start' height="12em" bg={bg} sticky="static">
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
                    <div className="w-[40px] h-[auto]" onClick={() => navigate("/")}>
                        <img
                            src={kde_blackBg}
                            className="w-[100%] h-[100%] cursor-pointer"
                            alt="brandlogo"
                        />
                    </div>
                    <LogoText fontSize="1.5rem" onClick={() => navigate("/")}>Luxury Services</LogoText>

                    <div className='menu-icon'>
                        <MdMenu size={30} className='menu' onClick={showMenu} />
                    </div>
                </Brand>

                <div>
                    <UL>
                        {
                            navOptions.map((nav, i) => {
                                return (
                                    <LI key={i} onClick={() => navigate(nav.link)}>
                                        <div className={active === i && "item-active"}>
                                            {nav.title}
                                        </div>
                                    </LI>
                                )
                            })
                        }
                    </UL>
                </div>
            </Header>
        </>
    )
}

export default LuxuryServiceNavbar