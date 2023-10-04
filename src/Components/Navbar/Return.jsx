import { ChevronLeft } from 'heroicons-react'
import React from 'react'
import { FaArrowLeft, FaChevronLeft } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import { ReturnContainer } from './Navbar.Style'
import { useRouter } from 'next/router'

const Return = ({transparent, link}) => {
    const navigate = useRouter()

  return (
    <ReturnContainer transparent={transparent}>
        <div className="icon" onClick={()=> {!link ? window.history.back() : navigate.push(link)}}>
            <ChevronLeft width={20} color={"black"}/>
        </div>
    </ReturnContainer>
  )
}

export default Return