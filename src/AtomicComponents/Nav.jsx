import Link from 'next/link'
import React, { useState } from 'react'
import { RiBellFill, RiMenu2Fill, RiMessage2Fill, RiUser2Fill, RiWallet2Fill } from "react-icons/ri"
import { HiX } from "react-icons/hi"

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
            name: "AI RECOMMENDER",
            link: "/ai-recommender",
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
  return (
    <div className='bg-black text-white flex justify-between py-3 px-xPadding items-center'>
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
            

            <RiMenu2Fill color='white' size={26} className='cursor-pointer' onClick={()=> setShowSideNav(true)}/>
        </div>

        <div className={`fixed w-[20%] top-0  bg-white h-full ${showSideNav? "right-0" : "-right-[20%]"} transition-all ease-linear text-black p-3`}>
            <div className='flex justify-between items-center'>
                <p className='font-[600]'>Welcome</p>
                <HiX size={24} onClick={()=> setShowSideNav(false)}/>
            </div>

            <div className='my-3 flex flex-col gap-4'>
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
        </div>
        
    </div>
  )
}

export default Nav