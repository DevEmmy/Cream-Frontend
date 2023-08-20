import Link from 'next/link'
import React from 'react'

const Register = () => {
  return (
    <div className='bg-slate-700 w-full h-[100vh] flex flex-col items-center justify-center'>
        <div className="container bg-white w-[40%] h-[auto] p-10 text-center">
            <h2 className='text-[2em] font-[700]'>CREAM</h2>
            <p>Welcome to CREAM!</p>

            <form action="" className='flex gap-5 flex-col my-3'>
                <input type="text" placeholder='Your first name e.g John' className='w-full'/>
                <input type="text" placeholder='Your last name e.g Doe' className='w-full'/>
                <input type="text" placeholder='Your email e.g johndoe@gmail.com' className='w-full'/>
                <input type="text" placeholder='**** ' className='w-full'/>
            </form>

            <button className='bg-primary1 w-full py-3 text-black rounded-md my-3'>
                Register
            </button>

            <p>Already Have an Account? <Link href={"/login"} className='text-primary1 font-[700]'>Login</Link> </p>
        </div>

    </div>
  )
}

export default Register