import Card from '@/AtomicComponents/Card'
import Line from '@/AtomicComponents/Line'
import Nav from '@/AtomicComponents/Nav'
import React from 'react'
import { RiPencilFill } from 'react-icons/ri'

const Profile = () => {
  return (
    <div>
        <Nav active={10}/>
        <div className="cover h-[40vh]">
            <img src="/i1.jpg" alt="" />
        </div>

        <div className="mx-xPadding my-10">
            <div className="profile flex gap-6 items-center">
                <img src="/bg.jpg" alt="" className='avatar w-24 h-24'/>

                <div className="flex flex-col">
                    <h3 className='font-[600] text-[1.2em]'>Ileri OluwaKiiye</h3>
                    <p className='text-[0.8em]'>Joined in 2023</p>
                </div>

                <button className='flex gap-1 items-center bg-gray-300 py-3 px-5 rounded-md text-[0.8em]'>
                    <RiPencilFill />
                    Edit Profile
                </button>
            </div>

           <div className='my-3'>
                <p>Hey there! I am using CREAM.</p>
                <p>Email: <span className='pryOutline font-[700]'>eolaosebikan60@gmail.com</span></p>
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
  )
}

export default Profile