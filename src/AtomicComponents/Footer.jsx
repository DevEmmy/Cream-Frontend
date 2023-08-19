import Link from 'next/link'
import React from 'react'

const Footer = () => {

    const footerNav = [
        {
            title: "Cream",
            subItems: [
                {
                    name: "About",
                    link: "/about"
                },
                {
                    name: "Contact us",
                    link: "/contact-us"
                },
                {
                    name: "Terms & Condition",
                    link: "terms-and-condition"
                }
            ]
        },
        {
            title: "Categories",
            subItems: [
                {
                    name: "Real Estate",
                    link: "/real-estate"
                },
                {
                    name: "Automobile",
                    link: "/automobile"
                }
            ]
        },
        {
            title: "Business",
            subItems: [
                {
                    name: "Affiliate Marketing",
                    link: "/"
                },
                {
                    name: "List with us",
                    link: "/sign-up"
                }
            ]
        },
        {
            title: "Social Media",
            subItems: [
                {
                    name: "Instagram",
                    link: "/"
                },
                {
                    name: "Facebook",
                    link: "/"
                },
                {
                    name: "Twitter",
                    link: "/"
                },
                {
                    name: "LinkedIn",
                    link: "/"
                }
            ]
        }
    ]
  return (
    <div className='bg-black text-white text-[0.8em] grid grid-cols-4 py-20 px-xPadding justify-around text-[rgb(200,200,200)]'>
        {
            footerNav.map((nav, i)=>{
                return(
                    <div key={i} className='flex flex-col gap-3'>
                        <h3 className='text-[1.5em] font-[600]'>{nav.title}</h3>
                        {
                            nav.subItems.map((item, j)=>{
                                return(
                                    <Link href={item.link} className='text-[1.3em]'>
                                        {item.name}
                                    </Link>
                                )
                            })
                        }
                    </div>
                )
            })
        }
    </div>
  )
}

export default Footer