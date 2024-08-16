import React from 'react'
import { useState } from 'react'
import useGetSidebar from '../../hooks/useGetSidebar'
import { toast } from 'react-toastify'
import useConversation from '../../store/useConversation'
import { set } from 'mongoose'

const SearchInput = () => {
  const [search, setSearch] = useState('')
  const {sidebar} = useGetSidebar()
  const {setSelectedConversation} = useConversation()
  const handleSearch = (e) => {
    e.preventDefault()
    searchHandler(search)
  }

  const searchHandler = (search) => {
    if (!search) return
    const searchedUser = sidebar.find(user => user.nickname.toLowerCase().includes(search.toLowerCase()) || user.username.toLowerCase().includes(search.toLowerCase()))
    if (!searchedUser) {
      toast.error('User not found')
      return
    }
    setSelectedConversation(searchedUser)
    setSearch('')
  }

  return (
    <form onSubmit={handleSearch} className='items-center gap-2 flex'>
        <input type="text" placeholder='Search...' className='input input-bordered rounded-full'
        value={search} onChange={(e) => setSearch(e.target.value)}
        />
        <button type='submit' className='btn glass btn-circle'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
        </svg>
        </button>
        
    </form>
  )
}

export default SearchInput
