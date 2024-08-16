import { get } from 'mongoose'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { toast } from 'react-toastify'

const useGetSidebar = () => {
    const [loading, setLoading] = useState(false)
    const [sidebar, setSidebar] = useState([])

    useEffect(() => {
        const getSidebar = async () => {
            setLoading(true)
            try {
                const res = await fetch('/api/users')
                const data = await res.json()
                if (data.error) {
                    toast.error(data.error)
                    throw new Error(data.error)
                }
                setSidebar(data)
            } catch (error) {
                toast.error(error.message)
            } finally {
                setLoading(false)
            }
        }

        getSidebar()
    }, [])
  return { loading, sidebar };
}

export default useGetSidebar
