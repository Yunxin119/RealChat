import { useState } from "react"
import { useAuth } from "../context/AuthContext"
import { toast } from "react-toastify"

const useLogin = () => {
    const [loading, setLoading] = useState(false)
    const { setAuthUser } = useAuth()

    const login = async ({username, password}) => {
        if (!username || !password) {
            toast.error('Please fill all fields')
            return
        }

        setLoading(true)
        try {
            const res = await fetch('api/users/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({username, password})
            })
            const data = await res.json()
            if (data.error) {
                toast.error(data.error)
                throw new Error(data.error)
            }

            localStorage.setItem('userInfo', JSON.stringify(data))
            setAuthUser(data)

        } catch (error) {
            toast.error(error.response.data.message)
        } finally {
            setLoading(false)
        }
    }
    
  return { loading, login };
}

export default useLogin
