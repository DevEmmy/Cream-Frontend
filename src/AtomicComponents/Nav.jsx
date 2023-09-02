import Link from 'next/link'
import React, { useState } from 'react'
import { RiBellFill, RiBook2Fill, RiContactsFill, RiInformationFill, RiLogoutBoxFill, RiMenu2Fill, RiMessage2Fill, RiUser2Fill, RiWallet2Fill } from "react-icons/ri"
import { HiUserGroup, HiX } from "react-icons/hi"
import Line from './Line'

const Nav = ({active = 0}) => {

    const [showSideNav, setShowSideNav] = useState(false)

    const nav = [
        {
            name: "HOME",
            link: "/",
            icon: null,
        },
        {
            name: "REAL ESTATE",
            link: "/real-estate",
            icon: null,
        },
        {
            name: "AUTOMOBILE",
            link: "/automobile",
            icon: null
        },
        {
            name: 'ABOUT',
            link: "/about",
            icon: null,
        },
        {
            name: "CONTACT US",
            link: "/contact-us",
            icon: null
        }
    ]

    const sideNav = [
        {
            name: "Profile",
            icon: <RiUser2Fill />,
            link: "/profile"
        },
        {
            name: "Messages",
            icon: <RiMessage2Fill />,
            link: "/messages"
        },
        {
            name: "Notifications",
            icon: <RiBellFill />,
            link: "/notifications"
        },
        {
            name: "My Account",
            icon: <RiWallet2Fill />,
            link: "/wallet"
        }
    ]

    const otherNav = [
        {
            name: "Help & FAQ",
            icon: <RiInformationFill />,
            link: "/"
        },
        {
            name: "About",
            icon: <RiBook2Fill />,
            link: "/about"
        },
        {
            name: "Contact Us",
            icon: <RiContactsFill />,
            link: "/contact-us"
        }
    ]
  return (
    <div className='bg-black text-white flex justify-between py-3 px-xPadding items-center fixed top-0 left-0 right-0 z-40'>
        <div>
            Cream
        </div>

        <div className='flex font-[700] gap-5'>
            {
            nav.map((item, i)=>{
                return(
                    <Link href={item.link} key={i} className={`text-[0.8em] hover:text-primary1 ${active === i && "text-primary1 border-primary1"}`}>
                        {item.name}
                    </Link>
                )
            })
        }
        </div>

        <div className='flex gap-8 items-center'>
            <Link href={"/login"}>
                <button className='bg-primary1 px-6 py-3 text-[0.8em] rounded-md text-black font-[600]'>
                LOG IN
            </button>
            </Link>
            

            <RiMenu2Fill color='white' size={24} className='cursor-pointer' onClick={()=> setShowSideNav(true)}/>
        </div>

        <div className={`fixed w-[15%] top-0  bg-white h-full ${showSideNav? "right-0" : "-right-[20%]"} transition-all ease-linear text-black p-5 border-l-gray-300 border`}>
            <div className='flex justify-between items-center'>
                <p className='font-[600]'>Welcome</p>
                <HiX size={24} onClick={()=> setShowSideNav(false)} className='cursor-pointer'/>
            </div>

            <Line />
            <div className='my-5 flex flex-col gap-4'>
                            <Link href={"/"} className='flex items-center gap-3'>
                                <HiUserGroup />
                                <p>Sell</p>
                            </Link>
                {
                    sideNav.map((item, i)=>{
                        return(
                            <Link href={item.link} key={i} className='flex items-center gap-3'>
                                {item.icon}
                                <p>{item.name}</p>
                            </Link>
                        )
                    })
                }
            </div>

            <Line />

            <div className='my-5 flex flex-col gap-4'>
                {
                    otherNav.map((item, i)=>{
                        return(
                            <Link href={item.link} key={i} className='flex items-center gap-3'>
                                {item.icon}
                                <p>{item.name}</p>
                            </Link>
                        )
                    })
                }

                            <Link href={"/login"} className='flex items-center gap-3'>
                                <RiLogoutBoxFill />
                                <p>Log Out</p>
                            </Link>
            </div>
        </div>
        
    </div>
  )
}

export default Nav