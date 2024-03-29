import axios from 'axios'
import { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { createApp } from '../../App'

// const [searchInput , setSearchInput] = useState('')
// const [item, setItem] = useState([])
// useEffect(() => {
//     axios.get(`https://fakestoreapi.com/products/`)
//     .then(res => setItem(res.data))
//     .then(handleAPI(item))
// },[])

// const handleAPI = (data) => {
//   item && data.map((product) => (
//     product.category === searchInput
//     ?  console.log(product)
//     : null
//   ))
// }

const Search = () => {

  const {search, setSearch} = useContext(createApp);
  const handleClick = e => {
    setSearch('');
    e.preventDefault();
  }

  return (
      <form onSubmit={handleClick} className='mr-12 w-1/2 flex justify-end'>
            <input
              type="text" 
              // required 
              placeholder="searchInput..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className='w-1/2 h-12 px-4 rounded-s-xl b-none outline-none text-2xl'
              />
            <button
              className='w-1/12 bg-blue-200 h-full text-2xl rounded-e-xl text-cyan-800'
              onClick={handleClick}>
              <i className=" fa-solid fa-magnifying-glass"></i>
              </button>
          </form>
  )
}

export default Search
