import Card from '@/AtomicComponents/Card'
import Line from '@/AtomicComponents/Line'
import Nav from '@/AtomicComponents/Nav'
import React, { useEffect, useState } from 'react'
import { RiPencilFill } from 'react-icons/ri'
import TimeAgo from "react-timeago"

const Profile = () => {
    let [user, setUser] = useState()

    useEffect(()=>{
        let data = JSON.parse(localStorage.getItem("user"))
        setUser(data)
    }, [])
  return (
    <>
        {
            user &&
            <div>
        <Nav active={10}/>
        <div className="cover h-[40vh]">
            <img src={user.cover} alt="" />
        </div>

        <div className="mx-xPadding my-10">
            <div className="profile flex gap-6 items-center">
                <img src={user.profilePicture} alt="" className='avatar w-24 h-24'/>

                <div className="flex flex-col">
                    <h3 className='font-[600] text-[1.2em]'>{user.firstName + " " + user.lastName}</h3>
                    <p className='text-[0.8em]'>Joined in <TimeAgo date={user.createdAt}/> </p>
                </div>

                <a href="/profile/edit">
                     <button className='flex gap-1 items-center bg-gray-300 py-3 px-5 rounded-md text-[0.8em]'>
                        <RiPencilFill />
                        Edit Profile
                    </button>
                </a>
               
            </div>

           <div className='my-3'>
                <p>{user.bio}</p>
                <p>Email: <span className='pryOutline font-[700]'>{user.email}</span></p>
           </div>

           <Line />

           <div className="saved my-10">
                <div>
                    <h3 className='text-[1.5em] font-[600]'>3 of 20 Saved Listings</h3>
                    <p className='text-red-500 text-[0.8em]'>Note: You cannot save more than 20 Listings</p>
                </div>

                {/* <div className="listings-container my-10">
                    <Card />
                    <Card />
                    <Card />
                </div> */}
           </div>
        </div>
    </div>
        }
    </>
  )
}

export default Profile