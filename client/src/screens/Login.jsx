import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import useLogin from '../hooks/useLogin'

const Login = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const { loading, login } = useLogin()

    const submitHandler = async (e) => {
        e.preventDefault()
        await login({username, password})
    }

  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
        <div className='bg-gray-450 w-full p-6 rounded-md shadow-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
            {/* Title */}
            <h1 className='text-3xl font-bold text-center text-gray-300'>
                Login
                <span className='text-blue-400'> RealChat</span>    
            </h1>
            {/* Form */}
            <form className='p-2'>
                {/* Username */}
                <label className='label p-2'>
                    <span className=' text-base label-text'>Username</span>
                </label>
                <input type="text" 
                    placeholder="Who goes there?" 
                    class="input input-bordered w-full max-w-xs h-10 bg-opacity-80"
                    value={username}
                    onChange = {(e) => setUsername(e.target.value)}
                />
                {/* Password */}
                <label className='label p-2'>
                    <span className=' text-base label-text'>Password</span>
                </label>
                <input 
                    type="password" 
                    placeholder="Shh... it’s a secret" 
                    class="input input-bordered w-full max-w-xs h-10 bg-opacity-80" 
                    value={password}
                    onChange={(e)=> setPassword(e.target.value)}
                />
                {/* No Account? */}
                <div className='p-2 items-center justify-center'>
                    New here?
                     <Link to = {'/signup'} className='hover:text-sky-500'> Let's get you started! </Link>
                </div>
                {/* Log In Button */}
                <button 
                    type="submit" 
                    className="btn glass btn-block mt-2"
                    onClick={submitHandler}
                >
                    Login
                </button>
            </form>
        </div>

    </div>
  )
}

export default Login
