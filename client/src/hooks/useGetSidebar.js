import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'

const useGetSidebar = () => {
    const [loading, setLoading] = useState(false)
    const [sidebar, setSidebar] = useState([])

    useEffect(() => {
        const getSidebar = async () => {
            setLoading(true)
            try {
                const res = await fetch('/api/users')
                if (!res.ok) {
                    throw new Error('Failed to fetch users')
                }
                const data = await res.json()

                if (data.error) {
                    toast.error(data.error)
                    throw new Error(data.error)
                }

                // Check if the returned data is an array
                if (Array.isArray(data)) {
                    setSidebar(data)
                } else {
                    throw new Error('Unexpected data format')
                }
            } catch (error) {
                toast.error(error.message)
            } finally {
                setLoading(false)
            }
        }

        getSidebar()
    }, [])

    return { loading, sidebar }
}

export default useGetSidebar
