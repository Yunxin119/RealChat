import { useState } from 'react'
import { toast } from 'react-toastify'
import { useAuth } from '../context/AuthContext'

const useLogout = () => {
    const [loading ,setLoading] = useState(false)
    const { setAuthUser } = useAuth()
    const logout = async () => {
        setLoading(true)
        try {
            const res = await fetch('/api/users/auth/logout', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            const data = await res.json()
            if (data.error) {
                toast.error(data.error)
                throw new Error(data.error)
            }
            localStorage.removeItem('userInfo')
            setAuthUser(null)
        } catch (error) {
            toast.error(error.response.data.message)
        } finally {
            setLoading(false)
    }
}

  return { loading, logout };
}

export default useLogout
