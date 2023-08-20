import Footer from '@/AtomicComponents/Footer'
import Nav from '@/AtomicComponents/Nav'
import React from 'react'
import { RiSearch2Fill, RiSearch2Line } from 'react-icons/ri'

const AiRecommender = () => {
  return (
    <>
        <Nav active={3} />

        <div className="ai flex flex-col items-center justify-center my-20">
            <h1 className='text-[2em] font-[700]'>Ask for what <span className="pryOutline">Real Estate</span> or <span className="pryOutline">Automobile</span> you need.</h1>
            <p>You can ask our AI recommmender system for whatever product you need</p>

            <div className='flex gap-3 border-2 border-gray-300 py-3 px-5 rounded-lg w-[60%] items-center'>
                <RiSearch2Line />
                <input type="text" className='focus:outline-0'/>
            </div>
        </div>

        <Footer />
    </>
  )
}

export default AiRecommender