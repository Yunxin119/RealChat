import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import useSignup from '../hooks/useSignup'
// import { sign } from 'jsonwebtoken'

const SignUp = () => {
    const [nickname, setNickname] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [comfirmPassword, setComfirmPassword] = useState('')
    const [gender, setGender] = useState('')

    const {loading ,signup} = useSignup()

    const submitHandler = async (e) => {
        e.preventDefault()
        // console.log(nickname, username, password, comfirmPassword, gender)
        await signup({nickname, username, password, comfirmPassword, gender})
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
                    <input 
                        type="text" 
                        placeholder="Choose your hero name" 
                        class="input input-bordered w-full max-w-xs h-10 bg-opacity-80" 
                        value = {nickname}
                        onChange={(e) => setNickname(e.target.value)}
                    />

                    {/* Username */}
                    <label className='label p-2'>
                        <span className=' text-base label-text'>Username</span>
                    </label>
                    <input 
                        type="text" 
                        placeholder="Pick an username" 
                        class="input input-bordered w-full max-w-xs h-10 bg-opacity-80" 
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    {/* Password */}
                    <label className='label p-2'>
                        <span className=' text-base label-text'>Password</span>
                    </label>
                    <input 
                        type="password" 
                        placeholder="Choose a secret code" 
                        class="input input-bordered w-full max-w-xs h-10 bg-opacity-80" 
                        value={password}
                        onChange = {(e) => setPassword(e.target.value)}
                    />
                    {/* Comfirm Password */}
                    <label className='label p-2'>
                        <span className=' text-base label-text'>Comfirm Password</span>
                    </label>
                    <input 
                        type="password" 
                        placeholder="Type it again to be sure" 
                        class="input input-bordered w-full max-w-xs h-10 bg-opacity-80"
                        value={comfirmPassword}
                        onChange = {(e) => setComfirmPassword(e.target.value)} 
                    />
                    {/* Gender */}
                    <div className='flex justify-center mt-3'>
                        <div className='form-control mr-5'>
                            <label className="label gap-2 cursor-pointer">
                                <span className='label-text'>Male</span>
                                <input 
                                    type='radio' 
                                    name='gender' 
                                    value='male'
                                    className='radio border-slate-800'
                                    checked={gender === 'male'}
                                    onChange={(e) => setGender(e.target.value)}
                                />
                            </label>
                        </div>
                        <div className='form-control mr-5 ml-5'>
                            <label className="label gap-2 cursor-pointer">
                                <span className='label-text'>Female</span>
                                <input 
                                    type='radio' 
                                    name='gender' 
                                    value='female'
                                    className='radio border-slate-800' 
                                    checked={gender === 'female'}
                                    onChange={(e) => setGender(e.target.value)}
                                />
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
