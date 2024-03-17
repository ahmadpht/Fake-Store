import { Link } from "react-router-dom"

const SignInUp = () => {

  {/* shoping card */}
  {/* <i class="fa-solid fa-cart-shopping"></i> */}
  {/* sign out */}
  {/* <i class="fa-solid fa-right-from-bracket"></i> */}
  
  return (
    <Link to="/login">
      <h3 className="cursor-pointer hover:text-blue-300 hover:border-b-2 hover:border-blue-300 hover:pb-8">
        <i className="fa-solid fa-right-to-bracket mr-2"></i>
        Sign up | Login</h3>
    </Link>
  )
}

export default SignInUp
