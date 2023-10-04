import BlackOverlay from '@/AtomicComponents/BlackOverlay'
import Footer from '@/AtomicComponents/Footer'
import Nav from '@/AtomicComponents/Nav'
import { getAListing } from '@/services/request'
import { LocationMarker } from 'heroicons-react'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import TimeAgo from 'react-timeago'

const EachProperty = () => {
    const features = [
        "Balcony", "Air Conditioning", "Jacuzzi"
    ]

    const router = useRouter()
    const {id} = router.query

    const [listing, setListing] = useState()
    
    const fetchData = async (id)=>{
        let data = await getAListing(id)
        console.log(data);
        setListing(data)
    }

    useEffect(()=>{
        if(id){
            fetchData(id);
        }
    }, [id])

    const formatDesc = (text)=>{
        const itemsArray = text.split('- [ ] ');
        return itemsArray
    }
//
    return (
    <>
        <Nav />
            {
                listing && 
                <div className='mt-32 mx-xPadding text-center'>
                <div className='mt-32 mx-xPadding'>
                    <h2 className='font-[600] text-[1.5em]'>{listing.title}</h2>
                    <p className='font-[600]'>₦ {listing.price}</p>
                    <p className='flex text-center justify-center'><LocationMarker />{listing.location.replace(/#/g, " , ")}.</p>
                </div>
    
                <div className='mt-10 gap-3 grid'>
                    <img src={listing.images[0]} alt="" className='h-[400px] rounded-lg'/>
    
                    <div className="grid grid-cols-3 gap-3">
                        <img src={listing.images[1]} alt="" className='h-[200px] rounded-lg'/>
                        <img src={listing.images[2]} alt="" className='h-[200px] rounded-lg'/>
                        <div className='relative cursor-pointer'>
                            <img src={listing.images[3]} alt="" className='h-[200px] rounded-lg'/>
                            <BlackOverlay height='200px' r="rounded-lg"/>
                            <p className='absolute h-[200px] top-0 flex justify-center text-[3.7em] items-center text-white font-[500] text-center w-[100%]'>+{listing.images.length - 4}</p>
                        </div>
                        
                    </div>
    
                    <div>
                        <p>
                            List <TimeAgo date={listing.createdAt}/>
                        </p>
    
                        <button className='bg-primary1 text-black px-12 py-3 text-[0.8em] font-[600] rounded-md'>
                            View Media
                        </button>
                    </div>
    
                </div>
    
                <div className="details flex flex-col items-start my-10">
                    <p className='font-[700] text-[1.2em]'>Amenties</p>
                    {
                        listing.features.map((item, i)=> {
                            return (
                                <p className='text-gray-700'>{item}</p>
                            )
                        })
                    }
                </div>
    
                <div className="grid grid-cols-2 gap-6 my-10 items-start justify-start sm:grid-cols-1">
                    <div className='items-start flex flex-col'>
                        <p className='font-[700] text-[1.2em]'>Description</p>
                        <p className='flex flex-col items-start'>
                            {
                                formatDesc(listing.description).map((item, i)=> {
                                    return (
                                        <p className='text-gray-700'>{item}</p>
                                    )
                                })
                            }
                        </p>
                    </div>
    
                    <div className='flex items-start flex-col text-start'>
                        <p className='font-[700] text-[1.2em]'>Contact Seller</p>
    
                        <div className='bg-primary1 grid grid-cols-2 sm:flex sm:flex-col-reverse gap-5 p-10 items-center rounded-xl'>
                            <div className='flex items-start flex-col text-start text-white gap-2'>
                                <p className='font-[600]'>{listing.postedBy.firstName + " "+ listing.postedBy.lastName}</p>
                                <p className='text-[0.8em]'>
                                    {listing.postedBy.address}
                                </p>
                                <p>
                                    Joined 2023
                                </p>
    
                                <div className='flex  gap-3 w-full text-[0.8em]'>
                                    <a href={`https://wa.me/${"+234" + listing.postedBy.phoneNumber1}?text=Hi%20${listing.postedBy.firstName}`}>
                                        <button className='py-2 px-3 bg-black rounded-md'>
                                            Send Message
                                        </button>
                                    </a>
                                    
    
                                    <button className='py-2 px-3 bg-black rounded-md'>
                                        View
                                    </button>
                                </div>
                            </div>
                            
    
                            <img src={listing.postedBy.profilePicture} alt="" className='h-[160px] rounded-tl-3xl rounded-br-3xl border-2 border-white' />
                        </div>
                    </div>
                </div>
            </div>
            }
        <Footer />
    </>
  )
}

export default EachProperty