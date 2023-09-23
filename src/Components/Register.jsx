import { register } from '@/services/request'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useState } from 'react'

const Register = () => {

  const router = useRouter()
  
  const [details, setDetails] = useState({
    firstName: "",
    lastName:"",
    email: "",
    phoneNumber: "",
    password: ""
  })

  const handleChange = (e)=>{
    setDetails({...details, [e.target.name]: e.target.value}) 
}

const submitForm = async (e)=>{
  e.preventDefault()
  await register(details, router);
}
  return (
    <div className='bg-slate-700 w-full h-[100vh] flex flex-col items-center justify-center'>
        <div className=" bg-white w-[40%] h-[auto] p-10 text-center">
            <h2 className='text-[2em] font-[700]'>CREAM</h2>
            <p>Welcome to CREAM!</p>

            <form action="" className='flex gap-5 flex-col my-3'>
                <input type="text" placeholder='Your first name e.g John' className='w-full text-[0.8em] p-3' name='firstName' onChange={handleChange} value={details["firstName"]}/>
                <input type="text" placeholder='Your last name e.g Doe' className='w-full text-[0.8em] p-3' name='lastName' onChange={handleChange} value={details.lastName}/>
                <input type="email" placeholder='Your email e.g johndoe@gmail.com' className='w-full text-[0.8em] p-3' name='email' onChange={handleChange} value={details.email}/>
                <input type="tel" placeholder='090xxx' className='w-full text-[0.8em] p-3' name='phoneNumber' onChange={handleChange} value={details.phoneNumber}/>
                <input type="text" placeholder='**** ' className='w-full text-[0.8em] p-3' name='password' onChange={handleChange} value={details.password}/>
            </form>

            <button className='bg-primary1 w-full py-3 text-black rounded-md my-3' onClick={submitForm}>
                Register
            </button>

            <p>Already Have an Account? <Link href={"/login"} className='text-primary1 font-[500]'>Login</Link> </p>
        </div>

    </div>
  )
}

export default Register