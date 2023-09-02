import BlackOverlay from '@/AtomicComponents/BlackOverlay'
import Footer from '@/AtomicComponents/Footer'
import Nav from '@/AtomicComponents/Nav'
import { LocationMarker } from 'heroicons-react'
import React from 'react'

const EachProperty = () => {
  return (
    <>
        <Nav />

        <div className='mt-32 mx-xPadding text-center'>
            <div className='mt-32 mx-xPadding'>
                <h2 className='font-[600] text-[1.5em]'>EXQUISITELY FINISHED 5 BEDROOM DETACHED DUPLEX.</h2>
                <p className='font-[600]'>₦ 160,000,000</p>
                <p className='flex text-center justify-center'><LocationMarker /> Lagos, Lagos, Nigeria</p>
            </div>

            <div className='mt-10 gap-3 grid'>
                <img src="/i1.jpg" alt="" className='h-[400px] rounded-lg'/>

                <div className="grid grid-cols-3 gap-3">
                    <img src="/i1.jpg" alt="" className='h-[200px] rounded-lg'/>
                    <img src="/i2.jpg" alt="" className='h-[200px] rounded-lg'/>
                    <div className='relative cursor-pointer'>
                        <img src="/i3.jpg" alt="" className='h-[200px] rounded-lg'/>
                        <BlackOverlay height='200px' r="rounded-lg"/>
                        <p className='absolute h-[200px] top-0 flex justify-center text-[3.7em] items-center text-white font-[500] text-center w-[100%]'>+3</p>
                    </div>
                    
                </div>

                <div>
                    <p>
                        List 4 Months Ago.
                    </p>

                    <button className='bg-primary1 text-black px-12 py-3 text-[0.8em] font-[600] rounded-md'>
                        View Media
                    </button>
                </div>

            </div>

            
        </div>

        

        <Footer />
    </>
  )
}

export default EachProperty