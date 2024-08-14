
import {useState} from 'react'
import { toast } from 'react-toastify'

const useSignup = () => {
    const [loading, setLoading] = useState(false)

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
            console.log(data)
        } catch (error) {
            toast.error(error.response.data.message)
        } finally {
            setLoading(false)
        }
        
    }



  return { loading, signup };
}

export default useSignup
