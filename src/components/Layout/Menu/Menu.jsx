import { Link } from "react-router-dom"

const Menu = () => {
  return (
    <div className="flex items-center justify-start h-16 px-12 text-2xl border-b-2 ">
      <div className="w-1/4 flex justify-between">
        <Link to={'/'}>Home</Link>
        <Link to={'about'}>About</Link>
        <Link to={'card'}>Card</Link>
      </div>
    </div>
  )
}

export default Menu
