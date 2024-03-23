// react 
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// pages
import Home from "./pages/Home/Home";
import NotFound from "./pages/NotFound/NotFound";
import Login from './pages/LoginPage/Login/Login'
import Register from './pages/LoginPage/Register/Register'
//components
import ProductInfo from "./components/ProductInfo/ProductInfo";
import Navbar from "./components/Layout/Navbar/Navbar"
import ShowNavbar from "./components/ShowLayout/ShowNavbar/ShowNavbar"
import Footer from "./components/Layout/Footer/Footer"
import ShowFooter from "./components/ShowLayout/ShowFooter/ShowFooter"

const App = () => {
  
  return (
    <>
      <Router>
        <ShowNavbar>
          <Navbar/>
        </ShowNavbar>
        <Routes>
          <Route index element={<Home />} />
          <Route path={"/product/:id"} element={<ProductInfo />} />
          <Route path={"*"} element={<NotFound />} />
          <Route path={"/register"} element={<Register />} />
          <Route path={"/login"} element={<Login />} />
        </Routes>
        <ShowFooter>
          <Footer/>
        </ShowFooter>
      </Router>
    </>
  );
};
export default App;
