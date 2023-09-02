import DynamicBanner from '@/AtomicComponents/DynamicBanner'
import Footer from '@/AtomicComponents/Footer'
import Nav from '@/AtomicComponents/Nav'
import PreFooter from '@/AtomicComponents/PreFooter'
import React from 'react'
import Categories from './Categories'

const LandingPage = () => {
  return (
    <div>
        <Nav />
        <DynamicBanner />
        <Categories />

        {/* <PreFooter /> */}
        <Footer />
    </div>
  )
}

export default LandingPage