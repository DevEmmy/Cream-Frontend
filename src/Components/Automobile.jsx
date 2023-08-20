import Card from '@/AtomicComponents/Card'
import DynamicBanner from '@/AtomicComponents/DynamicBanner'
import Footer from '@/AtomicComponents/Footer'
import Nav from '@/AtomicComponents/Nav'
import React from 'react'
import { RiEqualizerFill, RiSearch2Line } from 'react-icons/ri'

const Automobile = () => {
  return (
    <>
    <Nav active={2} />

    <DynamicBanner>
         <h1 className='text-white text-[4em] font-[700]'>LUXURY <span className='text-primary1'>AUTOMOBILE</span></h1>
        <p className='text-white font-[600]'>find new and preowned cars for sale</p>

        <div className="flex gap-3 items-center">
            <div className='flex gap-3 border-2 border-gray-300 py-3 px-5 rounded-lg w-[100%] items-center my-3 bg-white text-black'>
                <RiSearch2Line />
                <input type="text" className='focus:outline-0 w-full' placeholder='Search Based on Location'/>
            </div>

            <button className='bg-primary1 text-black px-12 py-4 flex items-center rounded-md'>Filter <RiEqualizerFill /> </button>
        </div>
        
    </DynamicBanner>

    <div className="list-container my-20 mx-xPadding">
        <h3 className='text-center my-10 text[1.5em] font-[600]'>Explore Luxury Automobiles</h3>

        <div className='grid grid-cols-3 gap-10'>
            <Card />
            <Card />
            <Card />
        </div>
    </div>

    <Footer />
</>
  )
}

export default Automobile