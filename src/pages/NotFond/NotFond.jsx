import { Link } from 'react-router-dom'

const NotFond = () => {

  const error = 'sorry! the page not found :('
  
  return (
    <div className='size-screen flex justify-center items-center flex-col bg-orange-200 py-8'>
          <h1 className='text-9xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-blue-700 mt-32'>404</h1>
          <p className='text-6xl m-8 p-px'>{error}</p>
          <Link to={'/'}>
            <button className='bg-gradient-to-r from-green-400 to-blue-500 hover:from-red-500 hover:to-yellow-400 px-16 py-4 rounded-xl mb-32 mt-8 text-2xl text-white active:scale-95'>Back</button>
          </Link>
      </div>
  )
}

export default NotFond
