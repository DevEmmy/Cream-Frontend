import DynamicBanner from '@/AtomicComponents/DynamicBanner'
import Footer from '@/AtomicComponents/Footer'
import Nav from '@/AtomicComponents/Nav'
import PreFooter from '@/AtomicComponents/PreFooter'
import React from 'react'

const LandingPage = () => {
  return (
    <div>
        <Nav />
        <DynamicBanner />
        
        <PreFooter />
        <Footer />
    </div>
  )
}

export default LandingPage