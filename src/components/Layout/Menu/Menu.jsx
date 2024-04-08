import { Link } from "react-router-dom"

const Menu = () => {
  return (
    <div className="flex items-center justify-start h-16 px-12 text-2xl border-b-2 bg-secondary">
      <div className="w-1/6 flex justify-evenly">
        <Link className=" hover:text-five hover:border-b hover:border-five w-44 text-center font-normal transition ease-in duration-300 pb-2 " to={'/'}>Home</Link>
        <span>/</span>
        <Link className=" hover:text-five hover:border-b hover:border-five w-44 text-center font-normal transition ease-in duration-300 pb-2 " to={'about'}>About</Link>
        <span>/</span>
        <Link className=" hover:text-five hover:border-b hover:border-five w-44 text-center font-normal transition ease-in duration-300 pb-2 " to={'card'}>Card</Link>
      </div>
    </div>
  )
}

export default Menu
