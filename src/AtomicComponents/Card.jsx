import Link from 'next/link'
import React, { useState } from 'react'
import { HiLocationMarker } from 'react-icons/hi'
import { RiHeart2Fill, RiHeart2Line } from 'react-icons/ri'

const Card = ({
    cover = "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202306/g_400d_amg_line-sixteen_nine.jpg?VersionId=9tUvjgJDJSTnGKiRL16x7dc5sCnQsiCd&size=690:388",
 postedBy={
    profilePicture: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSyjzcbCX6Hxz0CY2ze6N71kN6kioXT4PEgWzLFLUaGxSGLB8ggDP0-ceLft_5SRuadec&usqp=CAU",
    name: "Ridwan Ogundipe"
 }, 
 title = "Mercedes-Benz S580 4Matic", 
 price = "90,000,000", 
 location = "Lagos, Nigeria", 
 _id}) => {

    const [like,setLike] = useState(false)
  return (
    <div className='border border-gray-300 p-3 rounded-lg'>
        <div className='flex gap-2 items-center'>
            <img src={postedBy.profilePicture} alt="" className='w-14 h-14 rounded-[50%]'/>
            <p className='font-[600]'>{postedBy.name}</p>
        </div>
        <div className='relative'>
            <img src={cover} alt="" className='w-full h-[200px] rounded-tl-3xl rounded-br-3xl my-3'/>

            <div className="absolute text-white bg-[rgb(200,200,200)] top-[20px] left-[20px] w-6 h-6 flex items-center justify-center rounded-[50%] cursor-pointer" onClick={()=> setLike(!like)}>
                {
                    like ? <RiHeart2Fill className='text-primary1'/> :<RiHeart2Line />
                }
            </div>
        </div>
        
        <p>{title}</p>
        <p className='text-[0.8em]'>₦{price}</p>
        <p className='text-[0.8em] flex items-center'><HiLocationMarker /> {location}</p>  

        <Link href={"/"}>
            <button className='bg-primary1 py-3 px-10 rounded-md font-[600] mt-3 text-[0.8em]'>
                Enquire Now
            </button>
        </Link>
    </div>
  )
}

export default Card