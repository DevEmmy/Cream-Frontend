import Card from '@/AtomicComponents/Card'
import DynamicBanner from '@/AtomicComponents/DynamicBanner'
import Footer from '@/AtomicComponents/Footer'
import Nav from '@/AtomicComponents/Nav'
import { getAllListings } from '@/services/request'
import React, { useEffect, useState } from 'react'
import { RiEqualizerFill, RiSearch2Line } from 'react-icons/ri'

const Automobile = () => {
  const [listings, setListings] = useState(null);

    const fetchData = async ()=>{
        let data = await getAllListings()
        console.log(data)
        setListings(data)
    }

    useEffect(()=>{
        fetchData()
    }, [])
  return (
    <>
    <Nav active={2} />

    <DynamicBanner>
         <h1 className='text-white text-[4em] font-[700]'>AUTOMOBILE <span className='text-primary1'>.</span></h1>
        <p className='text-white font-[600]'>find new and preowned cars for sale</p>

        <div className="flex gap-3 items-center">
                <div className='flex gap-3 py-3 px-5 rounded-lg w-[40VW] items-center my-3 bg-white text-black'>
                    <RiSearch2Line />
                    <input type="text" className='focus:outline-0 w-full' placeholder='Describe your desired property, automobile or resource in plain words and watch our AI do its magic.'/>
                </div>

                <button className='bg-primary1 text-black px-6 py-3  gap-2 flex items-center rounded-md'>Search <RiSearch2Line /> </button>
            </div>
        
    </DynamicBanner>

    <div className="list-container my-20 mx-xPadding">
        <h3 className='text-center my-10 text[1.5em] font-[600]'>Explore Luxury Automobiles</h3>

        <div className='grid grid-cols-3 gap-10'>
                {
                  listings?.map((item, i)=>{
                    return(
                      <Card key={i} listing={item}/>
                    )
                })
                }
        </div>
    </div>

    <Footer />
</>
  )
}

export default Automobile