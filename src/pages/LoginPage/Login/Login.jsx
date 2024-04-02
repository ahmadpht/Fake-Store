import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="text-white h-[100vh] flex justify-center items-center bg-cover " style={{"background-image" : "url(../public/polygon-scatter-haikei.svg)"}}>
        <div className="bg-slate-800 border border-slate-400 rounded-md p-8 shadow-lg backdrop-filter backdrop-blur-sm bg-opacity-30 relative">
            <h1  className="text-4xl text-whitefont-bold text-center mb-6">Login</h1>
          <form>
            <div className="relative my-4">
              <input type="email" className="block w-72 py-1.5 px-0 text-sm my-6 pl-2 pr-8 text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-white focus:border-blue-600 peer" placeholder=""/>
              <label htmlFor="" className="absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-1 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6" >Your Email</label>
              <i className="fa-solid fa-envelope absolute top-1 right-2"></i>            </div>
            <div className="relative my-4">
              <input type="password" className="block w-72 py-1.5 px-0 text-sm my-6 pl-2 pr-8 text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-white focus:border-blue-600 peer" placeholder=""/>
              <label htmlFor="" className="absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-1 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6" >Your Password</label>
              <i className="fa-solid fa-unlock-keyhole absolute top-1 right-2"></i>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex gap-2 items-center">
                <input type="checkbox"/>
                <label htmlFor="Remember Me">Remember Me</label>
              </div>
              <Link to='/' className="text-blue-500">Forgat Password?</Link>
            </div>
            <button type="submit" className="w-full mb-4 text[18px] mt-6 rounded-full bg-white text-emerald-800 hover:bg-emerald-600 hover:text-white py-2 transition-colors duration-300">Login</button>
            <div className="text-center">
                <span className="m-4">New Here? <Link to='/register' className="text-blue-500">Create an Account</Link></span>
            </div>
          </form>
        </div>
    </div>    
  );
};

export default Login;
