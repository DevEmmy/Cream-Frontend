import React from 'react'

const BlackOverlay = ({opacity = '0.6', width, height ="100vh", r}) => {
  return (
    <div className={`w-full h-[${height}] absolute ${r} top-0 left-0 right-0 bg-[rgba(0,0,0,0.6)]`}/>
  )
}

export default BlackOverlay