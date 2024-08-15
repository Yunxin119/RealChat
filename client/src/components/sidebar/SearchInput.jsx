import React from 'react'
import { useState } from 'react'

const SearchInput = () => {
  const [search, setSearch] = useState('')
  const handleSearch = (e) => {
    e.preventDefault()
    // search(search)
    console.log(search)
  }
  return (
    <form onSubmit={handleSearch} className='items-center gap-2 flex'>
        <input type="text" placeholder='Search...' className='input input-bordered rounded-full'
        value={search} onChange={(e) => setSearch(e.target)}
        />
        <button type='submit' className='btn btn-circle bg-sky-400 text-white'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
        </svg>
        </button>
        
    </form>
  )
}

export default SearchInput
