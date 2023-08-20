import Link from 'next/link'
import React from 'react'

const Login = () => {
  return (
    <div className='bg-slate-700 w-full h-[100vh] flex flex-col items-center justify-center'>
        <div className="container bg-white w-[40%] h-[70vh] p-10 text-center">
            <h2 className='text-[2em] font-[700]'>CREAM</h2>
            <p>Welcome Back, We missed you!</p>

            <form action="" className='flex gap-5 flex-col'>
                <input type="text" placeholder='johndoe@gmail.com' className='w-full'/>
                <input type="text" placeholder='**** ' className='w-full'/>
                
                <p className='text-start'>Forgotten Password? <Link href={"/forgot-password"} className='text-primary1 font-[700]'>Click Here</Link> </p>
            </form>

            <button className='bg-primary1 w-full py-3 text-black rounded-md my-3'>
                Login
            </button>

            <p>Don't have an account? <Link href={"/register"} className='text-primary1 font-[700]'>Register</Link> </p>
        </div>

    </div>
  )
}

export default Login