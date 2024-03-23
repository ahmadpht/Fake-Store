import { Link } from "react-router-dom"

const Register = () => {
  return (
    <div className="flex justify-between items-center text-white w-52 text-lg">
    <Link to="/register">
      <h3 className="cursor-pointer hover:text-blue-300 hover:border-b-2 hover:border-blue-300 p-2">
        <i className="fa-solid fa-user-plus mr-2"></i>
        Register</h3>
    </Link>
    <Link to="/login">
      <h3 className="cursor-pointer hover:text-blue-300 hover:border-b-2 hover:border-blue-300 p-2">
        <i className="fa-solid fa-right-to-bracket mr-2"></i>
        Login</h3>
    </Link>
    </div>
  )
}

export default Register
