
import {useState} from 'react'
import { toast } from 'react-toastify'
import { useAuth } from '../context/AuthContext'

const useSignup = () => {
    const [loading, setLoading] = useState(false)
    const { setAuthUser } = useAuth()

    const signup = async ({nickname, username, password, comfirmPassword, gender}) => {
        // some validation
        if (!nickname || !username || !password || !comfirmPassword || !gender) {
            toast.error('Please fill all fields')
            return
        }
        if (comfirmPassword !== password) {
            toast.error('Passwords do not match')
            return
        }
        if (password.length < 8) {
            toast.error('Password must be at least 8 characters')
            return
        }

        setLoading(true)
        try {
            // this is to send a request to the server
            const res = await fetch('/api/users/auth/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                }, 
                body: JSON.stringify({nickname, username, password, comfirmPassword, gender}) // this is to convert the object to a string
            })
            // this is to get the response from the server
            const data = await res.json()
            if (data.error) {
                toast.error(data.error)
                throw new Error(data.error)
            }
            // localstorage
            localStorage.setItem('userInfo', JSON.stringify(data))
            // after signup, the user will be logged in and we set the user information in the AuthContext
            // we will be redirected to the home page
            setAuthUser(data)
        } catch (error) {
            toast.error(error.response.data.message)
        } finally {
            setLoading(false)
        }
        
    }



  return { loading, signup };
}

export default useSignup
