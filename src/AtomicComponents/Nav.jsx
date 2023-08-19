import Link from 'next/link'
import React from 'react'
import { RiMenu2Fill } from "react-icons/ri"

const Nav = ({active = 0}) => {

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
            <button className='bg-primary1 px-6 py-3 text-[0.8em] rounded-md text-black font-[600]'>
                LOG IN
            </button>

            <RiMenu2Fill color='white' size={26} className='cursor-pointer'/>
        </div>
        
    </div>
  )
}

export default Nav