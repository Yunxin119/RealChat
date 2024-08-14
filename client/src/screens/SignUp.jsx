import React from 'react'
import { Link } from 'react-router-dom'

const SignUp = () => {
    
    const submitHandler = (e) => {
        e.preventDefault()
        console.log('Sign Up')
    }

    return (
        <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
            <div className='bg-gray-450 w-full p-6 rounded-md shadow-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
                {/* Title */}
                <h1 className='text-3xl font-bold text-center text-gray-300'>
                    Sign Up
                    <span className='text-blue-400'> RealChat</span>    
                </h1>
                {/* Form */}
                <form className='p-2'>
                    {/* Username */}
                        <label className='label p-2'>
                        <span className=' text-base label-text'>Nick Name</span>
                    </label>
                    <input type="text" placeholder="Choose your hero name" class="input input-bordered w-full max-w-xs h-10 bg-opacity-80" />

                    {/* Username */}
                    <label className='label p-2'>
                        <span className=' text-base label-text'>Username</span>
                    </label>
                    <input type="text" placeholder="Pick an username" class="input input-bordered w-full max-w-xs h-10 bg-opacity-80" />
                    {/* Password */}
                    <label className='label p-2'>
                        <span className=' text-base label-text'>Password</span>
                    </label>
                    <input type="password" placeholder="Choose a secret code" class="input input-bordered w-full max-w-xs h-10 bg-opacity-80" />
                    {/* Comfirm Password */}
                    <label className='label p-2'>
                        <span className=' text-base label-text'>Comfirm Password</span>
                    </label>
                    <input type="password" placeholder="Type it again to be sure" class="input input-bordered w-full max-w-xs h-10 bg-opacity-80" />
                    {/* Gender */}
                    <div className='flex justify-center mt-3'>
                        <div className='form-control mr-5'>
                            <label className="label gap-2 cursor-pointer">
                                <span className='label-text'>Male</span>
                                <input type='checkbox' className='checkbox border-slate-800' />
                            </label>
                        </div>
                        <div className='form-control mr-5 ml-5'>
                            <label className="label gap-2 cursor-pointer">
                                <span className='label-text'>Female</span>
                                <input type='checkbox' className='checkbox border-slate-800' />
                            </label>
                        </div>
                    </div>
                    {/* Already Have Account? */}
                    <div className='p-2 items-center justify-center text-sm'>
                         Already have an account? 
                         <Link to = {'/login'} className='hover:text-sky-500'> Login </Link>
                    </div>
                    {/* Log In Button */}
                    <button 
                        className="btn glass btn-block mt-2"
                        onClick={submitHandler}
                    >Sign Up</button>
                </form>
            </div>
    
        </div>
      )
    }

export default SignUp
