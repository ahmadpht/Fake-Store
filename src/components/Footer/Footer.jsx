const Footer = () => {
  return (
    <div className='py-4 bg-black text-white text-xl'>
      <p className="text-center">Contact Us:</p>
      <div className="flex justify-around items-center text-4xl p-8">
        <span className="fa-brands fa-linkedin hover:text-sky-500 hover:bg-white cursor-pointer w-14 h-14 rounded-full flex items-center justify-center transition duration-500 ease-in-out"></span>
        <span className="fa-brands fa-github hover:text-sky-500 hover:bg-white cursor-pointer w-14 h-14 rounded-full flex items-center justify-center  transition duration-500 ease-in-out"></span>
      </div>
    </div>
  )
}

export default Footer
