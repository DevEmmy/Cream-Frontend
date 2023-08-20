import React from 'react'

const Line = ({size}) => {
  return (
    <div className={`${size ? `w-[${size}]` : "w-full"} bg-gray-300 h-[1px] my-3`}/>
  )
}

export default Line